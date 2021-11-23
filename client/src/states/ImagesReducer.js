export default function ImagesReducer(state, action) {
      switch (action.type) {
        case "setImages":
          return setImages(action);
        default:
          throw new Error(`${action.type} action not found`);
      }
      function setImages(action) {
        const { images } = action;
        return images;
      }
}