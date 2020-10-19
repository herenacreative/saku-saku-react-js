const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: "",
  data: [],
  successMsg: "",
  isLogin: false,
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case "LOGIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected'
      }
    case "LOGIN_FULFILLED":
      console.log(action.payload.data, 'pau')
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        isLogin:true
      }
    case "LOGOUT_FILFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLogin: false,
        errorMsg: "",
        data: {},
        _persist: {
          version: -1,
          rehydrated: true
        }
      };
    case "REGISTER_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case "REGISTER_REJECTED":
      // console.log(object)
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected'
      }
    case "REGISTER_FULFILLED":
      // console.log(action.payload.data, 'pau')
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data
      }
    default:
      return state;
  }
}

export default auth