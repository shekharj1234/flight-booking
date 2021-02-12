export const listDispatcher = (
  dispatch = () => {},
  response = {},
  actionType = ""
) => {
  dispatch({
    type: actionType,
    payLoad: response,
  });
};

export const flightListAction = (responseData) => (dispatch) => {
  listDispatcher(dispatch, responseData, "FLIGHT_LIST");
};
