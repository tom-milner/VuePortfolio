import axios from "axios";
import dotenv from 'dotenv'
dotenv.config()
export default () => {

  return axios.create({
    baseURL: process.env.API_URL
  })
}