import React from 'react';
import Photo from './Photo';


class PhotoContainer extends React.PureComponent {
    // constructor(props) {
    //   super(props);
      
    // }

    componentDidMount() {
      let query = this.props.match.params.query
      this.props.updateImages(query);
    }

    //calling update images based on the query parameter
    componentDidUpdate(prevProps) {
      if(this.props.match.params.query !== prevProps.match.params.query) {
        let query = this.props.match.params.query
        this.props.updateImages(query);
      }
    }    
  
    // the flickr api is complicated and has a lot of parts to make up an image src.
    render() {
      let images = this.props.images;
      let photos = images.map(photo => 
          <Photo 
          key={photo.id}
          id={photo.id}
          farmId={photo.farm}
          secret={photo.secret}
          serverId={photo.server}
          tag = {this.props.tag}
           />
        )

     
      return(
        <div className="photo-container">
          <h2>Results</h2>
          <ul>

            {photos}
            
          </ul>
        </div>
      );
    }
  }

  export default PhotoContainer