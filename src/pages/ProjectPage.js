import React  from 'react'
import ProjectsComponent from '../components/ProjectsComponent'
import NavProject from '../components/NavProject'


function ProjectPage() {
  
  return (
    <div>
      <NavProject />
      {/* <ModalComponent /> */}
      <ProjectsComponent />
    </div>
  )
}

export default ProjectPage