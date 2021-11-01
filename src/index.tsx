import * as ReactDOM from 'react-dom';

import {Provider, defaultTheme, Button} from '@adobe/react-spectrum';

function App() {
  return (
    <Provider theme={defaultTheme}>
      <Button variant="cta" onPress={() => alert('Hey there!')}>
        Hello React Spectrum!
      </Button>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
