import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <h1>
    goodbye victoria and drew and will from this {props.compiler} and{" "}
    {props.framework}!
  </h1>
);
