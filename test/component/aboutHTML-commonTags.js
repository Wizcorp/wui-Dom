var assert = require('component/assert@0.5.0');
var WuiDom = require('../../index');

describe('common tags', function () {
	var HTML_BODY = window.document.body;
	var body = new WuiDom(HTML_BODY);
	var viewportClass = 'wuiDomCommon-tags';
	var viewport;

	viewport = body.createChild('div', { className: viewportClass });

	function getHTMLChildren(parentClassName) {
		return HTML_BODY.getElementsByClassName(parentClassName)[0].children;
	}

	function getHTMLFirstChild(parentClassName) {
		return getHTMLChildren(parentClassName)[0];
	}

	beforeEach(function () {
		// every it function clean the viewport
		viewport.clearContent();
	});

	it('should create <div>', function () {
		viewport.createChild('div', { className: 'theRainbow' });
		var firstChild = getHTMLFirstChild(viewportClass);
		assert.equal(firstChild.tagName, 'DIV');
	});

	it('should create <span>', function () {
		viewport.createChild('span', { className: 'theRainbow' });
		var firstChild = getHTMLFirstChild(viewportClass);
		assert.equal(firstChild.tagName, 'SPAN');
	});

	it('should create <a>', function () {
		viewport.createChild('a', { className: 'theRainbow' });
		var firstChild = getHTMLFirstChild(viewportClass);
		assert.equal(firstChild.tagName, 'A');
	});

	it('should create <li>', function () {
		viewport.createChild('li', { className: 'theRainbow' });
		var firstChild = getHTMLFirstChild(viewportClass);
		assert.equal(firstChild.tagName, 'LI');
	});

	it('should create <ul>', function () {
		viewport.createChild('ul', { className: 'theRainbow' });
		var firstChild = getHTMLFirstChild(viewportClass);
		assert.equal(firstChild.tagName, 'UL');
	});

	it('should create <input>', function () {
		viewport.createChild('input', { className: 'theRainbow' });
		var firstChild = getHTMLFirstChild(viewportClass);
		assert.equal(firstChild.tagName, 'INPUT');
	});

	it('should create <mikan>', function () {
		viewport.createChild('mikan', { className: 'theRainbow' });
		var firstChild = getHTMLFirstChild(viewportClass);
		assert.equal(firstChild.tagName, 'MIKAN');
	});
});
