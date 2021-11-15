import { appLocalStorageType, IAppLocalStorage } from './type';

const appLocalStorage: IAppLocalStorage = {
  setItem: function (type: appLocalStorageType, value: string): void {
    localStorage.setItem(type, value);
  },
  getItem: function <T extends string>(type: appLocalStorageType): T {
    return localStorage.getItem(type) as T;
  },
  removeItem: function (type: appLocalStorageType): void {
    localStorage.removeItem(type);
  },
  clear: function (): void {
    localStorage.clear();
  },
};

export default appLocalStorage;
