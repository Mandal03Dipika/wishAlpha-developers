import { Route, Routes } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import GuestRoutes from "./GuestRoutes";

const PlayGroundRouter = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      <Routes>
        {token ? (
          <Route path="/*" element={<AuthRoutes />} />
        ) : (
          <Route path="/*" element={<GuestRoutes />} />
        )}
      </Routes>
    </>
  );
};

export default PlayGroundRouter;
