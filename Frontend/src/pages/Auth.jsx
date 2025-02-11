import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "../api/axiosInstance";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", password: "" });
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    API.get("/auth/verify", { withCredentials: true })
      .then((res) => {
        if (res.data.isAuthenticated) {
          localStorage.setItem("isAuthenticated", "true"); // Save auth status
          navigate("/home"); // Redirect logged-in users
        }
      })
      .catch(() => {
        localStorage.removeItem("isAuthenticated"); // Clear if not authenticated
      });
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin ? "/auth/login" : "/auth/register";
      const { data } = await API.post(url, formData, { withCredentials: true });

      toast.success(data.message || (isLogin ? "Login Successful!" : "Account Created Successfully!"));
      
      localStorage.setItem("isAuthenticated", "true"); // Set login status
      navigate("/home"); // Redirect after login/register
    } catch (error) {
      console.error("Auth Error:", error.message);
      const errorMsg = error.response?.data?.message || "Something went wrong!";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">{isLogin ? "Login" : "Sign Up"}</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-600">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 mt-2 text-sm border text-black rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-2 mt-2 text-sm border text-black rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 mt-2 text-sm border text-black rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 mt-2 text-sm border text-black rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="w-full cursor-pointer px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setFormData({ name: "", email: "", phone: "", password: "" });
            }}
            className="text-blue-500 hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
