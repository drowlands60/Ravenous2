import React from 'react';
import './Business.css';



//Buisness React Component
class Business extends React.Component {
    render() {
        return (<div className="Business">
        <div className="image-container">
          <a target='blank' href={this.props.business.url}><img src={this.props.business.imageSrc} alt={this.props.business.name}/></a>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <a target='blank' href={this.props.business.map}>
            <div className="Business-address">
              <p>{this.props.business.address}</p>
              <p>{this.props.business.city}</p>
              <p>{this.props.business.zipCode}</p>
            </div>
          </a>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">{this.props.business.rating}</h3>
            <p>{this.props.business.reviewCount}</p>
          </div>
        </div>
      </div>);
    }
}

//Export
export default Business;
