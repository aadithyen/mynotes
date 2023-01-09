import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Login from "./pages/Login";

import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "edit",
		element: <Edit />,
	},
	{
		path: "login",
		element: <Login />,
	},
]);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
