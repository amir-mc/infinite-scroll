import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Comennts from './component/coment'

function App() {

const [dataa , setData]=useState([])
const [loding , setLoding]=useState(false) 
const [lasrcom ,setLastcom]=useState(null)
const [page ,setPage]=useState(1)
const faethDara = async () =>{
  setLoding(true);
  const response =await fetch(`https://react-mini-projects-api.classbon.com/Comments/${page}`)
  const data= await response.json()
  setData((oldData)=>[...oldData,...data])
  setLoding(false)
} 

const observeref=new IntersectionObserver(([entry])=>{
  if(entry.isIntersecting){
    setPage((courentPage)=>courentPage+1)
  }
})

useEffect(()=> 
{  
  faethDara()
},[page])

useEffect(()=>{
  if(lasrcom){
    observeref.observe(lasrcom)
  }
}, [lasrcom])
  return (
    <>
      <div> 
          {
            dataa.map((comment)=>
              <div key={comment.id} ref={setLastcom}>

            <Comennts {...comment} />
              </div>
            )
          },
          {
            loding && (
              <div>
                <p>LODing </p>
              </div>
            )
          }
          
             
             
              
        
          
      </div>
    </>
  )
}

export default App
