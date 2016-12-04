const dragDrop = require('drag-drop');
const WebTorrent = require('webtorrent');

var client = new WebTorrent();

dragDrop('body',function(files){
    client.seed(files,function(torrent){
      alert('Client is seeding ' + torrent.magnetURI + ' , infoHash ' + torrent.infoHash);
    });
})
