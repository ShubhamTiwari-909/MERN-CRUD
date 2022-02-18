import React from "react";
import { MdDeleteSweep } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";

const DataView = (props) => {
  return (
    <div>
      <div
        className="grid grid-cols-1 justify-center my-6 overflow-auto"
        style={{ height: props.search === "" ? "300px" : "180px" }}
      >
        {props.list
          .filter((item) => {
            if (props.search === "") {
              return item;
            } else {
              return item.username.includes(props.search);
            }
          })
          .map((item) => {
            return (
              <div
                key={item._id}
                className="flex justify-between align-middle bg-indigo-800 text-white text-xl 
            font-semibold font-sans mx-20 py-2 px-10 my-5
            ring-4 ring-indigo-300 rounded-md"
              >
                <div>
                  <h1 className="text-3xl">Username - {item.username}</h1>
                </div>

                <div className="flex space-x-5 my-4">
                  <button
                    onClick={(e) => {
                      props.userDetails(item._id);
                    }}
                  >
                    Details
                  </button>
                  <button
                    onClick={(e) => {
                      props.updateUser(item._id);
                    }}
                  >
                    <BsPencilSquare color="#63C5DA" size="2rem" />
                  </button>
                  <button
                    onClick={(e) => {
                      props.deleteUser(item._id);
                    }}
                  >
                    <MdDeleteSweep color="crimson" size="2rem" />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <div></div>
    </div>
  );
};

export default DataView;
