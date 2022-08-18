import React from 'react'

const Modal = () => {
  return (
    <div className='modalbg'>
        <div className='modalcont'>
            <button>X</button>
            <div className='title'>
                <h2>are you sure</h2>
            </div>
            <div className='body'>
                <p>Next page</p>
            </div>
            <div className='footer'></div>
        </div>
    </div>
  )
}

export default Modal