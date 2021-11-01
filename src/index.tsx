import * as ReactDOM from 'react-dom';

import {Provider, defaultTheme, Button, ActionButton, TextField} from '@adobe/react-spectrum';

function App() {
  return (
    <Provider theme={defaultTheme}>
      <Button variant="cta" onPress={() => alert('Hey there!')}>
        Hello React Spectrum!
      </Button>
      <TextField
        label="Name"
        labelPosition="side"
        placeholder="John Smith"
        width="size-2000"
        />
      <ActionButton marginStart="size-150">Submit</ActionButton>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
