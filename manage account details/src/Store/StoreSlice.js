import { createSlice } from "@reduxjs/toolkit"


let initialState=[]
  let StoreSlice=createSlice({
    name:"data",
    initialState,
    reducers:[
        {
            addData:(state,action)=>{
                
            },
            updateData:()=>{

            }
        }

    ]
  })

export let {addData,updateData}=StoreSlice.actions

export default StoreSlice.reducer
