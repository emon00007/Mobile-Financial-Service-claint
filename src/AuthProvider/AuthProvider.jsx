import axios from "axios";
import {  createContext, useState } from "react";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true)

    const createUser = async (userInfo) => {
        try {
          const response = await axios.post("http://localhost:5000/userAdded", userInfo);
          const userData = response.data; 
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData)); 
          setLoading(false)
          return userData;
        } catch (error) {
          console.error("Error during user creation:", error);
          throw error;
        }
      };

      
    const authInfo={
        createUser,
        user,
        loading,
        setUser
    }
    return (
<AuthContext.Provider value={authInfo} >
{children}
</AuthContext.Provider>
    );
};

export default AuthProvider;