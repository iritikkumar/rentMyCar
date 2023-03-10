import React ,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DefaultLayout from '../components/DefaultLayout'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCars } from '../redux/actions/carsActions'
import Spinner from '../components/Spinner'
import { Row, Col, Divider, DatePicker, Checkbox } from 'antd';
import moment from 'moment';
import { bookCar } from '../redux/actions/bookingActions'
const {RangePicker} = DatePicker;

const BookingCar = (match) =>{
  const { cars } = useSelector(state => state.carsReducer);
  const { loading } = useSelector(state => state.alertsReducer);
  const [car, setCar] = useState({});
  const dispatch = useDispatch();
  const [from, setFrom] = useState()
  const [to , setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [driver, setDriver] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const { carid } = useParams();
  
  useEffect(() => {
    if(cars.length==0){
      dispatch(getAllCars());
    }
    else {
      setCar(cars.find(o=>o._id==carid))
    }
  }, [cars]);
    
  useEffect(() =>{

    setTotalAmount((totalHours* car.rentPerHour) )

    if(driver)
    {
      setTotalAmount(totalAmount + (30*totalHours))
    }
  }, [driver, totalHours])
  function selectTimeSlots(values)
  {
    // console.log(moment(values[0]).format('MMM DD YYYY HH:mm'));
    // console.log(moment(values[1]).format('MMM DD YYYY HH:mm'));
    setFrom(values[0].format("MMM DD YYYY HH:mm"));
    setTo(values[1].format("MMM DD YYYY HH:mm"));

    setTotalHours(values[1].diff(values[0], 'hours'))
  }

  function bookNow()
  {
    const reqObj={

      user : JSON.parse(localStorage.getItem('user'))._id,
      car : carid,
      totalHours,
      totalAmount,
      driverRequired: driver,
      bookedTimeSlots: {
        from,
        to,
      }
    }

    dispatch(bookCar(reqObj))
  }

  return (
    <DefaultLayout>
      {loading && <Spinner/>}
      {/* <Row justify='center' className='mt-5'> */}
      <Row justify='center' className='d-flex align-items-center' style={{minHeight:'90vh'}}>
        <Col lg={10} sm={24} xs={24}>
          <img src={car.image} className='carimg2 bs1'/>
        </Col>
        <Col lg={10} sm={24} xs={24} style={{textAlign:'right'}}>
          <Divider type='horizontal' dashed><h4><b>Car Info</b></h4></Divider>
          <div className='text-right'>
            <p>{car.name}</p>
            <p>{car.rentPerHour} Rent Per Hour /-</p>
            <p>Fuel: {car.fuelType}</p>
            <p>Max Capacity: {car.capacity}</p>
          </div>

          <Divider type='horizontal' dashed><h4><b>Select Time Slots</b></h4></Divider>
          <RangePicker showTime={{format: 'HH:mm'}} format ='MMM DD YYYY HH:mm' onChange={selectTimeSlots}/>

          <div>
              <p>Total Hours: <b>{totalHours}</b></p>
              <p>Rent per Hour: <b>{car.rentPerHour}</b></p>
              <p>Driver charges: <b>30</b></p>
              <Checkbox onChange={(e)=>{
                if(e.target.checked)
                {
                  setDriver(true);
                }
                else
                {
                  setDriver(false);
                }
              }}>Driver required</Checkbox>

              <h3>Total Amount : {totalAmount}</h3>

              <button classsname="btn1" onClick={bookNow}>Book Now</button>
          </div>
          
        </Col>

      </Row>
{/* 


    <div>
    <h1>BookingCar Page</h1>
    <h1>Car Id ={carid}</h1>
    <h1>Car Name ={car.name}</h1>

    </div> */}
    </DefaultLayout>
  )
}

export default BookingCar