import { Component } from '../interfaces';
import { CustomElement } from '../utils';

@CustomElement('main-root')
export class App extends Component {
	_connect() {
		this.$world = this.querySelector('#world');
		this.addEventListener('click', () => console.log(this.$world))
	}
	render() {
		return(
			`
				Hello 
				<span id="world">World!</span>	
			`
		);
	}
}
