import React from 'react';

export default function Results(props) {

    const regex = /http/gi;

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
                            <img src={
                                //replace the original http protocol with https
                                e.image.replace(regex, "https")
                            }
                            alt={e.description} key={i}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
