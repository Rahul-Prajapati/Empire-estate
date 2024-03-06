export const validateData = (username ,email, password) =>{
    const isUsernameValid = /^[A-Za-z][A-Za-z0-9_]{6,16}$/.test(username);

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isUsernameValid) return "Username is valid";
    if(!isEmailValid) return "Email is invalid";
    if(!isPasswordValid) return "Password is invalid";

    return null;
}