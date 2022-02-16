import React,{useState} from "react";

const AddUser = (props) => {
  const [searchBar, setSearchBar] = useState(false);

  const buttonStyling = `flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-blue-500 via-indigo-700 to-indigo-900 
    text-gray-100 rounded-sm ring-2 ring-blue-200 px-6 py-2 
    hover:bg-white  hover:text-white hover:ring-slate-300 mx-8 inline`;
  return (
    <div>
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
            value={props.email}
            onChange={props.hanldeEmail}
          />
        </form>

        <form className="h-20 mb-2 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 place-items-center">
          <div className="lg:justify-self-end md:justify-self-end sm:justify-self-center">
            Username
          </div>

          <input
            type="text"
            name="query"
            className="ring-2 ring-gray-dark px-3 rounded-lg py-2 outline-none hover:scale-110 hover:ring-green-400
                        transition-all duration-700 ease-in-out"
            placeholder="Username..."
            value={props.username}
            onChange={props.hanldeUsername}
          />
        </form>

        <form className="h-20 mb-2 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 place-items-center">
          <div className="lg:justify-self-end md:justify-self-end sm:justify-self-center">
            Password
          </div>

          <input
            type="password"
            name="query"
            className="ring-2 ring-gray-dark px-3 rounded-lg py-2 outline-none hover:scale-110 hover:ring-green-400
                        transition-all duration-700 ease-in-out"
            placeholder="Password..."
            value={props.password}
            onChange={props.hanldePassword}
          />
        </form>
      </div>
      <div className="flex justify-center my-10">
        <button className={buttonStyling} onClick={props.sendData}>
          <p>Add</p>
        </button>
        <button className={buttonStyling} onClick={() => setSearchBar(!searchBar)}>
          <p>Search</p>
        </button>
      </div>

      <div style={{display : searchBar ? "block" : "none"}}>
        <form
          className="h-48 mb-5 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 place-items-center"
        >
          <div className="lg:justify-self-end md:justify-self-end sm:justify-self-center">
            Search Username
          </div>

          <input
            type="text"
            name="query"
            className="ring-2 ring-gray-dark px-3 rounded-lg py-2 outline-none hover:scale-110 hover:ring-green-400
                        transition-all duration-700 ease-in-out"
            placeholder="search..."
            value={props.search}
            onChange={props.handleSearch}
          />

        </form>
      </div>
    </div>
  );
};

export default AddUser;
