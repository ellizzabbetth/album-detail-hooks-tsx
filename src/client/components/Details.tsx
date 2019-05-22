import * as React from 'react';
import { useState, useEffect } from 'react';
import { Album } from './Albums'; // import interface
import { RouteComponentProps }  from 'react-router-dom';


// interface MatchParams {
//     id: string;
// }
// pass in match object generic <id: string;
export interface DetailsProps extends RouteComponentProps<{
    id: string;
}> { }

// passing a route parameter called id across this Route (see App.tsx)

// ES6 destructuring so I don't have to write props.match.params.id by
// going into function call, destructuring props. Off of props, I want
// match and off of that I want params and off of that I want id.
// So now I can just call id rather than props.match.params.id

 // const Details: React.SFC<DetailsProps> = (props) => {
 const Details: React.SFC<DetailsProps> = ({match: { params: { id } } }) => {
  // console.log('details **** '+ props.match.params.id);

  // blank object so assign default values
  const [ album, setAlbum ] = useState<Album>({
    id: null,
    title: null,
    artist: null,
    url: null,
    image: null,
    thumbnail_image: null,
    _created: null
  });

  const getAlbum = async () => {
    // let r = await fetch(`/api/albums/${props.match.params.id)}`);
    let r = await fetch(`/api/albums/${id}`);
    let album = await r.json();
    setAlbum(album);
  }

  useEffect( () => { getAlbum(); }, [id]);

  return (
    <section className="row my-5">
      <article className="col-md-12">
        <div className="card m-1 p-1 shadow">
          <img src={album.image} alt="album image" className="card-img-top w-50 h-50 d-black mx-auto" />
          <div className="card-body text-center">
            <h4 className="card-title">{album.title}</h4>
            <div className="d-flex justify-context-center align-items-center mb-2">
                <p className="card-title">{album.artist} </p>
                <img src={album.thumbnail_image} alt="artist image" style={{ height: '8%', width: '8%'}} className="mx-3 border"/>
            </div>
              <a href={album.url} target="_blank" className="btn btn-secondary shadow btn-block mx-auto">Buy on Amazon</a>
              {/* */}
            <button
              onClick={ () => history.back() }
              className="btn btn-warning btn-block shadow mx-auto">Go Back</button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Details;
