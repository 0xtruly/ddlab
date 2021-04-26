/** Actions */
// SHOW_TOOLTIP
const showToolTipCard = () => ({
  type: 'SHOW_TOOLTIP',
  show: true,
});

// CLOSE_DRAWER
const hideToolTipCard = () => ({
  type: 'HIDE_TOOLTIP',
  show: false,
});

/** Reducer */
/* eslint-disable consistent-return */
// Tooltip Reducer
const tooltipReducer = (state = { showToolTip: false }, action) => {
  switch (action.type) {
    case 'SHOW_TOOLTIP':
      return {
        showToolTip: true,
      };
    case 'HIDE_TOOLTIP':
      return {
        showToolTip: false,
      };
    default:
      return state;
  }
};

export { showToolTipCard, hideToolTipCard, tooltipReducer };
