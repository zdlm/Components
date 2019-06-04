import { storiesOf } from '@storybook/html';
import '@tw/elements';
import '@tw/elements.{{kebabCase name}}';

storiesOf('ts-{{kebabCase name}}', module)
	.add('type=""', () => {
		const {{camelCase name}} = document.createElement('ts-{{kebabCase name}}');
		return {{camelCase name}};
	})
