/* eslint-disable no-param-reassign */

const add = (params, toAdd) =>
  Object.keys(toAdd).reduce(
    (obj, key) => {
      obj[key] = [...(params[key] || []), ...toAdd[key]];
      return obj;
    },
    { ...params },
  );

const remove = (params, toRemove) =>
  Object.keys(params).reduce((obj, key) => {
    if (toRemove[key]) {
      const arr = params[key].filter(v => toRemove[key].indexOf(v) < 0);
      if (arr.length) obj[key] = arr;
    } else {
      obj[key] = params[key];
    }
    return obj;
  }, {});

export default class RouterNamed {
  orderedPermittedParams;

  routeBase;

  prefixName;

  constructor(base, params, { prefix, translations } = {}) {
    this.routeBase = `/${base}`;
    this.orderedPermittedParams = params;
    this.prefixName = prefix || 'prefix';
    this.orderedTranslations = translations || params;
  }

  getParams({ params }) {
    if (!params) return {};
    params = params.split('/');

    let lastIndex;
    const result = this.orderedTranslations.reduce((obj, param, i) => {
      const index = params.indexOf(param);
      if (index < 0) return obj;
      if (index > 0) {
        if (lastIndex === undefined)
          obj[this.prefixName] = params.splice(0, index);
        else
          obj[this.orderedPermittedParams[lastIndex]] = params.splice(0, index);
      }
      lastIndex = i;
      params.splice(0, 1);
      return obj;
    }, {});
    if (lastIndex !== undefined)
      result[this.orderedPermittedParams[lastIndex]] = params.splice(0);
    else result[this.prefixName] = params.splice(0);
    return result;
  }

  getRoute(params = {}, { toAdd, toRemove } = {}) {
    let result = this.routeBase;
    if (toAdd) params = add(params, toAdd);
    if (toRemove) params = remove(params, toRemove);
    const prefix = params[this.prefixName];
    if (prefix) result += `/${prefix}`;
    this.orderedPermittedParams.map((param, i) => {
      const values = params[param];
      if (!values || values.length === 0) return null;
      result += `/${this.orderedTranslations[i]}/${values.sort().join('/')}`;
      return null;
    });
    return result;
  }

  getPath() {
    if (this.orderedPermittedParams) return `${this.routeBase}/:params(.*)?`;
    return this.routeBase;
  }
}
