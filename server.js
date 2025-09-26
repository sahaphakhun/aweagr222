import express from 'express';
import compression from 'compression';
import helmet from 'helmet';

const app = express();

app.disable('x-powered-by');
app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(compression());

const port = process.env.PORT || 3000;

app.use(express.static('public', {
  maxAge: '1d',
  etag: true,
  lastModified: true
}));

app.get('*', (_req, res) => {
  res.sendFile(process.cwd() + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


