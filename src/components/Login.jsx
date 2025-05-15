import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    
    if (username === "admin" && password === "123456") {
      navigate("/dashboard"); // Điều hướng đến trang Dashboard sau khi đăng nhập
    } else {
      alert("Thông tin đăng nhập sai! Vui lòng thử lại.");
    }
  };

  return (
    <div>
      <h1>Đăng nhập</h1>
      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <br/>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;
