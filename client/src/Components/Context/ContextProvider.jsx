import React, { createContext, useState } from 'react'

export const contextNavigate=createContext({
          userData:"",
          setUserData:()=>{}
})

const ContextProvider = ({children}) => {
          const [userData, setUserData]=useState("");
  return (
    <>
          <contextNavigate.Provider  value={{userData, setUserData}}>
                    {children}
          </contextNavigate.Provider>
    </>
  )
}

export default ContextProvider