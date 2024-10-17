//Here I will fetch the posts from the server (get endpoint), which is getting the posts from the db
// export default function PostsPage() {
//we need useState to save the fetched data
//we need useEffect to fetch the data
//useEffect()
//we need a function to fetchData(){
//fetch("url")
//parse the data into json
//console log your dat, so you can see what it looks like
//you might have to wrangle data, depending on what your data looks like
//set your state variable to be the fetched data
//setState(fetchedData)
//!Once you have finished your app and your deployment is ready, replace your local host urls with the Render urls
// }
// return (
//   <>
// <h1>My Posts</h1>
{
  /* I need to render my posts in here */
}
{
  /* A suggestion: use some conditional rendering in here too */
}
{
  /* </>
  );
} */
}

import { useState } from "react";

export default function IceCreamContainer(props) {
  //STEP 1: we need to store the state of our elements
  const [showInfo, setShowInfo] = useState(false);

  //STEP 2: we need to add an event to our titles (h2)
  function handleClick() {
    //you can also have an if statement in here
    //this is the refactored version of it
    setShowInfo(!showInfo);
  }

  return (
    <>
      <h2 onClick={handleClick}>{props.name}</h2>
      {/* STEP 3: I need to conditionally render the flavour and price */}
      {/* a ternary operator --> a simplified if statement with two results */}
      {/* we cannot use if statements in the return of a function */}

      {showInfo ? (
        <>
          <p>{props.flavour}</p>
          <p>{props.price}</p>
        </>
      ) : null}

      {/* you can also use the && operator */}
      {/* {showInfo && (
        <>
          <p>{props.flavour}</p>
          <p>{props.price}</p>
        </>
      )} */}
    </>
  );
}
