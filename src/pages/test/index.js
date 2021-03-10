import React, { PureComponent } from 'react';

import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';

class Home extends PureComponent {
  render() {
    const Form = withTheme(AntDTheme);
    const schema = {
      type: "object",
      properties: {
        title: {
          type: "string"
        },
        done: {
          type: "boolean"
        }
      }
    };
    const formData = {
      title: "First task",
      done: true
    };
    const uiSchema = {
      done: {
        "ui:widget": "radio" // could also be "select"
      }
    };
    return (
      <div>
        <Form schema={schema} />
      </div>
    );
  }
}
export default Home;
