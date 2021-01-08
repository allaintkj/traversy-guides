import React from 'react';

const AddTransaction = () => {
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
                        <input className='input' type='text' placeholder='Pay' />
                    </div>
                </div>

                <div className='field'>
                    <label className='label'>Amount</label>
                    <div className='control'>
                        <input className='input' type='text' placeholder='400' />
                    </div>
                </div>

                <div className='control'>
                    <button className='button is-link'>Submit</button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default AddTransaction;
