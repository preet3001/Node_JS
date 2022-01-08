const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Greetings</title></head>");
    res.write(
      '<body><form action ="/create-user" method ="POST"><input type="text" name ="username"><button type ="submit">Send</button></form></body>'
    );
    res.write("<html>");
    return res.end;
  }
  if (url === "/user") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>user page</title></head>");
    res.write("<body><ul><li>user 1</li></ul><ul><li>user 2</li></ul></body>");
    res.write("<html>");
    return res.end;
  }
  if (url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]);
    });
    res.statusCode = 302;
    return res.end();
  }
  res.write("<html>");
  res.write("<head><title>default page</title></head>");
  res.write("<body>error</body>");
  res.write("<html>");
  res.end;
};

module.exports = requestHandler;
