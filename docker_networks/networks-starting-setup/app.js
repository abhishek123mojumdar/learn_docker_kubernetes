const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios').default;
const mongoose = require('mongoose');

const Favorite = require('./models/favorite');

const app = express();

app.use(bodyParser.json());

app.get('/favorites', async (req, res) => {
  const favorites = await Favorite.find();
  res.status(200).json({
    favorites: favorites,
  });
});

app.post('/favorites', async (req, res) => {
  const favName = req.body.name;
  const favType = req.body.type;
  const favUrl = req.body.url;

  try {
    if (favType !== 'movie' && favType !== 'character') {
      throw new Error('"type" should be "movie" or "character"!');
    }
    const existingFav = await Favorite.findOne({ name: favName });
    if (existingFav) {
      throw new Error('Favorite exists already!');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  const favorite = new Favorite({
    name: favName,
    type: favType,
    url: favUrl,
  });

  try {
    await favorite.save();
    res
      .status(201)
      .json({ message: 'Favorite saved!', favorite: favorite.toObject() });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
});

app.get('/posts', async (req, res) => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    res.status(200).json({ movies: response.data });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Something went wrong.',
      err: error
    });
  }
});

app.get('/users', async (req, res) => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    res.status(200).json({ people: response.data });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Something went wrong.',
      err: error
    });
  }
});

// This piece of code helps this node application connect to the MongoDB instance
mongoose.connect(
  // For local machine: 'mongodb://localhost:27017/swfavorites'
  // For Docker containers: use mongodb://host.docker.internal:27017/swfavorites
  // For communicating between containers not within the same network, use the IP address of the container running MongoDB mongodb://172.17.0.2:27017:27017/swfavorites
  // For communicating between containers within the same network, use the container name as the hostname
  'mongodb://mongoDB:27017/swfavorites',
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(3000);
    }
  }
);
