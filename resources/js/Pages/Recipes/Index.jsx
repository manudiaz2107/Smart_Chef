export default function Recipes({ recipes }) {
    return (
        <div>
            <h1>Recetas</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>{recipe.name}</li>
                ))}
            </ul>
        </div>
    );
}