import axios from "axios";
import errorResponseHandler from "./errorResponseHandler"

const instance = axios.create({
    baseURL : `${process.env.REACT_APP_HOST}/api/v1/customer`
})

instance.interceptors.response.use(
    (response) => response,
    errorResponseHandler
)

export default instance;