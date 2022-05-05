import React from 'react'
import { useSelector } from 'react-redux'





function UpcomingRides({user}) {

  let rides = useSelector(state=>state.allRides.ridesDetails)
const today = new Date()

return (
  <div className='upcomingRides'>
{(rides && user) && rides.filter(ride=>today<new Date(ride.date))
.map((ride,id)=>
(    <div className="flex bg-[#111] m-4 rounded-xl text-white my-3" key={id}>
          <div className="flex">
              <div className="imageBox">
                  <img  className="rounded" src={ride.map_url} alt="" />
              </div>
              <div className="contentBox mx-3">
                  <p className="my-2">Ride id: {ride.id}</p>
                  <p className="my-2">Origin Station: {ride.origin_station_code}</p>
                  <p className="my-2">Origin Path:{JSON.stringify(ride.station_path)}</p>
                  <p className="my-2">Date: {ride.date}</p>
                  <p className="my-2">Distance: {Math.min(...ride.station_path.map(a => Math.abs(a-user.station_code)))}</p> 
              </div>
          </div>
    </div>
     )
)}
  </div>
)}

export default UpcomingRides