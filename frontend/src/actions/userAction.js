import { FAVOURITE_CARD_ERROR, FAVOURITE_CARD_SUCCESS } from "./actionTypes";
import Axios from "axios";


const api_url = process.env.REACT_APP_API_URL;

export const UpdateFavouriteMovies = (userID, favouriteMovies) => {
  return async (dispatch) => {
    await Axios.patch(api_url + `/users/${userID}`, favouriteMovies)
      .then((docs) =>
        dispatch({ type: FAVOURITE_CARD_SUCCESS, payload: docs.data })
      )
      .catch((error) => dispatch({ type: FAVOURITE_CARD_ERROR, error }));
  };
};

