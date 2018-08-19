import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CatalogPage from './src/CatalogPage';
import CartProvider from './context/CartProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { mainPath, productPath, cartPath, contactsPath } from './helpers/routes';
import { productPage } from './src/ProductPage';
import { cartPage } from './src/CartPage';
import { contactsPage } from './src/ContactsPage';
import mainRoute from './routes/main';
import contactsRoute from './routes/contacts';

const routes = [mainRoute, contactsRoute];

const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes} />
        )}
    />
);

class App extends Component {
    render() {
        return (
            <CartProvider>
                <Router>
                    <Switch>
                        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} /> )}
                    </Switch>
                </Router>
            </CartProvider>            
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
