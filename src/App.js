import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './component/Header.js';
import Section from './component/Section';

function App() {
	const [user, setUser] = useState({
        name:"",
        url:"",
        station_code:0
    })
    React.useEffect(() => {
        const url = "https://assessment.api.vweb.app/user"
        fetch(url)
        .then((res) => res.json())
        .then((data) => setUser({
            ...user,
            name:data.name,
            url:data.url,
            station_code:data.station_code
        }))
        .catch((e) => console.log(e))

        
        
    },[])
  return (
    <div className="App">
      <Header user={user}/>
	  <Section user={user}/>
    </div>
  );
}

export default App;
