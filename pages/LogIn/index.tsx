import React, { FormEvent, useCallback } from "react";
import {
  Wrapper,
  Header,
  Form,
  Lable,
  Input,
  LoginBtn,
  SearchBox,
  SubHeader,
} from "@pages/LogIn/styles";
import { Link } from "react-router-dom";
import axios from "axios";
import useInput from "@hooks/useInput";

const Login = () => {
  const [id, onChangeId, setId] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      axios
        .post(
          "",
          {
            id,
            password,
          },
          {}
        )

        .then((response) => {
          alert("성공");
        })
        .catch((error) => {
          alert("에러");
        });
    },
    [id, password]
  );

  return (
    <Wrapper>
      <Header>ALLPASSTIVAL</Header>
      <SubHeader>전국 모든 축제가 시작되는 공간</SubHeader>
      <Form onSubmit={onSubmit}>
        <Lable>
          <Input
            type="text"
            id="id"
            name="id"
            value={id}
            onChange={onChangeId}
            placeholder="아이디"
          />
        </Lable>
        <Lable>
          <Input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호"
          />
        </Lable>
        <SearchBox>
          <span>
            <Link to="/signup">회원 가입</Link>
          </span>
          <span>아이디/비밀번호 찾기</span>
        </SearchBox>
        <LoginBtn onClick={onSubmit}>로그인</LoginBtn>
      </Form>
    </Wrapper>
  );
};

export default Login;
