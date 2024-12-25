import { Switch, Route } from "react-router-dom";

import Login from '../pages/Login/LoginForm';

import ForgotPasswordInFo from '../pages/Login/ForgotPassword';
import ChangePassword from '../pages/Login/ResetPassword';
import LayoutAdmin from "../pages/layouts/Layout";
import Signin from "../pages/signin/Signin";
import ProtectedRoute from "./ProtectRoute";


const AppRoutes = () => {
    return (
        <>
            <Switch>
          
                <Route exact path="/" component={Login}></Route>
                <Route path='/forgotPasswordinfo' component={ForgotPasswordInFo} />
                <Route path='/changePassword' component={ChangePassword}></Route>
                <Route path='/signin' component={Signin}></Route>

                <ProtectedRoute path="/" component={LayoutAdmin} />

                <Route path="*"> 404 not found !</Route>

            </Switch>

        </>
    )
}

export default AppRoutes;