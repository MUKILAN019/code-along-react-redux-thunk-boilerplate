const initialStatevalue = {
    items: [],
    l: false,
    error: null
};

const Reducer = (state = initialStatevalue, action) => {
    switch (action.type) {
        case "REQUEST":
            return {
                ...state,
                l: true,
                error: "404"
            };
        case "SUCCESS":
            return {
                ...state,
                l: false,
                items: action.payload
            };
        case "DATA_FAILURE":
            return {
                ...state,
                l: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default Reducer;