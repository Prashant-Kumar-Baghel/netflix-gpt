import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body=()=>{
    const appRouter=createBrowserRouter(
        [
            {
                path:"/",
                element:<Login/>
            },
            {
                path:"/browse",
                element:<Browse/>
            }
        ]
    )
    // const dispatch =useDispatch();
    // const navigate=useNavigate()//this hook comes from react-router-dom and we use this hook for navigation between pages .
    // onAuthStateChanged api is like eventlisener which automatically called whenever we do signIn,signUp,signOut. and we can write onAuthStateChanged code  anywhere like Applevel or root level or in body component. 
    // onAuthStateChanged is kind of event lishner and I don't want to call this API again and again , we just call this API only once and for that we use useEFfect hook.
    // useEffect(()=>{
    //   onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       //The Beauty of onAuthStateChanged is we get userid very easily.similary we extract lot more information from user.
    //       const {uid,email,dislayName,photoURL} = user;
    //       //Here User is present then this is SignIn ,SIgnUp case.
    //       //So if i update user inside the store then all updates we can do from this one place.
    //       //In addUser I will add a object.
    //       dispatch(addUser({uid:uid,email:email,displayName:dislayName,photoURL:photoURL}))
    //       //As Soon as user SignIn or SignUp then we redirect him to Browse Page or if user is logged in then redirect to Browse Page. 
    //       navigate("/browse")
  
    //     } else {
    //       // User is signed out
    //      dispatch(removeUser());
    //      //As Soon as user SignOut then we redirect him to LogIn Page or if user is not logged in then navigate to login page. 
    //      navigate("/");
    //     }
    //   });
    // },[])

    return (
        // Body component itself has routing so we can't use useNavigate hook inside Body component hence we can use useNavigate hook inside RouterProvider i.e inside Browse,header,Login components because these components are inside routing. so To solve this issue we can move routing into App level or don't use navigate in body component and navigate from other place so use navigate in Login page.
        //Here Body component is parent component navigate only be done inside children components like Browse,header,Login components.
        //Hence Instead of using useEffect over here i will have to add useEffect to a place which is in my whole app but it should be in RouterProvider. hence we put useEffect in header component because header present on everypage.

        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}
export default Body;