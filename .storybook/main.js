module.exports = {
	addons: [
		'@storybook/preset-create-react-app',
		'@storybook/addon-knobs/register',
		'@storybook/addon-links/register',
		'@storybook/addon-actions/register',
		'@storybook/addon-a11y/register',
	],
	stories: ['../src/**/*.stories.[tj]sx'],
};
