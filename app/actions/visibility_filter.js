/**
 * フィルターする
 * @param {filter} filter
 */
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
