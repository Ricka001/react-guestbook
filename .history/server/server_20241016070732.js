//import packages
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";
//set up packages
const app = express();

//tell express to use json
app.use(express.json());

//tell express to use cors
app.use(cors());

//configure dotenv file
dotenv.config();
//set up configs

//set up db pool with connection string from .env
const dbConnectionString = process.env.DATABASE_URL;

export const db = new pg.Pool({ connectionString: dbConnectionString });
//set up a port and listen to it
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
//endpoint for root route
app.get("/", (req, res) => {
  res.json({
    message: "Stop looking at my root route. ;)",
  });
});
//my endpoints
//I need an endpoint to READ data from db --> use SQL query to get data
//I need an endpoint to CREATE data in the db --> we are going to use sql query to add the data. The data here is stored in the body, so we will add the body data to the db

//STRETCH GOALS
//An endpoint for deleting data --> we need params

//SUPER MEGA STRETCH GOAL
//An endpoint to update the data
//my imports

//set up our db using the connection string from supabase and the pg package
app.get("/guestbook", async (req, res) => {
  const query = await db.query(`SELECT * FROM guestbook`);
  //we can wrangle the query response to get the rows property only.
  res.json(query.rows);
  console.log(query);
});
//write a READ endpoint
//As a user, I want to see a list of the biscuits and descriptions
//we need async and await because the time it takes Supabase to get the data is not the same as the time it takes for the computer to read our server file
app.get("/guestbook", async (req, res) => {
  try {
    //write a sql query to get the biscuit name and descriptions from the db
    const guestbookData = await db.query(
      `SELECT username, description FROM guestbook; `
    );
    //we parse the response into json
    console.log(guestbookData);
    //this is the res without a status code
    // res.json(biscuitsData.rows);
    //you can also add a status code in the try
    res.status(200).json(guestbookData.rows);
  } catch (error) {
    //our server will give us this error, if there is a problem with the code in try
    console.error("This is a fatal error! How dramatic!", error);
    res.status(500).json({ success: false });
  }
});

//write a READ endpoint with a JOIN SQL query
//As a user, I want to see a list of biscuits and flavours
// app.get("/biscuits-flavours", async (req, res) => {
//   try {
//     const biscuitsData = await db.query(
//       `SELECT biscuits.biscuit_name,  flavours.flavour_name
//       FROM biscuits
//       JOIN biscuits_flavours ON biscuits_flavours.biscuit_id = biscuits.id
//       JOIN flavours ON flavours.id = biscuits_flavours.flavour_id;
//       `
//     );
//     res.status(200).json(biscuitsData.rows);
//   } catch (error) {
//     console.error("This is a fatal error! How dramatic!", error);
//     res.status(500).json({ success: false });
//   }
// });

//write a CREATE endpoint
app.post("/add-guestbook", async (req, res) => {
  try {
    //the body --> this is the new data I am adding to the db
    //I have destructured the body object to get the properties inside directly
    //the body properties need to match the input name in your client form
    const { username, description, list } = req.body;
    const bodyData = req.body;
    console.log(bodyData);
    res.json({
      message: "Body data received",
      location: `${bodyData.location}`,
    });
    const newGuestbook = await db.query(
      `
        INSERT INTO guestbook (username, description, list)
        VALUES ($1, $2, $3);
        `,
      [username, description, list]
    );
    res.status(200).json(newGuestbook.rows);
  } catch (error) {
    console.error("This is a fatal error! ", error);
    res.status(500).json({ success: false });
  }
});
//write an UPDATE endpoint
//app.put("/update-guestbook/:id", async (req, res) => {
//we need to make sure we target the specific row of data we want to update
// in the db, we have the id column
//in the server, I can use params
//the params will match the id value in the db
//to represent dynamic params, we use : in the endpoint

// try {
//   const { id } = req.params;
// params {
//     id: 1
// }
//const { username, description, list } = req.body;
//we need the WHERE condition to specify what row of data we are updating and we need RETURNING * so we can shoe the user the result of the update
//     const updateGuestbook = await db.query(
//       `UPDATE guestbook SET username = $1, src = $2, description = $3, list = $4 WHERE id = $5 RETURNING *`,
//       [username, description, list, id]
//     );
//     res.status(200).json(updateGuestbook.rows);
//   } catch (error) {
//     console.error(
//       "This is a fatal error! How dramatic! You cannot update this biscuit",
//       error
//     );
//     res.status(500).json({ success: false });
//   }
// });

//write a DELETE endpoint
// the delete endpoint is EXACTLY the same as the update, with a DELETE sql query instead
// app.delete("/delete-biscuit/:id", async (req, res) => {
//we need to make sure we target the specific row of data we want to delete
// in the db, we have the id column
//in the server, I can use params
//the params will match the id value in the db
//to represent dynamic params, we use : in the endpoint

//   try {
//     const { id } = req.params;
// const biscuitId = req.params.id;

// params {
//     id: 1
// }

//     const deleteBiscuit = await db.query(
//       `DELETE FROM biscuits WHERE id = $1 RETURNING *`,
//       [id]
//     );
//     res.status(200).json(deleteBiscuit.rows);
//   } catch (error) {
//     console.error(
//       "This is a fatal error! How dramatic! You cannot delete this biscuit",
//       error
//     );
//     res.status(500).json({ success: false });
//   }
// });
