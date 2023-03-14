import { Row , Col, Form , Input} from 'antd'
import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import Spinner from '../components/Spinner'
import { addCar } from '../redux/actions/carsActions'



const AddCars = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.alertsReducer);


    function onFinish(values)
    {
        values.bookedTimeSlots = []
        dispatch(addCar(values))
        // console.log(values);
        console.log("htadia");
    }

  return (
    <DefaultLayout>

        {loading && (<Spinner/>)}
        <Row justify='center mt-5'>

            <Col lg={12} sm={24} xs={24}>
            
                <Form className='bs1 p-2' layout='vertical' onFinish={onFinish}>
                    <h3>Add New Car</h3>
                    <hr/>
                    <Form.Item name= 'name' label ='Car name' rules={[{required: true}]}>
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
                        <button className='btn1' justify='center' >ADD CAR</button>
                    </div>
                </Form>
            </Col>
        </Row>

    </DefaultLayout>
  )
}

export default AddCars
