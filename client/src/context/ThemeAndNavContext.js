import { createContext , useContext } from "react";

export const ThemeAndNavContext = createContext({
    showNav : false ,
    toggleNav : () => {}
})

export const ThemeAndNavContextProvider = ThemeAndNavContext.Provider

export const useNavAndTheme = () =>{
    return useContext(ThemeAndNavContext)
}