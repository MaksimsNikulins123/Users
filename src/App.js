import {useState, useEffect} from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

function App() {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then((response) => response.json())
    .then((json) => setUsers(json.data))
    .catch((error) => {
      console.log(error);
      alert('Error users response data')
    })
  }, [])
  
  return (
    <div className="App">
      <Users />
      {/* <Success /> */}
    </div>
  );
}

export default App;
