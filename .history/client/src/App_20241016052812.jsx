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
//   return (
//     <>
//       <h1>My Posts</h1>
//       {/* I need to render my posts in here */}
//       {/* A suggestion: use some conditional rendering in here too */}
//     </>
//   );
// }

import "./App.css";
import IceCreamContainer from "./pages/IceCreamContainer";
import iceCreamData from "./lib/iceCreamData.json";
import Header from "./components/Header";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";

//I am importing Routes and Route to build my navigation
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />

      {/* My Routes component will contain all my individual Route components */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<Form />} />
        <Route
          path="/icescreams"
          element={iceCreamData.map((icecream) => (
            <div key={icecream.id}>
              <IceCreamContainer
                id={icecream.id}
                name={icecream.name}
                flavour={icecream.flavour}
                price={icecream.price}
              />
            </div>
          ))}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
