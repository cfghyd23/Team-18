import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Donate() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [usersList, setUsersList] = useState([]);

  // Form submission
  const onFormSubmit = async (userObj) => {
    try {
      const response = await axios.post('http://localhost:3000/details-api/enter-details', userObj);
      console.log(response.data.message); // Confirmation message from the backend
      setUsersList([...usersList, userObj]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <p className="display-3 text-center text-info">Fundraising Form</p>
      <form className="w-50 mx-auto" onSubmit={handleSubmit(onFormSubmit)}>
        {/* Amount Raised */}
        <div className="mb-3">
          <label htmlFor="Amount">Amount Raised</label>
          <input type="number" name="Amount" id="Amount" className="form-control" {...register("Amount", { required: true, minLength: 1 })} />
          {/* Validation error message */}
          {errors.Amount?.type === 'required' && <p className="text-danger">* Amount is required</p>}
          {errors.Amount?.type === 'minLength' && <p className="text-danger">* MinLength is 1</p>}
        </div>
        {/* Transaction ID */}
        <div className="mb-3">
          <label htmlFor="Transaction_id">Transaction ID</label>
          <input type="text" name="Transaction_id" id="Transaction_id" className="form-control" {...register("Transaction_id", { required: true })} />
          {errors.Transaction_id?.type === 'required' && <p className="text-danger">* Transaction ID is required</p>}
        </div>
        {/* Intern */}
        <div className="mb-3">
          <label htmlFor="Intern">Intern Name</label>
          <input type="text" name="Intern" id="Intern" className="form-control" {...register("Intern", { required: true })} />
          {errors.Intern?.type === 'required' && <p className="text-danger">* Intern Name is required</p>}
        </div>
        {/* Cause No */}
        <div className="mb-3">
          <label htmlFor="Cause_No.">Cause Number</label>
          <input type="number" name="Cause_No." id="Cause_No." className="form-control" {...register("Cause_No.", { required: true })} />
          {errors.Cause_No?.type === 'required' && <p className="text-danger">* Cause Number is required</p>}
        </div>
        {/* Submit button */}
        <button type="submit" className="btn btn-success d-block mx-auto">Submit</button>
      </form>

      {/* Displaying users content dynamically */}
      <p className="display-6 text-center text-danger mt-5"></p>
      <div className="container">
        {/* If users list is empty */}
        {usersList.length === 0 && <h1 className="text-center text-warning"></h1>}
        {/* If not empty */}
        {usersList.length !== 0 &&
          <table className="table mx-auto text-center table-striped">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Transaction ID</th>
                <th>Intern</th>
                <th>Cause No.</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((userObj, index) => (
                <tr key={index}>
                  <td>{userObj.Amount}</td>
                  <td>{userObj.Transaction_id}</td>
                  <td>{userObj.Intern}</td>
                  <td>{userObj.Cause_No}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </div>
  );
}

export default Donate;
