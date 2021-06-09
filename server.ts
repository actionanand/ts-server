import express from 'express';;
import { Application } from 'express';
import cors from 'cors';
import chalk from 'chalk';

import { getAllCourses, getCourseById } from './src/routes/courses/get-courses.route';
import { searchLessons } from "./src/routes/lessons/search-lessons.route";
import { saveCourse } from './src/routes/courses/save-course.route';
import { getOldApi, getNewApi } from './src/routes/extra/get-extra.route';
import { postOldApi, postNewApi } from './src/routes/extra/post-extra.route';


const app: Application = express();
const port = process.env.PORT || 5201;
const whitelist = ['http://localhost:3000', 'http://localhost:5201'];


// Print the request info
app.use((req, res, next) => {
    console.log(chalk `IP : {magenta ${req.ip}} , Origin : {yellow ${req.header('Origin')}} , 
    Method : {red ${req.method}} , URL : {green ${req.url}}`);
    next();
});

// Allow proxy at frontend to bypass  CORS
const corsOptionsDelegate = function (req, callback) {
  let corsOptions: { origin: boolean };
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate));



// Don't allow proxy at frontend to bypass
// const corsOriginOptions = {
//     origin: function (origin, callback) {
//       if (whitelist.indexOf(origin) !== -1 || !origin) {
//         callback(null, true)
//       } else {
//         callback(new Error('Not allowed by CORS of Ts-server'));
//       }
//     }
//   }

//   app.use(cors(corsOriginOptions));



//  To allow all the origin from frontend side
// app.use(cors({
//     origin: '*'
//   }));


app.use(express.json());

app.use((req, res, next) => {
    res.set({
        'server': 'Ts-Server',
        'Author': 'Anand Raja'
    });
    next();
})


//courses APIs
app.route('/api/v1/courses').get(getAllCourses);

app.route('/api/v1/courses/:id').get(getCourseById);

app.route('/api/v1/courses/:id').put(saveCourse);

//lessons APIs
app.route('/api/v1/lessons').get(searchLessons);

//Old APIs
app.route('/api/v1/oldapi').get(getOldApi);

app.route('/api/v1/oldapi').post(postOldApi);

//New APIs
app.route('/api/v1/newapi').get(getNewApi);

app.route('/api/v1/newapi').post(postNewApi);

// A default route
app.get('/api/v1', (req, res) => {
    res.send({message: 'Hello world!, This is REST API v1.'});
});


const httpServer:any = app.listen(port, () => {
    console.log(chalk `{cyan HTTP REST API Server is running at} {green.bold.underline http://localhost:${port}}`)
});