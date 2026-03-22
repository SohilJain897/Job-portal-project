const express =  require("express");
const app = express();

app.use(express.json());

let jobs = [];

const cors = require("cors");
app.use(cors());

const pool = require("./db");
//TESTING DB
pool.query("SELECT NOW()", (err, res) => {
  console.log(err, res.rows);
});
//------------------------JOBS API-----------------------------//
//CREATE
app.post("/jobs", async (req, res) => {
  const { company, role, description } = req.body;
  await pool.query(
    "INSERT INTO jobs (company, role, description) VALUES ($1, $2, $3)",
    [company, role, description]
  );
  res.send("Job saved in DB 🔥");
});

//FETCH
app.get("/jobs", async (req, res) => {
  const result = await pool.query("SELECT * FROM jobs where is_active = TRUE");
  res.json(result.rows);
});

//UPDATE
app.put("/jobs/:id", async(req,res) => {
    try{
        const id = req.params.id;
        const{company,role,description} = req.body;
        const result = await pool.query(
            "UPDATE jobs set company =$1 ,role =$2, description =$3 where id = $4 RETURNING *",
            [company,role,description,id]
        );
        res.json({
            message:"Job updated",
            job:result.rows[0]
        });
    }

    catch(err){
        console.log(err);
        res.status(500).send("Error updating job")

    }
});



//DELETE 
app.delete("/jobs/:id", async(req,res)=>
{
try{
    const id = req.params.id;
    await pool.query(
        " UPDATE jobs set is_active = FALSE where id = $1 RETURNING * ",
        [id]
    );
    res.send("job deleted")
}
catch (err) {
    console.log(err);
    res.status(500).send("Error deleting job");
  }
});

////------------------------------------------------APPLY API ----------------------------

app.post("/apply", async(req,res) => {
    try{
        const {user_id, job_id} = req.body;

        const existing = await pool.query(
            "Select * from applications where user_id= $1 and job_id =$2",
            [user_id,job_id]
        );
        if(existing.rows.length > 0)
        {
            return res.status(400).send("Already Applied");
        }

        await pool.query(
            "INSERT INTO applications (user_id, job_id, status) VALUES ($1, $2, $3)",
             [user_id, job_id, "Applied"]
        );

        res.send("Applied Successfully");


    } catch(err){
        console.log(err);
        res.status(500).send(err.message);
    }

});



/// GET Dashboard data for which user have applied for job

app.get("/my-applications/:user_id", async (req, res) => {
  try {
    const user_id = req.params.user_id;

    const result = await pool.query(
      `SELECT jobs.id,jobs.company, jobs.role, applications.status
       FROM applications
       JOIN jobs ON applications.job_id = jobs.id
       WHERE applications.user_id = $1`,
      [user_id]
    );

    res.json(result.rows);

  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching applications");
  }
});










app.get("/",(req,res)=>{
    console.log("Server is running");
});

app.post("/data",(req,res)=>{
    console.log(req.body);
    res.send("data is recieved succesfully");
});

app.listen(5000,()=>{
console.log("Server is listening on port 5000");
})

