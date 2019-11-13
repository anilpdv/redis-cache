const express = require("express");
const fetch = require("node-fetch");
const redis = require("redis");
const fs = require("fs");

// creating express server
const app = express();

// // create and connect
// const client = redis.createClient(process.env.REDISCLOUD_URL, {
//   no_ready_check: true
// });

// // echo redis errors to the console
// client.on("error", err => {
//   console.log("Error" + err);
// });

// // get photos list
// app.get("/photos", (req, res) => {
//   // key to store results in redist store
//   const photosRedisKey = "user:photos";

//   // try fetching the result from redis
//   return client.get(photosRedisKey, (err, photos) => {
//     // If that key exists in redis store
//     if (photos) {
//       // return if key exists
//       return res.json({ source: "cache", data: JSON.parse(photos) });
//     } else {
//       // fetch directly from remote api
//       fetch("https://jsonplaceholder.typicode.com/photos")
//         .then(response => response.json())
//         .then(photos => {
//           // save the response in redis store, data expire time in 3600 seconds in redis store.
//           client.setex(photosRedisKey, 3600, JSON.stringify(photos));

//           // send json response to client
//           return res.json({ source: "api", data: photos });
//         })
//         .catch(err => {
//           console.log(err);
//           return res.json(error.toString());
//         });
//     }
//   });
// });

app.get("/refactor", (req, res) => {
  var file = fs.createReadStream("./refactoring-ui.pdf");
  var stat = fs.statSync("./refactoring-ui.pdf");
  res.setHeader("Content-Length", stat.size);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=refactoring-ui.pdf"
  );
  file.pipe(res);
});

// creating port for express server
const port = process.env.PORT || 3000;

// start express server at 3000 apart
app.listen(port, () => {
  console.log("app is started and running on http://localhost:" + port);
});
