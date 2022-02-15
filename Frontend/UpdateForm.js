import React from "react";

function UpdateForm(props) {
  const buttonStyling = `flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-blue-500 via-indigo-700 to-indigo-900 
    text-gray-100 rounded-sm ring-2 ring-blue-200 px-6 py-2 
    hover:bg-white  hover:text-white hover:ring-slate-300 mx-8 inline`;
  return (
    <div className="my-10">
      <div style={{ display: props.displayUpdateForm ? "block" : "none" }}>
        <div>
          <form className="h-20 mb-2 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 place-items-center">
            <div className="lg:justify-self-end md:justify-self-end sm:justify-self-center">
              Email
            </div>

            <input
              type="email"
              name="query"
              className="ring-2 ring-gray-dark px-3 rounded-lg py-2 outline-none hover:scale-110 hover:ring-green-400
                        transition-all duration-700 ease-in-out"
              placeholder="Email..."
              value={props.updateEmail}
              onChange={props.handleUpdateEmail}
            />
          
          </form>
        </div>
        <div>
          <form className="h-20 mb-2 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 place-items-center">
            <div className="lg:justify-self-end md:justify-self-end sm:justify-self-center">
              Username
            </div>

            <input
              type="email"
              name="query"
              className="ring-2 ring-gray-dark px-3 rounded-lg py-2 outline-none hover:scale-110 hover:ring-green-400
                        transition-all duration-700 ease-in-out"
              placeholder="Username..."
              value={props.updateUsername}
              onChange={props.handleUpdateUsername}
            />
          
          </form>
        </div>
        <div>
          <form className="h-20 mb-2 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 place-items-center">
            <div className="lg:justify-self-end md:justify-self-end sm:justify-self-center">
              Password
            </div>

            <input
              type="email"
              name="query"
              className="ring-2 ring-gray-dark px-3 rounded-lg py-2 outline-none hover:scale-110 hover:ring-green-400
                        transition-all duration-700 ease-in-out"
              placeholder="Password..."
              value={props.updatePassword}
              onChange={props.handleUpdatePassword}
            />
            <div className="justify-self-start my-10">
              <button className={buttonStyling} onClick={props.updateList}>
                <p>Update</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateForm;
