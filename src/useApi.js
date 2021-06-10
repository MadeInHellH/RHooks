import { useState, useEffect } from 'react';


//const useApi = async (url) => {
     const [isLoading, setIsLoading] = useState(true);
     const [data, setData] = useState(null);
     const [error, setError] = useState('');

     useEffect (() => {
        console.log(123, url);
     }, [url]);

     //const response = await fetch(url)

    return {
        response: data, 
        error, 
        isLoading,
    };
};
export default useApi;
