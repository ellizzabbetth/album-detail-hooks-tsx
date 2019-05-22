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
    console.log(data)
    res.json(data);
});

export default router;
