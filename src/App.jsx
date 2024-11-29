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
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import CertificateSection from "./pages/AdminCertificate/CertificateSection";
import Dashboard from "./pages/Dashboard/Dashboard";

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
          <Route
            index
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="certificates"
            element={
              <PrivateRoute>
                <CertificateSection />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/verify-certificate" element={<VerifyCertificate />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
