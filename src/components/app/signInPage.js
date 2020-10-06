import React, {Component} from 'react';
import lock from '../styles/padlock.png';
import styled from 'styled-components';
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
    WrapProblem,
    Forgot,
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


class App extends Component {
    state = {
        email: '',
        password: '',
        CheckInput: false
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    CheckInput = () => {
        this.setState({
            CheckInput: !this.state.CheckInput
        })
    }

    render() {
        const {email, password} = this.state;
        return (
                <Wrapper>
                <IconWrapper>
                    <Icon src={lock}/>
                </IconWrapper>
                <Text>
                    Sign In
                </Text>
                <form>
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
                        Remember me
                    </Paragraph>
                </Wrap>
                <Agree>
                    SIGN IN
                </Agree>
                <WrapProblem>
                    <Forgot>Forgot password?</Forgot>
                            <Link to='/signup'><Forgot>Dont have an account? Sign Up</Forgot></Link>
                </WrapProblem>
                <Footer>Copyright &#64; Your Website 2020.</Footer>
            </Wrapper>
        );
    }
}

export default App;
