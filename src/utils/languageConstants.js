//create this object to show data in different language. 
export const lang={ 
    en:{
        search:"Search",
        gptSearchPlaceHolder:"What would you like to watch today"
    },
    hindi:{
        search:"खोज",
        gptSearchPlaceHolder:"आज आप क्या देखना चाहेंगे?"
    },
    spanish:{
        search:"buscar",
        gptSearchPlaceHolder:"¿Qué te gustaría ver hoy?"
    }

}

//we shouldnot use hardcoded string in code and every hardcoded data should come from constants.
export const langCategory=[
    {
        langValue:"en",
        langType:"English"
    },
    {
        langValue:"hindi",
        langType:"Hindi"
    },
    {
        langValue:"spanish",
        langType:"Spanish"
    }
]