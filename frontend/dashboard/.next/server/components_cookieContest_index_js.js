/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_cookieContest_index_js";
exports.ids = ["components_cookieContest_index_js"];
exports.modules = {

/***/ "./components/cookieContest/cookieContest.module.css":
/*!***********************************************************!*\
  !*** ./components/cookieContest/cookieContest.module.css ***!
  \***********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"cookieContest_wrapper__GVvr8\",\n\t\"card\": \"cookieContest_card__u5jiK\",\n\t\"content\": \"cookieContest_content__H1hUd\",\n\t\"text\": \"cookieContest_text__sFi_0\",\n\t\"button_container\": \"cookieContest_button_container__jPBOg\",\n\t\"accept_button\": \"cookieContest_accept_button__RfIlM\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nvb2tpZUNvbnRlc3QvY29va2llQ29udGVzdC5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRfbGlmZS8uL2NvbXBvbmVudHMvY29va2llQ29udGVzdC9jb29raWVDb250ZXN0Lm1vZHVsZS5jc3M/MGZjZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiY29va2llQ29udGVzdF93cmFwcGVyX19HVnZyOFwiLFxuXHRcImNhcmRcIjogXCJjb29raWVDb250ZXN0X2NhcmRfX3U1amlLXCIsXG5cdFwiY29udGVudFwiOiBcImNvb2tpZUNvbnRlc3RfY29udGVudF9fSDFoVWRcIixcblx0XCJ0ZXh0XCI6IFwiY29va2llQ29udGVzdF90ZXh0X19zRmlfMFwiLFxuXHRcImJ1dHRvbl9jb250YWluZXJcIjogXCJjb29raWVDb250ZXN0X2J1dHRvbl9jb250YWluZXJfX2pQQk9nXCIsXG5cdFwiYWNjZXB0X2J1dHRvblwiOiBcImNvb2tpZUNvbnRlc3RfYWNjZXB0X2J1dHRvbl9fUmZJbE1cIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cookieContest/cookieContest.module.css\n");

/***/ }),

/***/ "__barrel_optimize__?names=XLg!=!./node_modules/@styled-icons/bootstrap/index.esm.js":
/*!*******************************************************************************************!*\
  !*** __barrel_optimize__?names=XLg!=!./node_modules/@styled-icons/bootstrap/index.esm.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XLg: () => (/* reexport safe */ _XLg__WEBPACK_IMPORTED_MODULE_0__.XLg)
/* harmony export */ });
/* harmony import */ var _XLg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./XLg */ "./node_modules/@styled-icons/bootstrap/XLg/XLg.js");



/***/ }),

/***/ "./components/cookieContest/index.js":
/*!*******************************************!*\
  !*** ./components/cookieContest/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_XLg_styled_icons_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=XLg!=!@styled-icons/bootstrap */ \"__barrel_optimize__?names=XLg!=!./node_modules/@styled-icons/bootstrap/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _cookieContest_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cookieContest.module.css */ \"./components/cookieContest/cookieContest.module.css\");\n/* harmony import */ var _cookieContest_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cookieContest_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction CookieContest() {\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function hideCookieContest() {\n        setVisible(false);\n    }\n    function setCookie(name, value, extend) {\n        let dt = new Date();\n        dt.setTime(dt.getTime() + extend * 24 * 60 * 60 * 1000);\n        if (document) {\n            document.cookie = `${name}=${value};expires=${dt.toUTCString()};path=/;`;\n        }\n    }\n    function getCookie(name) {\n        const n = `${name}=`;\n        if (document) {\n            const dc = decodeURIComponent(document.cookie);\n            const accepted = dc.split(\";\");\n            for(var i = 0; i < accepted.length; i++){\n                var c = accepted[i];\n                while(c.charAt(0) === \" \"){\n                    c = c.substring(1);\n                }\n                if (c.indexOf(n) === 0) {\n                    return c.substring(n.length, c.length);\n                }\n            }\n            return \"\";\n        }\n    }\n    function acceptCookie() {\n        if (!getCookie(\"cookie_contest\")) {\n            setCookie(\"cookie_contest\", true, 30);\n            setVisible(false);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!getCookie(\"cookie_contest\")) {\n            setVisible(true);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: visible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_cookieContest_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_cookieContest_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_XLg_styled_icons_bootstrap__WEBPACK_IMPORTED_MODULE_3__.XLg, {\n                        width: 14,\n                        height: 14,\n                        onClick: hideCookieContest\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prasanjeet\\\\Desktop\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\cookieContest\\\\index.js\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_cookieContest_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_cookieContest_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cookies-popup-text-top\",\n                                    children: \"We use cookies to ensure that we give you the best experience on our website.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\prasanjeet\\\\Desktop\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\cookieContest\\\\index.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"For more info read\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\prasanjeet\\\\Desktop\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\cookieContest\\\\index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"\\xa0\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\prasanjeet\\\\Desktop\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\cookieContest\\\\index.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/privacy\",\n                                    target: \"_blank\",\n                                    children: \"Privacy policy\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\prasanjeet\\\\Desktop\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\cookieContest\\\\index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\prasanjeet\\\\Desktop\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\cookieContest\\\\index.js\",\n                            lineNumber: 55,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prasanjeet\\\\Desktop\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\cookieContest\\\\index.js\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_cookieContest_module_css__WEBPACK_IMPORTED_MODULE_2___default().button_container),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_cookieContest_module_css__WEBPACK_IMPORTED_MODULE_2___default().accept_button),\n                            onClick: acceptCookie,\n                            children: \"Close\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\prasanjeet\\\\Desktop\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\cookieContest\\\\index.js\",\n                            lineNumber: 68,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prasanjeet\\\\Desktop\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\cookieContest\\\\index.js\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\prasanjeet\\\\Desktop\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\cookieContest\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\prasanjeet\\\\Desktop\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\cookieContest\\\\index.js\",\n            lineNumber: 51,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CookieContest);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nvb2tpZUNvbnRlc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ0Y7QUFDSztBQUVqRCxTQUFTSTtJQUNQLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN2QyxTQUFTSztRQUNQRCxXQUFXO0lBQ2I7SUFFQSxTQUFTRSxVQUFVQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTTtRQUNwQyxJQUFJQyxLQUFLLElBQUlDO1FBQ2JELEdBQUdFLE9BQU8sQ0FBQ0YsR0FBR0csT0FBTyxLQUFLSixTQUFTLEtBQUssS0FBSyxLQUFLO1FBQ2xELElBQUlLLFVBQVU7WUFDWkEsU0FBU0MsTUFBTSxHQUFHLENBQUMsRUFBRVIsS0FBSyxDQUFDLEVBQUVDLE1BQU0sU0FBUyxFQUFFRSxHQUFHTSxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzFFO0lBQ0Y7SUFDQSxTQUFTQyxVQUFVVixJQUFJO1FBQ3JCLE1BQU1XLElBQUksQ0FBQyxFQUFFWCxLQUFLLENBQUMsQ0FBQztRQUNwQixJQUFJTyxVQUFVO1lBQ1osTUFBTUssS0FBS0MsbUJBQW1CTixTQUFTQyxNQUFNO1lBQzdDLE1BQU1NLFdBQVdGLEdBQUdHLEtBQUssQ0FBQztZQUMxQixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUYsU0FBU0csTUFBTSxFQUFFRCxJQUFLO2dCQUN4QyxJQUFJRSxJQUFJSixRQUFRLENBQUNFLEVBQUU7Z0JBQ25CLE1BQU9FLEVBQUVDLE1BQU0sQ0FBQyxPQUFPLElBQUs7b0JBQzFCRCxJQUFJQSxFQUFFRSxTQUFTLENBQUM7Z0JBQ2xCO2dCQUNBLElBQUlGLEVBQUVHLE9BQU8sQ0FBQ1YsT0FBTyxHQUFHO29CQUN0QixPQUFPTyxFQUFFRSxTQUFTLENBQUNULEVBQUVNLE1BQU0sRUFBRUMsRUFBRUQsTUFBTTtnQkFDdkM7WUFDRjtZQUNBLE9BQU87UUFDVDtJQUNGO0lBQ0EsU0FBU0s7UUFDUCxJQUFJLENBQUNaLFVBQVUsbUJBQW1CO1lBQ2hDWCxVQUFVLGtCQUFrQixNQUFNO1lBQ2xDRixXQUFXO1FBQ2I7SUFDRjtJQUVBTCxnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ2tCLFVBQVUsbUJBQW1CO1lBQ2hDYixXQUFXO1FBQ2I7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDR0QseUJBQ0MsOERBQUMyQjtZQUFJQyxXQUFXOUIsMEVBQWU7c0JBQzdCLDRFQUFDNkI7Z0JBQUlDLFdBQVc5Qix1RUFBWTs7a0NBQzFCLDhEQUFDSCxrRkFBR0E7d0JBQUNvQyxPQUFPO3dCQUFJQyxRQUFRO3dCQUFJQyxTQUFTL0I7Ozs7OztrQ0FDckMsOERBQUN5Qjt3QkFBSUMsV0FBVzlCLDBFQUFlO2tDQUM3Qiw0RUFBQzZCOzRCQUFJQyxXQUFXOUIsdUVBQVk7OzhDQUMxQiw4REFBQ3NDO29DQUFFUixXQUFVOzhDQUF5Qjs7Ozs7OzhDQUl0Qyw4REFBQ1M7OENBQUs7Ozs7Ozs4Q0FDTiw4REFBQ0E7OENBQUs7Ozs7Ozs4Q0FDTiw4REFBQ0M7b0NBQUVDLE1BQUs7b0NBQVdDLFFBQU87OENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUt2Qyw4REFBQ2I7d0JBQUlDLFdBQVc5QixtRkFBd0I7a0NBQ3RDLDRFQUFDNEM7NEJBQU9kLFdBQVc5QixnRkFBcUI7NEJBQUVtQyxTQUFTUDtzQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTL0U7QUFFQSxpRUFBZTNCLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X2xpZmUvLi9jb21wb25lbnRzL2Nvb2tpZUNvbnRlc3QvaW5kZXguanM/M2JiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBYTGcgfSBmcm9tIFwiQHN0eWxlZC1pY29ucy9ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9jb29raWVDb250ZXN0Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIENvb2tpZUNvbnRlc3QoKSB7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGZ1bmN0aW9uIGhpZGVDb29raWVDb250ZXN0KCkge1xyXG4gICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRDb29raWUobmFtZSwgdmFsdWUsIGV4dGVuZCkge1xyXG4gICAgbGV0IGR0ID0gbmV3IERhdGUoKTtcclxuICAgIGR0LnNldFRpbWUoZHQuZ2V0VGltZSgpICsgZXh0ZW5kICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcbiAgICBpZiAoZG9jdW1lbnQpIHtcclxuICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09JHt2YWx1ZX07ZXhwaXJlcz0ke2R0LnRvVVRDU3RyaW5nKCl9O3BhdGg9LztgO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xyXG4gICAgY29uc3QgbiA9IGAke25hbWV9PWA7XHJcbiAgICBpZiAoZG9jdW1lbnQpIHtcclxuICAgICAgY29uc3QgZGMgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcclxuICAgICAgY29uc3QgYWNjZXB0ZWQgPSBkYy5zcGxpdChcIjtcIik7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWNjZXB0ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgYyA9IGFjY2VwdGVkW2ldO1xyXG4gICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gXCIgXCIpIHtcclxuICAgICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGMuaW5kZXhPZihuKSA9PT0gMCkge1xyXG4gICAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG4ubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBhY2NlcHRDb29raWUoKSB7XHJcbiAgICBpZiAoIWdldENvb2tpZShcImNvb2tpZV9jb250ZXN0XCIpKSB7XHJcbiAgICAgIHNldENvb2tpZShcImNvb2tpZV9jb250ZXN0XCIsIHRydWUsIDMwKTtcclxuICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFnZXRDb29raWUoXCJjb29raWVfY29udGVzdFwiKSkge1xyXG4gICAgICBzZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt2aXNpYmxlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxyXG4gICAgICAgICAgICA8WExnIHdpZHRoPXsxNH0gaGVpZ2h0PXsxNH0gb25DbGljaz17aGlkZUNvb2tpZUNvbnRlc3R9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29va2llcy1wb3B1cC10ZXh0LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICBXZSB1c2UgY29va2llcyB0byBlbnN1cmUgdGhhdCB3ZSBnaXZlIHlvdSB0aGUgYmVzdCBleHBlcmllbmNlXHJcbiAgICAgICAgICAgICAgICAgIG9uIG91ciB3ZWJzaXRlLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Rm9yIG1vcmUgaW5mbyByZWFkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Jm5ic3A7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wcml2YWN5XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIFByaXZhY3kgcG9saWN5XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hY2NlcHRfYnV0dG9ufSBvbkNsaWNrPXthY2NlcHRDb29raWV9PlxyXG4gICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvb2tpZUNvbnRlc3Q7XHJcbiJdLCJuYW1lcyI6WyJYTGciLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNsYXNzZXMiLCJDb29raWVDb250ZXN0IiwidmlzaWJsZSIsInNldFZpc2libGUiLCJoaWRlQ29va2llQ29udGVzdCIsInNldENvb2tpZSIsIm5hbWUiLCJ2YWx1ZSIsImV4dGVuZCIsImR0IiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiZG9jdW1lbnQiLCJjb29raWUiLCJ0b1VUQ1N0cmluZyIsImdldENvb2tpZSIsIm4iLCJkYyIsImRlY29kZVVSSUNvbXBvbmVudCIsImFjY2VwdGVkIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJhY2NlcHRDb29raWUiLCJkaXYiLCJjbGFzc05hbWUiLCJ3cmFwcGVyIiwiY2FyZCIsIndpZHRoIiwiaGVpZ2h0Iiwib25DbGljayIsImNvbnRlbnQiLCJ0ZXh0IiwicCIsInNwYW4iLCJhIiwiaHJlZiIsInRhcmdldCIsImJ1dHRvbl9jb250YWluZXIiLCJidXR0b24iLCJhY2NlcHRfYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cookieContest/index.js\n");

/***/ })

};
;