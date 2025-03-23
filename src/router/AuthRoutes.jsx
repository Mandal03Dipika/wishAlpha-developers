import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Developers from "../pages/Developers/Developers";
import Settings from "../pages/Settings/Settings";
import Games from "../pages/Games/Games";
import Projects from "../pages/Projects/Projects";
import DeveloperProfile from "../pages/DeveloperProfile/DeveloperProfile";

const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<DeveloperProfile />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/games" element={<Games />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
};

export default AuthRoutes;
