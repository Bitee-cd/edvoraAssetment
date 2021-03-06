import React from 'react'
import { useSelector } from 'react-redux'



function NearestRides({user}) {

  let rides = useSelector(state=>state.allRides.ridesDetails)
 
//testing the user data passed from Appjs through Body.js
user && console.log(user)


//if the rides and data data are not present
  if(rides && user) { 
    console.log(rides)

    // array to get the minimum distance from the station_path array after subtracting from user station code
    let calculateMin=(array)=>{
      return Math.min(...array.map(a => Math.abs(a-user.station_code)))
    } 

    //sorting out the array according to increasing order of min distances
    rides.sort((a,b)=>calculateMin(a.station_path)-calculateMin(b.station_path));

    //removing duplicates of key id using Maps
    const map= new Map(
      rides.map(obj=>[obj.id,obj])
    )
    rides=[...map.values()]

    //testing if rides corresponds
    console.log(rides)
   }

   
  return (
    <div>
      {user && 
        <div>{rides.map((ride)=>
  (
      <div className="flex bg-[#111] text-white my-3"key={ride.id} >
          <div className="card bg-[#111] m-4 rounded-xl">
                <div className="flex">
                    <div className="imageBox">
                        <img  className="rounded" src={ride.map_url} alt="" />
                    </div>
                    <div className="contentBox mx-3">
                      <p className="my-2">{ride.state}</p>
                        <p className="my-2">Ride id: {ride.id}</p>
                        <p className="my-2">Origin Station: {ride.origin_station_code}</p>
                        <p className="my-2">Origin Path: {JSON.stringify(ride.station_path)}</p>
                        <p className="my-2">Date: {ride.date}</p>
                        <p className="my-2">Distance: {Math.min(...ride.station_path.map(a => Math.abs(a-user.station_code)))}</p>
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