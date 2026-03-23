import { useState } from "react";

function Login({setUser}){
    const [form,setForm] = useState({
        email:"",
        password : ""
    });

    const handleLogin = async()=>{
        try{
            const res = await fetch("http://localhost:5000/login",{
                method:"POST",
                headers :{
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(form)
            });


            if(!res.ok){
                alert("Invalid login");
                return;
            }

            const data = await res.json();
            setUser(data);
        }

        catch(err){
            console.log(err);
            alert("login error");
        }
    };

return (
  <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
    <div className="card" style={{width:"300px"}}>
      <h2 style={{textAlign:"center"}}>Login</h2>

      <input
        placeholder="Email"
        style={{width:"95%", marginBottom:"10px", padding:"8px"}}
        onChange={(e) => setForm({...form, email:e.target.value})}
      />

      <input
        placeholder="Password"
        type="password"
        style={{width:"95%", marginBottom:"10px", padding:"8px"}}
        onChange={(e) => setForm({...form, password:e.target.value})}
      />

      <button className="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  </div>
);
}

export default Login;















