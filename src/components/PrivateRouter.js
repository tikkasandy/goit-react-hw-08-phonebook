import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";

const PrivateRoute = ({
    children,
    redirectTo = '/',
    ...routeProps }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    return (
        <Route{...routeProps}>
            {isLoggedIn ? children : <Redirect to={redirectTo} />}
        </Route>
    );
};

export default PrivateRoute;