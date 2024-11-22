import {useState, useEffect} from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users/Users';

function App() {
  
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [sendSeccess, setSendSeccess] = useState(false);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then((response) => response.json())
    .then((json) => setUsers(json.data))
    .catch((error) => {
      console.log(error);
      alert('Error users response data')
    })
    .finally(() => setIsLoading(false))
  }, [])

  
  const onChangeInputValue = (e) => {
    setInputSearchValue(e.target.value)
  }

  const onClickInvite = (id) => {
    if(invites.includes(id)) {
      setInvites((invitesArray) => invitesArray.filter(invitesArray_id => invitesArray_id  !== id));
    } else {
      setInvites((invitesArray) => [ ...invitesArray, id])
    }
  }

  const onClickSendInvites = () => {
    setSendSeccess(true)
  }

  return (
    <div className="app">
      {
        sendSeccess
        ?
        <Success count={invites.length}/>
        :
        <Users 
          inputSearchValue={inputSearchValue} 
          items={users} 
          isLoading={isLoading} 
          onChangeInputValue={onChangeInputValue} 
          onClickInvite={onClickInvite} 
          invites={invites}
          onClickSendInvites={onClickSendInvites}
        />
      }
    </div>
  );
}

export default App;
