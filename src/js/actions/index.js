import {FETCH_ITEMS} from "../constants/action-types";

export const fetchItems = () => async dispatch => {
  let response = await fetch('http://roadmapservice.azurewebsites.net/api/buckets')
  let data = await response.json();
  dispatch({type: FETCH_ITEMS, data: data})
};