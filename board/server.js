const net = require("net");
const fs = require("fs");

const { makeReq } = require("./lib/req");
const { makeResponse, redirect, sendFile } = require("./lib/res");
const static = require("./lib/static");

const users = [];
const board = [];

const getMessage = ({ header: { method, path }, body }) => {
  let message = "";

  if (method == "GET") {
    if (static[path] != undefined) {
      const body = fs.readFileSync(static[path]);
      if (static[path].indexOf(".js") > -1) {
        message = makeResponse("text/javascript", body.toString());
      } else if (static[path].indexOf(".css") > -1) {
        message = makeResponse("text/css", body.toString());
      } else if (static[path].indexOf(".png") > -1) {
        message = sendFile("image/png", body);
      } else if (static[path].indexOf(".jpg") > -1) {
        message = sendFile("image/jpeg", body);
      } else {
        message = makeResponse("text/html", body.toString());
      }
    }
  } else if (method == "POST") {
    if (path == "/") {
      console.log(board);
      console.log(users);
      console.log(body.page);

      message = makeResponse(
        "application/json",
        JSON.stringify(
          users
            .slice((body.page - 1) * body.count, body.page * body.count)
            .map((item, idx) => ({
              title: item.title,
              content: item.content,
              writer: item.writer,
              idx,
            }))
        )
      );
    } else if (path == "/write") {
      console.log(body);
      users.push(body);
      board.push(body);
      message = redirect();
    } else if (path == "/board") {
      message = makeResponse(
        "application/json",
        JSON.stringify(
          board.map((item, idx) => ({
            title: item.title,
            content: item.content,
            writer: item.writer,
            idx,
          }))
        )
      );
    }
  }
  return message;
};

const server = net.createServer((client) => {
  client.on("data", (data) => {
    client.setEncoding("utf-8");
    const req = makeReq(data);
    client.write(getMessage(req));
    client.end();
  });
});

server.listen(3838, () => {
  console.log("server open of 3838 port");
});
