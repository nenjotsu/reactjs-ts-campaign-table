export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const domain = 'http://54.255.174.15:911/api/v1/rest/campaigns';

export const url = {
  getSingle: (id: string) => `${domain}/${id}`,
  findByName: (name: string) => `${domain}/find/${name}`,
  delete: (id: string) => `${domain}/${id}`,
  patch: (id: string) => `${domain}/${id}`,
  genericDomain: domain,
};

export const multiDispatch = ({ dispatch }: any) => (next: any) => (
  action: any,
) => {
  if (Array.isArray(action)) {
    return action.filter(Boolean).map(dispatch);
  }
  return next(action);
};

export const retryStrategy = (errors: any) =>
  errors
    .scan((_: any, value: number, index: number) => {
      if (index < 2) {
        return index;
      }
      throw value;
    })
    .delay(5000);

export const headersJson = {
  'Content-Type': 'application/json',
};

export enum TypeActions {
  epic = 'Epic',
  success = 'Success',
  cancel = 'Cancel',
  clear = 'Clear',
}
