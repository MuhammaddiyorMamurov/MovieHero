import axios from "axios";
import { useEffect, useState } from "react";

const URL = "https://json-api.uz/api/project/movies/movies"

const usePostData = function (body){
    const[data, setData] = useState(null);
    const[error, setError] = useState(null)
    const[loading, setLoading] = useState(false)
    
  
    const getData = async () => {
        setLoading(true)
      try{
         const response = await axios.post(URL, body)
  
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


export default usePostData