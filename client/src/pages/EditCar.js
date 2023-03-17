import { Row , Col, Form , Input} from 'antd'
import React, { useState, useEffect } from "react";
import { useDispatch , useSelector} from 'react-redux'
import { getAllCars } from "../redux/actions/carsActions";
import DefaultLayout from '../components/DefaultLayout'
import Spinner from '../components/Spinner'
import { addCar ,editCar} from '../redux/actions/carsActions'
import { useParams } from 'react-router-dom';


const EditCar = ({match}) => {

    const { cars } = useSelector(state => state.carsReducer);
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.alertsReducer);
    const [car , setcar] = useState()
    const { carid } = useParams();
    const [totalCars, settotalcars] = useState()

    useEffect(() => {
        if(cars.length==0)
        {
            dispatch(getAllCars());
        }
        else 
          {
            settotalcars(cars)
            setcar(cars.find(o=>o._id==carid))
            // car._id= carid
            console.log(carid)
            console.log("Hello")
            console.log(car)
          }
    }, [cars]);

    
    function onFinish(values)
    {
        // values.bookedTimeSlots = []
        values._id = car._id
        dispatch(editCar(values))
        // console.log(values);
        console.log("htadia");
    }

  return (
    
    <DefaultLayout>

        {loading && (<Spinner/>)}
        <Row justify='center mt-3'>

            <Col lg={12} sm={24} xs={24} className='p-2'>
            
            {/* var = {car.name} */}
            {/* var */}

                {cars.length>0 && (<Form initialValues={car} className='bs1 p-2' justify='cener' layout='vertical' onFinish={onFinish}>
                    <h3>Edit Car</h3>
                    {/* <p></p> */}
                    {/* {cars.length} */}
                    <hr/>
                    <Form.Item name= 'name' label ='Car name' rules={[{required: true}]} >
                        <Input/>
                    </Form.Item>
                    
                    <Form.Item name= 'image' label ='Image URL' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item name= 'rentPerHour' label ='Rent Per Hour' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item name= 'capacity' label ='Capacity' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item name= 'fuelType' label ='Fuel Type' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>

                    <div className='text-right'>
                        <button className='btn1' justify='center' >EDIT CAR</button>
                    </div>
                </Form>)}
            </Col>
        </Row>

    </DefaultLayout>
  )
}

export default EditCar
