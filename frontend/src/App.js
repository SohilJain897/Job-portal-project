import { useState, useEffect } from "react";
import "./App.css";


function App()
{
  const[jobs,setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
    .then(res => res.json())
    .then(data => {
      console.log("DATA:",data);
      setJobs(data);

    })
  },[])


    const applyJob = async (job_id)=>{

      try{
        const res = await fetch("http://localhost:5000/apply",{
          method:"POST",
          headers : {
            "Content-Type" : "application/json" 
          },
          body: JSON.stringify({
            user_id: 1,
            job_id:job_id
          })
        });

        const data = await res.text();
        alert(data);
      }
      catch(err){
        console.log(err);
        alert("Error Applying");
      }
    };
    


return (

<div className="container">
  <h1>Job List </h1>




  <div className="grid">
    {jobs.map(job => (
      <div key={job.id} className="card">
        <h3>{job.company}</h3>
        <p><strong>Role:</strong> {job.role}</p>
        <p>{job.description}</p>

        <button className="button" onClick ={()=> applyJob(job.id)}>
          Apply
        </button>
      </div>
    ))}
  </div>
</div>
);

}

export default App;