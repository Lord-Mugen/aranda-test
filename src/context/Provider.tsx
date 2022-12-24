import { Context } from "./Context";
import { recipes } from "../helpers/recipes";
import { Recipe } from "./recipeTypes";
import { useState } from "react";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const Provider = ({ children }: props) => {
  const [recetas, setRecetas] = useState<Array<Recipe>>(recipes);

  return (
    <Context.Provider value={{ recetas, setRecetas }}>
      {children}
    </Context.Provider>
  );
};
