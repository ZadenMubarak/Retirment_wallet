import React from 'react'
import './Elements.css'

const card1text = "Central cee"

const p1 = `
Learn more about the retirenment wallet
no bands 
lfjkdsbljfsk
`

const Elements = () => {
  return (
    <>
        <div className='text-card'>
            <h1>Algo Retirenment wallet</h1>
            <p>keep your funds until it's time to withdraw them</p>

        </div>

        <div className='card1'>
            <h1>{card1text}</h1>
            <p>{p1}</p>
            <button className='but1'>Learn a bit</button>
        </div>

        <div className='card2'>
            <h1>Tion wayne</h1>
            <p>{p1}</p>
        </div>

        {/* <div className='cards'>
          {lopping()}
        </div> */}
    </>
  )
}

export default Elements