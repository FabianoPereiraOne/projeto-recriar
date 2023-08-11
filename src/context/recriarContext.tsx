import { ReactNode, createContext, useContext, useState } from "react";

type ContextProps = {
 setIsLoaded: (bool: boolean) => void;
 isLoaded: boolean
}

export const recriarContext = createContext({} as ContextProps)

type ContextProviderProps = {
 children: ReactNode
}

const ContextProvider = ({ children }: ContextProviderProps) => {
 const [isLoaded, setIsLoaded] = useState(true)

 return (
  <recriarContext.Provider value={{ isLoaded, setIsLoaded }}>
   {children}
  </recriarContext.Provider>
 )
}

export default ContextProvider

export const useRecriarContext = () => {
 const context = useContext(recriarContext)

 if (context === undefined) {
  throw new Error('Contexto inacessível.')
 } else {
  return context
 }
}