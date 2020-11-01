import {BrowserRouter, Switch, Route} from "react-router-dom"
import Main from './pages/main/index';
import Product from './pages/product/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Main} exact></Route>
            <Route path="/products/:id" component={Product} exact></Route>
        </Switch>
    </BrowserRouter>
)

export default Routes