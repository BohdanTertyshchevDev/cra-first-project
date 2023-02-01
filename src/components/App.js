import DataProvider from "./DataProvider";
import PhoneLoader from "./PhoneLoader";
import TVLoader from "./TVLoader";


function App() {
    return(
        <>
        <DataProvider loadData={() =>{
            return fetch('./phones.json')
            .then((response) => response.json())}}>

            {(state) => {
                const {data, isLoading, isError} = state;
                return (
                    <>
                    {isLoading && <div>Loading......</div>}
                    {isError && <div>Error!</div>}
                    <ul>
                        {data.map((data, index) => 
                            <li key={index}>{data.brand} {data.model}. Price: {data.price}</li>
                        )}
                    </ul>
                    </>
                );
            }}
       </DataProvider>
       <DataProvider loadData={() =>{
            return fetch('./tv.json')
            .then((response) => response.json())}}>

            {(state) => {
                const {data, isLoading, isError} = state;
                return (
                    <>
                    {isLoading && <div>Loading......</div>}
                    {isError && <div>Error!</div>}
                    <ul>
                        {data.map((data, index) => 
                            <li key={index}>АКЦИЯ!!!{data.brand} {data.model}. Price: {data.price}</li>
                        )}
                    </ul>
                    </>
                );
            }}
       </DataProvider>
        </>
    )
}

export default App;