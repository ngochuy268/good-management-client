import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    console.log(isAuthenticated, userId);
    return (
        <Route
            {...rest}
            render={(props) => 
                isAuthenticated && userId ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" /> 
                )
            }
        />
    );
};

export default ProtectedRoute;
