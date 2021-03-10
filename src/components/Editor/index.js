import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

const Editor = props => {
  const [data, setData] = useState('');

  useEffect(() => {
    window.addEventListener(
      'message',
      event => {
        if (event) {
          setData(localStorage.getItem('json-diagram'));
        }
      },
      false
    );
  }, []);

  return (
    <AceEditor
      placeholder="Placeholder Text"
      mode="mysql"
      theme="monokai"
      name="blah2"
      width="100%"
      height="100%"
      //   onLoad={this.onLoad}
      //   onChange={this.onChange}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={data}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};
export default Editor;
