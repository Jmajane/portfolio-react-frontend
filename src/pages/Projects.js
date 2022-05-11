import React from 'react'
import { useState, useEffect } from 'react'


function Projects(props) {
    // create state to hold projects
    const [projects, setProjects] = useState([]);

    // create a function to make api call
    const getProjectsData = async () => {
        const response = await fetch(props.URL + "projects");
        const data = await response.json();
        setProjects(data);
    };

    useEffect(() => {getProjectsData()}, [props.URL]);

    const loaded = () => {
        return projects.map((project) => (
            <div key={project.name}>
                <h1>{project.name}</h1>
                <img src={project.image} />
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>live site</button>
                </a>
            </div>
        ))
    }
  return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects