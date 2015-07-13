var assert = require('component/assert@0.5.0');
var WuiDom = require('../../index');

describe('about the html', function () {
	require('./aboutHTML-commonTags.js');

	var HTML_BODY = window.document.body;
	var body = new WuiDom(HTML_BODY);
	var viewportClass = 'wuiDomAbout-the-html';
	var viewport;

	viewport = body.createChild('div', { className: viewportClass });

	function getHTMLChildren(parentClassName) {
		return HTML_BODY.getElementsByClassName(parentClassName)[0].children;
	}

	beforeEach(function () {
		// every it function clean the viewport
		viewport.clearContent();
	});

	it('should create one elem', function () {
		viewport.createChild('div', { className: 'theRainbow' });
		var children = getHTMLChildren(viewportClass);
		assert.equal(children.length, 1);
	});

	it('should create two elems', function () {
		viewport.createChild('div', { className: 'theRainbow' });
		viewport.createChild('div', { className: 'theCosmos' });
		var children = getHTMLChildren(viewportClass);
		assert.equal(children.length, 2);
	});
});
