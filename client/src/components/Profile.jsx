import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import "./Profile.css"; // Ensure this file exists

function Profile() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate API call to fetch user info and recipes
    const fetchUserData = async () => {
      try {
        // Replace with actual API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Sample Data
        setUser({ name: "John Doe", email: "johndoe@example.com" });
        setRecipes([
          {
            id: 1,
            title: "Spaghetti Carbonara",
            image:
              "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
          },
          {
            id: 2,
            title: "Avocado Toast",
            image:
              "https://images.pexels.com/photos/3184193/pexels-photo-3184193.jpeg",
          },
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <h1>Welcome, {user ? user.name : "User"}!</h1>
      <p>{user ? user.email : "Loading..."}</p>
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>

      <h2>Your Recipes</h2>
      {recipes.length ? (
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p>No recipes uploaded.</p>
      )}
    </div>
  );
}

export default Profile;
