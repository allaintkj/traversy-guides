import React from 'react';

function App() {
    return (
        <div className='expenses'>
            <section className='section'>
                <div className='container'>
                    <h1 className='title has-text-centered'>Expense Tracker</h1>
                </div>
            </section>
            <section className='section'>
                <div className='container'>
                    <div className='columns'>
                        <div className='column is-4 is-offset-4'>
                            <div className='px-0 pb-5'>
                                <h1 className='subtitle'>Balance</h1>
                                <h1 className='title'>$9999.99</h1>
                            </div>

                            <div className='columns has-text-centered m-0'>
                                <div className='column card is-half'>
                                    <h1 className='subtitle'>
                                        income<br />
                                        <span className='has-text-success'>$500.00</span>
                                    </h1>
                                </div>
                                <div className='column card is-half'>
                                    <h1 className='subtitle'>
                                        expenses<br />
                                        <span className='has-text-danger'>$260.00</span>
                                    </h1>
                                </div>
                            </div>

                            <div className='pt-5'>
                                <h1 className='subtitle'>History</h1>
                                <hr className='hr' />

                                <div className='columns has-text-centered m-0'>
                                    <div className='column p-0'>
                                        <div className='card level m-0 p-2'>
                                            <div>Cash</div>
                                            <div className='has-text-success'>$100</div>
                                        </div>
                                        <div className='card level m-0 p-2'>
                                            <div>Book</div>
                                            <div className='has-text-danger'>$40</div>
                                        </div>
                                        <div className='card level m-0 p-2'>
                                            <div>Camera</div>
                                            <div className='has-text-danger'>$200</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

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
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
