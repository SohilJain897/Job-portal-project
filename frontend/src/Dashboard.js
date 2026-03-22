import { useEffect, useState } from "react";

function Dashboard()
{
    const[Applications , SetApplications] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/my-applications/1")
        .then(res=> res.json())
        .then(data=> SetApplications(data))
    },[]);


    return(
        <div>
            <h1>My Applications</h1>
            {Applications.map((app,index)=>(
                    <div key ={index}>
                        <h3>{app.company}</h3>
                        <p>{app.role}</p>
                        <p>Status : {app.status}</p>
                        </div>
                ))
            }
        </div>
    );

}

export default Dashboard;