import React from 'react';

export default function Footer(props) {
  return (
    <div className='row fixed-bottom' style={{ bottom: '50px' }}>
        <button className='btn btn-danger col-2' onClick={props.resetQuantity}>Reset</button>
        <div className='col-8 bg-dark text-white text-center'>
            Total amount
        </div>
        <button className='btn btn-primary col-2'>Pay Now</button>
    </div>
  );
}
