import React ,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DefaultLayout from '../components/DefaultLayout'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCars } from '../redux/actions/carsActions'
import Spinner from '../components/Spinner'
import { Row, Col, Divider } from 'antd';

const BookingCar = (match) =>{
  const { cars } = useSelector(state => state.carsReducer);
  const { loading } = useSelector(state => state.alertsReducer);
  const [car, setCar] = useState({});
  const dispatch = useDispatch();

  const { carid } = useParams();
  
  useEffect(() => {
    if(cars.length==0){
      dispatch(getAllCars());
    }
    else {
      setCar(cars.find(o=>o._id==carid))
    }
  }, [cars]);
    
  return (
    <DefaultLayout>
      {loading && <Spinner/>}
      {/* <Row justify='center' className='mt-5'> */}
      <Row justify='center' className='d-flex align-items-center' style={{minHeight:'90vh'}}>
        <Col lg={10} sm={24} xs={24}>
          <img src={car.image} className='carimg2 bs1'/>
        </Col>
        <Col lg={10} sm={24} xs={24}>
          <Divider type='horizontal' dashed>Car Info</Divider>
          <div className='text-right'>
            <p>{car.name}</p>
            <p>{car.rentPerHour} Rent Per Hour /-</p>
            <p>Fuel: {car.fuelType}</p>
            <p>Max Capacity: {car.capacity}</p>
          </div>
        </Col>

      </Row>



    <div>
    <h1>BookingCar Page</h1>
    <h1>Car Id ={carid}</h1>
    <h1>Car Name ={car.name}</h1>

    </div>
    </DefaultLayout>
  )
}

export default BookingCar