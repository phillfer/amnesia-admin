/* eslint-disable no-console */
import axios from 'axios';

export const getAddress = async zipcode => {
  try {
    const url = `https://viacep.com.br/ws/${zipcode}/json/`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default getAddress;
