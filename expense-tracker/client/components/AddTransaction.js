import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router';

import { GlobalContext } from '../context/GlobalState';

const AddTransaction = props => {
    const [label, setLabel] = useState('');
    const [amount, setAmount] = useState(0);

    const context = useContext(GlobalContext);

    return (
        <React.Fragment>
            <div className='pt-5'>
                <h1 className='subtitle'>Add Transaction</h1>
                <hr className='hr' />
            </div>

            <form>
                <div className='field'>
                    <label className='label'>Label</label>
                    <div className='control'>
                        <input className='input'
                            onChange={event => {
                                event.preventDefault();
                                setLabel(event.target.value);
                            }} type='text'
                            value={label} />
                    </div>
                </div>

                <div className='field'>
                    <label className='label'>Amount</label>
                    <div className='control'>
                        <input className='input'
                            onChange={event => {
                                event.preventDefault();
                                setAmount(event.target.value);
                            }} type='text'
                            value={amount} />
                    </div>
                </div>

                <div className='control'>
                    <button className='button is-link' onClick={event => {
                        event.preventDefault();

                        const addTx = async() => {
                            const res = await context.addTx({
                                user: context.auth._id,
                                label: label,
                                amount: parseFloat(amount),
                                token: localStorage.getItem('token')
                            });

                            if (res === 401) { props.history.push('/'); }
                        };

                        addTx();
                        setLabel('');
                        setAmount(0);
                    }}>Submit</button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default withRouter(AddTransaction);
