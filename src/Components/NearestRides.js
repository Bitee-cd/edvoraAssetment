import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'



function NearestRides({user}) {

user && console.log(user)
  let rides = useOutletContext()
  if(rides && user) { 
    rides.sort((a,b)=> Math.min(...a.station_path.map(a => Math.abs(a-user.station_code)))- Math.min(...b.station_path.map(a => Math.abs(a-user.station_code))));

    const map= new Map(
      rides.map(obj=>[obj.id,obj])
    )
    rides=[...map.values()]
    console.log(rides)

    let array=[3,90,-1,32,43]
   let min= Math.min(...array.map(a => Math.abs(a-user.station_code)))
   console.log(min)
   }

   
  return (
    <div>
  {rides && <div>{rides.map((ride,id)=>
  (
      <div className="flex bg-[#111] text-white my-3"key={ride.id} >
      <div className="card bg-[#111] m-4 rounded-xl">
            <div className="flex">
                <div className="imageBox">
                  
                    <img  className="rounded" src={ride.map_url} alt="" />
                </div>
                <div className="contentBox mx-3">
                 
                    <p className="my-2">Ride id: {ride.id}</p>
                    <p className="my-2">Origin Station: {ride.origin_station_code}</p>
                    <p className="my-2">Origin Path: {JSON.stringify(ride.station_path)}</p>
                    <p className="my-2">Date: {ride.date}</p>
                    <p className="my-2">Distance: {Math.min(ride.station_path)}</p>
                    
                </div>
            </div>
    </div>
          </div> 
     

    )
  )}</div>}
    </div>
  )
}

export default NearestRides