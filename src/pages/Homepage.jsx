import React from "react";
import Navbar from "../components/Navbar";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="home-container">

        <div className="home-content">

          <h1>Student Enrollment System</h1>

          <p>
            Manage student records efficiently with our Student Enrollment
            System. Add new students, view student details, update information,
            and delete records easily.
          </p>

          <div className="home-buttons">

            <button onClick={() => navigate("/addstudent")}>
              Add Student
            </button>

            <button
              className="view-btn"
              onClick={() => navigate("/viewstudent")}
            >
              View Students
            </button>

          </div>

        </div>

        <div className="features">

          <div className="feature-card">
            <h2>➕</h2>
            <h3>Add Student</h3>
            <p>Register new students easily.</p>
          </div>

          <div className="feature-card">
            <h2>📋</h2>
            <h3>View Students</h3>
            <p>Display all enrolled students.</p>
          </div>

          <div className="feature-card">
            <h2>✏️</h2>
            <h3>Update</h3>
            <p>Edit student information.</p>
          </div>

          <div className="feature-card">
            <h2>🗑️</h2>
            <h3>Delete</h3>
            <p>Remove student records safely.</p>
          </div>

        </div>

      </div>
    </>
  );
};

export default Homepage;
