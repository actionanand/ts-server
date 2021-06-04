# TS Server 

This is the local backend API Application, written in typescript, to server the JSON response.


## Development server

Run `npm run server` for a dev server. Navigate to `http://localhost:5201/`. 


## Troubleshooting
### How to kill server when seeing `EADDRINUSE: address already in use`

1. To find the process id (PID) associated with the port

`lsof -i tcp:1668`

It'll display as below. Please note down the PID from that

`COMMAND PID   USER  FD  TYPE DEVICE                SIZE/OFF NODE NAME`\
`node    44475 chen5 31u IPv4 0x8b1721168764e4bf 0t0 TCP *:strexec-s (LISTEN)`

2. Then to kill the process by PID

`kill -9 44475`

-[source](https://levelup.gitconnected.com/how-to-kill-server-when-seeing-eaddrinuse-address-already-in-use-16c4c4d7fe5d)

## Extra help

### Creating `tsconfig.json` file

- if typescript is added globally
`tsc --init`
- if not added globally
`npx tsc --init`

### If you wish to run angular and backend simultaneously,

Add the following to the `package.json` file of angular

`"scripts": {
    "server": concurrently \"ng serve\" \"ts-server/node_modules/.bin/ts-node-dev server/server.ts\"
}
`
By using `concurrently`, whenever we run `npm serve` we'll get both the backend and front-end spun up and live reloading whenever we make any changes to the application.