// import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormState } from '../Context/FormContextProvider';
import './index.css';

export default function Form1() {
  const { emailId, setEmailId, password, setPassword } = FormState();
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    const m = new Map();
    m.set('smallLetters', 0);
    m.set('SpecialLetters', 0);
    m.set('CapitalLetters', 0);
    m.set('digit', 0);
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= 'a' && password[i] <= 'z') {
        m.set('smallLetters', m.get('smallLetters') + 1);
      } else if (password[i] >= 'A' && password[i] <= 'Z') {
        m.set('CapitalLetters', m.get('CapitalLetters') + 1);
      } else if (password[i] >= '0' && password[i] <= '9') {
        m.set('digit', m.get('digit') + 1);
      } else {
        m.set('SpecialLetters', m.get('SpecialLetters') + 1);
      }
    }

    m.forEach(value => {
      if (value <= 2) {
        throw new Error('Enter Valid Password');
      }
    });
  };

  const next = event => {
    event.preventDefault();
    const m = new Map();
    m.set('smallLetters', 0);
    m.set('SpecialLetters', 0);
    m.set('CapitalLetters', 0);
    m.set('digit', 0);
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= 'a' && password[i] <= 'z') {
        m.set('smallLetters', m.get('smallLetters') + 1);
      } else if (password[i] >= 'A' && password[i] <= 'Z') {
        m.set('CapitalLetters', m.get('CapitalLetters') + 1);
      } else if (password[i] >= '0' && password[i] <= '9') {
        m.set('digit', m.get('digit') + 1);
      } else {
        m.set('SpecialLetters', m.get('SpecialLetters') + 1);
      }
    }

    m.forEach(value => {
      if (value <= 2) {
        throw new Error('Enter Valid Password');
      }
    });
    history.push('/form1');
  };

  return (
    <>
      <form className="top">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={emailId}
            onChange={e => {
              setEmailId(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary buttons" onClick={handleSubmit}>
          Save
        </button>
        <button type="submit" className="btn btn-primary buttons" onClick={next}>
          <a href="/form1">Save and Next</a>
        </button>
        <button type="submit" className="btn btn-primary buttons">
          Back
        </button>
      </form>
    </>
  );
}
