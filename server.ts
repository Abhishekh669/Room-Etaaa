import { createServer } from "http";
import next from "next";
import { Server } from "socket.io";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handle);
  const io = new Server(httpServer)
  io.on("connection",(socket)=>{
    console.log("socket connected successfully", socket.id)
  })
  httpServer
  .once("error",(err)=>{
    console.error(err)
    process.exit(1)
  })
  .listen(port, ()=>{
    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? "development" : process.env.NODE_ENV
      }`,
    );
  })
  
});


// tsconfig.json
// {
//   "extends": "./tsconfig.json",
//   "compilerOptions": {
//     "module": "commonjs",
//     "outDir": "dist",
//     "lib": ["es2019"],
//     "target": "es2019",
//     "isolatedModules": false,
//     "noEmit": false
//   },
//   "include": ["server.ts"]
// }