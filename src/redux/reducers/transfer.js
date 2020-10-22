const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: "",
  data: []
}

const transfer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_TRANSFER_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "GET_ALL_TRANSFER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      };
    case "GET_ALL_TRANSFER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data
      };
    case "GET_ADMIN_TRANSFER_PENDING":
        return {
            ...state,
            isLoading: true,
            isError: false
        };
    case "GET_ADMIN_TRANSFER_REJECTED":
        return {
            ...state,
            isLoading: false,
            isError: true,
            errorMsg: "Data rejected"
        };
    case "GET_ADMIN_TRANSFER_FULFILLED":
        return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload.data.data
        };
    case "POST_TRANSFER_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "POST_TRANSFER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      };
    case "POST_TRANSFER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data
      };
    case "PATCH_TRANSFER_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "PATCH_TRANSFER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      };
    case "PATCH_TRANSFER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data
      };
    case "DELETE_TRANSFER_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "DELETE_TRANSFER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      };
    case "DELETE_TRANSFER_FULFILLED":
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

export default transfer