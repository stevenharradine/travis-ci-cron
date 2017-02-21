var request = require('request');
var slugs = new Array ();
var travis_token = process.argv[2];

// print process.argv
process.argv.splice(3).forEach(function (val, index, array) {
  slugs.push (val);
});

function callback(error, response, body) {
  console.log(body);
}

for (var i in slugs) {
  request({
    url: 'https://api.travis-ci.org/repo/' + slugs[i] + '/requests',
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Travis-API-Version": "3",
      "Authorization": "token " + travis_token
    },
    body: {
      "request": {
        "branch":"master"
      }
    },
    json: true
  }, callback)
}
