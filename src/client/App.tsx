import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './scss/app';
import Albums from './components/Albums';
import Details from './components/Details';

interface IAppProps {

}

// export default class App extends React.Component<IAppProps, IAppState> {

const App: React.SFC<IAppProps> = props => {

    //render() {
        return (
          <BrowserRouter>
            <main className="container">
              <Switch>
                <Route exact path="/" component={Albums}/>
                <Route exact path="/:id/details" component={Details}/>
              </Switch>
            </main>
          </BrowserRouter>
            // <main className="container">
            //     <h1 className="covalence-blue">Hello {name}!</h1>
            //     <h2></h2>
            // </main>
        )
    //}
}

export default App;


//
// interface IAppState {
//     name: string;
// }
