import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
// {JSON.stringify(amount)}

function Payment() {
const {amount} = useParams();
const teleport = useNavigate();
const messagedisplay=()=>{
  alert(`                  Thank You!
  Your booking has now been confirmed and you will get future
   updates on your mobile number `)
}
  return (
    <div className='border border-3 rounded p-2'>
      <h1>Payment</h1>                      
    <div class="d-flex align-items-start">
            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                 <i class="bi bi-credit-card-2-front"></i> Credit/Debit Card <span style={{fontSize:'70%'}}>Visa,Mastercard,Maestro,Rupay</span> </button>
                <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                <i class="bi bi-bank2"></i> NetBanking <br/> <span style={{fontSize:'70%'}}>Pay with Internet Banking Account</span> </button>
                <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false">
                <i class="bi bi-piggy-bank-fill"></i> UPI <br/> <span style={{fontSize:'70%'}}>Pay using BHIM,Gpay and other UPI Apps</span> </button>
                <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                <i class="bi bi-safe"></i> PayPal <br/><span style={{fontSize:'70%'}}>Wallet option available</span> </button>
                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                <i class="bi bi-cash-coin"></i> Other Payment Modes <br/><span style={{fontSize:'70%'}}></span> </button>
            </div>
            <div className='d-flex flex-wrap w-75 border border-5 rounded border-secondary p-4 mx-5'>
            <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
              <div className='form-label'><br/>
                Pay with Credit/Debit Card </div>
                <input type="text" name="" placeholder='xxxx-xxxx-xxxx-xxxx' className='form-control form-control-lg'/><br/>
                Date Of Expiry 
                <input type="text" name="" placeholder='MM/YY' className='form-control'/><br/>
                CVV/CVC
                <input type="text" name="" placeholder='***' className='form-control'/><br/>
                Cardholder's Name
                <input type="text" name="" className='form-control'/><br/>
            </div> 
         <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
              <label htmlFor="" class="form-label">Name Of Bank</label>
            <select class="form-select" aria-label="Default select example">
              <option selected disabled>Select your bank</option>
              <option value="1">SBI</option>
              <option value="2">HDFC</option>
              <option value="3">Axis</option>
              <option value="4">ICICI</option>
              <option value="5">PNB</option>
              <option value="6">CBI</option>
              <option value="7">BOI</option>
            </select><br/>
            Username: <input type="text" className='form-control' />
            IFSC: <input type="text" className='form-control' />
            Branch-Name: <input type="text" className='form-control' />
            Branch-Code: <input type="text" className='form-control' />
            </div>
            <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
              <label htmlFor="" class='form-label'>Enter UPI Id:</label>
              <input type="text" name="" id="" class='form-control'/>
            </div>
            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
              <label htmlFor="" class='form-label'>Enter PayPal Id:</label>
              <input type="text" name="" id="" class='form-control'/>
            </div>
            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
              <div>
                <input type="radio" name="other" id="" className='form-check-input'/>Cash <br/>
                <input type="radio" name="other" id="" className='form-check-input'/>DD   <br />
                <input type="radio" name="other" id="" className='form-check-input'/>Challan <br/>
                <input type="radio" name="other" id="" className='form-check-input'/>NEFT <br/>
                <input type="radio" name="other" id="" className='form-check-input'/>SliceCard <br/>
              </div>
            </div>
         </div>
       
        </div>
        <h5>Net Payable Amount:{amount}</h5>
      </div>
       
      <div className='d-flex flex-wrap w-50'></div><br/>
      <div className=' w-50' style={{marginLeft:'600px'}}>
        <button className='btn btn-info w-50' onClick={()=>{teleport('/booking/payment/endpage')}}>Pay Now</button>
      </div>
    </div>
  )
}

export default Payment