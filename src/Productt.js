import React from 'react'

export default function Productt(props) {
   
  return (
    <>
    <div className='col-md-3'>  

    <h2>{props.title}</h2>
    <h3>{props.disc}</h3>
    <h5>{props.price}</h5>
    </div>
    

    </>
   
  )
}
