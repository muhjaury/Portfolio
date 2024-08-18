"use client";

import { Button } from "@/component";
import { useState } from "react";
import { Wrapper } from "./_dashboard";

function Dashboard() {
  const [count, setCount] = useState<number>(0);

  return (
    <Wrapper>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Contact me
      </Button>
    </Wrapper>
  );
}

export default Dashboard;
