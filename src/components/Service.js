import React, { Component } from 'react'
import Icon from './Icon'

class Service extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hasService: false,
      url: "",
      name: "",
    }
  }

  componentDidMount(){
    const { project, service } = this.props
    project.resources.edges.find(({node}) => 
      node.type === service ?
        this.setState({
          hasService: true,
          url: node.url,
          name: node.name,
        })
      :
      ''

    );

/*
    project.resources.edges.map(({node}) =>
      node.type === service ?
        this.setState({
          hasService: true,
          url: node.url,
          name: node.name,
        })
      :
      ''
    )    
*/
  }

  render() {
    const { name, url, hasService } = this.state;
    const { service } = this.props

    return (
      <Icon name={name} url={url} state={hasService} service={service} />
    )
  }
}


export default Service