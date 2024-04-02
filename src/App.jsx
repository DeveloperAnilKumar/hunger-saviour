import Navbar from "./component/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import SignIn from "./component/SignIn.jsx";
import SignUp from "./component/SignUp.jsx";
import RestaurantList from "./component/RestaurantList.jsx";
import RestaurantMenu from "./component/RestaurantMenu.jsx";
import CartItems from "./component/CartItems.jsx";

function App() {

    return (
        <>
            <Navbar/>

            <Routes>
                <Route path="/" element={<RestaurantList/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/menu/:id" element={<RestaurantMenu/>} />
                <Route path="/cart" element={<CartItems/>} />


            </Routes>

        </>


    )


}

export default App;