import {combineReducers} from "@reduxjs/toolkit"

const rootReducer = combineReducers({
    auth: authReducers,
})

export default rootReducer