import React, { Component } from 'react';
import { fetchRepos } from '../../service/repos-api';
import ReposList from './ReposList';
import './ReposContainer.css';


export default class ReposContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            repos: [],
            username: ''
        }

        this.handleUsername = this.handleUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleUsername(ev){
        console.log(ev.target.value);
        this.setState({ username: ev.target.value })
    }

    handleSubmit(ev){
        ev.preventDefault();
        fetchRepos(this.state.username)
            .then( res => this.setState({ repos: res.data }))
            .catch(e => console.log(e));

    }

    render() {
        console.log(this.state.repos)
        return (
            <div className="main">
                <h1>Pesquise os repositórios dos devs</h1>
                <form action="#" onSubmit={this.handleSubmit} >
                    <input
                        onChange={this.handleUsername}
                        type="search"
                        placeholder="Informe o usuário do Github"
                    />
                </form>
                <ReposList repos={this.state.repos} ></ReposList>
            </div>
        )
    }
}