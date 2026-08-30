/**
 * Fyndr — Authentication Module
 * 
 * Simulated backend authentication for prototype purposes.
 * Persists user accounts in localStorage.
 * 
 * INSTRUCTIONS FOR DEPLOYMENT:
 * To use real Firebase Auth when hosting, replace the contents 
 * of this file with the Firebase SDK initialization and use 
 * firebase.auth().signInWithEmailAndPassword() instead of localStorage.
 */

// Global state for current user
let currentUser = null;

// Initialize from localStorage on load
try {
  const savedUser = localStorage.getItem('fyndr_currentUser');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
  }
} catch (e) {
  console.error("Local storage error:", e);
}

/**
 * Get all registered users from local storage
 */
function getUsersDB() {
  const users = localStorage.getItem('fyndr_users');
  return users ? JSON.parse(users) : {};
}

/**
 * Save users DB to local storage
 */
function saveUsersDB(users) {
  localStorage.setItem('fyndr_users', JSON.stringify(users));
}

/**
 * Sign up a new user
 */
function signUp(email, password) {
  const users = getUsersDB();
  
  if (users[email]) {
    return { success: false, error: "An account with this email already exists." };
  }
  
  // Create user
  const newUser = { email: email, createdAt: new Date().toISOString() };
  users[email] = { ...newUser, password: password }; // In a real app, NEVER store plain text passwords!
  
  saveUsersDB(users);
  
  // Auto-login
  currentUser = newUser;
  localStorage.setItem('fyndr_currentUser', JSON.stringify(currentUser));
  
  return { success: true, user: currentUser };
}

/**
 * Log in an existing user
 */
function logIn(email, password) {
  const users = getUsersDB();
  
  if (!users[email] || users[email].password !== password) {
    return { success: false, error: "Invalid email or password." };
  }
  
  // Login successful
  currentUser = { email: users[email].email, createdAt: users[email].createdAt };
  localStorage.setItem('fyndr_currentUser', JSON.stringify(currentUser));
  
  return { success: true, user: currentUser };
}

/**
 * Log out the current user
 */
function logOut() {
  currentUser = null;
  if (typeof accountsLinked !== 'undefined') {
    accountsLinked = false; // Reset account linked state when logging out
  }
  localStorage.removeItem('fyndr_currentUser');
  
  // Refresh page or re-render
  window.location.hash = '#/';
  window.location.reload();
}
