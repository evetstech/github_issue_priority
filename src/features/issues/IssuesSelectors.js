export const getSelectedRepo = (state) => {
  return state.persistedReducer.issues.getIn(['selectedRepo']);
};