/* eslint-disable no-undef */

export const localStorageTokenKey = 'api-token';

export function cleanAuthorizationCode() {
  localStorage.removeItem(localStorageTokenKey);
}

export function setAuthorizationCode(token) {
  localStorage.setItem(localStorageTokenKey, token);
}

export function getAuthorizationCode() {
  const code = localStorage.getItem(localStorageTokenKey);
  if (code) {
    return code;
  }
  return null;
}
