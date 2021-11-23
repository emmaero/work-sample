import React, { useContext, useEffect, useReducer } from "react";

import STORAGE_KEY from "../scripts/storageKey";
import ImagesReducer from "./ImagesReducer";
const ImagesContext = React.createContext(null);
export function ImagesProvider(props) {
  const [images, dispatch] = useReducer(ImagesReducer, loadImages(STORAGE_KEY));
  useEffect(() => saveImages(STORAGE_KEY, images), [images]);
  return (
    <ImagesContext.Provider value={{ images, dispatch }}>
      {props.children}
    </ImagesContext.Provider>
  );
}
export function useImages() {
  const context = useContext(ImagesContext);
  return context;
}
function loadImages(key) {
  return JSON.parse(sessionStorage.getItem(key));
}
function saveImages(key, images) {
 sessionStorage.setItem(key, JSON.stringify(images));
}
