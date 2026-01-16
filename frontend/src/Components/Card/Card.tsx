import React from 'react'
import './Card.css'

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card = ({companyName, ticker, price}: Props) => {
  return (
    <div className='card'>
        <img
         src="https://photographylife.com/wp-content/uploads/2023/05/Nikon-Z8-Official-Samples-00002.jpg" 
         alt="Image" 
        />
        <div className='details'>
            <h2>
                {companyName} ({ticker})
            </h2>
            <p>${price}</p>
        </div>
        <p className="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, ex.</p>
    </div>
  )
}

export default Card