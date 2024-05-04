import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import {auth} from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { langCategory } from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";
const Header=()=>{
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const isShowGptSeach=useSelector((store)=>store.gpt.isShowGptSeach);
    const handleButtonClick=()=>{
        //Sign Out API Path:-  Search Firebase Auth. -> Web ->Pasword Authentication
        signOut(auth).then(() => {
        // If Sign-out successful then navigate to Login page.
        // navigate("/")

        }).catch((error) => {
        // An error happened.
        navigate("/error");//we will create this error page.
        });
    }

    
    const handleGptSearchClick=()=>{
      //Toogle GPT Search Button
      // we have two ways to toogle 1)create an state variable and based on that state variable show GptSearchpage.2)When we already using redux store which is central store then we use that redux store to store the information that we should show GptSearchpage or not . this is how we use redux store to manage state variable.
      //we create new slice to store the toogle information.
      dispatch(toggleGptSearchView());
    }

    const handleOnChange=(e)=>{
      //we store the language data inside redux store . we create the new slice called as configSlice. 
      //Here we use e.target.value to get value of select box but we can also use ref(useRef hook) to get value of select box.
      dispatch(changeLanguage(e.target.value))
    }

    //Using useSelector to read data;
    const user=useSelector((store)=>store.user)



      // const navigate=useNavigate()//this hook comes from react-router-dom and we use this hook for navigation between pages .
    // onAuthStateChanged api is like eventlisener which automatically called whenever we do signIn,signUp,signOut. and we can write onAuthStateChanged code  anywhere like Applevel or root level or in body component. 
    // onAuthStateChanged is kind of event lishner and I don't want to call this API again and again , we just call this API only once and for that we use useEFfect hook.
    // Instead of using useEffect over Body component i will have to add useEffect to a place which is in my whole app but it should be in RouterProvider. hence we put useEffect in header component because header present on everypage.
    useEffect(()=>{
      
      // The onAuthStateChanged function is then invoked with the auth object and a callback function. This function listens for changes in the authentication state.
      //  When the authentication state changes, the callback function is called with the user object as an argument.

      //onAuthStateChanged return unsubscribe function.
      const unsubscribe=  onAuthStateChanged(auth, (user) => {//this user is not useSelector user.
          if (user) {
            // console.log("StateUser",user);
            //The Beauty of onAuthStateChanged is we get userid very easily.similary we extract lot more information from user.
            const {uid,email,displayName,photoURL} = user;//phoneNumber
            //Here User is present then this is SignIn ,SIgnUp case.
            //So if i update user inside the store then all updates we can do from this one place.
            //In addUser I will add a object.
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            //As Soon as user SignIn or SignUp then we redirect him to Browse Page or if user is logged in then redirect to Browse Page. 
            navigate("/browse")
    
          } else {
            // User is signed out
           dispatch(removeUser());
           //As Soon as user SignOut then we redirect him to LogIn Page or if user is not logged in then navigate to login page. 
           navigate("/");
          }
        });
        //we have useEffect and that useEffect called ones when our component loads but my header can be load multiple times in a same single session then it will keep attaching event listener(onAuthStateChanged) in my browser.But when my component is unmount then we should unsubscribe to that action(onAuthStateChanged).
        //we are doing cleaning inside useEffect . as we study when component unmount we need to return the function from the component. we need to unsubscribe the event aand when we call unsubscribe function then it remove onAuthStateChanged
        return ()=>unsubscribe();

      },[])

      
    return(
        <>
            <nav>
            {/* bg-gradient-to-b property is used to apply a background gradient that transitions from top to bottom.  */}
                <div className="navigation flex justify-between absolute py-2 px-2 bg-gradient-to-b from-black w-screen z-50">
                    {/* WhenEver We Want To Overlap Two element just make the position: absolute of one element. */}
                    <div>
                        <img className="w-[14rem]" src={LOGO_URL} alt="" />
                    </div>

                    {/* we write this condition because Below jsx(like Sign Out) also rendered at Login page header but we only want to rendered on browse page so when we Sign In then we have user hence then only we renderd jsx. if user is null then we willnot rendered jsx. */}
                    {user && <div className="flex items-center gap-2">

                      {/* Value of option in select should be same as key in lang object present inside languageConstants .  */}
                      {/* We made select field dynamic by executing map on array. which is called modular coding as we generating options dynamically.*/}
                      
                      {/* we show language select filed only for GptSearchPage hence we aply below condition. */}
                     {
                      // Now we can see how we can hide or show something on state change and Here we do it using redux as we have not used useState hook for that. redux is managing the data layer, we are not using useState or any other hook. 
                      isShowGptSeach &&  <select onChange={handleOnChange}
                      className="p-2 bg-gray-900 text-white">
                        {langCategory?.map((langItem)=><option value={langItem.langValue} key={langItem.langType}>{langItem.langType}</option>)}
                      </select>
                     }

                      {/* We want when user click on GPT Search button then show GPT SearchBar page(hide maincontainer and secondarycontainer)  and when again click on GPT Search button then don't show GPT SearchBar page(show maincontainer and secondarycontainer) and for that we apply tooglebutton approach  */}                     
                      <button 
                      className="text-white bg-purple-700 px-4 py-2 outline-none rounded-md mx-4"
                      onClick={handleGptSearchClick}
                      >{isShowGptSeach?"HomePage":"GPT Search"}</button>

                        <img src={user?.photoURL} className="w-10" alt="" />
                        <button onClick={handleButtonClick}  className="text-white">Sign Out</button>
                    </div>}
                    
                </div> 
            </nav>
        
        {/* Hello */}
        </>
    )
}
export default Header;