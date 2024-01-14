import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    return(
        <>
            <nav>
                <div className="navigation">
                    {/* WhenEver We Want To Overlap Two element just make the position: absolute of one element. */}
                    <div className="absolute py-2 px-2 bg-gradient-to-b from-black">
                        <img className="w-[14rem]" src={LOGO_URL} alt="" />
                    </div>
                    
                </div>
            </nav>
        
        {/* Hello */}
        </>
    )
}
export default Header;