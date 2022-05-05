import React, { useEffect, useState } from 'react'
import { Outlet, NavLink} from 'react-router-dom'
import './Body.css'
import {BsFilterLeft} from "react-icons/bs"
import Filter from './Filter'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setRides } from '../redux/actions/ridesAction'



function Body() {
  const [modalIsOpen, setIsOpen] = useState(false);
  
  function openModal() {
    setIsOpen(true);
  }    
  const urlData ="https://assessment.api.vweb.app/rides"
  const allRides = useSelector(state=>state)
  console.log(allRides)
  const dispatch=useDispatch()

  const fetchRides =async()=>{
    const response =await axios
    .get(urlData)
    .catch((err)=>{
      console.log("Err",err)
    })
    console.log(response.data)
    dispatch(setRides(response.data))
  }

  useEffect(()=>{
fetchRides()
// eslint-disable-next-line
  },[])
  

  
    

  return (
    <div className="body p-6">
      <div className="px-6 flex justify-between">
        <div className="title  grid place-content-start grid-cols-3 gap-4 ">
              <NavLink to="/nearestRides"  className={({ isActive }) => (isActive ? "link-active" : "link")}>Nearest Rides</NavLink>
              <NavLink to="upcomingRides"  className={({ isActive }) => (isActive ? "link-active" : "link")}>Upcoming Rides</NavLink>
              <NavLink to="pastRides"  className={({ isActive }) => (isActive ? "link-active" : "link")}>Past Rides</NavLink>
          </div>
          <div className="text-white ">
          <button className="flex justify-end"onClick={openModal}>Filter<BsFilterLeft className="text-3xl px-2"/></button>
          <div>
            <Filter setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
    </div>
        </div>
      </div>
        
        <div className="text-white mt-5">
        <Outlet/>
        </div>
     
    </div>
  )
}

export default Body