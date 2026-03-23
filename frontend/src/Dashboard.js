import { useEffect, useState } from "react";

function Dashboard()
{
    const[applications , SetApplications] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/my-applications/1")
        .then(res=> res.json())
        .then(data=> SetApplications(data))
    },[]);


 return (
    <div className="container">
      <h1 className="heading">📊 My Applications</h1>

      <div className="grid">
        {applications.map((app, index) => (
          <div key={index} className="card">
            <h3>{app.company}</h3>
            <p><strong>Role:</strong> {app.role}</p>

            <span className={`status ${app.status.toLowerCase()}`}>
              {app.status}
            </span>
          </div>
        ))}
      </div>

      {/* 👇 empty case */}
      {applications.length === 0 && (
        <p style={{ textAlign: "center" }}>No applications yet 😢</p>
      )}
    </div>
  );

}

export default Dashboard;