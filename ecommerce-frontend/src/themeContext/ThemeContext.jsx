import React,{useState, createContext} from 'react'
import { useEffect } from 'react'



export const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme= ()=>{
        setTheme((th)=>th === 'light' ? 'dark' : 'light');
        // if(theme == 'light'){
        //   setTheme('dark')
        // }else{
        //   setTheme('light')
        // }
        console.log(theme, "inContext");
    }
  return (
    <ThemeContext.Provider value={{theme, setTheme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
