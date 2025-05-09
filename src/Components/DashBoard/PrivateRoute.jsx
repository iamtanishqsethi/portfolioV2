import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const PrivateRoute=({children})=>{
    const isAuthenticated=useSelector(store=>store.auth.isAuthenticated);
    return isAuthenticated ? children:<Navigate to={'/login'}/>
}
export default PrivateRoute;