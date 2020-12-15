var recipes = {
  "breakfast": "oatmeal"
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
  return newRecipes;
  return recipes;
}
recipes;
