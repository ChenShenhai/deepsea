import * as React from "react";

export interface IndexProps { compiler: string; framework: string; }

export const Index = (props: IndexProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;