const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: "",
  data: []
}

const topUp = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_TOP_UP_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "GET_ALL_TOP_UP_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      };
    case "GET_ALL_TOP_UP_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data.results
      };
    case "GET_ID_TOP_UP_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "GET_ID_TOP_UP_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      };
    case "GET_ID_TOP_UP_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data.results
      };
    case "POST_TOP_UP_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "POST_TOP_UP_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      };
    case "POST_TOP_UP_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data.results
      };
    case "PATCH_TOP_UP_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "PATCH_TOP_UP_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      };
    case "PATCH_TOP_UP_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data.results
      };
    case "DELETE_TOP_UP_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "DELETE_TOP_UP_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      };
    case "DELETE_TOP_UP_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data.results
      };
    default:
      return state;
  }
}

export default topUp