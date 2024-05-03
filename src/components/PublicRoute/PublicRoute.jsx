import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

import { selectIsLogin, selectToken } from "../../redux/auth/authSelectors";

const PublicRoute = () => {
    const isLogin = useSelector(selectIsLogin);
    const token = useSelector(selectToken)

     if (!isLogin && token) {
        return <p>...Loading</p>
    }
    if (isLogin) {
        return <Navigate to="/home" />
    }

return <Outlet />
}
export default PublicRoute;