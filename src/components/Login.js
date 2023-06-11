import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { MdLogin } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import loginImg from "../images/login.svg";
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../slices/userSlice';
import { useNavigate } from 'react-router-dom';
import Userdashboard from './Userdashboard';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFormSubmit = (userCredObj) => {
    dispatch(userLogin(userCredObj));
  };

  // Handle successful login
  React.useEffect(() => {
    if (isSuccess) {
      navigate('/userdashboard');
    }
  }, [isSuccess, navigate]);

  return (
    <div className='container'>
      <h1 className='text-center text-info'>Login Form</h1>
      <img src={loginImg} width="300px" className='.d-none .d-sm-block d-block mx-auto' alt="" />
      <Form className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
        {/* username */}
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" {...register('username', { required: true })} />
          {/* validating username */}
          {errors.username && <p className='text-danger'>*Username is required</p>}
        </Form.Group>

        {/* password */}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" {...register('password', { required: true })} />
          {/* validating username */}
          {errors.password && <p className='text-danger'>*Password is required</p>}
        </Form.Group>

        <Button variant="secondary" type="submit">
          Login <MdLogin />
        </Button>
      </Form>
    </div>
  );
}

export default Login;
