const preprocess = require('svelte-preprocess');

module.exports = {
    disableDependencyReinclusion: ['@roxi/routify'],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
	}),
};
