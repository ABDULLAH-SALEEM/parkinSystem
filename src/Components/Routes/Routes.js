import { Routes as AppRoutes, Route } from "react-router-dom";
import BillingReceiptScreen from "../Screens/BillingReceiptScreen/BillingReceiptScreen";
import ConfirmationScreen from "../Screens/ConfirmationScreen/ConfirmationScreen";
import StartOverScreen from "../Screens/StartOverScreen/StartOverScreen";
import WelcomeScreen from "../Screens/WelcomeScreen/WelcomeScreen";

const Routes = () => {

    return (
        <AppRoutes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/confirmVehicle" element={<ConfirmationScreen />} />
            <Route path="/billing" element={<BillingReceiptScreen />} />
            <Route path="/startOver" element={<StartOverScreen />} />
        </AppRoutes>
    )
}

export default Routes
