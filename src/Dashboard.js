import dashboardImage from "./images/dashboard.png";
import React from "react";

function Dashboard() {
  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>


      <img
  src={dashboardImage}
  alt="dashboard"
  style={{
    width: "100%",
    height: "100vh",
    objectFit: "cover"
  }}
/>

      <br/><br/>

      <button style={{padding:"10px 20px"}}>
       <h2> Submit </h2>
      </button>

    </div>
  );
}

export default Dashboard;