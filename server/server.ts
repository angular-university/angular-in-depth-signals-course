import express from 'express';
import pinoHttp from 'pino-http';
import { rootRoute } from './routes/root.js';
import { getCourses } from './routes/get-courses.js';
import { getCourse } from './routes/get-course.js';
import { saveCourse } from './routes/save-course.js';
import { uploadFile } from './routes/upload-file.js';
import { getProfile } from './routes/get-profile.js';
import { echoXsrf } from './routes/echo-xsrf.js';

const app = express();
const port = 9000;

app.use(pinoHttp());
app.use(express.json());
app.use((req, res, next) => {
  res.cookie('XSRF-TOKEN', 'abc123');
  next();
});

app.get('/', rootRoute);
app.get('/api/courses', getCourses);
app.get('/api/courses/:id', getCourse);
app.put('/api/courses/:id', saveCourse);
app.post('/api/uploads', uploadFile);
app.get('/api/profile', getProfile);
app.post('/api/xsrf', echoXsrf);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
