const statesAndLocal = require('./src/statesAndLocaGov.json');
/**
 * @function _lowerCase
 * @param {data} data
 * @returns {data}
 * @description Converts a data to lowercase
 */

const _lowerCase = (data) => {
	if (data) {
		return data.toLowerCase();
	}
	throw new Error('Please provide a state');
};

/**
 * @class Location
 * @description A class that contains methods for getting states and local government areas in Nigeria
 */
class Location {
	/**
	 * @method all
	 * @returns {array} An array of states in Nigeria
	 * @description Returns an array of states in Nigeria
	 * @example	Location.all();
	 */
	static all() {
		return statesAndLocal;
	}

	/**
	 * @method states
	 * @returns {array} An array of states in Nigeria
	 * @description Returns an array of states in Nigeria
	 * @example	Location.states();
	 */
	static states() {
		return statesAndLocal.map((cur) => cur.state);
	}

	/**
	 * @method findState
	 * @param {data} state
	 * @returns {object} An object containing the state and its local government areas
	 * @description Returns an object containing the state and its local government areas
	 * @example	Location.findState('Lagos');
	 */
	static findState(state) {
		const data = _lowerCase(state);

		return statesAndLocal.map((cur) => cur.state === data);
	}
}

module.exports = Location;
