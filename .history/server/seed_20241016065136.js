// SQL HERE FROM SERVER FOR THEM TO SEE

import { db } from "./server";

db.query(`CREATE TABLE IF NOT EXISTS guestbook(
id SERIAL PRIMARY KEY,
username TEXT,
description TEXT,
level TEXT
)`);

// db.query(`INSERT INTO uploads (user_name, content) VALUES ('Anthony','R')`);

// db.query(`INSERT INTO phase (user_name,game_score,age) VALUES ($1,$2,$3)`, [
//   "jerry",
//   "criminal",
//   "moderate",
// ]);
