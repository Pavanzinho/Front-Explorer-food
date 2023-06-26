import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./authRoutes";
import { AppRoutes } from "./appRoutes";
import { AdmAppRoutes} from "./admAppRoutes"
import { useAuth } from "../hooks/auth";


export function Routes() {
    const { user } = useAuth();
    // console.log(user)
    if (user) {
      if (user.is_admin === 1) {
        return (
          <BrowserRouter>
            <AdmAppRoutes />
          </BrowserRouter>
        );
      } else {
        return (
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        );
      }
    } else {
      return (
        <BrowserRouter>
          <AuthRoutes />
        </BrowserRouter>
      );
    }
  }

