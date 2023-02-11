import React from 'react';
import { useData } from '../DataProvider'; 

function PhoneLoader(props) {

    const {data, error, isLoading} = useData(getPhones);

    function getPhones() {
        return fetch('./phones.json')
        .then ((response) => response.json())
    }

   
        return (
            <>
            {isLoading && <div>Loading.....</div>}
            {error && <div>Error !</div>}

            <ul>
                {data && data.map((phone, index) => 
                    <li key={index}>{phone.brand} {phone.model}. Price: {phone.price}</li>
                )}
            </ul>
            </>
        );
}

export default PhoneLoader;
