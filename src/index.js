import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const Entry = () => {
 return <App />;
};

export default Entry;
ReactDOM.render(<Entry />, document.getElementById('app'));
