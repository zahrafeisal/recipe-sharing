import { Link } from "react-router-dom";

function Navbar() {
  const isLoggedIn = Boolean(localStorage.getItem("token")); // Simulating authentication

  const navStyle = {
    display: "flex",
    gap: "15px",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "white",
    alignItems: "center",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      {!isLoggedIn ? (
        <>
          <Link to="/login" style={linkStyle}>
            Login
          </Link>
          <Link to="/signup" style={linkStyle}>
            Sign Up
          </Link>
        </>
      ) : (
        <Link to="/profile" style={linkStyle}>
          Profile
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
