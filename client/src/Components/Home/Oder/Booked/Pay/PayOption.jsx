import React from 'react'
import { NavLink } from 'react-router-dom'

const PayOption = () => {
  return (
    <>
          <div className="booking">
        <div className="containerBooking">
          <div className="form">
            <h1>Welcome to Food Order</h1>
          </div>
          <br />
          <div className="form">
            <label htmlFor="bname">Name</label>
            <br />
            <input
              type="text"
              name="bname"
              value={sendData.bname}
              onChange={changeData}
              placeholder="Enter name"
            />
          </div>
          <br />
          <div className="form">
            <label htmlFor="bmobile">Mobile No.</label>
            <br />
            <input
              type="number"
              name="bmobile"
              value={sendData.bmobile}
              onChange={changeData}
              placeholder="Enter mobile number"
              maxLength="10"
              pattern="[0-9]{10}"
            />
          </div>
          <br />
          <div className="form">
            <label htmlFor="baddress">Address</label>
            <br />
            <textarea
              placeholder="Enter address"
              name="baddress"
              value={sendData.baddress}
              onChange={changeData}
              cols="20"
              rows="2"
            ></textarea>
          </div>
          <br />
          <div className="form">
            <button>Next</button>
          </div>
          <br />
          <div className="form">
            <p>
              {" "}
              <NavLink>Cancel</NavLink>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PayOption