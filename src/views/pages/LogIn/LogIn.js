import logInUserPass from '../../../controllers/LogInController'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function LogIn () {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        logInUserPass(inputs, navigate);
    }

    return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" name="username" value={inputs.username || ''} onChange={handleInputChange}/>
        <input type="password" placeholder="Password" name="password" value={inputs.password || ''} onChange={handleInputChange}/>
        <button type="submit">Log In</button>
      </form>
    </div>
    );
}

export default LogIn;