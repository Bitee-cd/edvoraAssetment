import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, NavLink} from 'react-router-dom'
import './Body.css'


function Body() {
    const urlData ="https://assessment.api.vweb.app/rides"   
    let [rides,setRides]= useState(null)
    
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get(urlData).then((response) => {
          console.log(response.data);
            setRides(response.data)
            console.log(rides)
          
        }).catch(error => {
            setError(error);
          });
       // eslint-disable-next-line
      }, []);
    
      if (error) return `Error: ${error.message}`;
    
    
    

  return (
    <div className="body p-6">
         <div className="title  grid place-content start grid-cols-9 gap-4 ">
            <NavLink to="/nearestRides"  className={({ isActive }) => (isActive ? "link-active" : "link")}>Nearest Rides</NavLink>
            <NavLink to="upcomingRides"  className={({ isActive }) => (isActive ? "link-active" : "link")}>Upcoming Rides</NavLink>
            <NavLink to="pastRides"  className={({ isActive }) => (isActive ? "link-active" : "link")}>Past Rides</NavLink>
        </div>
        <div className="text-white mt-5">
        <Outlet context={rides}/>
        </div>
     
    </div>
  )
}

export default Body