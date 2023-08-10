import React,{ useState } from 'react';
import './App.css';
import Login from './pages/Login';
import ProfilePage from './pages/ProfilePage';

function App() {
  const [userData, setUserData] = useState(null)

  const handleFormSubmit = (data) => {
    setUserData(data);
  };

  return (
    <div className="App">
      {userData ? (
        <ProfilePage userData={userData}/>
      ) : (
        <Login onSubmit={handleFormSubmit}/>
      )}
      
    </div>
  )
}

export default App;