import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getUsers } from "../api";
import { savedUser } from "../api";
import { useNavigate } from "react-router-dom";
function Home(){
    // Gọi API 
    useEffect(()=>{
        getUsers().then((data)=> console.log("Danh sách người dùng:", data));
    }, [])

    const navigate= useNavigate(); // hook điều hướng

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("male");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        const newUser = {fullName,email,phone,gender,userName,password} 
        const response = await savedUser(newUser);
        console.log("Lưu vào database", response);
        // Add your form submission logic here
        if(response){
            navigate("/successPage");
        }
    };


    return (
        <div>
            <h1>Register</h1>
            <fieldset>
                <form action="#" method="get" >
                    <label htmlfor="fullname">Full Name</label>
                    <input type="text" name="fullname" id="fullname" value={fullName}
                    onChange={(e)=> setFullName(e.target.value)} placeholder="Enter Full Name"
                    required
                    />
                    <br/>
                    <label htmlfor="email">Email</label>
                    <input type="email" name="email" id="email" value={email}
                    onChange={(e)=> setEmail(e.target.value)} placeholder="abc@example.com"
                    required
                    />
                    <br/>
                    <label htmlfor="phone">Phone</label>
                    <input type="tel" pattern="[0-9]{10}" name="phone" id="phone" value={phone}
                    onChange={(e)=> setPhone(e.target.value)} placeholder="Enter Number Phone"
                    required
                    />
                    <br/>
                    <label htmlfor="gender">Gender</label>
                    <input type="radio" name="gender" id="male" value="male" checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)} 
                    />
                    Male
                    <input type="radio" name="gender" id="female" value="female" checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)} 
                    />
                    Female
                    <input type="radio" name="gender" id="other" value="other" checked={gender === "other"}
                    onChange={(e) => setGender(e.target.value)} 
                    />
                    Other
                    <br/>
                    <label htmlfor="username">Username</label>
                    <input type="text" name="username" id="username" value={userName}
                    onChange={(e)=> setUserName(e.target.value)} placeholder="Enter username"
                    required
                    />
                    <br/>
                    <label htmlfor="password">Password</label>
                    <input type="password" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" 
                    title="Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ cái và số" name="password" id="password" value={password}
                    onChange={(e)=> setPassword(e.target.value)} placeholder="Enter password"
                    required
                    />
                    <br/>
                    <Link to="/login">Bạn đã có tài khoản ? Đăng nhập tại đây</Link>
                    
                    <button type="submit"value="Submit"onClick={(e) => handleSubmit(e)}>
                    Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default Home;
