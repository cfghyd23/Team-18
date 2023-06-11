import React from 'react';
import { Navigate } from 'react-router-dom';

function Admin({ path }) {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the form from auto-submitting

    // Access form values using event.target.elements
    const name = event.target.elements.name.value;
    const password = event.target.elements.password.value;

    console.log(name, password);

    // Perform login logic here

    // Assuming login is successful, redirect to the admin dashboard
    return <Navigate to={`${path}/dashboard`} replace />;
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="admin-form w-50 text-center">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" className="form-control" />
        </div>
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default Admin;
