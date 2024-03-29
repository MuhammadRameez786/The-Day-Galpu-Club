import axios from "axios";

import { startlogin, successlogin, failedlogin } from "./Actions/Actions";
export const ApiCall = async(userCredentials, dispatch)=>{
dispatch(startlogin());    

    try {
        const user=await axios.post("http://localhost:4000/api/v1/users/login", userCredentials);
        dispatch(successlogin(user.data));
        console.log(user.data);
    } catch (error) {
        dispatch(failedlogin(error));

        console.log(error);
        
    }
}