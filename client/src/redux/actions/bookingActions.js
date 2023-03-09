import axios from "axios";
import {message} from 'antd'
export const bookCar = () => async dispatch => {
    dispatch({type: 'LOADING', payload: true});
    try {
        const response = await axios.post("/api/bookings/bookcar");

        dispatch({type: 'LOADING', payload: false});
        message.success("Your car booked successfully");
    } catch (err) {
        console.log("fuckoff");
        dispatch({type: 'LOADING', payload: false});
        message.error("Something went wrong, please try later");
    }
}