export default (state, action) => {
    switch (action.type) {
        case 'DEL_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            };
        default:
            return state;
    }
};
