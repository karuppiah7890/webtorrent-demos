const WebTorrent = require('webtorrent');

var client = WebTorrent();

var torrentId = prompt("Copy paste the magnet link");

client.add(torrentId,function(torrent){

    var file = torrent.files[0];

    file.appendTo('body');

});
