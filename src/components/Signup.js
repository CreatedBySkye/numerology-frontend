import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const Signup = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>ht-20
    
	<h1 className="z-50 absolute bottom-12 text-4xl bg-white ml-96 left-96 pt-2 pb-2 pl-6 pr-6 border-8 border-purple-800">Sign up to reveal your life path number! <button
      id="signup-btn" className="btn btn-primary btn-block border-4 border-black"
      onClick={() => loginWithRedirect()}
    >
      Signup
    </button></h1>


   
    </>
  );
};

export default Signup;