import { Map } from 'immutable';

/**
 * Converts a plain JavaScript object into an Immutable Map.
 * @param {Object} object - The plain JavaScript object to convert.
 * @returns {Map} The Immutable Map.
 */
function getImmutableObject(object) {
  return Map(object);
}

module.exports = getImmutableObject;
