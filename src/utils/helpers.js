import localStorage from "local-storage";

export const getEmptyPlaceholder = () => "–";

export const deepCopy = object => JSON.parse(JSON.stringify(object));

export const areEqualObjects = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);

export const isGreaterThan = (a, b) => (a > b ? 1 : a < b ? -1 : 0);

export const isLowerThan = (a, b) => (a < b ? 1 : a > b ? -1 : 0);

export const getMinValue = arrValues => Math.max.apply(Math, arrValues);

export const getMaxValue = arrValues => Math.max.apply(Math, arrValues);

export const sortByKey = (data, key, orderASC = true) =>
  !Array.isArray(data)
    ? data
    : data.sort((a, b) =>
        (orderASC ? isGreaterThan : isLowerThan)(a[key], b[key])
      );

export const getFormattedDateString = strDate => {
  const rgxDate = /(\d{4})[-/](\d{2})[-/](\d{2})/;
  return strDate.toString().replace(rgxDate, "$2/$3/$1");
};

export const getLocalStorageObject = (lsId, arrProps = []) => {
  const lsItem = localStorage.get(lsId);

  if (!lsItem) return null;

  if (arrProps.length === 0) return lsItem;

  const lsObject = {};
  for (const item of arrProps) {
    lsObject[item] = lsItem[item];
  }

  return lsObject;
};

export const setLocalStorageObject = (lsId, obj = {}) => {
  const lsObject = getLocalStorageObject(lsId);
  const newObj = lsObject ? lsObject : {};

  for (const [key, value] of Object.entries(obj)) {
    newObj[key] = value;
  }

  localStorage.set(lsId, newObj);

  return newObj;
};

export const fetchStoreRequest = (request, setter) => {
  setter({ loaded: false });
  request()
    .then(({ data }) => {
      setter({ data });
    })
    .catch(console.error)
    .finally(() => {
      setter({ loaded: true });
    });
};

export default {
  deepCopy,
  sortByKey,
  getMinValue,
  getMaxValue,
  isLowerThan,
  isGreaterThan,
  areEqualObjects,
  fetchStoreRequest,
  getEmptyPlaceholder,
  getLocalStorageObject,
  setLocalStorageObject,
  getFormattedDateString
};
