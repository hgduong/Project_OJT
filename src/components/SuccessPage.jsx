import { Link } from "react-router-dom";
const SuccessPage = () => {
    return (
    <div>
        <h1>Đăng ký thành công!</h1>
        <Link to="/login">Quay lại trang đăng nhập</Link>
    </div>
    );
  };
  
  export default SuccessPage;
  