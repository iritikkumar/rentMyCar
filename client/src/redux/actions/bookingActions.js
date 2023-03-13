import axios from "axios";
import {message} from 'antd'


export const bookCar = (reqObj) => async dispatch => {
    dispatch({type: 'LOADING', payload: true});
    try {
        const response = await axios.post("/api/bookings/bookcar", reqObj);
        message.success("Your car booked successfully");
        setTimeout(() =>{
            window.location.href="/userBooking"
        }, 500);

       
    } catch (err) {
        console.log(err);
        dispatch({type: 'LOADING', payload: false});
        message.error("Something went wrong, please try later");
    }
}

export const getAllBookings = () => async dispatch => {
    dispatch({type: 'LOADING', payload: true});
    try {
        const response = await axios.get("/api/bookings/getallbookings");
        dispatch({type: 'GET_ALL_BOOKINGS', payload: response.data});
        dispatch({type: 'LOADING', payload: false});
        
    } catch (err) {
        console.log(err);
        dispatch({type: 'LOADING', payload: false});
        
    }
}