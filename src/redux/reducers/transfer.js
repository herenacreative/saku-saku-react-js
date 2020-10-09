const initialState ={
    isLoading : false,
    isError : false,
    errorMsg : "",
    data : []
}

const transfer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TRANSFER_ALL_PENDING":
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case "GET_TRANSFER_ALL_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: "Data rejected"
            };
        case "GET_TRANSFER_ALL_FULFILLED":
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