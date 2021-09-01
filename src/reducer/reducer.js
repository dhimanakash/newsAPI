export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      const newData = state.data;
      return {
        text: newData,
      };
    }
  }
};
