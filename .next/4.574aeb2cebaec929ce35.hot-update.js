webpackHotUpdate(4,{

/***/ "./pages/controller/SearchInput.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UI_SearchInput__ = __webpack_require__("./pages/UI/SearchInput.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__ = __webpack_require__("./node_modules/next-redux-wrapper/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reduxjs_actions__ = __webpack_require__("./pages/reduxjs/actions.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



 // import { connect } from 'react-redux'



var mapStateToProps = function mapStateToProps(state, props) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(disptach) {
  return {
    setSearchKeyWords: function setSearchKeyWords(keyWords) {
      disptach(Object(__WEBPACK_IMPORTED_MODULE_3__reduxjs_actions__["a" /* updateKeyWords */])(keyWords));
    }
  };
};

var _default = __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default()(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__UI_SearchInput__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (_default); //SearchBar

;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "E:\\React\\exercise\\my-search-bar\\pages\\controller\\SearchInput.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "E:\\React\\exercise\\my-search-bar\\pages\\controller\\SearchInput.js");
  reactHotLoader.register(_default, "default", "E:\\React\\exercise\\my-search-bar\\pages\\controller\\SearchInput.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/controller\\SearchInput")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.574aeb2cebaec929ce35.hot-update.js.map