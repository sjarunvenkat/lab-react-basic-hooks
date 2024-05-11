import React, { useState, useEffect } from "react";

function UseState() {
  //progression 1
  // const [presentAge, updateAge] = useState(21);

  //progression 2
  // const [presentAgeSib, updateAgeSib] = useState(10);

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
  // useEffect(() => {
  //   alert(`age has been changed ${presentAge}`);
  // }, [presentAge]);

  const [text, updateText] = useState("");
  const [likes, updateLikes] = useState(0);

  useEffect(() => {
    alert(`content has been changed`);
  }, [text]);

  return (
    <div className="Page">
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
      {/* <h1>My Current Age is {presentAge}</h1>
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
      </button> */}
      <p>{text}</p>
      <button
        onClick={() =>
          updateText(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui voluptatibus iure hic architecto, tenetur impedit eum culpa possimus quis maiores autem aliquam sint corporis, ad tempora corrupti? Recusandae quisquam, fuga deserunt beatae, praesentium molestiae minus quaerat, iure nesciunt harum nulla facere voluptatibus cumque? Ipsa nostrum cumque deleniti voluptatibus. Quasi?"
          )
        }
      >
        Content
      </button>

      <p>{likes}</p>
      <button onClick={() => updateLikes((likes) => likes + 1)}>Likes</button>
    </div>
  );
}

export default UseState;
