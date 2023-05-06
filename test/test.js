'use-strict';
const assert = require('assert');
const naijaLocation = require('../index.js');
const stateAndLocal = require('../src/statesAndLocaGov.json');

describe('Nigeria-state-local-govt', () => {
	it('#all', () => {
		var response = naijaLocation.all();

		assert.strictEqual(response, stateAndLocal);
		assert.strictEqual(typeof response, typeof []);
		assert.strictEqual(response.length, 37);
		assert.strictEqual(response.length, stateAndLocal.length);
	});

	it('#states', () => {
		var response = naijaLocation.states();

		assert.strictEqual(typeof response, typeof []);
		assert.strictEqual(response.length, 37);
		assert.strictEqual(
			response.length,
			stateAndLocal.map((cur) => cur.state).length,
		);
	});

	it('#findState', () => {
		var response = naijaLocation.findState('Kebbi');

		assert.strictEqual(typeof response, typeof {});
		assert.strictEqual(response[0].length, stateAndLocal[0].length);
	});
});
