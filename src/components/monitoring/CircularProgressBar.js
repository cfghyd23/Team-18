import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar() {
  const [percentage, setPercentage] = useState(0);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <div style={{ marginRight: '40px' }}>
        <h6>Cause No-1</h6>
        <div style={{ width: 150 }}>
          <CircularProgressbar value={60} text={`${60}%`} />
        </div>
      </div>
      <div style={{ marginRight: '40px' }}>
        <h6>Cause No-2</h6>
        <div style={{ width: 150 }}>
          <CircularProgressbar value={40} text={`${40}%`} />
        </div>
      </div>
      <div>
        <h6>Cause No-3</h6>
        <div style={{ width: 150 }}>
          <CircularProgressbar value={80} text={`${80}%`} />
        </div>
      </div>
    </div>
  );
}

export default CircularProgressBar;
