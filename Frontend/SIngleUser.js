import React from "react";

function SIngleUser(props) {
  return (
    <div>
      {props.singleuser.map((item) => {
        return (
          <div
            style={{ display: props.displaySingleUser ? "grid" : "none" }}
            key={item._id}
            className
            className="grid grid-cols-1 place-items-center bg-indigo-900 text-white text-xl 
                font-semibold font-sans mx-20 py-4 px-10 my-5
                ring-4 ring-indigo-300 rounded-md"
          >
            <h1 className="text-slate-100 text-4xl my-10 ring-2 ring-indigo-200 rounded-md p-4 underline-offset-2">User Details</h1>
            <h1 className="text-2xl text-slate-200 font-sans font-semibold my-5">
              Username : {item.username}
            </h1>
            <h1 className="text-2xl text-slate-200 font-sans font-semibold my-5">
              Email : {item.email}
            </h1>
            <h1 className="text-2xl text-slate-200 font-sans font-semibold my-5">
              Password : {item.password}
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default SIngleUser;
