import React from 'react';
//Routing imports
import {
  BrowserRouter,
  Route,
  Redirect,
} from 'react-router-dom';
// Flickr Api
import apiKey from './config.js'
// Css import
import './css/index.css';
//Component imports
import PhotoContainer from './components/PhotoContainer';
import Header from './components/Header';
import NotFound from './components/NotFound';



// Top level component
class App extends React.PureComponent {
  constructor() {
    super()
    // setting state to automatically call dogs for the homepage
    this.state = {
      searchText: 'dogs',
      images: []
    };
    // binding the method to set value of this (was there a better way in the videos?)
    this.handleImageUpdate = this.handleImageUpdate.bind(this)
    this.searchQuery = this.searchQuery.bind(this)
  }

  // the method that handles the api query
  searchQuery(query) {
    //fetching flikr api data
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}s&format=json&nojsoncallback=1&sort=recent&per_page=24`)
      .then(response => response.json())
      .then(responseData => {
        // updates state with new images
        this.setState({
          images : responseData.photos.photo
        })
      }).catch(error => {
        console.log('Error', error)
      })

  }

  //initial call to the api
  componentDidMount() {
    this.searchQuery(this.state.searchText)
  }

  // this method is triggered by search and photo container components to trigger a new API call
  handleImageUpdate(query) {
    
  if(query !== this.state.searchText) {
     // sets a new query in the state which will trigger another call to the api
      this.setState((state) => ({
        searchText: query
      }))
      this.searchQuery(query)
      
   }
    
  }


  render() {
    let photoArray = this.state.images 

    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" render={() => 
            <Header />  
          } />

        {/* redirecting to dogs from home page so there is default content */}
        <Route exact path="/">
            {<Redirect to="/dogs" />}
          </Route> 

        {/* Ternary returns not found component for gibberish search 
        At least it did, app stops working after first search that returns nothing. Not required for meets expectations
        and I really want to move on...*/}
        {/* {photoArray.length ? */}
                    
        <Route path='/:query' render={ (routerProps) => <PhotoContainer 
          images = {this.state.images} {...routerProps}
          updateImages = {this.handleImageUpdate}
          /> 
        } />

        {/* : */}

        <Route component={NotFound} />
        {/* } */}
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
