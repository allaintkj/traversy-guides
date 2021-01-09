export default (state, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
};
