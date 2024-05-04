import React from 'react'
import { lang } from '../utils/languageConstants'
import { useSelector } from 'react-redux'
const GptSearchBar = () => {

    const langOption=useSelector((store)=>store.config.lang)
  return (
    //we can't give mt-24 because header has position absolute.
    <div className='pt-[25vh] flex justify-center '>
        
      <form action="" className='bg-black w-[40vw] p-4 flex gap-4'>
        <input 
        type="text" 
        // we can't write placeholder as lang?.langOption?.gptSearchPlaceHolder becauase lang willnot find langOption inside it. hence we write lang[langOption].
        placeholder={lang[langOption]?.gptSearchPlaceHolder}
        className='px-4 py-2 outline-none w-[80%] text-black ' />
        <button 
        className='bg-red-600 text-white px-4 py-2 rounded-md outline-none w-[20%]'>{lang[langOption]?.search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
