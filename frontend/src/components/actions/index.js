import axios from "axios"
import {GET_USER_STATUS} from "./types"

export function getWorkspace(){
		return (dispatch) =>{
				return axios.get("/api/workspacelist")
						.then((response)=>{

						})
}
}

export function getAuthStatus(data){
		return (dispatch) =>{
				dispatch({
						type:GET_USER_STATUS,
						payload:data
				})
		}
}
