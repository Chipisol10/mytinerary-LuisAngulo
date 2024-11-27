import { useSelector } from "react-redux"
import { Navigate, Outlet, replace } from "react-router-dom";

function SignRoute() {
    const token = useSelector((state)=> state.auth.token);
    console.log("token",token);
    
    if (token) 
        return <Navigate to={"/"} replace></Navigate>
    return <Outlet></Outlet>
    
}

export default SignRoute