var Brick = require("../../../");

var favs = require("flickr-favorites")({
  key: '8974b9cf7bf473e056125874ad44ce0a'
});

module.exports = Brick({
  show: show,
  pick: pick,
  update: update
});

function update (photos, done) {
  favs('98269877@N00', function (error, result) {
    if (error) return done(error);

    var start = Math.floor(Math.random() * (result.photos.length - 60));
    photos.data = result.photos.slice(start, start + 50);
    done();
  });
}

function show (photos) {
  photos.title = 'my photos';

  photos.brick.bind('.title', photos.title);
  photos.brick.bind('.photos li', photos.data.map(function (photo) {
    return {
      '.photo': {
        'href': photo.urls.large,
        'style': 'background-image:url(' + photo.urls.medium + ')',
        'class': 'photo',
        'data-url': photo.urls.medium,
        'data-title': photo.title || ('Photo ' + photo.id)
      }
    };
  }));

  photos.brick.on('mouseover', '.photo', photos.pick);
}

function pick (photos, event) {
  photos.brick.select('.title').html(event.target.getAttribute('data-title'));
}
