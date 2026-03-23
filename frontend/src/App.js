import { useState } from "react";
import JobList from "./JobList";
import Dashboard from "./Dashboard";
import AdminDashboard from "./AdminDashboard";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("jobs");


  if (!user) {
    return <Login setUser={setUser} />;
  }


  if (user.role === "admin") {
  return (
    <div>
      <div className="navbar">
        <h3>Admin Panel</h3>

        <button className="logout-btn" onClick={() => setUser(null)}>
          Logout
        </button>
      </div>

      <AdminDashboard />
    </div>
  );
}
 
  return (
    <div>
      
     <div className="navbar">
  <div className="nav-left">
    <button
      className={`nav-btn ${page === "jobs" ? "active" : ""}`}
      onClick={() => setPage("jobs")}
    >
      Jobs
    </button>

    <button
      className={`nav-btn ${page === "dashboard" ? "active" : ""}`}
      onClick={() => setPage("dashboard")}
    >
      My Applications
    </button>
  </div>

  <button className="logout-btn" onClick={() => setUser(null)}>
    Logout
  </button>
    
  </div>

  {page === "jobs" ? <JobList /> : <Dashboard />}
    
    </div>
  );
}

export default App;