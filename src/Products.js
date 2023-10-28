import React from 'react'
import Productt from './Productt'

export default function Products() {

const Products=[
{id:1, title:'product one', disc:'this is product one',price:1000},
{id:1, title:'product two', disc:'this is product tow', price:2000},
{id:1, title:'product three', disc:'this is product three',price:3000}
];

  return (
    <>
    <div className='row'>
   

      {
        Products.map((productt) => {
          return< Productt{...productt} key={productt.id} />


        })
      }

    </div>
  
    
    </>
  )

 
}
 