import { useState } from "react";
import JobList from "./JobList";
import Dashboard from "./Dashboard";

function App(){
  const[page,setPage] = useState("jobs");

  return(
    <div>
      <button onClick = {()=> setPage("jobs")}>Jobs</button>
      <button onClick ={() => setPage("dashboard")}>Dashboards </button>
    
    {page === "jobs" ? <JobList/> : <Dashboard/>}
    </div>
  );

}

export default App;