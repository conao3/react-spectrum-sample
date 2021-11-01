import * as React from 'react';
import * as ReactDOM from 'react-dom';

export const App: React.FC = () => {
    return <h1>Hello React</h1>;
};

ReactDOM.render(<App />, document.getElementById('root'));
