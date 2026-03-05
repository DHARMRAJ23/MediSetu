import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { DoctorContext } from '../contextApi/DoctorContext';

const AdminRoute = ({ children }) => {
    const { admintoken } = useContext(DoctorContext);

    // If there is no admintoken, redirect to the admin login page
    if (!admintoken) {
        return <Navigate to="/login/admin" replace />;
    }

    // Otherwise, render the protected component
    return children;
};

export default AdminRoute;
