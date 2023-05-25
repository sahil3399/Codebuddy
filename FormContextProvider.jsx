import { createContext, useState, useContext } from 'react';

const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <FormContext.Provider
      value={{
        emailId,
        setEmailId,
        password,
        setPassword,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        address,
        setAddress,
        countryCode,
        setCountryCode,
        phoneNumber,
        setPhoneNumber,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const FormState = () => useContext(FormContext);

export default FormContextProvider;
