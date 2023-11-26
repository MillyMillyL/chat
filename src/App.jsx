import { useState } from "react";

function App() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  // console.log(userId);
  // console.log(password);

  function handleSignin(event) {
    event.preventDefault();

    // Make a POST request to your authentication endpoint
    fetch("/api/User/SignIn", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        password,
        keepLoggedIn: true,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the successful authentication response
        console.log("Authentication successful:", data);
      })
      .catch((error) => {
        // Handle errors, such as incorrect credentials
        console.error("Error during authentication:", error);
      });
  }

  return (
    <div>
      <h1>Please Sign In</h1>
      <form onSubmit={handleSignin}>
        <input
          type="text"
          placeholder="User Id"
          onChange={(e) => setUserId(e.target.value)}
          value={userId}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input type="checkbox" />
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default App;
