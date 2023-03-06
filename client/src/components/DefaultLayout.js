import React from 'react'

const DefaultLayout = (props) => {
  return (
    <div>
        <div className='header bs1'>
            <div className='d-flex justify-content-between'>
                <h1>RentCars24x7</h1>
                
            </div>
        </div>
        <div className='content'>
            {props.children}
        </div>

    </div>
  )
}

export default DefaultLayout