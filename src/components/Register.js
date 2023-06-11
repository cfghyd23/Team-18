import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {Button,Form} from 'react-bootstrap'
import {MdLogin} from 'react-icons/md'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

//here we are using react bootstrap form

function Register() {

  const{register,handleSubmit,formState:{errors}}=useForm();

  const navigate=useNavigate()

  const onFormSubmit=(userObj)=>{
    // let formData = new FormData();
    // //append values to it
    // formData.append("userObj", JSON.stringify(userObj));
    // formData.append("photo", img);

    //making http post request

    axios.post('http://localhost:3000/user-api/create-user',userObj)
    .then(response=>{
      //console.log(response)
      alert(response.data.message)
      //navigate to login
      if(response.data.message==='new user created'){
        navigate('/login');
      }
    })
    .catch(error=>{
      console.log(error)
      alert("something went wrongin creating user")
    })
  }

  return (
    <div className=''>
      <h1 className='text-center'>Registraion Form</h1>
      <Form className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
        {/* username */}
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" {...register('username',{required:true})}/>
          {/* validating username */}
          {errors.username&&<p className='text-danger'>*Username is required</p>}
        </Form.Group>


        {/* password */}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" {...register('password',{required:true})}/>
          {/* validating username */}
          {errors.password&&<p className='text-danger'>*Password is required</p>}
        </Form.Group>

        {/* email */}
        <Form.Group className="mb-3">
          <Form.Label>email</Form.Label>
          <Form.Control type="email" placeholder="Email" {...register('email',{required:true})}/>
          {/* validating username */}
          {errors.email&&<p className='text-danger'>*Email is required</p>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Signup <MdLogin/>
        </Button>
    </Form>

    </div>
  )
}

export default Register
