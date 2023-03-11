import axios from "axios";
import {message} from "antd"

export const userLogin=(reqObj)=>async dispatch=>{
    dispatch({type: 'LOADING', payload: true});
    try {
        const response = await axios.post("/api/users/login",reqObj);
        localStorage.setItem('user' , JSON.stringify(response.data))
        message.success('Login success')
        dispatch({type: 'LOADING', payload: false});
        setTimeout(()=>{
            window.location.href='/'
        }, 500);
    } catch (err) {
        message.error("Invalid credentials");
        console.log(err);
        dispatch({type: 'LOADING', payload: false});
        
    }
}

export const userRegister=(reqObj)=>async dispatch=>{
    dispatch({type: 'LOADING', payload: true});
    try {
        const response = await axios.post("/api/users/register",reqObj);
        message.success('Successfully registered')
        setTimeout(()=>{
            window.location.href='/login'
        }, 500);
        
        dispatch({type: 'LOADING', payload: false});
        
    } catch (err) {
        message.error("fuckoff your credentials");
        console.log(err);
        dispatch({type: 'LOADING', payload: false});
        
    }
}