import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../Environment'
import ProjectData from './ProjectData'

const ProjectPageQuery = graphql`
  query ProjectPageQuery {
    viewer{
      ...ProjectData_viewer
    }
  }
`

class ProjectPage extends Component {

  render() {
    return (
      <div>
        <QueryRenderer
          environment={environment}
          query={ProjectPageQuery}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <ProjectData viewer={props.viewer} />
            }
            return <div>Loading</div>
          }}
        />
      </div>
    )
  }

}

export default ProjectPage
