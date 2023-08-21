import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : "stud",
    initialState:{
        value : [
            {roll : 123 , name : "Vijay" , age  :24},
            {roll : 154 , name : "Meena" , age  :27}
        ]
    },
    reducers:{
        addStudent : (state,action)=>{
            state.value = [...state.value,action.payload]
        },
        deleteStudent : (state,action)=>{
            const roll = action.payload
            state.value = state.value.filter(ob=>ob.roll!=roll)
        }
    }
})
export const {addStudent,deleteStudent} = slice.actions;
export default slice.reducer;