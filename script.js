var RecipeApp = function () {

    var recipes = [
        { 
            id: 1,
            name: 'Best Chicken Soup!', 
            image: 'https://static01.nyt.com/images/2016/11/29/dining/recipelab-chick-noodle-still/recipelab-chick-noodle-still-master675.jpg',
            ingredients: [
                { name: 'whole chicken' },
                { name: 'medium carrots'},
                { name: 'onions' },
            ] 
        }
    ];

    var $recipes = $('.recipes');

    //id's for recipes
    var recId = 2;

    //id's for ingredients
    var ingId = 0;

    var createRecipe = function(name, image){
        var recipe = {
            name: name,
            image: image, 
            ingredients: [],
            id: recId
        };

        //keeps recipe ids unique 
        recId ++; 

        recipes.push(recipe);
    };


    var _getRecipeById =  function(id) {
        for (var i = 0; i < recipe.length; i++) {
            if (recipes[i].id ===id) {
                return recipes[i];
            }
         }
        }
    };

    var _getIndexOfCurrentRecipe = function(currentRecipe) {
        var $clickedRecipe = $(currentRecipe).closest('.recipe');
        var id = $clickedRecipe.data().id;
        var recipe = _getRecipeById(id);
        return recipes.indexOf(recipe);
    }

    var createIngredients = function(currentRecipe, name){
        var index = _getIndexOfCurrentRecipe(currentRecipe);
        recipes[index].ingredients.push({name: name});
    };


    var createIngredients = function(name, recipeID){
        //add code
        var index = _getIndexOfCurrentRecipe(currentRecipe);
        recipes[index].ingredients.push({name: name});
    };

    var _getIngredientsHTML = function(recipe){
        var recipesHTML = "";
        for (let i = 0; i < recipe.ingredients.length; i++) {
            recipesHTML += '<li>' + recipe.ingredients[i].name + '</li>';
        }

        //add code
        return recipesHTML;
    };

    var renderRecipes = function () {
        //empty recipes div
        $recipes.empty();

        for(var i = 0; i < recipes.length; i ++){
            //current recipe in iteration
            var recipe = recipes[i];

            //return HTML for all ingredients
            var ingredients = _getIngredientsHTML(); //add code

            $recipes.append(
                '<div class="recipe col-md-6  offset-md-3 img-fluid shadow" data-id="' + recipe.id + '">' + 
                    '<h4 class="text-capitalize font-italic text-center">' + recipe.name + '</h4>' +
                    '<img class="recipe-img" src="' + recipe.image + '"/>' +
                    '<hr>' +
                    '<h5 class="font-italic font-bold text-center">ingredients</h5>' +
                    '<div class="input-group mb-3">' +
                        '<div class="input-group-prepend">' +
                            '<span class="add-ingredients input-group-text" id="basic-addon3">Add Ingredients</span>' +
                        '</div>' + 
                        '<input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">' +
                        
                    '</div>' +
                    '<ul class="ingredients">' + ingredients + '</ul>'+
                '</div>'
            );
        }
    };

    return {
        createRecipe: createRecipe,
        renderRecipes: renderRecipes,
        createIngredients: createIngredients
    };

var app = RecipeApp();


//--------EVENTS

//add a recipe
$('.add-recipe').on('click', function(){
    //collect input text
    var name = $('#recipe-name').val();
    var image = $('#recipe-image').val();

    //add recipe to array and render
    app.createRecipe(name, image);
    app.renderRecipes();
});

$('.recipes').on('click', '.add-ingredients', function () {
    var name = $(this).closest('.recipe').find('.new-ingredirnt').val();
    app.createIngredients(this, name);
    app.renderRecipes();
})