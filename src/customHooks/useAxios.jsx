import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    // baseURL: 'https://b8a11-server-side-md-rakib-hassan.vercel.app/api/v1',

    withCredentials:true,
  });


const useAxios = () => {
    return instance;
};

export default useAxios;