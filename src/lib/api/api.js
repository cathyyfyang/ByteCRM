import axios from 'axios';
import useAuth from './useAuth';

const instance = axios.create({
  baseURL: 'http://bytecrm-env-1.eba-cd37rmmn.ap-southeast-2.elasticbeanstalk.com',
});

useAuth(instance);
export default instance;
