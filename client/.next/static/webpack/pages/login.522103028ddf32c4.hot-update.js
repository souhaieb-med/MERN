"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Login = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = ()=>{\n        e.preventDefault();\n        console.log(\"Submit\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row py-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 offset-md-3\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"text-muted\",\n                                    children: \"Email address\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\souha\\\\Desktop\\\\My-Github repos\\\\MERN\\\\client\\\\pages\\\\login.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\souha\\\\Desktop\\\\My-Github repos\\\\MERN\\\\client\\\\pages\\\\login.js\",\n                                lineNumber: 15,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: (e1)=>setEmail(e1.target.value),\n                                value: email,\n                                type: \"email\",\n                                className: \"form-control\",\n                                placeholder: \"Your Address Plz\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\souha\\\\Desktop\\\\My-Github repos\\\\MERN\\\\client\\\\pages\\\\login.js\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"form-text \",\n                                children: \"We'll never share your email with anyone else.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\souha\\\\Desktop\\\\My-Github repos\\\\MERN\\\\client\\\\pages\\\\login.js\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\souha\\\\Desktop\\\\My-Github repos\\\\MERN\\\\client\\\\pages\\\\login.js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"text-muted\",\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\souha\\\\Desktop\\\\My-Github repos\\\\MERN\\\\client\\\\pages\\\\login.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\souha\\\\Desktop\\\\My-Github repos\\\\MERN\\\\client\\\\pages\\\\login.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                className: \"form-control\",\n                                value: password,\n                                onChange: (e1)=>setPassword(e1.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\souha\\\\Desktop\\\\My-Github repos\\\\MERN\\\\client\\\\pages\\\\login.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\souha\\\\Desktop\\\\My-Github repos\\\\MERN\\\\client\\\\pages\\\\login.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn btn-primary col-12\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\souha\\\\Desktop\\\\My-Github repos\\\\MERN\\\\client\\\\pages\\\\login.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\souha\\\\Desktop\\\\My-Github repos\\\\MERN\\\\client\\\\pages\\\\login.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\souha\\\\Desktop\\\\My-Github repos\\\\MERN\\\\client\\\\pages\\\\login.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\souha\\\\Desktop\\\\My-Github repos\\\\MERN\\\\client\\\\pages\\\\login.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Login, \"3B3pqDcVnkT+z/sPK6Z9zQsLP+s=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWlDO0FBRWpDLE1BQU1DLFFBQVEsSUFBTTs7SUFDbEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNTSxlQUFlLElBQU07UUFDdkJDLEVBQUVDLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtJQUNFLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDQztnQkFBS0MsVUFBVVI7O2tDQUNkLDhEQUFDSzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNHOzBDQUNDLDRFQUFDQztvQ0FBTUosV0FBVTs4Q0FBYTs7Ozs7Ozs7Ozs7MENBRWhDLDhEQUFDSztnQ0FDQ0MsVUFBVSxDQUFDWCxLQUFNSixTQUFTSSxHQUFFWSxNQUFNLENBQUNDLEtBQUs7Z0NBQ3hDQSxPQUFPbEI7Z0NBQ1BtQixNQUFLO2dDQUNMVCxXQUFVO2dDQUNWVSxhQUFZOzs7Ozs7MENBRWQsOERBQUNYO2dDQUFJQyxXQUFVOzBDQUFhOzs7Ozs7Ozs7Ozs7a0NBSTlCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNHOzBDQUNDLDRFQUFDQztvQ0FBTUosV0FBVTs4Q0FBYTs7Ozs7Ozs7Ozs7MENBRWhDLDhEQUFDSztnQ0FDQ0ksTUFBSztnQ0FDTFQsV0FBVTtnQ0FDVlEsT0FBT2hCO2dDQUNQYyxVQUFVLENBQUNYLEtBQU1GLFlBQVlFLEdBQUVZLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7O2tDQUcvQyw4REFBQ0c7d0JBQU9GLE1BQUs7d0JBQVNULFdBQVU7a0NBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25FO0dBNUNNWDtLQUFBQTtBQThDTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbmNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiU3VibWl0XCIpXHJcbn1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktNVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIEFkZHJlc3MgUGx6XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXRleHQgXCI+XHJcbiAgICAgICAgICAgICAgV2UnbGwgbmV2ZXIgc2hhcmUgeW91ciBlbWFpbCB3aXRoIGFueW9uZSBlbHNlLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGNvbC0xMlwiPlxyXG4gICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxvZ2luIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0Iiwic21hbGwiLCJsYWJlbCIsImlucHV0Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

});