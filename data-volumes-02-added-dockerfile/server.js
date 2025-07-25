const fs = require('fs').promises;
const exists = require('fs').exists;
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use('/feedback', express.static('feedback'));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'pages', 'feedback.html');
  res.sendFile(filePath);
});

app.get('/exists', (req, res) => {
  console.log('I am here')
  const filePath = path.join(__dirname, 'pages', 'exists.html');
  console.log(filePath)
  res.sendFile(filePath);
});

app.post('/create', async (req, res) => {
  console.log('i am creating a project here')
  const title = req.body.title;
  const content = req.body.text;

  const adjTitle = title.toLowerCase();

  console.log(title , ' ------ ' , content)
  console.log(adjTitle , '  @@@@@@@@  ')

  const tempFilePath = path.join(__dirname, 'temp', adjTitle + '.txt');
  const finalFilePath = path.join(__dirname, 'feedback', adjTitle + '.txt');

  console.log(tempFilePath)

  await fs.writeFile(tempFilePath, content);
  //res.sendFile('/feedback/'+adjTitle + '.txt')
  exists(finalFilePath, async (exists) => {
    if (exists) {
      res.redirect('/exists');
    } else {
      await fs.copyFile(tempFilePath, finalFilePath);
      await fs.unlink(tempFilePath);
      res.redirect('/');
    }
  });
});

app.listen(80);
