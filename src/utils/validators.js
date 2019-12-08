import Regex from './regularExpressions';

export const isNull = (value) => value === null;
export const isUndefined = (value) => value === undefined;
export const isNullOrUndefined = (value) => isNull(value) || isUndefined(value);
export const isObject = (value) => typeof value === 'object';
export const isString = (value) => typeof value === 'string';
export const isNumber = (value) => isNaN(+value);
export const isTimeString = (value) => Regex.timeString.test(value);
export const isUrl = (value) => Regex.validUrl.test(value);

export default {
  isNull,
  isUndefined,
  isNullOrUndefined,
  isObject,
  isString,
  isNumber,
  isTimeString,
  isUrl
};
