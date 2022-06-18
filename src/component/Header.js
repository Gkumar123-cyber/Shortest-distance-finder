import React, {useEffect, useReducer, useState} from 'react'
import './header.css'
// import { UserOutlined } from '@ant-design/icons';
// import { Avatar, Image } from 'antd';



const Header = ({user}) => {
    
  return (
      <div>
            <div style={{
                height:"10vh",
                color:"white",
                backgroundColor:"#101010",
                display:"flex",
                alignItems:"center",
                flexDirection:"row",
                justifyContent:"space-between"
                }}>
                <p style={{marginLeft:"1rem", fontWeight:"700", fontSize:"2rem"}}>Edvora</p>
                <div style={{
                    display:"flex",
                    alignItems:"center",
                    flexDirection:"row",
                    justifyContent:"end"
                }}>
                    <p style={{marginRight:"1rem"}}>{user.name}</p>
                    <img
                    alt='user logo'
                    src={user.url}
                    style={{
                        width:"10%",
                        marginRight:"1rem",
                        borderRadius:"50%"
                    }}
                    />
                </div>
            </div>
        </div>
    
    
  )
}

export default Header