import { useState } from "react";
import validation from "./validation";


const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: "",  
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        //const property = event.target.name
        //const value = event.target.value

        //setUserData({...userData, [property]: value});
        //validation({...userData, [property]: value}, errors, setErrors);

        setUserData({
            ...userData, 
            [event.target.name]: event.target.value,
        })

        setErrors(validation({
            ...userData, 
            [event.target.name]: event.target.value,

        }))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email: </label>
                <input 
                id="email"
                type="text" 
                name="email" 
                value={userData.email}
                onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input 
                id="password"
                type="text" 
                name="password" 
                value={userData.password}
                onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button>Submit</button>
        </form>
    )
}

export default Form;


