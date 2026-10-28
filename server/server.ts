import express from 'express';
import pinoHttp from 'pino-http';
import { rootRoute } from './routes/root.js';
import { getCourses } from './routes/get-courses.js';
import { getCourse } from './routes/get-course.js';
import { saveCourse } from './routes/save-course.js';
import { uploadFile } from './routes/upload-file.js';
import { getProfile } from './routes/get-profile.js';
import { checkXsrf } from './routes/check-xsrf.js';
import { setCsrfCookie } from './routes/set-csrf-cookie.js';

const app = express();
const port = 9000;

app.use(pinoHttp());
app.use(express.json());

app.get('/', rootRoute);
app.get('/api/courses', getCourses);
app.get('/api/courses/:id', getCourse);
app.put('/api/courses/:id', saveCourse);
app.post('/api/uploads', uploadFile);
app.get('/api/profile', getProfile);
app.get('/api/csrf-cookie', setCsrfCookie);
app.post('/api/xsrf', checkXsrf);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
