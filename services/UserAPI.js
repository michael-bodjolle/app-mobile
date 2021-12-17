import {URL_USERS} from "../config";
import axios from 'axios';

function create(name, firstname,email,password) {
 
	return axios.post(`${URL_USERS}`,{
    nom: name,
    prenom: firstname,
    email: email,
    password: password,
  }).then((res) => res.data);
}

function update(values) {
  const iduser = window.localStorage.getItem('id');
	return axios.put(`${URL_USERS}/${iduser}`,values).then((res) => res.data);
  
}


export {
  create,
  update,
}