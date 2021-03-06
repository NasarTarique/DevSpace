import React, { useState, useEffect } from "react";
import cookie from "react-cookies";
import { connect } from "react-redux";
import {getAuthStatus} from "./actions/index"
import axios from "axios";
import {
  Center,
  Box,
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
  Heading,
} from "@chakra-ui/react";

function Login(props) {
  const [userdetails, setUser] = useState({
    username: "",
    password: "",
  });
  const onSubmit = () => {
    axios
      .post("/api/token/", {
        username: userdetails.username,
        password: userdetails.password,
      })
      .then((response) => {
			  setUser({
					  username: "",
					  password: ""
			  })
        cookie.save("tokens", response.data.access);
        cookie.save("refresh", response.data.refresh);
			  props.getAuthStatus(true);
      });
  };
  return (
    <Flex width="full" height="90vh" align="center" justifyContent="center">
      <Box
        p={6}
        width="300px"
        boxShadow="8px 8px 4px #00000011"
        bg="white"
        borderRadius="md"
      >
        <Box textAlign="center">
          <Heading color="teal.300">Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            {" "}
            <FormControl>
              {" "}
              <FormLabel color="teal.800">Username</FormLabel>{" "}
              <Input
                focusBorderColor="teal.200"
                placeholder="username"
                value={userdetails.username}
                onChange={(e) => {
                  setUser({
                    ...userdetails,
                    username: e.target.value,
                  });
                }}
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel color="teal.800">Password</FormLabel>
              <Input
                type="password"
                placeholder="password"
                focusBorderColor="teal.200"
                value={userdetails.password}
                onChange={(e) => {
                  setUser({
                    ...userdetails,
                    password: e.target.value,
                  });
                }}
              />
            </FormControl>
            <Button
              variant="outline"
              colorScheme="teal"
              width="full"
              mt={4}
              type="submit"
            >
              LOGIN
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

const mapStateToProps = (state) => {
  return {
		  authorised: state.auth.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
		  getAuthStatus: (data) => dispatch(getAuthStatus(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
