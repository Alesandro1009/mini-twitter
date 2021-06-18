import React from 'react';

import './post__add__form.css'

export default class PostListAddForm extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e){
        this.setState({text: e.target.value});

    }
    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({text: ''});
    }
    render() {
        return (
       <form action="" className="bottom-panel d-flex" onSubmit={this.onSubmit}>
           <input type="text" placeholder="Введите текст для поста " className="form-control new-post-label" onChange={this.onValueChange} value = {this.state.text}/>
           <button type="submit" className="btn btn-outline-secondary" >Добавить</button>
       </form>
    )
}
}
    


 