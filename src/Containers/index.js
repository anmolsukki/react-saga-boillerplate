import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../Config/Routes';

class Main extends React.Component {

  loading = () => <div>Loading...</div>;

  render() {
    return (
        <main>
            <Suspense fallback={this.loading()}>
                <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? (
                            <Route key={idx} path={route.path}
                                exact={route.exact} name={route.name}
                                render={(props) => <route.component {...props} />}
                            />
                        ) : null;
                    })}
                    <Redirect from="/" to="/home" />
                </Switch>
            </Suspense>
        </main>
    );
  }
}

export default Main;
