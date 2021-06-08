/**
 *
 * @param {string} key
 * @param {any} value
 */

export function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 *
 * @param {string} key
 */
export function loadData(key) {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (error) {
    return undefined;
  }
}
