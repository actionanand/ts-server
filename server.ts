import express from 'express';
import { Application } from 'express';
import chalk from 'chalk';

import { addResponseMetaData } from './src/utils/response-metadata';
import { incomingReqInfo } from './src/utils/console-helper-texts';
import { corsOptionsDelegateOption } from './src/utils/cors-support';

const allRegisteredRoutes = require('./src/routes/routes');

const app: Application = express();
const port = process.env.PORT || 5201;


// To print the request info
app.use(incomingReqInfo);


// To Support CORS
app.use(corsOptionsDelegateOption);

app.use(express.json());

app.use(addResponseMetaData);

app.use(allRegisteredRoutes);

// A default route
app.get('/api/v1', (req, res) => {
    res.send({message: 'Hello world!, This is REST API v1.'});
});


const httpServer: any = app.listen(port, () => {
    console.log(chalk `{cyan ⚡️ [server]: Ts-Server is running at} {green.bold.underline http://localhost:${port}}`);
    console.log(chalk `Connection Key : {yellow ${httpServer._connectionKey}}`);
});