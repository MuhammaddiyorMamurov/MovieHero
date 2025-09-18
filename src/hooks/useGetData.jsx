import axios from "axios";
import { useState, useEffect } from "react";

const URL = "https://json-api.uz/api/project/movies/movies"


const useGetData = function (){
    const[data, setData] = useState(null);
    const[error, setError] = useState(null)
    const[loading, setLoading] = useState(false)
    
  
    const getData = async () => {
        setLoading(true)
      try{
         const response = await axios.get(URL)
  
        if(response.status !== 200){
          throw new Error("Something went wrong")
        }
  
      
       setData(response.data.data);
        
      }catch(error) {
        setError(error.message);
      }finally{
        setLoading(false)
      }
    
    };
  
    useEffect(()=>{
      getData();
    }, []);


    return {data, loading, error}
}


export default useGetData
