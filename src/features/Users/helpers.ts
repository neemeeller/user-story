/**
 * paramsInclude function allows filtering array over multiple columns parameters
 */
import { User } from '@types';

export const paramsInclude = (arrayToFilter: User[], params: (keyof User)[], searchStr: string) => {
  const value = searchStr.toLowerCase();

  return arrayToFilter.filter(elem =>
    params.some(param => {
      // Stringify value to allow filtering over numbers and objects in addition to strings
      const paramValue = JSON.stringify(elem[param]).toLowerCase();
      return paramValue.includes(value);
    })
  );
};
