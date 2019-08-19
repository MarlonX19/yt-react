import React from 'react';

const Repos = props => {
    return (
        <ul>
        {props.repos.map(repo => (
            <li key={repo.id} >{repo.name}</li>
        ))}
    </ul>
    )
}

export default Repos;