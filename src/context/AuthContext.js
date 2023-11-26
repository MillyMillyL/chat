// import { createContext, useState } from "react";

// const AuthContext = createContext();

// const AuthProvider = ({children})=>{
//     const [isAuthenticated,setIsAuthenticated] = useState(false);
//     const [user, setUser] = useState(null);

//     async function logIn(userData,e){
//             e.preventDefault();

//             try {
//               // Make a POST request to your authentication endpoint
//               const res = await fetch("/api/User/SignIn", {
//                 method: "PUT",
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                   userId,
//                   password,
//                   keepLoggedIn: true,
//                 }),
//               });

//               if (!res.ok) {
//                 throw new Error("Network response was not ok");
//               }

//               const data = await res.json();

//               console.log("Authentication successful:", data);
//             } catch (error) {
//               // Handle errors, such as incorrect credentials
//               console.error("Error during authentication:", error);
//             }

//     }

//     function logOut(){}
// }
