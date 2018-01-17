import React, { Component } from 'react'

class Icon extends Component {

  render() {

    const service = this.props.service;
    const source = '/images/' + service + '.png';
    
    return (
      <div>
        {this.props.state ?
          <div>
            <a href={this.props.url}><img src={source} alt={service} class='access img-fluid' /></a>
          </div>    
        :
          <div>
            <a href={this.props.url} class='disabled'><img src={source} alt={service} class='disabled img-fluid' /></a>
          </div>
        }
      </div>
    )
  }
}

export default Icon