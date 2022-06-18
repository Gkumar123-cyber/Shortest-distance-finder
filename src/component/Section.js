// import { Card } from "antd";
import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";

const Section = ({user}) => {
    const [rides, setRides] = React.useState([]);
    const [dataLoaded, setDataLoaded] = React.useState(false);
    const [userLoaded, setUserLoaded] = React.useState(false);
    // const [user, setUser] = useState({
    //     name:"",
    //     url:"",
    //     station_code:0
    // })

    useEffect(() => {
        const url = 'https://assessment.api.vweb.app/rides';
        fetch(url).then(response => response.json())
        .then((data) => {
            setRides(data)
            setDataLoaded({
                dataLoaded:true
            })
            rides.sort((a,b) => {
                return calculateDist(a) - calculateDist(b);
            })

        }).catch((e)=>{
            console.log(e);
        })

    }, []);

    // useEffect(() => {
    //     fetch('https://assessment.api.vweb.app/rides').then(response => response.json())
    //     .then((data) => {
    //         // console.log('user data', data)
    //         setUser({
    //             ...user,
    //             name:data.name,
    //             url:data.url,
    //             station_code:data.station_code
    //         })
    //         setUserLoaded({
    //             userLoaded:true
    //         })

    //     }).catch((e)=>{
    //         console.log(e);
    //     })
    // })


    
    
    //console.log(rides)

    // const distance = rides.map((ride, indx) =>{
    //     return(
    //         if (stationData.station_path.include(user.station_code) ){
    //          {...stationData, distance : "0"}
    //     }
    //      else {stationData.station_path.map((stationNo) => {}
            
                
    //  } )})
    //  console.log(distance)
    const calculateDist = (ride) => {
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
            height:"100%",
            background: "#232323",
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        }}>
        {console.log('user', user)}
        {dataLoaded
            ?  
                
                    rides.map((ride, idx) => (
                        <Card ride={ride} user={user}/>
                    ))
                
            : "LOADING..."
        
        }
        </div>
    );
}

export default Section;