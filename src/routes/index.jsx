import LandingPage from "../views/LandingPage/LandingPage.jsx";
import RentalApp from "../views/App";

var indexRoutes = [
  { path: "/", name: "Common Realty Group", component: LandingPage },
  { path: "/rentals", name: "Rental App", component: RentalApp },
];

export default indexRoutes;
