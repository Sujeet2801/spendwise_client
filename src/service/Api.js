
import axios from "axios";

const URL = "http://localhost:5000";

export const authenticateSignup = async (data) => {
     try{
        return await axios.post(`${URL}/api/signup`, data);
    }catch(error){
        console.log('Error while calling signup api', error);
    }
}

 export const authenticateLogin = async (data) => {
     try{
        return await axios.post(`${URL}/api/login`, data);
    }catch(error){
        console.log('Error while calling login api', error);
        return error.response;
    }
}