const API_URL = "http://localhost:8888"; // Đường dẫn JSON Server

export const getUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`);
    return await response.json();
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
  }
};

export const addUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    return await response.json();
  } catch (error) {
    console.error("Lỗi khi thêm người dùng:", error);
  }
};

export const savedUser = async(userData) => {
try {
    const response=await fetch(`${API_URL}/users`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(userData),
    });
    return await response.json();
}   catch(error){
    console.log("Lỗi khi lưu dữ liệu", error);
}
}