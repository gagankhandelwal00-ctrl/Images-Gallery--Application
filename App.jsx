import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card';

const App = () => {
    const [userdata, setUserdata] = useState([]);
    const [index, setIndex] = useState(1)
  const getdata=async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
    setUserdata(response.data);
  }

  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>;
  useEffect(function(){
    getdata();
  },[index])
  if(userdata.length>0){
    printUserData = userdata.map(function(elem,idx){
      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='bg-black h-screen text-white overflow-auto'> 
    <div className='flex flex-wrap gap-4 py-2'>
      {printUserData}
    </div>
    <div className='flex justify-center gap-6 items-center p-4'>
      <button onClick={()=>{
        if(index>1){
        setIndex(index-1);
        }
      }}
      style={{opacity:index==1? 0.5:1}}
      className='bg-amber-400 text-black text-sm cursor-pointer active:scale-95 px-4 py-2 font-semibold rounded'>prev</button>
      <h4>page{index}</h4>
      <button onClick={()=>{
        setIndex(index+1);
      }} className='bg-amber-400 text-black  text-sm cursor-pointer active:scale-95 px-4 py-2 font-semibold rounded '>Next</button>
    </div>
    </div>
  )
}
export default App