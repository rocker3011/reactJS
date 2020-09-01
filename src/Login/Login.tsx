import React, { FC, useState } from "react";
import styled from "styled-components";
//import CardContainer from "../Card/CardContainer";
import Headline from "../Headline/Headline";
import {
  FormControl,
  InputLabel,
  Input,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
} from "@material-ui/core";

const Login: FC = () => {
  const [check, setCheck] = useState<boolean>(false);

  const checkSet = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCheck(event.target.checked);
  return (
    <ContainerStyled>
      <CardContainerStyled>
        <Headline title="Login" />
        <InputContainerStyled>
          <FormControl fullWidth>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input id="email" />
          </FormControl>
        </InputContainerStyled>
        <InputContainerStyled>
          <FormControl fullWidth margin="dense">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" />
          </FormControl>
        </InputContainerStyled>
        <InputContainerStyled>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={check}
                  onChange={checkSet}
                  name="rememberMe"
                />
              }
              label="Remember Me"
            />
          </FormGroup>
        </InputContainerStyled>
        <InputContainerStyled>
          <Button variant="contained" color="primary" fullWidth>
            Save
          </Button>
        </InputContainerStyled>
        <LinkStyled>
          Forgot <a href="jejeje"> Password ?</a>
        </LinkStyled>
      </CardContainerStyled>
    </ContainerStyled>
  );
};

export default Login;

const ContainerStyled = styled.div`
  background: rgba(0, 0, 100, 0.75);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainerStyled = styled.div`
  background: white;
  box-shadow: -2px 3px 7px 4px rgba(0, 0, 0, 0.75);
  width: 750px;
  padding: 35px;
  text-align: center;
`;

const InputContainerStyled = styled.div`
  padding-top: 20px;
`;

const LinkStyled = styled.div`
  text-align: right;
  padding-top: 20px;
`;
