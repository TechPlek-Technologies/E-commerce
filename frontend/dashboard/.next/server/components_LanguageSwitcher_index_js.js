/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_LanguageSwitcher_index_js";
exports.ids = ["components_LanguageSwitcher_index_js"];
exports.modules = {

/***/ "./components/LanguageSwitcher/languageSwitcher.module.css":
/*!*****************************************************************!*\
  !*** ./components/LanguageSwitcher/languageSwitcher.module.css ***!
  \*****************************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"lang\": \"languageSwitcher_lang__oiaZA\",\n\t\"show\": \"languageSwitcher_show__IR_EQ\",\n\t\"disp\": \"languageSwitcher_disp__LWFuo\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhbmd1YWdlU3dpdGNoZXIvbGFuZ3VhZ2VTd2l0Y2hlci5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRfbGlmZS8uL2NvbXBvbmVudHMvTGFuZ3VhZ2VTd2l0Y2hlci9sYW5ndWFnZVN3aXRjaGVyLm1vZHVsZS5jc3M/ZTI3MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsYW5nXCI6IFwibGFuZ3VhZ2VTd2l0Y2hlcl9sYW5nX19vaWFaQVwiLFxuXHRcInNob3dcIjogXCJsYW5ndWFnZVN3aXRjaGVyX3Nob3dfX0lSX0VRXCIsXG5cdFwiZGlzcFwiOiBcImxhbmd1YWdlU3dpdGNoZXJfZGlzcF9fTFdGdW9cIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LanguageSwitcher/languageSwitcher.module.css\n");

/***/ }),

/***/ "./components/ClickOutside/index.js":
/*!******************************************!*\
  !*** ./components/ClickOutside/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst OutsideClickHandler = ({ show, onClickOutside, children })=>{\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            if (ref.current && !ref.current.contains(event.target)) {\n                onClickOutside && onClickOutside();\n            }\n        };\n        document.addEventListener(\"click\", handleClickOutside, true);\n        return ()=>{\n            document.removeEventListener(\"click\", handleClickOutside, true);\n        };\n    }, [\n        onClickOutside\n    ]);\n    if (!show) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\ClickOutside\\\\index.js\",\n        lineNumber: 19,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OutsideClickHandler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NsaWNrT3V0c2lkZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEM7QUFFMUMsTUFBTUUsc0JBQXNCLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxjQUFjLEVBQUVDLFFBQVEsRUFBRTtJQUM3RCxNQUFNQyxNQUFNTCw2Q0FBTUEsQ0FBQztJQUNuQkQsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxxQkFBcUIsQ0FBQ0M7WUFDMUIsSUFBSUYsSUFBSUcsT0FBTyxJQUFJLENBQUNILElBQUlHLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRixNQUFNRyxNQUFNLEdBQUc7Z0JBQ3REUCxrQkFBa0JBO1lBQ3BCO1FBQ0Y7UUFDQVEsU0FBU0MsZ0JBQWdCLENBQUMsU0FBU04sb0JBQW9CO1FBQ3ZELE9BQU87WUFDTEssU0FBU0UsbUJBQW1CLENBQUMsU0FBU1Asb0JBQW9CO1FBQzVEO0lBQ0YsR0FBRztRQUFDSDtLQUFlO0lBRW5CLElBQUksQ0FBQ0QsTUFBTSxPQUFPO0lBRWxCLHFCQUFPLDhEQUFDWTtRQUFJVCxLQUFLQTtrQkFBTUQ7Ozs7OztBQUN6QjtBQUVBLGlFQUFlSCxtQkFBbUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X2xpZmUvLi9jb21wb25lbnRzL0NsaWNrT3V0c2lkZS9pbmRleC5qcz9jMzM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE91dHNpZGVDbGlja0hhbmRsZXIgPSAoeyBzaG93LCBvbkNsaWNrT3V0c2lkZSwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAocmVmLmN1cnJlbnQgJiYgIXJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgb25DbGlja091dHNpZGUgJiYgb25DbGlja091dHNpZGUoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja091dHNpZGUsIHRydWUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tPdXRzaWRlLCB0cnVlKTtcbiAgICB9O1xuICB9LCBbb25DbGlja091dHNpZGVdKTtcblxuICBpZiAoIXNob3cpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiA8ZGl2IHJlZj17cmVmfT57Y2hpbGRyZW59PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3V0c2lkZUNsaWNrSGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJPdXRzaWRlQ2xpY2tIYW5kbGVyIiwic2hvdyIsIm9uQ2xpY2tPdXRzaWRlIiwiY2hpbGRyZW4iLCJyZWYiLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ClickOutside/index.js\n");

/***/ }),

/***/ "./components/LanguageSwitcher/index.js":
/*!**********************************************!*\
  !*** ./components/LanguageSwitcher/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LanguageSwitcher)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ni18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ni18n */ \"ni18n\");\n/* harmony import */ var ni18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ni18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _languageSwitcher_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./languageSwitcher.module.css */ \"./components/LanguageSwitcher/languageSwitcher.module.css\");\n/* harmony import */ var _languageSwitcher_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_languageSwitcher_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ClickOutside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ClickOutside */ \"./components/ClickOutside/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction LanguageSwitcher() {\n    const [lang, setLang] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const settings = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.settings);\n    const defaultLanguage = settings.settingsData.language;\n    const lists = [\n        {\n            name: \"English\",\n            id: \"en\",\n            flag: \"/images/flags/us.svg\"\n        },\n        {\n            name: \"বাংলা\",\n            id: \"bn\",\n            flag: \"/images/flags/bd.svg\"\n        },\n        {\n            name: \"العربية\",\n            id: \"ar\",\n            flag: \"/images/flags/ar.svg\"\n        },\n        {\n            name: \"Fran\\xe7ais\",\n            id: \"fr\",\n            flag: \"/images/flags/fr.svg\"\n        }\n    ];\n    (0,ni18n__WEBPACK_IMPORTED_MODULE_1__.useSyncLanguage)(lists[lang]?.id);\n    function handleClick(idx) {\n        try {\n            setLang(idx);\n            setShow(false);\n            const language = lists[idx]?.id || \"en\";\n            document.documentElement.lang = language;\n            // const body = document.getElementsByTagName(\"BODY\")[0];\n            // body.dir = language === (\"ar\" || \"he\") ? \"rtl\" : \"ltr\";\n            window?.localStorage.setItem(\"LANGUAGE\", language);\n        } catch (err) {\n            console.log(err.message);\n        }\n    }\n    function findId(code) {\n        return lists.findIndex((x)=>x.id === code);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        try {\n            const lang = window?.localStorage.getItem(\"LANGUAGE\");\n            if (lang && lang.length > 0) {\n                const id = findId(lang);\n                if (id > -1) {\n                    setLang(id);\n                    document.documentElement.lang = lists[id].id;\n                }\n            } else {\n                const id = findId(defaultLanguage);\n                if (id > -1) {\n                    setLang(id);\n                    document.documentElement.lang = lists[id].id;\n                }\n            }\n        } catch (err) {\n            console.log(err.message);\n        }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ClickOutside__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        show: true,\n        onClickOutside: ()=>setShow(false),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_languageSwitcher_module_css__WEBPACK_IMPORTED_MODULE_6___default().lang),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_languageSwitcher_module_css__WEBPACK_IMPORTED_MODULE_6___default().disp),\n                    onClick: ()=>setShow(!show),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            width: 18,\n                            height: 14,\n                            alt: lists[lang]?.name,\n                            src: `${\"http://localhost:5000\"}${lists[lang]?.flag}`\n                        }, void 0, false, {\n                            fileName: \"E:\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\LanguageSwitcher\\\\index.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: lists[lang]?.name\n                        }, void 0, false, {\n                            fileName: \"E:\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\LanguageSwitcher\\\\index.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\LanguageSwitcher\\\\index.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: show ? (_languageSwitcher_module_css__WEBPACK_IMPORTED_MODULE_6___default().show) : undefined,\n                    children: lists.map((data, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            onClick: ()=>handleClick(idx),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    width: 18,\n                                    height: 14,\n                                    alt: data.name,\n                                    src: `${\"http://localhost:5000\"}${data.flag}`\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\LanguageSwitcher\\\\index.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: data.name\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\LanguageSwitcher\\\\index.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, idx, true, {\n                            fileName: \"E:\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\LanguageSwitcher\\\\index.js\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"E:\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\LanguageSwitcher\\\\index.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\LanguageSwitcher\\\\index.js\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\LanguageSwitcher\\\\index.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHWCxXQUFXOUIsT0FBT1AsMEVBQU0sR0FBR2lEOzhCQUM1Qm5DLE1BQU1vQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTWhDLG9CQUNoQiw4REFBQ2lDOzRCQUFhYixTQUFTLElBQU1yQixZQUFZQzs7OENBQ3ZDLDhEQUFDbEIsbURBQUtBO29DQUNKdUMsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMsS0FBS1MsS0FBS3BDLElBQUk7b0NBQ2Q0QixLQUFLLENBQUMsRUFBRUMsdUJBQTJCLENBQUMsRUFBRU8sS0FBS2xDLElBQUksQ0FBQyxDQUFDOzs7Ozs7OENBRW5ELDhEQUFDOEI7OENBQU1JLEtBQUtwQyxJQUFJOzs7Ozs7OzJCQVBUSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3JCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dF9saWZlLy4vY29tcG9uZW50cy9MYW5ndWFnZVN3aXRjaGVyL2luZGV4LmpzPzA0ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3luY0xhbmd1YWdlIH0gZnJvbSBcIm5pMThuXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYyBmcm9tIFwiLi9sYW5ndWFnZVN3aXRjaGVyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IE91dHNpZGVDbGlja0hhbmRsZXIgZnJvbSBcIi4uL0NsaWNrT3V0c2lkZVwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZ3VhZ2VTd2l0Y2hlcigpIHtcbiAgY29uc3QgW2xhbmcsIHNldExhbmddID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2V0dGluZ3MgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNldHRpbmdzKTtcbiAgY29uc3QgZGVmYXVsdExhbmd1YWdlID0gc2V0dGluZ3Muc2V0dGluZ3NEYXRhLmxhbmd1YWdlO1xuICBjb25zdCBsaXN0cyA9IFtcbiAgICB7IG5hbWU6IFwiRW5nbGlzaFwiLCBpZDogXCJlblwiLCBmbGFnOiBcIi9pbWFnZXMvZmxhZ3MvdXMuc3ZnXCIgfSxcbiAgICB7IG5hbWU6IFwi4Kas4Ka+4KaC4Kay4Ka+XCIsIGlkOiBcImJuXCIsIGZsYWc6IFwiL2ltYWdlcy9mbGFncy9iZC5zdmdcIiB9LFxuICAgIHsgbmFtZTogXCLYp9mE2LnYsdio2YrYqVwiLCBpZDogXCJhclwiLCBmbGFnOiBcIi9pbWFnZXMvZmxhZ3MvYXIuc3ZnXCIgfSxcbiAgICB7IG5hbWU6IFwiRnJhbsOnYWlzXCIsIGlkOiBcImZyXCIsIGZsYWc6IFwiL2ltYWdlcy9mbGFncy9mci5zdmdcIiB9LFxuICBdO1xuICB1c2VTeW5jTGFuZ3VhZ2UobGlzdHNbbGFuZ10/LmlkKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhpZHgpIHtcbiAgICB0cnkge1xuICAgICAgc2V0TGFuZyhpZHgpO1xuICAgICAgc2V0U2hvdyhmYWxzZSk7XG4gICAgICBjb25zdCBsYW5ndWFnZSA9IGxpc3RzW2lkeF0/LmlkIHx8IFwiZW5cIjtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gbGFuZ3VhZ2U7XG4gICAgICAvLyBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJCT0RZXCIpWzBdO1xuICAgICAgLy8gYm9keS5kaXIgPSBsYW5ndWFnZSA9PT0gKFwiYXJcIiB8fCBcImhlXCIpID8gXCJydGxcIiA6IFwibHRyXCI7XG4gICAgICB3aW5kb3c/LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTEFOR1VBR0VcIiwgbGFuZ3VhZ2UpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRJZChjb2RlKSB7XG4gICAgcmV0dXJuIGxpc3RzLmZpbmRJbmRleCgoeCkgPT4geC5pZCA9PT0gY29kZSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBsYW5nID0gd2luZG93Py5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkxBTkdVQUdFXCIpO1xuICAgICAgaWYgKGxhbmcgJiYgbGFuZy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZmluZElkKGxhbmcpO1xuICAgICAgICBpZiAoaWQgPiAtMSkge1xuICAgICAgICAgIHNldExhbmcoaWQpO1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gbGlzdHNbaWRdLmlkO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpZCA9IGZpbmRJZChkZWZhdWx0TGFuZ3VhZ2UpO1xuICAgICAgICBpZiAoaWQgPiAtMSkge1xuICAgICAgICAgIHNldExhbmcoaWQpO1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gbGlzdHNbaWRdLmlkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPE91dHNpZGVDbGlja0hhbmRsZXIgc2hvdz17dHJ1ZX0gb25DbGlja091dHNpZGU9eygpID0+IHNldFNob3coZmFsc2UpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjLmxhbmd9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Yy5kaXNwfSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KCFzaG93KX0+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICB3aWR0aD17MTh9XG4gICAgICAgICAgICBoZWlnaHQ9ezE0fVxuICAgICAgICAgICAgYWx0PXtsaXN0c1tsYW5nXT8ubmFtZX1cbiAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMfSR7bGlzdHNbbGFuZ10/LmZsYWd9YH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuPntsaXN0c1tsYW5nXT8ubmFtZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzaG93ID8gYy5zaG93IDogdW5kZWZpbmVkfT5cbiAgICAgICAgICB7bGlzdHMubWFwKChkYXRhLCBpZHgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soaWR4KX0+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHdpZHRoPXsxOH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezE0fVxuICAgICAgICAgICAgICAgIGFsdD17ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMfSR7ZGF0YS5mbGFnfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuPntkYXRhLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvT3V0c2lkZUNsaWNrSGFuZGxlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTeW5jTGFuZ3VhZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImMiLCJJbWFnZSIsIk91dHNpZGVDbGlja0hhbmRsZXIiLCJ1c2VTZWxlY3RvciIsIkxhbmd1YWdlU3dpdGNoZXIiLCJsYW5nIiwic2V0TGFuZyIsInNob3ciLCJzZXRTaG93Iiwic2V0dGluZ3MiLCJzdGF0ZSIsImRlZmF1bHRMYW5ndWFnZSIsInNldHRpbmdzRGF0YSIsImxhbmd1YWdlIiwibGlzdHMiLCJuYW1lIiwiaWQiLCJmbGFnIiwiaGFuZGxlQ2xpY2siLCJpZHgiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImZpbmRJZCIsImNvZGUiLCJmaW5kSW5kZXgiLCJ4IiwiZ2V0SXRlbSIsImxlbmd0aCIsIm9uQ2xpY2tPdXRzaWRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGlzcCIsIm9uQ2xpY2siLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNyYyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19VUkwiLCJzcGFuIiwidWwiLCJ1bmRlZmluZWQiLCJtYXAiLCJkYXRhIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LanguageSwitcher/index.js\n");

/***/ })

};
;