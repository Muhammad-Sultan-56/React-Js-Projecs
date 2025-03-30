import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    index: "",
  });

  const [userData, setUserData] = useState([]);

  // get Values from the Form on Change
  const getValues = (e) => {
    let oldData = { ...formData };
    let inputName = e.target.name;
    let inputValue = e.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  // Save the Values of Form on Submit

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!formData.name || !formData.email || !formData.mobile) {
      toast.error("All fields are required!");
      return;
    }

    let currentUserData = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
    };

    // check if email or mobile is already exist

    let fiterUser = userData.filter(
      (v) => v.email === formData.email || v.mobile === formData.mobile
    );

    if (fiterUser.length == 1) {
      toast.error("Email or Phone Already Exist!");
    } else {
      if (formData.index !== "") {
        // Update existing user
        let updatedUsers = [...userData];
        updatedUsers[formData.index] = currentUserData;
        setUserData(updatedUsers);
        toast.success("User Updated Successfully!");
      } else {
        // Add new user
        setUserData([...userData, currentUserData]);
        toast.success("User Added Successfully!");
      }

      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
        index: "",
      });
    }
  };

  // Handle user edit
  const editUser = (idx) => {
    let userToEdit = userData[idx];
    setFormData({ ...userToEdit, index: idx });
  };

  // Handle use Delete
  const deleteUser = (idx) => {
    let filterUserOnDelete = userData.filter((v, i) => i != idx);

    toast.success("User Deleted Successfully!");

    setUserData(filterUserOnDelete);
  };

  return (
    <>
      <Navbar />
      <div className="container p-3">
        <div className="row">
          <div className="col-md-12">
            {/* Form Start */}
            <div className="card p-4 shadow border-0">
              <h2>{formData.index === "" ? "Add User" : "Update User"}</h2>
              <form className="row" onSubmit={handleSubmit}>
                <div className="col-md-4 mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={getValues}
                    value={formData.name}
                    placeholder="Enter here"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={getValues}
                    value={formData.email}
                    placeholder="Enter here"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    onChange={getValues}
                    value={formData.mobile}
                    placeholder="Enter here"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-md-12 mb-4">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={3}
                    name="message"
                    onChange={getValues}
                    value={formData.message}
                    placeholder="Write here..."
                    className="form-control"
                  />
                </div>

                <div className="col-md-4">
                  <button className="btn btn-dark w-75">
                    {formData.index === "" ? "Add User" : "Update User"}
                  </button>
                </div>
              </form>
            </div>
            {/* Form End */}
          </div>
        </div>

        {/* table of userData */}
        <div className="row my-5">
          <div className="col-md-12">
            <div className="card p-4 shadow border-0">
              <h2>Show Users</h2>

              <table className="table mt-3">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Message</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.length >= 1 ? (
                    userData.map((user, idx) => {
                      return (
                        <tr key={idx}>
                          <td>{idx + 1}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.mobile}</td>
                          <td>{user.message}</td>
                          <td className="text-center">
                            <button
                              className="btn btn-warning btn-sm me-2"
                              onClick={() => editUser(idx)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => deleteUser(idx)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center">
                        No data found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
