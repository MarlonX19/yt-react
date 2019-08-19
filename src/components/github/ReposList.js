import React from 'react';
import './ReposList.css';

const Repos = props => {
    return (
        <ul>
        {props.repos.map(repo => (
            <a href={repo.clone_url}><li key={repo.id} >{repo.name}</li></a>  
        ))}
    </ul>
    )
}

export default Repos;