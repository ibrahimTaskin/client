export const selectActivity = (activity) => {
  return {
    type: "ACTIVITY_SELECTED",
    payload: activity,
  };
};
