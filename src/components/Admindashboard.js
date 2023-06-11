import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Admindashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/admin-api/getdetails');
        setData(response.data.payload);
        //console.log(response.data.payload);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: '#f2f2f2', padding: '8px', borderBottom: '1px solid #ddd' }}>InternName</th>
            <th style={{ backgroundColor: '#f2f2f2', padding: '8px', borderBottom: '1px solid #ddd' }}>AmountGenerated</th>
            {/* <th style={{ backgroundColor: '#f2f2f2', padding: '8px', borderBottom: '1px solid #ddd' }}>Cause</th> */}
            {/* <th style={{ backgroundColor: '#f2f2f2', padding: '8px', borderBottom: '1px solid #ddd' }}>TransactionId</th> */}
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.internName}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.amount}</td>
              {/* <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.causeNo}</td> */}
              {/* <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.transactionId}</td> */}
              {/* Display more data columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admindashboard;
