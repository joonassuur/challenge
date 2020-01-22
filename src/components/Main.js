import React, { useState } from 'react';
import Search from './Search';
import Results from './Results';

export default function Main() {

    const [response, setResponse] = useState(null);

    return(
        <div>
            <Search handleResponse={(e)=>setResponse(e)} />
            <Results response={response} />
        </div>
    )

}
