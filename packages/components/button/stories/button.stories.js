import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import '@tw/elements';
import '@tw/elements.button';

storiesOf('ts-button', module)
	.addDecorator(withKnobs)
	.add('type', () => {
		const type = select(
			'Type',
			{
				Default: '',
				Primary: 'primary',
				Secondary: 'secondary',
				Text: 'text'
			},
			''
		);
		const lable = text('Lable', 'Button');
		return html`
			<ts-button type="${type}">${lable}</ts-button>
		`;
	});
