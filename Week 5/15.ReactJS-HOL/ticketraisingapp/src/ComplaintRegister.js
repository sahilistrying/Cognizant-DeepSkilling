import React, { useState } from "react";
function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState("");
  const [complaint, setComplaint] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const refNo = Math.floor(Math.random() * 100000);
    alert("Complaint Submitted Successfully!\n" + "Reference Number: " + refNo);
    setEmployeeName(" ");
    setComplaint(" ");
  }
  return(
    <div>
        <h2>Ticket Raising Platform</h2>
        <form onSubmit={handleSubmit}>
            Employee Name <input type="text" value={employeeName} onChange={(e)=>setEmployeeName(e.target.value)}></input>
            Complaint <input type="text" value={complaint} onChange={(e)=>setComplaint(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
export default ComplaintRegister;
