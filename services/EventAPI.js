import {URL_EVENTS} from "../config";
import axios from 'axios';

function getall() {
 
	return axios.get(`${URL_EVENTS}`).then((res) => {return(res.data)});

}


 



export {
  getall,
 
}