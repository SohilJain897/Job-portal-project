import { useState, useEffect } from "react";
import "./App.css";


function JobList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/jobs")
            .then(res => res.json())
            .then(data => {
                console.log("DATA:", data);
                setJobs(data);

            })
    }, [])


    const applyJob = async (job_id) => {

        try {
            const res = await fetch("http://localhost:5000/apply", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_id: 1,
                    job_id: job_id
                })
            });

            const data = await res.text();
            alert(data);
            setAppliedJobs([...appliedJobs, job_id]);
        }
        catch (err) {
            console.log(err);
            alert("Error Applying");
        }
    };

    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/my-applications/1")
            .then(res => res.json())
            .then(data => {
                const jobIds = data.map(app => app.id);;
                setAppliedJobs(jobIds);
            });
    }, []);



    return (

        <div className="container">
           <h1 className="heading">🔥 Job Opportunities</h1>




            <div className="grid">
                {jobs.filter(job => !appliedJobs.includes(job.id))
                .map(job => (
                    <div key={job.id} className="card">
                        <h3>{job.company}</h3>
                        <p><strong>Role:</strong> {job.role}</p>
                        <p>{job.description}</p>

                        <button
                            className="button"
                            onClick={() => applyJob(job.id)}
                            disabled={appliedJobs.includes(job.id)}
                        >
                            {appliedJobs.includes(job.id) ? "Applied ✅" : "Apply"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default JobList;