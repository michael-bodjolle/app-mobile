import {URL_EVENTS} from "../config";
import axios from 'axios';

async function getall() {
 
	return await axios.get(`${URL_EVENTS}`).then((res) => {return(res.data)});

}


 



export  {
  getall,
 
}