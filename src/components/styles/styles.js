import styled from 'styled-components';

const IconWrapper = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #f7d0d7;
    margin: 0 auto;
`;

const Icon = styled.img`
    margin-top: 12px;
    margin-left: 15px;
    width: 40px;
    height: 40px;
`;

const Text = styled.div`
    width: 105px;
    font-size: 30px;
    color: white;
    margin: 0 auto;
    margin-top: 5px;
`;

const Input = styled.input`
    background-color: #000;
    border: 1px solid #ebf5ee;
    border-radius: 3px;
    height: 40px;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    padding-left: 20px;
    color: white;
`;

const Wrap = styled.div`
    margin-top: 5px;
    display: flex;
    align-items: center;
`

const Remember = styled.input`
    margin-left: 38px;
    margin-right: 10px;
`

const Paragraph = styled.p`
    font-size: 15px;
    color: rgba(255, 255, 255, 0.5);
`;

const Agree = styled.button`
    width: 430px;
    height: 30px;
    background-color: #82bfe8;
    border: none;
    border-radius: 5px;
    display: block;
    margin: 0 auto;
    margin-top: 15px;
`;

const WrapProblem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 430px;
    margin: 0 auto;
    margin-top: 10px;
`

const Forgot = styled.div`
    font-size: 14px;
    color: #62a5d1;
`;

const Footer = styled.div`
    position: absolute;
    top: 550px;
    margin-left: 150px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.2);
`

export {
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
};