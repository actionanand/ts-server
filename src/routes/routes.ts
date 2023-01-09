import express from 'express';

import { getAllCourses, getCourseById } from './courses/get-courses.route';
import { saveCourse } from './courses/save-course.route';
import { searchLessons } from './lessons/search-lessons.route';
import { getOldApi, getNewApi } from './extra/get-extra.route';
import { postOldApi, postNewApi } from './extra/post-extra.route';
import { getGeneralRoutev1 } from './general/get-general.route';
import { getHtmlSample, getPdfBlob, getPdfStatic } from './static/static-files.routes';

const router = express.Router();

// courses APIs
router.route('/api/v1/courses').get(getAllCourses);

router.route('/api/v1/courses/:id').get(getCourseById);

router.route('/api/v1/courses/:id').put(saveCourse);

// lessons APIs
router.route('/api/v1/lessons').get(searchLessons);

// Old APIs
router.route('/api/v1/oldapi').get(getOldApi);

router.route('/api/v1/oldapi').post(postOldApi);

// New APIs
router.route('/api/v1/newapi').get(getNewApi);

router.route('/api/v1/newapi').post(postNewApi);

// static files' APIs
router.route('/api/v1/static/pdf/local').get(getPdfStatic);
router.route('/api/v1/static/pdf/blob').get(getPdfBlob);
router.route('/api/v1/static/html/sample').get(getHtmlSample);
router.route('/api/v1/static/html/local.html').get(getHtmlSample);

// General APIs
router.route('/api/v1/:name').get(getGeneralRoutev1);
router.route('/api/v2/:name').get(getGeneralRoutev1);

export { router as allRegisteredRoutes };
