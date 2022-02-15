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
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleUpdateEmail = (e) => {
    setUpdateEmail(e.target.value);
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
  }, []);

  //Saving data method
  const sendData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/post", {
        email: email,
        username: username,
        password: password,
      })
      .then((res) => console.log(`${res}submitted`))
      .catch((err) => console.log(err));

    window.location.reload();
  };


  //Deleting data method
  const deleteUser = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    window.location.href += "http://localhost:3000/";
    window.location.reload();
  };


  //Updating user method

  const updateUser = (id) => {
    const filtered = list.filter((user) => user._id === id);
    setUpdateId(filtered[0]._id);
    setDisplayUpdateForm(!displayUpdateForm);
    console.log(updateId);
  };
  const updateList = () => {
    axios
      .put("http://localhost:3001/update", {
        updateId: updateId,
        updateEmail: updateEmail,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    window.location.href += "http://localhost:3000/";
    window.location.reload();
  };

  
  return (
    <div>
      {/* Heading */}
      <h1 className="text-center bg-slate-700 text-slate-100 py-8 mb-5 text-5xl">MERN CRUD Operation</h1>
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

      {/* View Component to view all the records and perfomr update and delete operations on those records */}
      <DataView list={list} deleteUser={deleteUser} updateUser={updateUser} search={search} />

      {/* Update form componenet to update values */}

      <UpdateForm
        updateEmail={updateEmail}
        handleUpdateEmail={handleUpdateEmail}
        updateList={updateList}
        displayUpdateForm={displayUpdateForm}
      />
    </div>
  );
};

export default CRUD;
