import React, { Component } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'


const available_services = ['pivotal', 'github', 'codeship', 'papertrail', 'sentry']

class Project extends Component {

  render() {
    return (
      <div>
        <div>
          <h3 key={this.props.project.id}>{this.props.project.canonicalName}</h3>
          {available_services.map((service) =>
            <div>
              <h4>{service}</h4>
              <div>
                  <Icon service={service} project={this.props.project}/>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

class Icon extends Component {

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
        <Logo url={this.state.url} state={this.state.hasService} service={this.props.service} />
      </div>
    )
  }
}


class Logo extends Component {

  render() {

    const service = this.props.service;
    const initialPath = "/images/";
    const finalPath = ".png";
    const source = initialPath + service + finalPath;
    
    return (
      <div>
        {this.props.state ?
          <div>
            <p>YES, has access to {this.props.service}</p>
            <a href={this.props.url}><img src={source} class="access" /></a>
          </div>    
        :
          <div>
            <p>NO, no access to {this.props.service}</p>
            <a href="#" class="disabled"><img src={source} class="disabled" /></a>
          </div>
        }
      </div>
    )
  }
}
/*

  <IsEmpty connectedService={node.type} availableService />

  class IsEmpty extends Component {

    constructor(props){
      super(props);
      this.state = {
        service:""
      }
    }

    componentDidMount(){
      this.setS
    }
  }
*/

export default createFragmentContainer(Project, graphql`
  fragment Project_project on Project {
    id
    canonicalName
    resources {
      edges {
        node {
          id
          type
          name
          url
        }
      }
    }
  }
`)
