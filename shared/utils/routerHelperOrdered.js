/* eslint-disable no-param-reassign */

export default class RouterOrdered {
  orderedRequiredParams;

  orderedOptionalParams;

  routeBase;

  prefixName;

  defaultMap;

  constructor(base, required, optional, defaultMap) {
    this.routeBase = `/${base}`;
    this.orderedRequiredParams = required || [];
    this.orderedOptionalParams = optional || [];
    this.defaultMap = defaultMap;
  }

  getParams({ params }) {
    if (!params) return {};
    params = params.split('/');

    const result = {};
    this.orderedRequiredParams.map((param, i) => (result[param] = params[i]));
    const reqCount = this.orderedRequiredParams.length;
    this.orderedOptionalParams.map(
      (param, i) => (result[param] = params[reqCount + i]),
    );

    return result;
  }

  getRoute(params = {}) {
    let result = this.routeBase;
    this.orderedRequiredParams.map(
      param => (result += `/${params[param] || this.defaultMap[param]}`),
    );
    this.orderedOptionalParams.map(
      param => params[param] && (result += `/${params[param]}`),
    );
    return result;
  }

  getPath() {
    let result = this.routeBase;
    this.orderedRequiredParams.map(param => (result += `/:${param}`));
    this.orderedOptionalParams.map(param => (result += `/:${param}?`));
    return result;
  }
}
