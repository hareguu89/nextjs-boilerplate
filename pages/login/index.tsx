import { useEffect, useRef } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import styled from "styled-components";
import Atoms from "@components/Atoms";
import Molecules from "@components/molecules";
import { login, Mutation } from "../../src/services";

type TUser = {
  email: string;
  password: string;
};

const Login = ({ data }: any) => {
  // https://react-query.tanstack.com/reference/useMutation
  const { mutateAsync } = useMutation(login, Mutation);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUser>();

  const emailRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register("email", {
    required: true,
    pattern: /^\S+@\S+$/i,
  });

  const OnSubmit: SubmitHandler<TUser> = auth => mutateAsync(auth);

  useEffect(() => {
    emailRef.current?.focus();
    console.log(data);
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit(OnSubmit)}>
        <Atoms.Div
          display="flex"
          padding="15px 0px"
          flexDirection="column"
          justifyContent="space-evenly"
          height="100%"
          gap="20px"
        >
          <Atoms.Div color="white" fontSize="sm">
            이메일
          </Atoms.Div>
          <Atoms.Input
            {...rest}
            ref={e => {
              ref(e);
              emailRef.current = e;
            }}
            type="email"
            placeholder="이메일을 입력해주세요."
            borderRadius="smd"
          />
          <Molecules.ErrorForm>
            {errors.email && "이메일 형식이 아닙니다."}
          </Molecules.ErrorForm>
          <Atoms.Div color="white" fontSize="sm">
            비밀번호
          </Atoms.Div>
          <Atoms.Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register("password", { required: true })}
            borderRadius="smd"
          />
          <Molecules.ErrorForm>
            {errors.password && "비밀번호는 필수입니다."}
          </Molecules.ErrorForm>
          <Atoms.Input type="submit" designType="submit" value="로그인" />
        </Atoms.Div>
      </Form>
    </>
  );
};

export async function getServerSideProps() {
  // 서버로 API 요청
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  const data = "hello";

  // Page 컴포넌트로 data 전달
  return { props: { data } };
}

export default Login;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20rem;
  letter-spacing: -0.05em;
  height: 40rem;
`;
