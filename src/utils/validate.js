// checkValidData function check whatever we passed inside function is validate or not. if email, password are not correct then checkValidData function return Error message.
//For Email validation we use regex(just search regex for email validation on google.)
export const checkValidData=(email, password,isSignInForm,name)=>{
    // To check email is valid just run test() function over regex and provide whatever we want to test inside test() function. if email is valid then regex return true otherwise return false.
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordVaild=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    // console.log(name);
     if(!isSignInForm){
        // console.log(isSignInForm);
        if(!isNameValid) return "Please enter a valid Name."
    }
    if(!isEmailValid) return "Please enter a valid email address."
    if(!isPasswordVaild) return "Please enter a valid Password."
    //Return null When we donot get any error.
    return null;
}
