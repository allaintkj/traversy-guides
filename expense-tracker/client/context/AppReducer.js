export default (state, action) => {
    switch (action.type) {
        // transactions
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

        // users
        case 'ADD_USER':
            return {
                ...state,
                auth: action.payload
            };
        case 'AUTH_USER':
            return {
                ...state,
                auth: action.payload
            };
        case 'DEAUTH_USER':
            return {
                ...state,
                auth: action.payload,
                transactions: []
            };

        // errors
        case 'ERROR':
            return {
                ...state,
                error: action.payload
            };
            
        default:
            return state;
    }
};
