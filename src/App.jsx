import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import AdminDashboard from "./pages/AdminDashboard";
import VerifyCertificate from "./pages/VerifyCertificate";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/HomePage";
import Certificate from "./pages/Certificate";
import Header from "./components/Header";
import CertificateSection from "./pages/AdminCertificate/CertificateSection";
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/AdminSettings/Settings";
import QuickGuide from "./pages/QuickGuide/QuickGuide";
//import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="certificates" element={<CertificateSection />} />
          <Route path="quick_guide" element={<QuickGuide />} />
        </Route>
        <Route path="/verify-certificate" element={<VerifyCertificate />} />
        <Route
          path="/verify-certificate/:certificateId"
          element={<Certificate />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
