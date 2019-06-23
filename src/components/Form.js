import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import check from '../js/check'
import './Form.css';

let user = {
  login: 'test',
  password: 'test'
}

export class Form extends Component {
  
  state = {
    login: '',
    password: '',
    authWrongFlag: false
  };

  inputHandler(e){
    this.setState({[e.target.name]: e.target.value});
    if(e.target.classList.value.indexOf('inputWrongHighlight') !== -1){
      for(let item of document.querySelectorAll('.inputForm')){
        item.classList.remove('inputWrongHighlight')
      }
    }
  }

  submit(e){
    let { submited, auth } = this.props;
    let { login, password } = this.state;
    e.preventDefault();
    let form = e.target;
    
    if(login || password){
      submited();
      setTimeout(() => {
        submited();
        this.setState({ authWrongFlag: check(form, user, this.state) })
        if(!this.state.authWrongFlag){
          auth()
        }
      }, 3000)
    }
  }

  render() {
    let { login, password, authWrongFlag } = this.state;
    let className = !authWrongFlag ? 'form-container' : 'form-container authWrong';

    return (
      <div className={className}>
        <form onSubmit={ this.submit.bind(this) }>
          <Input type='text' placeholder='Логин' customClass='login' commonClass=' inputForm' value={ login } inputHandler={this.inputHandler.bind(this)} />
          <Input type='password' placeholder='Пароль' customClass='password' commonClass=' inputForm' value={ password } inputHandler={this.inputHandler.bind(this)} />
          <Button value='Войти'/>
        </form>
      </div>
    );
  }
}
export default Form;
