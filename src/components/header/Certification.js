import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Certification() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/admin-api/getdetails');
        setData(response.data.payload);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h1>Certificate of Achievement</h1>
          <p>Congratulations, <span style={{ fontWeight: 'bold' }}>{data.length > 0 ? data[0].internName : ''}</span>!</p>
          <p>You have successfully completed the program.</p>
        </div>
      </div>
    </div>
  );
}

export default Certification;
