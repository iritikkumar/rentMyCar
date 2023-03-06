import React, { useState, useEffect } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCars } from '../redux/actions/carsActions'
import { Button, Space, Row, Col} from 'antd';

const Home = () => {
  const { cars, loading } = useSelector(state => state.carsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);
    

  return (
    <DefaultLayout>
    {/* <div>length of cars array is  {cars.length}</div> */}
      <Row justify="center" gutter={16} className="mt-5">

        {cars.map(car=>{
          return  <Col lg={5} sm={24} xs={24} >
            <div className='car p-2 bs1 mt-3'>
              <img src={car.image} alt='a car' className='carimg'/>

              <div className='car-content d-flex align-items-center'>
                <div>
                  <p>{car.name}</p>
                  <p>{car.rentPerHour} Rent Per Hour /-</p>
                </div>
                <div>
                  <button className='btn1'>Book Now</button>
                </div>
              </div>

            </div>
          </Col>
        })}

      </Row>
    </DefaultLayout>
  )
}

export default Home