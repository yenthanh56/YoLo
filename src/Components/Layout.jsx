import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Router from "../routes/index";
import ProductViewModal from "./ProductViewModal";
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
			<ProductViewModal />
			<>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</>
		</BrowserRouter>
	);
}

export default Layout;
