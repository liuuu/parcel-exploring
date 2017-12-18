// module.exports = {
//   getOne: function() {
//     return new Promise((resolve, reject) => {
//       fetch('http://api.icndb.com/jokes/random')
//         .then(res => res.json())
//         .then(data => resolve(data.value.joke));
//     });
//   },
// };
import axios from 'axios';
export const jokes = {
  getOne: function() {
    return axios
      .get('http://api.icndb.com/jokes/random')
      .then(res => res.data.value.joke);
    // return new Promise((resolve, reject) => {
    //   fetch('http://api.icndb.com/jokes/random')
    //     .then(res => res.json())
    //     .then(data => resolve(data.value.joke));
    // });
  },
};
