import React, { Component } from 'react'

class Icon extends Component {

  render() {
    const { url, name, state } = this.props;
    const service = this.props.service;
    const source = '/images/' + service + '.png';
    
    return (
      <div>
        {state ?
          <div>
            <a href={url} title={name}>
              <img src={source} alt={service} class='access img-fluid' />
            </a>
          </div>    
        :
          <div>
            <a href={url} class='disabled'>
              <img src={source} alt={service} class='disabled img-fluid' />
            </a>
          </div>
        }
      </div>
    )
  }
}

export default Icon