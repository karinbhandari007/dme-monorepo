import * as React from 'react';
import { Label } from '@fluentui/react';
import { HelloWorld } from "@repo/ui/hello-world";

export interface IAppProps {
  name?: string;
}

export class App extends React.Component<IAppProps> {
  public render(): React.ReactNode {
    return (
      // <Label>
      //   {this.props.name}
      // </Label>
      <HelloWorld />
    )
  }
}
