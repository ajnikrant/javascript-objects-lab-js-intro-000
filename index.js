var recipes = {
  "breakfast": "oatmeal";
  "lunch": "sandwich";
}

function updateObjectWithKeyAndValue(recipes, lunch, sandwich){
  //recipes[lunch] = sandwich;
return Object.assign({}, recipes, {[lunch]: sandwich})};

function destructivelyUpdateObjectWithKeyAndValue(recipes, dinner, stew){
  recipes[dinner] = stew;
  return recipes;
}

function deleteFromObjectByKey (recipes, breakfast){
  var newRecipes = Object.assign({}, recipes);
  console.log(newRecipes);

  delete newRecipes.breakfast;
  console.log(recipes);
}


//function destructivelyDeleteObjectByKey(recipes, breakfast){

}
