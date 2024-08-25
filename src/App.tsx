import { Route, Routes } from "react-router-dom";

import { Dashboard } from "./pages/dashboard";

import { ResetPasswordPage } from "./pages/reset-pass-page";
import { HomePage } from "./pages/home";
import { LoginFormPage } from "./pages/login-form-page";
import { CameraListPage } from "./pages/camera-list";
import { AlertPage } from "./pages/alertpage";
import { UsersPage } from "./pages/userpage";
import { AuthProvider } from "./context/authContext";
import { AxiosProvider } from "./context/axiosContext";
// import { Provider } from "@radix-ui/react-tooltip";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <AxiosProvider>
        <Provider store={store}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/reset" element={<ResetPasswordPage />} />
              <Route path="/login" element={<LoginFormPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/alert" element={<AlertPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/cameras" element={<CameraListPage />} />
            </Routes>
          </AuthProvider>
        </Provider>
      </AxiosProvider>
    </>
  );
}

export default App;
