import React from 'react'
import { connect } from 'react-redux'

function Billing() {

    function Order(){
        alert(`                                         "Thank You!"

        Your booking has now been confirmed and you will get future
        updates on your mobile number`)
    }
  return (
    <div className='border rounded border-5 p-5'>
    <div className='border rounded border-3 border-success p-4'>
    <div className='d-flex justify-content-center display-5 text-success'>Billing Details:</div><hr/>
        <div className=''>
        <h5 className='d-flex justify-content-center'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Car Type:</h5>
        <h5 className='d-flex justify-content-center'>Service Type:</h5>
        <h5 className='d-flex justify-content-center'>Service Title:</h5>
        <h5 className='d-flex justify-content-center'>Service Cost:</h5>
        <hr />
        <h5 className='d-flex justify-content-center'>Total: </h5>
        </div>
    </div> <br />
    
    <div  className='d-flex justify-content-center'>
    <button className="btn btn-outline-success" onClick={Order}>Place Order</button>
    </div>
    </div>
  )
}

export default connect(store=>store)(Billing)