export const checkValidation = (email,password) =>{

    const isEmailValid = /^\S+@\S+\.\S+$/.test(email);

    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if(!isEmailValid) return "Email ID is not valid";

    if(!isPasswordValid) return "Password is not valid";

    return null;


}