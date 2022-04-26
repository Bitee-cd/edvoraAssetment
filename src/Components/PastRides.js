import React from 'react'
import { useOutletContext } from 'react-router-dom'

function PastRides({results}) {
    const [rides,setRides] = useOutletContext()

  return (
    <div>
  {rides && <div>{rides.map((ride,id)=>
  
  (<div >
      <div className="flex bg-[#111] text-white my-3"key={ride.id} >
      <div className="card bg-[#111] m-4 rounded-xl">
            <div className="flex">
                <div className="imageBox">
                    <img  className="rounded" src={ride.map_url} alt="" />
                </div>
                <div className="contentBox mx-3">
                    <p className="my-2">Ride id: {ride.id}</p>
                    <p className="my-2">Origin Station: {ride.origin_station_code}</p>
                    <p className="my-2">Origin Path: {ride.station_path}</p>
                    <p className="my-2">Date: {ride.date}</p>
                    <p className="my-2">Distance</p>
                    
                </div>
            </div>
    </div>
          </div> 
  </div>
      
  
    )
  )}</div>}
    </div>
  )
  }

export default PastRides