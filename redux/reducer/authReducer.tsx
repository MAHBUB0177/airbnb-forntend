import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
// interface AuthState {
//     authData: number
//   }
  
//   // Define the initial state using that type
//   const initialState: AuthState = {
//     authData: 0,
//   }
  
const initialState = {
    authData: {},
    searchData:{
      adult: 0,
      child: 0,
      infants: 0,
      pets: 0,
    },
    payloadData:{},
    searchModal:false
  };
  
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setAuth: (state, action) => {
        state.authData = action.payload
      },
      setSearchData: (state, action) => {
        state.searchData = action.payload
      },
      setPaylodData: (state, action) => {
        state.payloadData = action.payload
      },
      setSearchModal: (state, action) => {
        state.searchModal = action.payload
      }
    }
  })

export const {setAuth,setSearchData,setPaylodData,setSearchModal} = authSlice.actions


export default authSlice.reducer;

