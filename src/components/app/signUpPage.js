import React, {Component} from 'react';
import lock from '../styles/padlock.png';
import styled from 'styled-components';
import './style.css';
import {Link} from 'react-router-dom';
import {
    IconWrapper,
    Icon,
    Text,
    Input,
    Wrap,
    Remember,
    Paragraph,
    Agree,
    Forgot,
    WrapProblem,
    Footer
} from '../styles/styles';

const Wrapper = styled.div`
    width: 500px;
    border 1px solid #fff;
    padding-top: 30px;
    margin: 0 auto;
    margin-top: 50px;
    min-height: 500px;
    background-color: #000;
`;


class SignUp extends Component {
    state = {
        name: '',
        surname: '',
        email: '',
        password: ''
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        const {email, password, name, surname} = this.state;
        return (
            <Wrapper>
                <IconWrapper>
                    <Icon src={lock}/>
                </IconWrapper>
                <Text>
                    Sign Up
                </Text>
                <form>
                    <div className='input'>
                        <Input className="surname" 
                        onChange={this.handleUserInput} 
                        value={name} 
                        type='text' 
                        name='name'
                        placeholder="First Name*"/>
                        <Input className="surname" 
                        onChange={this.handleUserInput} 
                        value={surname} 
                        type='text' 
                        name='surname'
                        placeholder="Last Name*"/>
                    </div>
                    <Input 
                    className='pass'
                    onChange={this.handleUserInput} 
                    value={email} 
                    type='email' 
                    placeholder="Email Address*"
                    name='email'/>
                    <Input 
                    className='pass'
                    onChange={this.handleUserInput} 
                    value={password} 
                    type='password' 
                    placeholder="Password*"
                    name='password'/>
                </form>
                <Wrap>
                    <Remember
                        onClick={this.CheckInput}
                        type="checkbox"
                        id="check"
                        name="color"
                        value="indigo"/>
                    <Paragraph>
                        <div className='text'> 
                            I want to receive inspiration, marketing promotions and updates via email.
                        </div>
                    </Paragraph>
                </Wrap>
                <Agree>
                    SIGN UP
                </Agree>
                <WrapProblem>
                        <Link to="/signin"><Forgot>Already have an account? Sign In</Forgot></Link>
                </WrapProblem>
                <Footer>Copyright &#64; Your Website 2020.</Footer>
            </Wrapper>
        );
    }
}

export default SignUp;