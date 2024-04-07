import Navbar from "./component/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import SignIn from "./component/SignIn.jsx";
import SignUp from "./component/SignUp.jsx";
import RestaurantList from "./component/RestaurantList.jsx";
import RestaurantMenu from "./component/RestaurantMenu.jsx";
import CartItems from "./component/CartItems.jsx";
import {useEffect} from "react";
import {BASE_URL} from "./component/db.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getAllCartItems} from "./redux/slice/cartSlice.jsx";
import Orders from "./component/Orders.jsx";


function App() {

    const  dispatch = useDispatch()

    const {user} = useSelector((state)=> state.auth)

    useEffect(() => {
        if (!user) {
            fetch(BASE_URL + "/cart/items/" + user._id)
                .then((res) => res.json())
                .then((data) => dispatch(getAllCartItems(data)))
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [dispatch,user]);



    return (
        <>
            <Navbar/>

            <Routes>
                <Route path="/" element={<RestaurantList/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/menu/:id" element={<RestaurantMenu/>}/>
                <Route path="/cart" element={<CartItems/>}/>
                <Route path="/orders" element={<Orders/>}/>


            </Routes>

        </>


    )


}

export default App;