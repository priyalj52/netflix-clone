import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Main from "./components/Main";
import { AuthContextProvider } from "./context/AuthContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar/>
 
 <Routes>
 
 <Route element={<Home/>} path="/" />  
 <Route element={<Signup/>} path="/signup" />  
 <Route element={<Login/>} path="/login" />  
 {/* Protected route to enable access to account page only when user is logged in */}
 <Route element={<ProtectedRoute><Account/></ProtectedRoute>} path="/account" />  

</Routes>
    </AuthContextProvider>
   
 
    

        </>
  );
}

export default App;
