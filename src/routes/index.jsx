import LandingPage from "../views/LandingPage/LandingPage.jsx";
import LoginPage from "../views/LoginPage/LoginPage.jsx";
import RegisterPage from "../views/RegisterPage/RegisterPage.jsx";
import RentalApp from "../views/App";

var indexRoutes = [
  { path: "/", name: "Common Realty Group", component: LandingPage },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: RegisterPage },
  { path: "/rentals", name: "Rental App", component: RentalApp },
];

export default indexRoutes;
