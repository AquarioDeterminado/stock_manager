import {useNavigate} from "react-router-dom";
import {checkAuth} from "../../../controllers/LogInController";
import {useEffect} from "react";

function LandingPage() {
    const navigate = useNavigate();

    useEffect(() => {
        if(!checkAuth(navigate)) {
            navigate("/login");
        }
    }   , [navigate]);


    return (
     <div>
       <h1>Loading...</h1>
      </div>
  );
}

export default LandingPage;
