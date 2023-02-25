const initialState = {
    userDetails:{
      fullname:'',
      mobile:'',
      carreg:'',
      selectedCarType:''
    }
  }
  function userReducer(state=initialState,action){
    if(action.type==='UPDATEUSER'){
      console.log("Update use called",action.payload)
      return {...state,userDetails:{...action.payload}}
    }
    return state
  }
  export default userReducer