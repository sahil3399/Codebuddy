// import React from 'react';
import axios from 'axios';
import { FormState } from '../Context/FormContextProvider';

export default function Form1() {
  const {
    countryCode,
    setCountryCode,
    phoneNumber,
    setPhoneNumber,
    password,
    emailId,
    address,
    firstName,
    lastName,
  } = FormState();

  const handleSubmit = () => {
    if (!(countryCode === '+91' || countryCode === '+1')) {
      throw new Error('Invalid Coutrycode');
    }

    if (phoneNumber.length !== 10) {
      throw new Error('Write Proper Number');
    }

    axios
      .post('https://codebuddy.review', {
        emailId,
        phoneNumber,
        firstName,
        lastName,
        countryCode,
        address,
        password,
      })
      .then(() => {
        console.log('success');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <form className="top">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Countrt Code
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={countryCode}
          onChange={e => {
            setCountryCode(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={phoneNumber}
          onChange={e => {
            setPhoneNumber(e.target.value);
          }}
        />
      </div>
      <button type="submit" className="btn btn-primary buttons" onSubmit={handleSubmit}>
        Save
      </button>
      <button type="submit" className="btn btn-primary buttons">
        Save and Next
      </button>
      <button type="submit" className="btn btn-primary buttons">
        <a href="/form1">Back</a>
      </button>
    </form>
  );
}
