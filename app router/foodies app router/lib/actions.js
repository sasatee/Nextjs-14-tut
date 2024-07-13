"use server";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache'

// create a so-called server action , which is a function that's guaranteed to execute on the server and only there

function isInvalid(text) {
  return !text || text.trim === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  if (
    isInvalid(meal.title) ||
    isInvalid(meal.summary) ||
    isInvalid(meal.instructions) ||
    isInvalid(meal.creator) ||
    isInvalid(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    //throw new Error("Invalid Input");
    return {
      message: "Invalid input",
    };
  }
  await saveMeal(meal);
  revalidatePath("/meals"); //revalidate simply means that NextJS throws away the cache that is associated
//   revalidatePath(
//     "/meals"
//     //"layout/page"
//   );

  //   If you would want to revalidate all the pages of your entire website, you could, by the way, do that by targeting slash and then setting the mode to layout.

  redirect("/meals");
}
