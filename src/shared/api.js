import axios from "axios";
import md5 from "md5";

const password = "Valantis";
const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
const authString = md5(`${password}_${timestamp}`);
const $api = axios.create();

$api.defaults.headers = {
  "X-Auth": authString,
};


export default $api;
