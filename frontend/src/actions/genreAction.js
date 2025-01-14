import { GET_GENRES_ERROR, GET_GENRES_SUCCESS } from "./actionTypes";
import Axios from "axios";


const api_url = process.env.REACT_APP_API_URL;

export const getGenres = () => {
  return async (dispatch) => {
    try {
      const result = await Axios.get(api_url + "/genres");
      dispatch({ type: GET_GENRES_SUCCESS, payload: result.data });
    } catch (error) {
      dispatch({ type: GET_GENRES_ERROR, error });
    }
  };
};

