import React, { useEffect } from 'react';
import './Register.scss';
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import image from '../../Assets/register/managing.svg'
import bottomWave from '../../Assets/register/wave-bottom.svg';

interface REGProps {
  user: any;
  setUser(user: object): void
}

function Register({ user, setUser }: REGProps) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: 'Vincent Pinas',
      email: 'info@secid.io',
      emailConfirmation: 'info@secid.io',
      password: 'secidOfficial@1',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().min(6, 'Username has to be longer than 6 characters').required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      emailConfirmation: Yup.string().oneOf([Yup.ref('email'), null], 'Email does not correspond').required('Please confirm your email'),
      password: Yup.string()
        .min(8, 'Password has to be longer than 8 characters.')
        .required('Password is required.'),
    }),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    if(user.isLoggedIn) {
      navigate(`/account/${user.id}`);
    }
  }, [navigate, user.isLoggedIn, user.id])

  return (
    <div id='RegisterContainer'>
      <div className='registerFormWrapper'>
        <img src={image} alt="" />
        <h2>Welcome!</h2>
        <p>Sign up here for a <br /> free secid account and start managing <br /> your passwords right now.</p>
        <form className='registerForm' onSubmit={formik.handleSubmit}>
          <label htmlFor="username" style={formik.errors.username ? { color: 'red' } : { color: 'black' }}>
            Username
            <input
              style={formik.errors.username ? { border: '2px solid red' } : { color: '2px solid black' }}
              id="username"
              type="text"
              className="registerInput"
              defaultValue={formik.initialValues.username}
              placeholder="Type your username"
              onChange={formik.handleChange}
            />
            {formik.errors.username && <span className='errorMessage'>{formik.errors.username}</span>}
          </label>
          <label htmlFor="email" style={formik.errors.email ? { color: 'red' } : { color: 'black' }}>
            Email
            <input
              style={formik.errors.email ? { border: '2px solid red' } : { color: '2px solid black' }}
              id="email"
              className="registerInput"
              defaultValue={formik.initialValues.email}
              placeholder="name@domain.com"
              onChange={formik.handleChange}
            />
            {formik.errors.email && <span className='errorMessage'>{formik.errors.email}</span>}
          </label>
          <label htmlFor="emailConfirmation" style={formik.errors.emailConfirmation ? { color: 'red' } : { color: 'black' }}>
            Confirm Email
            <input
              style={formik.errors.emailConfirmation ? { border: '2px solid red' } : { color: '2px solid black' }}
              id="emailConfirmation"
              className="registerInput"
              defaultValue={formik.initialValues.emailConfirmation}
              placeholder="Confirm your email"
              onChange={formik.handleChange}
            />
            {formik.errors.emailConfirmation && <span className='errorMessage'>{formik.errors.emailConfirmation}</span>}
          </label>
          <label htmlFor="password" style={formik.errors.password ? { color: 'red' } : { color: 'black' }}>
            Password
            <input
              style={formik.errors.password ? { border: '2px solid red' } : { color: '2px solid black' }}
              id="password"
              type="password"
              className="registerInput"
              defaultValue={formik.initialValues.password}
              placeholder="Typ your password"
              onChange={formik.handleChange}
            />
            {formik.errors.password && <span className='errorMessage'>{formik.errors.password}</span>}
          </label>
          <button type="submit" className="registerInput">Register</button>
        </form>
      </div>
      <img id='bottomWave' src={bottomWave} alt='' />
    </div>
  )
}

export default Register;
