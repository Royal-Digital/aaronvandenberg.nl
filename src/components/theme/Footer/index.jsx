import React from 'react';
import {Container} from '../../../components/common';
import {Link} from 'gatsby'
import {Wrapper, Flex, Links, Details} from './styles';
import GitHubLogo from '../../../assets/icons/github.svg'
import LoginIcon from '../../../assets/icons/login.svg'

export const Footer = () => (
    <Wrapper>
        <Flex as={Container}>
            <Details>
                <h2>Aaron van den Berg</h2>
                <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
                    <span aria-label="love" role="img">
            💖
          </span>{' '}
                    by{' '}
                    <a href="https://aaronvandenberg.nl" rel="noopener noreferrer" target="_blank"
                       title={'Aaron van den Berg'}>
            Aaron van den Berg
          </a>
        </span>
            </Details>
            <Links>
                <a href={'https://github.com/aaron5670'} target="_blank" rel="noopener noreferrer"
                   aria-label={`follow me on GitHub`}>
                    <img width="24" src={GitHubLogo} alt={'GitHub'}/>
                </a>
                <Link to={'/login'} style={{marginLeft: 20}}>
                    <img width="24" src={LoginIcon} alt={'GitHub'}/>
                </Link>
            </Links>
        </Flex>
    </Wrapper>
);