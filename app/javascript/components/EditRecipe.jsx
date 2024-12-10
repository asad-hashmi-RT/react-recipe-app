import React from "react";
import { Link, useParams  } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}


class EditRecipe extends React.Component {
	constructor(props) {
    super(props);
    this.state = { recipe: { name: "", ingredients: "",
      instruction: "" }};

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  onChange(event) {
  	this.setState({...this.state.recipe, [event.target.name]: event.target.value});
  }
  componentDidMount() {
  	let { id } = this.props.params;
  	
  	const url = `/api/v1/show/${id}`;

  	fetch(url)
  		.then(response => {
  			if (response.ok) {
  				return response.json();
  			}
  			throw new Error("Network response was not ok.");
  		})
  		.then(response => this.setState({recipe: response}))
  		.catch(() => this.props.history.push("/"));
  }

  onSubmit(event) {
  	event.preventDefault();
  	
  	let { id } = this.props.params;
  	const url = `/api/v1/edit/${id}`;

  	const { name, ingredients, instruction } = this.state ;

  	if (!name || !ingredients || !instruction )
      window.location.href = (`/recipe/${id}`);

  	if (!name || (name.length == 0) || !ingredients || (ingredients.length == 0) || !instruction || (instruction.length) == 0)
      return;

  	const body = {
      name,
      ingredients,
      instruction: instruction.replace(/\n/g, "<br> <br>")
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "PUT",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
        	window.location.href = (`/recipe/${id}`);
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
  }
  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  render() {
  	const { recipe } = this.state;
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new recipe to our awesome recipe collection.
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="recipeName">Recipe name</label>
                <input
                  type="text"
                  name="name"
                  id="recipeName"
                  defaultValue={recipe.name}
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="recipeIngredients">Ingredients</label>
                <input
                  type="text"
                  name="ingredients"
                  id="recipeIngredients"
                  className="form-control"
                  defaultValue={recipe.ingredients}
                  required
                  onChange={this.onChange}
                />
                <small id="ingredientsHelp" className="form-text text-muted">
                  Separate each ingredient with a comma.
                </small>
              </div>
              <label htmlFor="instruction">Preparation Instructions</label>
              <textarea
                className="form-control"
                id="instruction"
                name="instruction"
                defaultValue={recipe.instruction}
                rows="5"
                required
                onChange={this.onChange}
              />
              <button type="submit" className="btn custom-button mt-3">
                Update
              </button>
              <Link to="/recipes" className="btn btn-link mt-3">
                Back to recipes
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withParams(EditRecipe);