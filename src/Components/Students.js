import React from "react";
import "./Students.css";
import { Link } from "react-router-dom";

const Students = () => {
  return (
    <div className="student-container">
      <div className="student-wrapper">
        <div className="std-row1">
          <h1 className="std-heading">Students Details</h1>
          <button className="std-btn-light">Add new student</button>
        </div>
        <div className="std-row2">
          <table>
            <tr>
              <td className="l-a">Name</td>
              <td>Age</td>
              <td>Course</td>
              <td className="r-a">Batch</td>
              <td className="r-a">Change</td>
            </tr>
            <hr className="hr-line" />
            <tr>
              <td className="l-a">John</td>
              <td>26</td>
              <td>MERN</td>
              <td className="r-a">October</td>
              <td className="r-a">
                <Link className="blue">Edit</Link>
              </td>
            </tr>
            <hr className="hr-line" />
            <tr>
              <td className="l-a">Doe</td>
              <td>25</td>
              <td>MERN</td>
              <td className="r-a">November</td>
              <td className="r-a">
                <Link className="blue">Edit</Link>
              </td>
            </tr>
            <hr className="hr-line" />
            <tr>
              <td className="l-a">Biden</td>
              <td>26</td>
              <td>MERN</td>
              <td className="r-a">September</td>
              <td className="r-a">
                <Link className="blue">Edit</Link>
              </td>
            </tr>
            <hr className="hr-line" />
            <tr>
              <td className="l-a">Barar</td>
              <td>22</td>
              <td>MERN</td>
              <td className="r-a">September</td>
              <td className="r-a">
                <Link className="blue">Edit</Link>
              </td>
            </tr>
            <hr className="hr-line" />
            <tr>
              <td className="l-a">Chirst</td>
              <td>23</td>
              <td>MERN</td>
              <td className="r-a">October</td>
              <td className="r-a">
                <Link className="blue">Edit</Link>
              </td>
            </tr>
            <hr className="hr-line" />
            <tr>
              <td className="l-a">Elent</td>
              <td>24</td>
              <td>MERN</td>
              <td className="r-a">November</td>
              <td className="r-a">
                <Link className="blue">Edit</Link>
              </td>
            </tr>
            <hr className="hr-line" />
            <tr>
              <td className="l-a">Harshita Sharma</td>
              <td>24</td>
              <td>MERN</td>
              <td className="r-a">October</td>
              <td className="r-a">
                <Link className="blue">Edit</Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Students;
