import React, { Component } from 'react'
import Service from './Service'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'


const available_services = ['pivotal', 'github', 'codeship', 'papertrail', 'sentry']

class Project extends Component {

  render() {
    const { id, canonicalName } = this.props.project;
    const { project } = this.props;
    
    return (
      <div class='container'>
        <div class='row'>
          <h3 key={id}>{canonicalName}</h3>
        </div>

        <div class='row'>
          <div class='col-lg-1 col-md-1 col-sm-1'></div>
          {available_services.map((service) =>
            <div class='col-lg-2 col-md-2 col-sm-2'>
              <Service service={service} project={project}/>
            </div>
          )}
        </div>
      </div>
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
