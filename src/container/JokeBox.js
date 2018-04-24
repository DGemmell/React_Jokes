import React from "react";
import Header from "../components/Header"
import JokeList from "../components/JokeList"
import CategorySelector from "../components/CategorySelector"

class JokeBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      jokes: [],
      jokeOfTheDay: null,
      categories: []
    };
  }

  componentDidMount(){
    fetch("http://api.icndb.com/categories")
    .then(response => response.json())
    .then(json => this.setState({categories:json.value}));

    fetch("http://api.icndb.com/jokes")
    .then(response => response.json())
    .then(json => this.setState({jokes: json.value}));
  }

  handleCategorySelected(index){
    const selectedCategory = this.categories[index];
    console.log(selectedCategory)
  }

  render(){
    return(
      <React.Fragment>
        <Header />
        <CategorySelector
          categories={this.state.categories}
          onCategorySelected={this.handleCategorySelected}
        />
        <JokeList
          jokes={this.state.jokes} />
      </React.Fragment>
    )
  }





}


export default JokeBox;
