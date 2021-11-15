type appLocalStorageType = 'username';

interface IAppLocalStorage {
  setItem(type: appLocalStorageType, value: string): void;
  removeItem(type: appLocalStorageType): void;
  clear(): void;
  getItem<T extends string>(type: appLocalStorageType): T;
}

export type { appLocalStorageType, IAppLocalStorage };
