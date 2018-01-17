import React, { Component } from 'react'
import Icon from './Icon'

class Service extends Component {

  constructor() {
    super()
    this.state = {
      hasService: false,
      url:""
    }
  }

  componentDidMount(){
    this.props.project.resources.edges.map(({node}) =>
      node.type === this.props.service ?
        this.setState({
          hasService:true,
          url:node.url
        })
      :
      ''
    )

  }

  render() {
    return (
      <div>
        <Icon url={this.state.url} state={this.state.hasService} service={this.props.service} />
      </div>
    )
  }
}


export default Service