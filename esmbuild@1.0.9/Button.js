// src/Button.tsx
import {
  createElement
} from "react";

// esbuild-css-modules-plugin-namespace:/tmp/tmp-1778-S4724mYE37KO/main/src/Button.modules.css.js
var digest = "1f306f9673c126b9fa8ca1ac6cdb3e9925ccbe4d7c8ed2ea520e61b6ef347d82";
var css = `._button_t43fw_1 {
  background-color: #005cfa;
  color: white;
}
`;
(function() {
  if (!document.getElementById(digest)) {
    var ele = document.createElement("style");
    ele.id = digest;
    ele.textContent = css;
    document.head.appendChild(ele);
  }
})();
var Button_modules_css_default = { "button": "_button_t43fw_1" };

// src/Button.tsx
function Button({ title = "Title" }) {
  return /* @__PURE__ */ createElement("button", {
    className: Button_modules_css_default.button
  }, title);
}
export {
  Button
};
