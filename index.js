import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CatalogPage from './src/CatalogPage';
import CartProvider from './context/CartProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { mainPath, productPath } from './helpers/routes';
import { productPage } from './src/ProductPage';


const mainComponent = () => (
    <CartProvider>
        <CatalogPage />
    </CartProvider>
);



class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact strict path={ mainPath() } component={ mainComponent } />
                    <Route exact strict path={ productPath() } component={ productPage } />
                </Switch>
            </Router>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)
