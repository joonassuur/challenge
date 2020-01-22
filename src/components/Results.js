import React from 'react';

export default function Results(props) {


    return(
        <div>
            { props.response &&
                props.response.map((e, i) => {
                    //print the results on page
                    return(
                        <div key={i}>
                            <div key={e.objectID}>
                                {e.name}
                            </div>
                            <img src={e.image} alt={e.description} key={i}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
