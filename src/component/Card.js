import React from "react";

const Card = ({ride, user}) => {
    
    
    

    const calculateDist = () => {
        for(let i=0;i<ride.station_path.length;i++){
            if(ride.station_path[i] < user.station_code) continue;
            else{
                // console.log(`distance for ${ride.id} and user ${user.station_code} is ${ride.station_path[i] - user.station_code}`)
                return (ride.station_path[i] - user.station_code);

            }
        }
        return 0;
    }
     
    
    return (
        <div style={{
            background: "#171717",
            width:"80vw",
            height:"30vh",
            marginTop:"1rem",
            borderRadius:"0.5rem",
            display:"flex",
            flexDirection:"row",
            justifyContent:"start",
            alignItems:"center"
        }}>
        <img
            style={{
                width:"15%",
                marginLeft:"1rem"
            }}
            src={ride.map_url}
        />
        {console.log('user', user)}
        {console.log('ride', ride)}
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"start",
            alignItems:"flex-start",
            color:"#CFCFCF",marginLeft:"1rem"
        }}>
            <p>Ride id: {ride.id}</p>
            <p>Origin Station: {ride.origin_station_code}</p>
            <p>station_path: {ride.station_path.toString()}</p>
            <p>Date: {ride.date}</p>
            <p>Distance: {calculateDist()}</p> 
        </div>
        <div>

        </div>
        </div>
    );
}

export default Card;