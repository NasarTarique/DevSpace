import axios from "axios"

export function getWorkspace(){
		return (dispatch) =>{
				return axios.get("/api/workspacelist")
						.then((response)=>{

						})
}
export function getTopics(){
		return (dispatch) =>{

		}
}
export function getLinks(){
		return (dispatch) =>{

		}
}
