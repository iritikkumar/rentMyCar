import axios from "axios";
import {message} from 'antd'
export const bookCar = (reqObj) => async dispatch => {
    dispatch({type: 'LOADING', payload: true});
    try {
        const response = await axios.post("/api/bookings/bookcar", reqObj);
        dispatch({type: 'LOADING', payload: false});
        message.success("Your car booked successfully");
    } catch (err) {
        console.log(err);
        dispatch({type: 'LOADING', payload: false});
        message.error("Something went wrong, please try later");
    }
}