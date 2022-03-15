import AboutNumerology from "./AboutNumerology"
import CreateProfile from "./CreateProfile";
import Signup from "./Signup";
import { useAuth0 } from "@auth0/auth0-react";


const Home = () => {
    const { isAuthenticated} = useAuth0();
return (
    isAuthenticated ? <><CreateProfile/></> : <><AboutNumerology /><Signup/></>)
};


export default Home;