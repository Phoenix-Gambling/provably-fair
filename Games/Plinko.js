import Seed from "../utils/Seed";

/**
 * Verifies a plinko game.
 * @class
 */
export default class Plinko {

    /**
     * Verifies a plinko game by returning the 16 chosen directions for a given seed_data object.
     * @param {Object} seed_data
     * @param {string} seed_data.serverSeed
     * @param {string} seed_data.clientSeeed
     * @param {integer} seed_data.nonce
     * @param {integer} pins
     * @return {integer} The bucket
     */
    verify(seed_data, pins) {
        return Math.floor(Seed.extractFloat(seed_data) * (pins + 1));
    }

}
