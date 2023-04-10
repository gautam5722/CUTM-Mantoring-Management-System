///import React from "react";
// import "components"
import "./Student.css";
import React from "react";

function StudentLeave() {






  return (
    <div className="container" style={{padding:'20px'}}>
      <h1 style={{ position: "center", color: "blue" }}>Students Leave Form</h1>
      <form>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="full name"
          />
          <label for="floatingInput">Full Name </label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            id="registration"
            placeholder="reg.no"
          />
          <label for="floatingInput">Reg.No </label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="hostelName"
            placeholder="hostel name"
          />
          <label for="floatingInput">Hostel Name </label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="roomNo"
            placeholder="Room No"
          />
          <label for="floatingInput">Room No</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="messName"
            placeholder="Mess Name"
          />
          <label for="floatingInput">Mess Name</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="purposeofLeave"
            placeholder="Purpose Of Leave"
          />
          <label for="floatingInput">Purpose Of Leave</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="placeofVisit"
            placeholder="Place of Visit"
          />
          <label for="floatingInput">Place of Visit</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            id="parents-number"
            placeholder="first name"
          />
          <label for="floatingInput">Parent's Mobile Number </label>
        </div>


        <div class="form-floating mb-3">
          <input
            type="date"
            class="form-control"
            id="parents-number"
            placeholder="Leave Period-From/Date"
          />
          <label for="floatingInput">Leave Period-From/Date </label>
        </div>



        <div class="form-floating mb-3">
          <input
            type="time"
            class="form-control"
            id="leavingTime"
            placeholder="Time During Leaving"
          />
          <label for="floatingInput">Time During Leaving</label>
        </div>
        <h3 style={{color:'green', paddingBottom:'6px', textAlign:'center'}}> To</h3>

        <div class="form-floating mb-3">
          <input
            type="date"
            class="form-control"
            id="parents-number"
            placeholder="Leave Period-From/Date"
          />
          <label for="floatingInput">Leave Period-From/Date </label>
        </div>



        <div class="form-floating mb-3">
          <input
            type="time"
            class="form-control"
            id="leavingTime"
            placeholder="Time During Leaving"
          />
          <label for="floatingInput">Time During Leaving</label>
        </div>

       

        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="first name"
          />
          <label for="floatingInput">Email </label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            id="number"
            placeholder="first name"
          />
          <label for="floatingInput"> Student's Mobile Number </label>
        </div>


        <button className="submitbtn">Submit</button>
      </form>


       

        <div className="status">
          <div className="statustxt">Status of Your Leave</div>
         <div className="spangroup">Approved</div>
         <div className="spangroup">Rejected</div>
        </div>


    </div>
  );
}

export default StudentLeave;