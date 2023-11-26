import { useState } from "react";

function Signup() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    try {
      const res = await fetch("/api/User/SignUp", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          password,
          name: userId,
        }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();

      console.log("Authentication successful:", data);
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  }
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="userId"
          onChange={(e) => setUserId(e.target.value)}
          value={userId}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input type="password" placeholder="Repeat your password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
