import * as React from 'react';
import { useState, useEffect } from 'react';
import { Album } from './Albums';
// pass in match object generic <id: string;
export interface DetailsProps extends RouteComponentProps<{ id: string;}> { }

// passing a route parameter called id across this Route (see App.tsx)

// ES6 destructuring so I don't have to write props.match.params.id by
// going into function call, destructuring props. Off of props, I want
// match and off of that I want params and off of that I want id.
// So now I can just call id rather than props.match.params.id

// const Details: React.SFC<DetailsProps> = (props) => {
const Details: React.SFC<DetailsProps> = ({match: params: { id } } }) => {

  const [ album, setAlbum ] = useState<Album>({

  });


  return (
    <section className="row my-5">
      <article className="col-md-12">
        <div className="card m-1 p-1 shadow">
          <div className="card-body text-center">
            <div className="d-flex justify-context-center align-items-center mb-2">

            </div>
            <button className="btn btn-warning btn-block shadow mx-auto">Go Back</button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Details;
