import React, { useState } from 'react'
import AllContext from './allContext'
import { Navigate } from 'react-router';
function allState(props) {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#202124';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

//  const ProtectedRoutesForAdmin = ({ children }) => {
//     const admin= JSON.parse(localStorage.getItem('currentAdmin'))
//   console.log(admin.user.email)
//     if (admin.user.email === "knupadhyay784@gmail.com") {
//       return children
//     }
//     else {
//       return <Navigate to='/login' />
//     }
//   }
  return (
    <AllContext.Provider value={{mode ,toggleMode,}}>
        {props.children}
    </AllContext.Provider>
  )
}

export default allState