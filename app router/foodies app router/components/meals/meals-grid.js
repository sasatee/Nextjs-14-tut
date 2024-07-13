import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export default function MealsGrid({ meals }) {
  if (!Array.isArray(meals)) {
    return <p>No meals available</p>; // or any other fallback UI
  }
  return (
    <ul className={classes.meals}>
      {meals.map((meal, index) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

{
  /* {...meal} ===>>>means the meals I'll have in this meals array eventually
will have all those properties
that are expected as props here, ex:{ title, slug, image, summary, creator } */
}
