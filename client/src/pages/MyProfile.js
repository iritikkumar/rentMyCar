import { Col, Row, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { editMyProfile, getAllUsers } from "../redux/actions/userActions";
import { useParams } from "react-router-dom";

function MyProfile({ match }) {
  const { users } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);
  const [user, setuser] = useState();
  const [totalusers, settotalusers] = useState([]);
  const userid = JSON.parse(localStorage.getItem("user"))._id;
  //   console.log(userid);
  useEffect(() => {
    if (users.length == 0) {
      dispatch(getAllUsers());
    } else {
      settotalusers(users);
      setuser(users.find((o) => o._id == userid));
      console.log(user);
    }
  }, [users]);

  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  function onFinish(values) {
    values._id = user._id;
    values.isDriver = checked;
    dispatch(editMyProfile(values));
    console.log(values);
  }

  //   console.log(user);

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row justify="center mt-5">
        <Col lg={12} sm={24} xs={24} className="p-2">
          {totalusers.length > 0 && (
            <Form
              initialValues={user}
              className="bs1 p-2"
              layout="vertical"
              onFinish={onFinish}
            >
              <h3>Edit User</h3>

              <hr />
              <Form.Item
                name="username"
                label="Username"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="image"
                label="Image URL"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="rentPerHour"
                label="Rent per hour"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="contactNumber"
                label="Contact Number"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="location"
                label="Location"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="isDriver"
                label="Are you a driver?"
                className="d-flex"
              >
                <Input
                  type="checkbox"
                  onChange={handleChange}
                />
              </Form.Item>

              <div className="text-right">
                <button className="btn1">Edit user</button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default MyProfile;
