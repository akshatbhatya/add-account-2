import {configureStore} from "@reduxjs/toolkit"
import AccountSlice from "./AccountSlice"

let Store=configureStore({
    reducer:{
        "accountDetail":AccountSlice
    }

})

export default Store