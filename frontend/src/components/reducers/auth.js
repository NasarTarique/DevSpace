import { GET_COOKIES } from "../actions/types";

const initialState = {
		user : [],
		tokens : {}
};

export default function(state=initialState, action){
		switch(action.type){
				case GET_COOKIES:
						return {
								...state,
								tokens:  action.payload
						}
				default: 
						return{
								...state,
								user = []
						}
		}
};
