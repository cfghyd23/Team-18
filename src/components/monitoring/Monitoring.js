import { NavLink, useNavigate } from 'react-router-dom';
import ProgressSteps from '../monitoring/ProgressSteps';
import CircularProgressBar from '../monitoring/CircularProgressBar';

function Monitoring() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Donate');
  };

  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ textAlign: 'center' }}>Target Amount: 10000</h2>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px', width: '100%' }}>
        {/* <button
          onClick={handleClick}
          style={{ fontSize: '16px', padding: '10px 20px', backgroundColor: 'lightblue', marginLeft: 'auto' }}
        >
          Update Status
        </button> */}
      </div>
      <div style={{ width: '50%', marginBottom: '20px' }}>
        <ProgressSteps />
        <CircularProgressBar />
      </div>
    </div>
  );
}

export default Monitoring;
