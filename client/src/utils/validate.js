export const validateData = (username ,email, password) =>{
    const isUsernameValid = /^[a-zA-Z\-]+$/.test(username);

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email is invalid";
    if(!isPasswordValid) return "Password is invalid";

    return null;
}