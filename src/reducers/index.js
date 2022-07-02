import { fakeData } from "../features/activities/dashboard/fakeData"
import { combineReducers } from "redux";

const activitiesReducer = () => {
    return fakeData;
}

const selectedActivityReducer = (selectedActivity=null,action) => {
    if(action.type === 'ACTIVITY_SELECTED'){
        return action.payload;
    }

    return selectedActivity;
}

export default combineReducers({
    activities:activitiesReducer,
    selectedActivity:selectedActivityReducer
})