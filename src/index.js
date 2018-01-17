import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var authors = ["Stealthy Stegosaurus", "Tiny T-Rex", "Ivory Iguanodon"]

ReactDOM.render(<App 
	allAuthors={authors}
	/>, document.getElementById('root'));
registerServiceWorker();
