import { users } from "./fakeDB";

// Get users from localStorage or default
const getUsers = () => {
  const storedUsers = JSON.parse(localStorage.getItem("users"));
  return storedUsers ? storedUsers : users;
};

// Save users to localStorage
const saveUsers = (users) => localStorage.setItem("users", JSON.stringify(users));

// Signup
export const signup = (name, email, password) => {
  const users = getUsers();

  if (users.find(u => u.email === email)) {
    return { success: false, message: "Email already exists" };
  }

  const newUser = { id: Date.now(), name, email, password, role: "user" };
  users.push(newUser);
  saveUsers(users);
  localStorage.setItem("currentUser", JSON.stringify(newUser));
  return { success: true, message: "Signup successful", user: newUser };
};

// Login
export const login = (email, password) => {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) return { success: false, message: "Invalid email or password" };

  localStorage.setItem("currentUser", JSON.stringify(user));
  return { success: true, message: "Login successful", user };
};

// Logout
export const logout = () => {
  localStorage.removeItem("currentUser");
  return { success: true, message: "Logged out successfully" };
};

// Get current user
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};
