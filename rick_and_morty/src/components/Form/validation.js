/*const validation = (userData, errors, setErrors) => {
    //username
    if(!userData.username)
    setErrors({...errors, username: "Por favor completa este campo"});
    else if (userData.username.length > 35)
    setErrors({...errors, username: "Debe contener menos de 35 caracteres"});
    else if(
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.username)) {
        setErrors({...errors, username: "Email invalido"});
    } else {
        setErrors({...errors, username: ""});
    }

    //password
    if(userData.password.length < 6 || userData.password.length > 10) {
        setErrors({...errors, password: "Longitud de password invalida"})
    } else if(!/\d/.test(userData.password)){
        setErrors({...errors, password: "Password debe tener al menos un numero"})
    } else {
        setErrors({...errors, password:""})
    }
}

export default validation;
*/

const validation = (userData) => {
    const errors= {}

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = "El mail ingresado no es valido";
    }
    if(!userData.email){
        errors.email = "Debe ingresar un email";
    }
    if(userData.email.length > 35){
        errors.email = "El mail no puede superar los 35 caracteres";
    }


    //password
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = "La constraseña debe contener al menos un numero";
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe contener entre 6 y 10 caracteres";
    }

    return errors;
}

export default validation;
