import axios from "axios";
import { useEffect, useState } from "react";

const Authors = ()=>{
    const [authors,setAuthors] = useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async()=>{
        try{
            const authors = await axios("https://jsonplaceholder.typicode.com/users");
            setAuthors(authors.data);
        }
        catch(error){
            console.log(error);
        }
    }
    if(authors == null) return <><h1>isLoading</h1></>
    return(
        <div>
            {
                authors.map((author)=>{
                    return author.name
                })
            }
        </div>
    )
}
export default Authors;