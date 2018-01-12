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
              <Service service={service}/>
              <div>
                {this.props.project.resources.edges.map(({node}) =>
                  <p>{node.type !== service
                    ? "node.type"
                    : service}
                  </p>  
                )}
              </div>
            </div>
          )}
        </div>
      <div>
        <div>
          <h4>Pivotal</h4>
          <p>yes/no</p>
        </div>
        <div>
          <h4>Github</h4>
          <p>yes/no</p>
        </div>
        <div>
          <h4>Sentry</h4>
          <p>yes/no</p>
        </div>
        <div>
          <h4>Codeship</h4>
          <p>yes/no</p>
        </div>
        <div>
          <h4>Favicon</h4>
          <p>yes/no</p>
        </div>
      </div>
    </div>
    )
  }
}


class Service extends Component {
  render(){
    return(
      <h4>{this.props.service}</h4>
    )
  }
}


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
