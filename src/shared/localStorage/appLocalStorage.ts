import { appLocalStorageType } from './type';

interface IAppLocalStorage {
  setItem(type: appLocalStorageType, value: string): void;
  removeItem(type: appLocalStorageType): void;
  clear(): void;
  getItem<T extends string>(type: appLocalStorageType): T;
}

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
