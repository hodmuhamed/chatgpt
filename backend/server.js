const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/posts', (req, res) => {
  res.json([]); // placeholder
});
app.get('/api/posts/:slug', (req, res) => {
  res.json({ slug: req.params.slug });
});
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    res.json({ token: 'jwt-token' });
  } else {
    res.status(401).end();
  }
});
app.listen(3001, () => console.log('API running on 3001'));
