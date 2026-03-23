import { useState, useEffect } from "react";

function AdminDashboard() {
    const [form, setForm] = useState({
        company: "",
        role: "",
        description: ""
    });


    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-applications")
            .then(res => res.json())
            .then(data => setApplications(data));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch("http://localhost:5000/jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

        alert("Job Added");
    };

    return (
  <div className="container">
    <h1 className="heading">🧑‍💼 Admin Dashboard</h1>

    {/* 🟢 Add Job Form */}
    <div className="card form-card">
      <h2 className="section-title">Add Job</h2>

      <input
        className="input"
        placeholder="Company"
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />

      <input
        className="input"
        placeholder="Role"
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      />

      <input
        className="input"
        placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <button className="button" onClick={handleSubmit}>
        Add Job
      </button>
    </div>

    {/* 🔵 Applications */}
    <h2 className="section-title">Applications</h2>

    <div className="grid">
      {applications.map((app, index) => (
        <div key={index} className="card">
          <h3>{app.name}</h3>
          <p><strong>{app.company}</strong></p>
          <p>{app.role}</p>
          <p>Status: {app.status}</p>
        </div>
      ))}
    </div>
  </div>
);

}

export default AdminDashboard;