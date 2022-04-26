import React from 'react'

function Card({image,id,station,path,date}) {
  return (
    <div className="card bg-[#111] m-4 rounded-xl">
            <div className="flex">
                <div className="imageBox">
                    <img  className="rounded" src={image} alt="" />
                </div>
                <div className="contentBox mx-3">
                    <p className="my-2">Ride id: {id}</p>
                    <p className="my-2">Origin Station: {station}</p>
                    <p className="my-2">Origin Path: {path}</p>
                    <p className="my-2">Date: {date}</p>
                    <p className="my-2">Distance</p>
                    
                </div>
            </div>
    </div>
  )
}

export default Card

// {
//     setRideData ?
//     <div>
//         {rideData.map((ride,id)=>(

//           <div className="flex bg-[#111] my-3"key={id} >
//               <Card id={ride.id} date={ride.date} image={ride.map_url} station={ride.origin_station_code} path={ride.origin_station_path}/>
              
//           </div>  
//         ))
        
        
//         }
        
//     </div>
//     :
//     <h1>Data not gotten from url</h1>
// }

{/* <div className="title  grid place-content start grid-cols-9 gap-4 ">
<NavLink to="/nearestRides"  className={({ isActive }) => (isActive ? "link-active" : "link")}>Nearest Rides</NavLink>
<NavLink to="upcomingRides"  className={({ isActive }) => (isActive ? "link-active" : "link")}>Upcoming Rides</NavLink>
<NavLink to="pastRides"  className={({ isActive }) => (isActive ? "link-active" : "link")}>Past Rides</NavLink>
</div> */}
