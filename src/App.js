import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import NearestRides from './Components/NearestRides';
import PastRides from './Components/PastRides';
import UpcomingRides from './Components/UpcomingRides';



function App() {

  const urlData ="https://assessment.api.vweb.app/user"   
  let [user,setUser]= useState(null)
  const [error, setError] = useState(null);
  
  useEffect(() => {
      axios.get(urlData).then((response) => {
        console.log(response.data);
          setUser(response.data)
      }).catch(error => {
          setError(error);
        });
        // eslint-disable-next-line
    }, []);
console.log(user)
    
  
    if (error) return `Error: ${error.message}`;
  
  
  
    return (
    <div className="App bg-[#6a6c6d] min-h-screen">
      <Header user={user} />
    <Routes>
      <Route path="/" element={<Body/>}>
        <Route path="nearestRides" element={<NearestRides user={user}/>} />
        <Route path="pastRides" element={<PastRides />} />
        <Route path="upcomingRides" element={<UpcomingRides />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
