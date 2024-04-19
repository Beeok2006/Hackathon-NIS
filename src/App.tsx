import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import SosPage from "./pages/SosPage/SosPage";
import NotificationPage from "./pages/NotificationPage/Notification";
import ProfilePage from "./pages/Profile/Profile";

import MapPage from "./pages/Map/MapPage";

function App() {
  const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="main">
        <Navbar />
        {children}
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home/*",
      element: (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/help" element={<SosPage />} />
            <Route path="/notifications" element={<NotificationPage />} />
          </Routes>
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
