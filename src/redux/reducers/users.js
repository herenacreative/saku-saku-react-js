const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: "",
  data: []
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_ALL_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "GET_USER_ALL_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      };
    case "GET_USER_ALL_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data
      };
    case "GET_USER_ID_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "GET_USER_ID_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      };
    case "GET_USER_ID_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data
      };
    case "PATCH_USER_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "PATCH_USER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      };
    case "PATCH_USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data
      };
    case "DELETE_USER_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "DELETE_USER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      };
    case "DELETE_USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data
      };
    default:
      return state;
  }
}

export default users