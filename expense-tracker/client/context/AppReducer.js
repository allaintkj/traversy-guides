export default (state, action) => {
    switch (action.type) {
        case 'GET_TX':
            return {
                ...state,
                transactions: action.payload
            };
        case 'ADD_TX':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            };
        case 'DEL_TX':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            };
        case 'TX_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
