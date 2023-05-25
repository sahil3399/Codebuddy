// import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormState } from '../../Context/FormContextProvider';

export default function Form2() {
  const { firstName, setFirstName, lastName, setLastName, address, setAddress } = FormState();
  const handleSubmit = () => {
    if (!(firstName.length >= 2 && firstName.length <= 50)) {
      throw new Error('Enter FirstName as per the pattern described');
    }

    if (address.length < 10) {
      throw new Error('Enter address as per the pattern described');
    }

    for (let i = 0; i < firstName.length; i++) {
      if (!(firstName[i] >= 'a' && firstName[i] <= 'z')) {
        throw new Error('Only alphabets are allowed');
      }
    }

    for (let i = 0; i < lastName.length; i++) {
      if (!(lastName[i] >= 'a' && lastName[i] <= 'z')) {
        throw new Error('Only alphabets are allowed');
      }
    }
  };

  const history = useHistory();

  const next = () => {
    if (!(firstName.length >= 2 && firstName.length <= 50)) {
      throw new Error('Enter FirstName as per the pattern described');
    }

    if (address.length < 10) {
      throw new Error('Enter address as per the pattern described');
    }

    for (let i = 0; i < firstName.length; i++) {
      if (!(firstName[i] >= 'a' && firstName[i] <= 'z')) {
        throw new Error('Only alphabets are allowed');
      }
    }

    for (let i = 0; i < lastName.length; i++) {
      if (!(lastName[i] >= 'a' && lastName[i] <= 'z')) {
        throw new Error('Only alphabets are allowed');
      }
    }

    history.push('/form1/form2');
  };

  return (
    <form className="top">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={firstName}
          onChange={e => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={lastName}
          onChange={e => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={address}
          onChange={e => {
            setAddress(e.target.value);
          }}
        />
      </div>
      <button type="submit" className="btn btn-primary buttons" onSubmit={handleSubmit}>
        Save
      </button>
      <button type="submit" className="btn btn-primary buttons" onSubmit={next}>
        <a href="/form1/form2">Save And Next</a>
      </button>
      <button type="submit" className="btn btn-primary buttons">
        <a href="/">Back</a>
      </button>
    </form>
  );
}
