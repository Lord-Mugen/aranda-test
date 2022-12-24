export type Recipe = {
    id: number;
    img: string;
    name: string;
    subName: string;
    portion: string;
    time: string;
    difficulty: string;
    ranking: string;
};
export type RecipeContexType ={
    recetas : Array<Recipe>
}