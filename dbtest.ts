import * as sqlite3 from "sqlite3";

// Open a database connection
const db = new sqlite3.Database("db.sqlite", err => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Database connection is OK");
  }
});

// Perform a simple query to check the connection
db.get("SELECT 1", (err, row) => {
  if (err) {
    console.error("Error performing query:", err.message);
  } else {
    console.log("Query result:", row);
  }

  // Close the database connection
  db.close(err => {
    if (err) {
      console.error("Error closing the database:", err.message);
    } else {
      console.log("Database connection closed");
    }
  });
});
