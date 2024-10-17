// SQL HERE FROM SERVER FOR THEM TO SEE

import { db } from "./server.js";

db.query(`CREATE TABLE IF NOT EXISTS phase(
id SERIAL PRIMARY KEY,
username TEXT,
description TEXT,
level TEXT
)`);

// db.query(`INSERT INTO uploads (user_name, content) VALUES ('Anthony','R')`);

// db.query(`INSERT INTO phase (user_name,game_score,age) VALUES ($1,$2,$3)`, [
//   "phase",
//   "21",
//   "3",
// ]);

// async function queryDatabase() {
//     try {
//       const res = await db.query("SELECT * FROM phase");
//       console.log(res.rows);
//     } catch (err) {
//       console.error("Error executing query", err);
//     }
//   }

//   queryDatabase();
