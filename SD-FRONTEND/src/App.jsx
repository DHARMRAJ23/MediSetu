import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Main from "./MainLayout/Main";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ContactUs from "./Pages/ContactUs";
import Profilepage from "./Pages/Profilepage";
import NotFound from "./Pages/NotFound";
import AllDoctorDetails from "./Pages/AllDoctorDetails";
import DoctorDetails from "./Pages/DoctorDetails";
import MyAppoinments from "./Pages/MyAppoinments";
import EditProfile from "./Pages/EditProfile";
import "react-toastify/dist/ReactToastify.css";
import DoctorList from "./Admin/pages/DoctorList";
import AllAppointments from "./Admin/pages/AllAppointments";
import AddDoctor from "./Admin/pages/AddDoctor";
import EditDoctorDetails from "./Admin/pages/EditDoctorDetails";
import Dashboard from "./Admin/Components/Hero/Hero";
import GlobalLoader from "./Components/Loader/GlobalLoader";
import AdminRoute from "./Components/AdminRoute";

function App() {

  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // show loader on route change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // fake delay
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <GlobalLoader />}

      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="login/:admin" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="profile" element={<Profilepage />} />
          <Route path="all-doctor" element={<AllDoctorDetails />} />
          <Route path="appoinment/:id" element={<DoctorDetails />} />
          <Route path="my-appoinment" element={<MyAppoinments />} />
          <Route path="edit-profile/:id" element={<EditProfile />} />
          <Route path="doctor-list" element={<AdminRoute><DoctorList /></AdminRoute>} />
          <Route path="dashboard" element={<AdminRoute><Dashboard /></AdminRoute>} />
          <Route path="all-appointment" element={<AdminRoute><AllAppointments /></AdminRoute>} />
          <Route path="add-doctor" element={<AdminRoute><AddDoctor /></AdminRoute>} />
          <Route
            path="doctor-list/edit-doctordetails/:id"
            element={<AdminRoute><EditDoctorDetails /></AdminRoute>}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
