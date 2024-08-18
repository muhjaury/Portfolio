import { Content, Wrapper } from "./_button";

const Button = (props: any) => {
  return (
    <Wrapper>
      <Content {...props}>{props.children}</Content>
    </Wrapper>
  );
};

export default Button;
