/* eslint-disable react/prop-types */
import {  useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className="mx-auto flex justify-center">
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    if (user) {
        return children
    }


    return <Navigate state={location.pathname} to='/login'></Navigate>

};

export default PrivateRoute;