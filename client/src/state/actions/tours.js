import settings from '../../env/app-settings'
import axios from "axios";

export const loadTours = () => dispatch => {
    axios.get(settings.apiUrl + 'tours')
        .then((res)=>{
            dispatch({
                type: "SET_TOURS",
                payload: res
            })
        }).catch((err)=>{
            console.log('err')
        })
}