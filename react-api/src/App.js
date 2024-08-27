import { useEffect } from 'react';
import axios from 'axios'; 
import { useQuery } from 'react-query';

function apiSender() {
  return axios.get('https://jsonplaceholder.typicode.com/posts').then(res=> res.data)
}

function App() {
  const {data,isLoading,isError,error} = useQuery('posts',apiSender);
  console.log(data);
  if(isLoading){
    return <div>Loading....</div>
  }
  return (
    <div className="App">
    </div>
  );
}

export default App;
