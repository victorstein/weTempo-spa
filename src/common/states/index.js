/**
 * @file common/states/index.js
 * @module common/states
 * @desc This is the encapsulation for all initial states
 * @since v1.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @return {Object} List of initial states
 */

// #region states
import drawerStates from "./drawerState";
// #endregion

export default {
  ...drawerStates
};
