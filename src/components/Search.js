import React, { useState, useEffect, useRef } from 'react';

//initialize the interval variable
let interval;

export default function Search(props) {

    const [searchInput, setSearchInput] = useState('');
    const [isFetching, setFetching] = useState(false);

    const prevInputRef = useRef();

    // Abort fetch instance.
    const controller = new AbortController()
    const signal = controller.signal

    const abortFetching = () => {
        controller.abort()
        setFetching(false)
    }

    //make the network request
    const makeReq = () => {

        setFetching(true)

        const data = {"requests":[{"indexName":"ikea","params":`query=${searchInput}&hitsPerPage=16`}]};

        fetch('https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency', {
            method: 'POST', 
            signal: signal,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            //send response data to the parent. if input field is empty, send null
            searchInput.length > 0 ? props.handleResponse(data.results[0].hits) : props.handleResponse(null)
            setFetching(false)
        })
        .catch((error) => {
            console.error('Error:', error);
            setFetching(false)
        })
    }
    


    //call the network request function 200 ms after last input
    const handleInterval = async () => {     

        clearTimeout( interval );
  
        interval = setTimeout(() => {
            makeReq() 
        }, 200);

    }
    
    //compare previous state to current, then call the interval handler or abort fetch
    const prevInput = prevInputRef.current;
    
    useEffect(() => {
        prevInputRef.current = searchInput

        if(isFetching) {
            abortFetching()
        }

        if( prevInput !== searchInput ) {
            handleInterval()
        }


    })

    //assign input values to state
    const handleInput = (e) => {
        const value = e.target.value
        setSearchInput(value)        
    }

    return(
        <div>
            <span>Search: </span>
            <input type="text" value={searchInput} onChange={(e) => handleInput(e)} />
        </div>
    )

}
