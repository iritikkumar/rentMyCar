import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers} from "../redux/actions/userActions";
import { Row, Col, DatePicker } from "antd";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";



function Drivers() {

    // Here the name should be same as that of the initialData Reducer.
    const { users } = useSelector((state) => state.usersReducer);
    
    // const { loading } = useSelector((state) => state.alertsReducer);
    // const [totalUsers, setTotalUsers] = useState([]);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllUsers());
    }, []);
  
    // useEffect(() => {
    //   setTotalUsers(drivers);
    // }, [drivers]);


    // for(var i=0;i<drivers.length; i++)
    // {
    //     console.log(drivers[i]);
    // }


  return (
    <DefaultLayout>

    
      <div>length of drivers array is  {users.length}</div>

      {/* {loading === true && <Spinner />}

      <Row justify="center mt-1" gutter={16}>
        {totalUsers.map((car) => {
          return (
            <Col lg={5} sm={24} xs={24}>
              <div className="car p-2 bs1 mt-3">
                <img src={car.image} alt="a car" className="carimg"/>

                <div className="car-content d-flex align-items-center justify-content-between">
                  <div>
                    <p>{car.name}</p>
                    <p>{car.rentPerHour} Rent Per Hour /-</p>
                  </div>
                  <div>
                      <Link to={`/booking/${car._id}`} style={{textDecoration:'none'}}><button className="btn1">BOOK NOW</button>
                      </Link>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row> */}
    </DefaultLayout>
  )
}

export default Drivers
