import React from 'react';
import './Login.scss';
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import bottomWave from '../../Assets/register/wave-bottom.svg';

interface LOGProps {
  user: object;
  setUser(user: object): void
}

function Login({ user, setUser }: LOGProps) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(8, 'Password has to be atleast 8 characters.')
        .required('Password is required.'),
    }),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div id='loginContainer'>
      <div className='loginFormWrapper'>
        <h2>Welcome back!</h2>
        <p>Login and start <br /> managing all your passwords <br /> all for free.</p>
        <form className='loginForm' onSubmit={formik.handleSubmit}>
          <label htmlFor="email" style={formik.errors.email ? { color: 'red' } : { color: 'black' }}>
            Email
            <input
              style={formik.errors.email ? { border: '2px solid red' } : { color: '2px solid black' }}
              id="email"
              className="loginInput"
              defaultValue={formik.initialValues.email}
              placeholder="name@domain.com"
              onChange={formik.handleChange}
            />
            {formik.errors.email && <span className='errorMessage'>{formik.errors.email}</span>}
          </label>
          <label htmlFor="password" style={formik.errors.password ? { color: 'red' } : { color: 'black' }}>
            Password
            <input
              style={formik.errors.password ? { border: '2px solid red' } : { color: '2px solid black' }}
              id="password"
              type="password"
              className="loginInput"
              defaultValue={formik.initialValues.password}
              placeholder="Typ your password"
              onChange={formik.handleChange}
            />
            {formik.errors.password && <span className='errorMessage'>{formik.errors.password}</span>}
          </label>
          <button type="submit" className="loginInput">Login</button>
        </form>
      </div>
      <img id='bottomWave' src={bottomWave} alt='' />
    </div>
  )
}

export default Login;