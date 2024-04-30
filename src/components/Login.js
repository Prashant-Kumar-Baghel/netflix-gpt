import React, { useRef, useState } from 'react'
import Header from './Header'
import { LOGIN_URL, USER_ICON } from '../utils/constants'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true)//create this state variable to know wheather Sign In or Sign Up form show . we take isSignInForm value as true so Sign In form will shown .
  
  const [errorMessage,setErrorMessage]=useState(null);//create this state variable to show the error message when form validation fail.
  // const navigate= useNavigate();
  const dispatch= useDispatch();
  //Way of writing useRef hook.email and password are references and we refer them to input boxes.
  const email= useRef(null);//useRef(null) gives you references in the form of object.hence email is object.
  const password= useRef(null);
  const name=useRef(null);

  //Below toggleSignInForm function change the isSignInForm state variable.
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);//toogle condition.(if isSignInForm is true then change to false or if isSignInForm is false then change to true)
  }

  //When button will click then handleButtonClick is call and Here According to wheather a signIn or signUp form we can just logIn the user or SignUp the User.

  const handleButtonClick=()=>{
    //Validate the form data and we write the validation logic inside my utils(validate.js) and if our validation fails then validate.js also return error message .
    // console.log(email.current.value);//email is object and email.current.value gives you email.
    // console.log(name.current.value);
    const message=  (isSignInForm)?(checkValidData(email.current.value,password.current.value,isSignInForm)):(checkValidData(email.current.value,password.current.value,isSignInForm,name.current.value));
    setErrorMessage(message);

    //If we have some message i.e some string then we get error then we just return. we don't go ahead.if form validation is successfull then only we go ahead.
    if(message)return;

    //Sign In or Sign Up Logic
    // Note:-All the API'S like createUserWithEmailAndPassword,signInWithEmailAndPassword will need auth and that auth comes from getAuth() so we have to write const auth = getAuth() line everywhere so we write this line once and use it again and again. so we write auth in firebase.js file and import it.
    if(!isSignInForm){//checking that we have Sign In or Sign Up form and accordingily we apply logic.

      //Sign Up Logic

      // createUserWithEmailAndPassword gives you promise and handling promise with then and catch. We have to pass email and password in createUserWithEmailAndPassword.once we call this api then it create user on firebase and will give you a response.
      // Go Insect->Network->Fetch/XHR and we can check SignUp API call and if it has status code 200 it mean api call is success.
      //Whenever user SignIn or Sign Up then firebase create accessToken and given to us and it will use accessToken to verify the authentication.
      createUserWithEmailAndPassword(auth, 
      email.current.value, 
      password.current.value)
      .then((userCredential) => {
        // if response is success then we get user object and user signUp on firebase.
        const user = userCredential.user;

        
        // Once we Sign UP and user is created then we update the name and auth.currentUser is user.
      //Using API for update.
      // we get  the currently signed-in user by using the currentUser property. If a user isn't signed in, currentUser is null:
        updateProfile(user, {
          displayName: name.current.value, 
    
          photoURL: USER_ICON
        }).then(() => {
          // Profile updated!

          // When we Sign In then onAuthStateChnaged API call and email is updated in redux store but displayName,photoURL are not updated in store because By that time dislayName,photoURL are not there as onAuthStateChnaged API call just after createUserWithEmailAndPassword hence we should also dispatch action here and displayName,photoURL will update in store.
          //we write auth.currentUser inplace of user because that user is not updated user hence we fetch user from updated value from the auth. 
          const {uid,email,displayName,photoURL} = auth.currentUser;
          //In addUser I will add a object.
          dispatch(addUser({
            uid:uid,
            email:email,
            displayName:displayName,photoURL:photoURL})
            )

          //Once our profile updated then we navigate.
          //As Soon as user SignIn or SignUp then we redirect him to Browse Page.
          //  navigate("/browse");
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message);
        });
        console.log(user);

      })
      .catch((error) => {
        // if there is any error we catch that error .
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ " - " + errorMessage);//we can set any other message also.
        
      });

    }else{
      //Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, 
        password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)

        //As Soon as user SignIn or SignUp then we redirect him to Browse Page.
        // navigate("/browse");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // setErrorMessage(errorCode+errorMessage);
        setErrorMessage("Incorrect Password. Please Try Again")
      });
    }

  }
  return (
    <div className='relative'>
      <Header/>
      <div >
        <img src={LOGIN_URL} alt="" />
      </div> 
      {/* mx-auto left-0 right-0 these three property make form horizentally centered and bg-opacity-80 property makes background transparent. */}
      {/* If you have button inside the form and if you click on Submit button then it call onSubmit method(basically try to submit the form) and that function is not present then whole page is referesed.hence to ignore page reload we create onSubmit method . Now e.preventDefault() method stops the submission of form. */}
      <form onSubmit={(e)=>{
          e.preventDefault();
        }} action="" className='flex flex-col bg-black w-[25%] py-16 px-10 gap-10 absolute top-[10%] rounded-md mx-auto left-0 right-0 bg-opacity-80 text-white'>
        <h1 className='text-white font-[600] text-[1.8rem]'>{isSignInForm?"Sign In":"Sign Up"}</h1>
        <div className='w-[100%] flex flex-col gap-5'>
          {/* When isSignInForm is false then input with placeholder name is shown. */}
          {!isSignInForm && <input 
          ref={name}
          type="text" 
          placeholder='Name' 
          className='py-3 px-2 w-[100%] rounded-md outline-none bg-gray-600'/>}
          <input 
          // Way to refer email and now email is reference to this input box.
          ref={email}
          type="email" 
          placeholder='Email Address' 
          className='py-3 px-2 w-[100%] rounded-md outline-none bg-gray-600'/>
          <input
          // Way to refer password and now password is reference to this input box. 
          ref={password}
          type="password" 
          placeholder='Password' 
          className='py-3 px-2 w-[100%] rounded-md outline-none bg-gray-600'/>
          <p className='text-red-700 font-[600]'>{errorMessage}</p>
        </div>
        <button 
        className='py-3 px-2 text-white bg-red-700 rounded-md' 
        onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p>{isSignInForm?"New to Netflix? ":"Already Registered? "} <b className="cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"Sign up now":"Sign in now"}</b></p>
      </form>
    </div>
  )
}

export default Login

