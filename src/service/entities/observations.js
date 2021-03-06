/**
 * @name Services/Observations
 * @memberof Entities
 * @type {Object}
 * @return {Object} List of cities services
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */
// #region common
import BaseService from "../common/baseService";
import { observationsEnd } from "../common/endpoints";
// #endregion

class ObservationsService extends BaseService {
  /**
   * @function
   * @name all
   * @memberof Services/Observations
   * @description load all observations by filter options
   * @param {OBJECT} filter - Attributes for filtering info
   */
  all = filter => this.get(observationsEnd.all, filter);
  /**
   * @function
   * @name add
   * @memberof Services/Observations
   * @description add an observations to a city
   * @param {OBJECT} filter - Attributes for filtering info
   */
  add = data =>
    this.post(observationsEnd.all, {
      model: {
        ...data
      }
    });
}

export default ObservationsService;
