// const jokes = require('./jokes');
import { jokes } from './jokes';
import fs from 'fs';

const jokeEle = document.getElementById('joke');

jokes
  .getOne()
  .then(joke => {
    console.log(joke);
    
    jokeEle.innerHTML = joke;
  })
  .catch(err => console.log(err));

const copy = fs.readFileSync(__dirname + '/copy.txt', 'utf8');

const copyEle = document.getElementById('copy');
copyEle.innerHTML = copy;
