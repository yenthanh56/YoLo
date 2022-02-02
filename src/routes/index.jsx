import React from "react";

import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Catalog from "../Pages/Catalog";
import Cart from "../Pages/Cart";

function Router() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/catalog/:slug" component={Product} />
			<Route path="/catalog" component={Catalog} />
			<Route path="/cart" component={Cart} />
		</Switch>
	);
}

export default Router;
