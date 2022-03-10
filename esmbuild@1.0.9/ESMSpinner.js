var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/ESMSpinner.tsx
import React from "react";
import { motion } from "framer-motion";
function ESMSpinner({ color = "hsl(150, 100%, 50%)" }) {
  return /* @__PURE__ */ React.createElement(motion.div, {
    style: containerStyle,
    animate: { rotate: 360 },
    transition: { loop: Infinity, duration: 3, ease: "linear" }
  }, /* @__PURE__ */ React.createElement("div", {
    style: __spreadProps(__spreadValues({}, roundStyle), { background: color })
  }));
}
var containerStyle = {
  width: 100,
  height: 100,
  padding: 20
};
var roundStyle = {
  width: 10,
  height: 10
};
export {
  ESMSpinner
};
