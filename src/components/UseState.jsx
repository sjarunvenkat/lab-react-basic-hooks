import React, { useState, useEffect } from "react";

function UseState() {
  //progression 1
  const [presentAge, updateAge] = useState(21);

  //progression 2
  const [presentAgeSib, updateAgeSib] = useState(10);

  //   const handleAge = (value) => {
  //     updateAge(presentAge + 1);
  //   };

  //   const handleSibAge = () => {
  //     updateAgeSib(presentAgeSib + 1);
  //   };

  //progression 3
  //   const [state, setState] = useState({ presentAge: 21, presentAgeSib: 10 });

  //   const handleState = (value) => {
  //     setState({ ...state, [value]: state[value] + 1 });
  //   };

  //   const { presentAge, presentAgeSib } = state;

  // progression 5
  useEffect(() => {
    alert(`age has been changed ${presentAge}`);
  }, [presentAge]);

  return (
    <div className="AgePage">
      {/* <h1>My Current Age is {presentAge}</h1>
      <h1>My Sibiling age is {presentAgeSib}</h1>
      <button onClick={handleAge}> Add age </button>
      <button onClick={handleSibAge}> Add Sibling age</button> */}

      {/* <h1>My Current Age is {presentAge}</h1>
      <h1>My Sibiling Age is {presentAgeSib}</h1>
      <button
        onClick={() => {
          handleState("presentAge");
        }}
      >
        Add Age
      </button>
      <button
        onClick={() => {
          handleState("presentAgeSib");
        }}
      >
        Add Sibling Age
      </button> */}

      {/* progression 4 */}
      <h1>My Current Age is {presentAge}</h1>
      <h1>My Sibiling age is {presentAgeSib}</h1>
      <button onClick={() => updateAge((presentAge) => presentAge + 1)}>
        {" "}
        Add age{" "}
      </button>
      <button
        onClick={() => updateAgeSib((presentAgeSib) => presentAgeSib + 1)}
      >
        {" "}
        Add Sibling age
      </button>
    </div>
  );
}

export default UseState;
