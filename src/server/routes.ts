import * as express from 'express';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/albums', (req, res, next) => {
    console.log(' in get /api/albums ');
    let data = [{
      id: 1,
      title: 'No Scrubs'
    }, {
      id: 2,
      title: 'Macarena'
    },
    {
      id: 3,
      title: 'All Star'
    },
    {
      id: 4,
      title: 'I Want It That Way'
    }
  ]
    //let albums = data.map(ablum => ({ value: album.id, text: album.title}));
    // console.log(data)
    res.json(data);
});

router.get('/api/albums/:id', (req, res, next) => {
    let reqId = 0;
    reqId = Number(req.params.id);
    //console.log(' in get /api/albums/:id ' + req.params.id + ' = ' + reqId);
    let data = [{
      id: 1,
      title: 'Aladdin',
      artist: 'Disney',
      url: 'https://www.amazon.com/Aladdin-Original-Motion-Picture-Soundtrack/dp/B07RHQVPDQ/ref=zg_bs_digital-music-album_15?_encoding=UTF8&psc=1&refRID=DDG6A6FD70VKZ20EHNT4',
      image: 'http://placekitten.com/200/300'
    }, {
      id: 2,
      title: 'Macarena'
    },
    {
      id: 3,
      title: 'All Star'
    },
    {
      id: 4,
      title: 'I Want It That Way'
    }
  ]
    //let albums = data.map(ablum => ({ value: album.id, text: album.title}));
    let album = data.find(item => item.id === reqId);
    console.log(album)
    res.json(album);
});
export default router;
