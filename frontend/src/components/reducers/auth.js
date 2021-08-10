import { GET_USER_STATUS } from "../actions/types";

const initialState = {
		auth: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_STATUS:
      return {
        ...state,
			  auth: action.payload,
      };
    default:
      return {
        ...state,
			  auth: false,
      };
  }
}
