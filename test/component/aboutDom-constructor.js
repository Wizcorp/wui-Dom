var assert = require('component/assert@0.5.0');
var WuiDom = require('../../index');

describe('constructor', function () {
	it('rootElement should be not null', function () {
		var wuiDom = new WuiDom('div');
		assert.notEqual(wuiDom.rootElement, null);
	});

	it('should throws a error if rootElement already exist', function () {
		var wuiDom = new WuiDom('div');
		assert.throws(function () {
			wuiDom._assign('div');
		});
	});

	it('should create HTML tag <div>', function () {
		var wuiDom = new WuiDom('div');
		assert.equal(wuiDom.rootElement.tagName, 'DIV');
	});

	it('should create HTML tag <input>', function () {
		var wuiDom = new WuiDom('input');
		assert.equal(wuiDom.rootElement.tagName, 'INPUT');
	});

	it('should give a className', function () {
		var wuiDom = new WuiDom('div', { className: 'pink' });
		assert.equal(wuiDom.rootElement.className, 'pink');
	});

	it('should give the attr placeholder and type', function () {
		var wuiDom = new WuiDom('input', { attr: { placeholder: 0, type: 'number' }});
		assert.equal(wuiDom.rootElement.placeholder, 0);
		assert.equal(wuiDom.rootElement.type, 'number');
	});

	it('should give a style (color)', function () {
		var wuiDom = new WuiDom('span', { style: { color: '#F00' }});
		assert.equal(wuiDom.rootElement.style.color, 'rgb(255, 0, 0)');
	});

	it('should have text', function () {
		var wuiDom = new WuiDom('div', { text: 'The cake is a lie' });
		assert.equal(wuiDom.rootElement.innerHTML, 'The cake is a lie');
	});

	it('should wuiDomify the <body>', function () {
		var wuiDom = new WuiDom(window.document.body);
		assert.equal(wuiDom.rootElement.tagName, 'BODY');
		assert.equal(wuiDom.rootElement.parentElement.tagName, 'HTML');
	});

	it('should throw an error if tagName is not string', function () {
		var tmp;
		assert.throws(function () {
			tmp = new WuiDom(10);  // number
		});
		assert.throws(function () {
			tmp = new WuiDom(['a', 'b']); // array
		});
		assert.throws(function () {
			tmp = new WuiDom({ a: 10 }); // object
		});
		assert.throws(function () {
			tmp = new WuiDom(function () {}); // function
		});

		// string should be ok
		assert.doesNotThrow(function () {
			tmp = new WuiDom('mikan');
		});
	});

	it('should have a name', function () {
		var wuiDom = new WuiDom('div', { name: 'test' });
		assert.equal(wuiDom.getWuiName(), 'test');
	});

	it('should be hidden', function () {
		var wuiDom = new WuiDom('div', { hidden: true });
		assert.equal(wuiDom.rootElement.style.display, 'none');
	});
});
