import React, { Component } from 'react'
import Project from './Project'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'


class ProjectData extends Component {

  render() {
    return (
      <div>
        {this.props.viewer.allProjects.edges.map(({node}) =>
            <Project key={node.__id} project={node} />
        )}
      </div>
    )
  }
}

export default createFragmentContainer(ProjectData, graphql`
  fragment ProjectData_viewer on Viewer {
    allProjects(last: 100, orderBy: id_ASC) {
      edges {
        node {
          ...Project_project
        }
      }
    }
  }
`)
