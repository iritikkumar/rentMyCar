import React from 'react'
import DefaultLayout from '../components/DefaultLayout'

const BookingCar = (match) =>{
  return (
    <DefaultLayout>
    <div>
    <h1>BookingCar Page</h1>
    <h1>Car Id ={match.params.name}</h1>
    </div>
    </DefaultLayout>
  )
}

export default BookingCar