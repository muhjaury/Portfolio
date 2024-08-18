"use client";

import { Button } from "@/component";
import { useState } from "react";
import { ImageWrapper, LeftWrapper, RightWrapper, Wrapper } from "./_dashboard";
import LINKEDIN from "./../../assets/svg/icons8-linkedin.svg";
import GITHUB from "./../../assets/svg/icons8-github.svg";

function Dashboard() {
  const [count, setCount] = useState<number>(0);

  return (
    <Wrapper>
      <LeftWrapper>
        <ImageWrapper>
          <img src={LINKEDIN} alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={GITHUB} alt="" />
        </ImageWrapper>
      </LeftWrapper>
      <RightWrapper>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Contact me
        </Button>
      </RightWrapper>
    </Wrapper>
  );
}

export default Dashboard;
