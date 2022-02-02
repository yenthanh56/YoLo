import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Router from "../routes/index";
function Layout() {
	return (
		<BrowserRouter>
			<Route
				render={(props) => (
					<div>
						<Header {...props} />
						<div className="container">
							<div className="main">
								<Router />
							</div>
						</div>
						<Footer />
					</div>
				)}
			/>
		</BrowserRouter>
	);
}

export default Layout;
