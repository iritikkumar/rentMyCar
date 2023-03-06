import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useSelector } from 'react-redux'

const Home = () => {
  const { cars } = useSelector(state => state.carsReducer)
  return (
    <DefaultLayout>
        <div>Home Page</div>
        <p>the length of cars array is {cars.length}</p>
    </DefaultLayout>
  )
}

export default Home