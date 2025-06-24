import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  console.log('home');
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Home page</h1>
    <p>Lorem ipsum dolor sit amet  labore  Iusto, sapiente. Natus.labore  Iusto, sapiente. Natuslabore  Iusto, sapiente. Natus</p>
</body>
</html>`);
});

app.get('/about', (req, res) => {
  console.log('about');
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet  labore  Iusto, sapiente. Natus.labore  Iusto, sapiente. Natuslabore  Iusto, sapiente. Natus</p>
</body>
</html>`);
});

app.get('/register', (req, res) => {
  console.log('register');
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>register</h1>
    <p>Lorem ipsum dolor sit amet  labore  Iusto, sapiente. Natus.labore  Iusto, sapiente. Natuslabore  Iusto, sapiente. Natus</p>
</body>
</html>`);
});

app.get('/*error', (req, res) => {
  console.log('404');
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>404</h1>
    <h2>Page not found</h2>
    <a href="/">Back home</a>
</body>
</html>`)
});


app.listen(port, () => {
  console.log(`Server is running on: http://localhost:3001/ ${port}.`);
});

// app.listen(port); -- veiktu tik nematytum terminale linko ir patvirtinimo.
