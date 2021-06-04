import express from 'express';;
import {Application} from 'express';
import chalk from 'chalk';

import {getAllCourses, getCourseById} from './src/routes/get-courses.route';
import {searchLessons} from "./src/routes/search-lessons.route";
import {saveCourse} from './src/routes/save-course.route';
import { getExtraData } from './src/routes/get-extra.route';


const app: Application = express();
const port = process.env.PORT || 5201;

app.use(express.json());

// Allow any method from any host and log requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(chalk `IP : {magenta ${req.ip}} , Method : {red ${req.method}} , URL : {green ${req.url}}`);
        next();
    }
});


app.route('/api/v1/courses').get(getAllCourses);

app.route('/api/v1/courses/:id').get(getCourseById);

app.route('/api/v1/lessons').get(searchLessons);

app.route('/api/v1/courses/:id').put(saveCourse);

app.route('/api/v1/extra').get(getExtraData);

// A default route
app.get('/api/v1', (req, res) => {
    res.send({message: 'Hello world!, This is REST API v1.'});
});


const httpServer:any = app.listen(port, () => {
    console.log(chalk `{cyan HTTP REST API Server is running at} {green.bold.underline http://localhost:${port}}`)
});