import React from 'react';

const History = () => {
    return (
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
    );
};

export default History;
