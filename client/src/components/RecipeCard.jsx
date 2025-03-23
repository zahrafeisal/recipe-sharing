import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  const handleEdit = () => {
    console.log("Editing:", recipe.id);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      console.log("Deleted:", recipe.id);
    }
  };

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <div className="recipe-content">
        <h3>{recipe.title}</h3>
        <p>{recipe.description || "No description available."}</p>
        <div className="recipe-actions">
          <button className="edit-btn" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
