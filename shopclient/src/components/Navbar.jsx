import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Container = styled.div`
    height: 60px;

    ${mobile({ height: "50px" })};
`

const Wraper = styled.div`
    padding: 10px 20px;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    
    ${mobile({ padding: "10px 0px" })};
`

// --------------- Left part of Navbar ------------------- //

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })};
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    
    ${mobile({ width: "50px" })};
` 
// --------------- Center of Navbar ------------------- //

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;

    ${mobile({ fontSize: "24px" })};
`


// --------------- Right part of Navbar ------------------- //
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${mobile({ justifyContent: "center", flex: 2 })};
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;

    ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`


function Navbar() {
    const quantity = useSelector(state => state.cart.quantity);

    return (
        <Container>
            <Wraper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <Search style={{ ccolor:"grey", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        Sean
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign in</MenuItem>
                    <Link to="/cart">
                        <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wraper>
        </Container>
    )
}


export default Navbar