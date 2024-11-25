import { useSelector } from "react-redux"
import { Navigate, replace } from "react-router-dom";

function SignRoute({children}) {
    const token = useSelector(state.authReducer.token);
    if (token) 
        return <Navigate to={"/"} replace></Navigate>
        return children
    
}

export default SignRoute