import React, { useState, useEffect } from "react";
import axios from "axios";
import AddUser from "./AddUser";
import DataView from "./DataView";
import UpdateForm from "./UpdateForm";
import "./CRUD.css";

const CRUD = () => {
  const [list, setList] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [updateId, setUpdateId] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updateUsername, setUpdateUsername] = useState("");
  const [updatePassword, setUpdatePassword] = useState("");
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [userAddedMessage, setUserAddedMessage] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const hanldeEmail = (e) => {
    setEmail(e.target.value);
  };
  const hanldeUsername = (e) => {
    setUsername(e.target.value);
  };
  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUpdateEmail = (e) => {
    setUpdateEmail(e.target.value);
  };
  const handleUpdateUsername = (e) => {
    setUpdateUsername(e.target.value);
  };
  const handleUpdatePassword = (e) => {
    setUpdatePassword(e.target.value);
  };
  // Get method
  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((response) => {
        setList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email, password, username]);

  //Saving data method
  const sendData = (e) => {
    if (list.find((item) => item.username === username)) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      setUserAddedMessage(true);
      setTimeout(() => {
        setUserAddedMessage(false)
      }, 2000);
      axios
        .post("http://localhost:3001/post", {
          email: email,
          username: username,
          password: password,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      e.preventDefault();
      window.location.reload();
    }
  };

  //Deleting data method
  const deleteUser = (id) => {
    setTimeout(() => {
      setDeleteMessage(false);
    }, 3000);
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    setDeleteMessage(true);

   
    window.location.reload();
  };

  //Updating user method

  const updateUser = (id) => {
    const filtered = list.filter((user) => user._id === id);
    setUpdateId(filtered[0]._id);
    setUpdateEmail(filtered[0].email);
    setUpdateUsername(filtered[0].username);
    setUpdatePassword(filtered[0].password);
    setDisplayUpdateForm(!displayUpdateForm);
  };
  const updateList = () => {
    axios
      .put("http://localhost:3001/update", {
        updateId: updateId,
        updateEmail: updateEmail,
        updateUsername: updateUsername,
        updatePassword: updatePassword,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    window.location.href += "http://localhost:3000/";
    window.location.reload();
  };

  return (
    <div className="bg-slate-200 pb-10 h-auto">
      <div
        style={{ display: deleteMessage ? "block" : "none",transition:"all 1s ease-in-out"}}
        className="bg-red-500 text-white text-center p-5 text-xl font-mono font-bold"
      >USER DELETED SUCCESSFULLY
        </div>

      <div
        style={{ display: userAddedMessage ? "block" : "none",transition:"all 1s ease-in-out"}}
        className="bg-green-500 text-white text-center p-5 text-xl font-mono font-bold"
      >USER ADDED SUCCESSFULLY
        </div>

      {/* Heading */}
      <h1 className="text-center bg-gradient-to-r from-indigo-500 via-indigo-700 to-indigo-900 text-slate-100 py-8 mb-5 text-5xl">
        MERN CRUD Operation
      </h1>

      {/* Form component to add a user */}
      <AddUser
        email={email}
        username={username}
        password={password}
        hanldeEmail={hanldeEmail}
        hanldeUsername={hanldeUsername}
        hanldePassword={hanldePassword}
        sendData={sendData}
        search={search}
        handleSearch={handleSearch}
      />

      {/* User Already Exist component */}
      <div
        style={{ display: error ? "block" : "none" }}
        className="bg-red-500 text-white text-center p-5 text-xl font-mono font-bold"
      >
        USER ALREADY EXIST
      </div>

      {/* View Component to view all the records and perfomr update and delete operations on those records */}
      <DataView
        list={list}
        deleteUser={deleteUser}
        updateUser={updateUser}
        search={search}
      />

      {/* Update form componenet to update values */}

      <UpdateForm
        updateEmail={updateEmail}
        handleUpdateEmail={handleUpdateEmail}
        updateUsername={updateUsername}
        handleUpdateUsername={handleUpdateUsername}
        updatePassword={updatePassword}
        handleUpdatePassword={handleUpdatePassword}
        updateList={updateList}
        displayUpdateForm={displayUpdateForm}
      />
    </div>
  );
};

export default CRUD;
