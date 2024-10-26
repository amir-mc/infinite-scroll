import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Comennts from './component/coment'

function App() {

const [dataa , setData]=useState([])
const [loding , setLoding]=useState(false) 
const faethDara = async () =>{
  setLoding(true);
  const response =await fetch("https://react-mini-projects-api.classbon.com/Comments")
  const data= await response.json()
  setData(data)
  setLoding(false)
} 
useEffect(()=> 
{
  faethDara()
},[])
  return (
    <>
      <div> 
          {
            loding ? (
              <p>loding</p>
            ) :( 
              dataa.map(comment => <Comennts key={comment.id}  {...comment  }/>)
            )
          }
      </div>
    </>
  )
}

export default App
