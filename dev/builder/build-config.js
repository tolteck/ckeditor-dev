/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* exported CKBUILDER_CONFIG */

var CKBUILDER_CONFIG = {
	skin: 'moono-lisa',
	preset: 'tolteck',
	ignore: [
		'bender.js',
		'bender.ci.js',
		'.bender',
		'bender-err.log',
		'bender-out.log',
		'.travis.yml',
		'dev',
		'docs',
		'.DS_Store',
		'.editorconfig',
		'.gitignore',
		'.gitattributes',
		'.github',
		'gruntfile.js',
		'.idea',
		'.jscsrc',
		'.jshintignore',
		'.jshintrc',
		'less',
		'.mailmap',
		'.nvmrc',
		'node_modules',
		'package.json',
		'README.md',
		'tests'
	],
	plugins: {
		basicstyles: 1,
		blockquote: 1,
		clipboard: 1,
		colorbutton: 1,
		colordialog: 1,
		div: 1,
		enterkey: 1,
		entities: 1,
		floatingspace: 1,
		font: 1,
		format: 1,
		horizontalrule: 1,
		htmlwriter: 1,
		indentlist: 1,
		indentblock: 1,
		justify: 1,
		list: 1,
		pagebreak: 1,
		pastetext: 1,
		editorplaceholder: 1,
		removeformat: 1,
		toolbar: 1,
		undo: 1,
	},
	languages : {
		'de': 1,
		'en': 1,
		'es': 1,
		'fr': 1,
		'it': 1,
		'pt': 1,
		'ru': 1,
	}
};
