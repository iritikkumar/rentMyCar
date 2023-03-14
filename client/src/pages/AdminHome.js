import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getAllCars } from "../redux/actions/carsActions";
import { Row, Col, DatePicker } from "antd";
import { DeleteOutlined , EditOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
const { RangePicker } = DatePicker;

const AdminHome = () => {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [totalCars, setTotalCars] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  useEffect(() => {
    setTotalCars(cars);
  }, [cars]);



  return (
    <DefaultLayout>
      {/* <div>length of cars array is  {cars.length}</div> */}


      {loading === true && <Spinner />}

      <Row justify="center mt-1" gutter={16}>
        {totalCars.map((car) => {
          return (
            <Col lg={5} sm={24} xs={24}>
              <div className="car p-2 bs1 mt-3">
                <img src={car.image} alt="a car" className="carimg" />

                <div className="car-content d-flex align-items-center justify-content-between">
                  <div>
                    <p>{car.name}</p>
                    <p>{car.rentPerHour} Rent Per Hour /-</p>
                  </div>
                  <div className="mr-4">
                        <EditOutlined className="mr-3" style={{color:'green', cursor:'pointer'}}/>
                        <DeleteOutlined style={{color:'red', cursor:'pointer'}}/>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </DefaultLayout>
  );
};

export default AdminHome;
