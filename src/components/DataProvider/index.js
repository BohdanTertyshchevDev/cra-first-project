import React, { useState, useEffect } from 'react';

/*
1. Компонента йде за даними
2. Компонента отримує дані і кладе їх в стейт
3. Компонента ділиться даними з кимось іншим, хто знає, як треба відобразити ці дані
*/

export function useData(loadData) {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        loadData()
        .then((data) => {
            setData(data)
        })
        .catch((e) => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])

    // load = () => {
    //     this.props.loadData()
    //     .then((data) => {
    //         this.setState({
    //             data
    //         })
    //     })
    //     .catch((error) => {
    //         this.setState({
    //             isError: true
    //         })
    //     })
    //     .finally(() => {
    //         this.setState({
    //             isLoading: false
    //         })
    //     })
    // }

    return{data, error, isLoading}
}


