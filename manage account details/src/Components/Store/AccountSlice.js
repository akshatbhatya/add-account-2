import { createSlice } from "@reduxjs/toolkit"



let initialState={
    account:[

    ]

    
}

let AccountSlice=createSlice({
    name:"Account",
    initialState,
    reducers:{
            addAccountDetail:(state,action)=>{

                state.account.push(action.payload)

            },
            removeAccount:(state,action)=>{
               state.account= state.account.filter((dataId)=>dataId.id!==action.payload)
            },
            updateAccount:(state,action)=>{
                state.account = state.account.map((dataId) =>
                dataId.id === action.payload.id ? { ...dataId, ...action.payload } : dataId
            );
        }
            }
            

        }
    

)

export let {addAccountDetail,removeAccount,updateAccount}=AccountSlice.actions

export default AccountSlice.reducer;