"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_Image_index_js";
exports.ids = ["components_Image_index_js"];
exports.modules = {

/***/ "./components/Image/index.js":
/*!***********************************!*\
  !*** ./components/Image/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageLoader)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ImageLoader({ src, alt, width, height, quality, className, style, id, mouseMove, mouseOut, click, priority }) {\n    const [imgSrc, set_imgSrc] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(src);\n    const placeholder = `${\"http://localhost:5000\"}/images/placeholder.jpg`;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        src: imgSrc,\n        alt: alt || src || \"\",\n        width: width || 100,\n        height: height || 100,\n        className: className || null,\n        style: style || null,\n        placeholder: width < 40 ? \"empty\" : \"blur\",\n        blurDataURL: placeholder,\n        id: id || null,\n        onMouseMove: mouseMove || null,\n        onMouseOut: mouseOut || null,\n        onClick: click || null,\n        quality: quality || null,\n        priority: priority || undefined,\n        onLoadingComplete: (result)=>{\n            if (result.naturalWidth === 0) {\n                // Broken image\n                set_imgSrc(placeholder);\n            }\n        },\n        onError: ()=>{\n            set_imgSrc(placeholder);\n        }\n    }, void 0, false, {\n        fileName: \"E:\\\\E-commerce\\\\frontend\\\\dashboard\\\\components\\\\Image\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0U7QUFFbEIsU0FBU0UsWUFBWSxFQUNsQ0MsR0FBRyxFQUNIQyxHQUFHLEVBQ0hDLEtBQUssRUFDTEMsTUFBTSxFQUNOQyxPQUFPLEVBQ1BDLFNBQVMsRUFDVEMsS0FBSyxFQUNMQyxFQUFFLEVBQ0ZDLFNBQVMsRUFDVEMsUUFBUSxFQUNSQyxLQUFLLEVBQ0xDLFFBQVEsRUFDVDtJQUNDLE1BQU0sQ0FBQ0MsUUFBUUMsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBQ0U7SUFDdEMsTUFBTWMsY0FBYyxDQUFDLEVBQUVDLHVCQUEyQixDQUFDLHVCQUF1QixDQUFDO0lBQzNFLHFCQUNFLDhEQUFDbEIsbURBQUtBO1FBQ0pHLEtBQUtZO1FBQ0xYLEtBQUtBLE9BQU9ELE9BQU87UUFDbkJFLE9BQU9BLFNBQVM7UUFDaEJDLFFBQVFBLFVBQVU7UUFDbEJFLFdBQVdBLGFBQWE7UUFDeEJDLE9BQU9BLFNBQVM7UUFDaEJRLGFBQWFaLFFBQVEsS0FBSyxVQUFVO1FBQ3BDZ0IsYUFBYUo7UUFDYlAsSUFBSUEsTUFBTTtRQUNWWSxhQUFhWCxhQUFhO1FBQzFCWSxZQUFZWCxZQUFZO1FBQ3hCWSxTQUFTWCxTQUFTO1FBQ2xCTixTQUFTQSxXQUFXO1FBQ3BCTyxVQUFVQSxZQUFZVztRQUN0QkMsbUJBQW1CLENBQUNDO1lBQ2xCLElBQUlBLE9BQU9DLFlBQVksS0FBSyxHQUFHO2dCQUM3QixlQUFlO2dCQUNmWixXQUFXQztZQUNiO1FBQ0Y7UUFDQVksU0FBUztZQUNQYixXQUFXQztRQUNiOzs7Ozs7QUFHTiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRfbGlmZS8uL2NvbXBvbmVudHMvSW1hZ2UvaW5kZXguanM/N2U5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlTG9hZGVyKHtcbiAgc3JjLFxuICBhbHQsXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIHF1YWxpdHksXG4gIGNsYXNzTmFtZSxcbiAgc3R5bGUsXG4gIGlkLFxuICBtb3VzZU1vdmUsXG4gIG1vdXNlT3V0LFxuICBjbGljayxcbiAgcHJpb3JpdHksXG59KSB7XG4gIGNvbnN0IFtpbWdTcmMsIHNldF9pbWdTcmNdID0gdXNlU3RhdGUoc3JjKTtcbiAgY29uc3QgcGxhY2Vob2xkZXIgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkx9L2ltYWdlcy9wbGFjZWhvbGRlci5qcGdgO1xuICByZXR1cm4gKFxuICAgIDxJbWFnZVxuICAgICAgc3JjPXtpbWdTcmN9XG4gICAgICBhbHQ9e2FsdCB8fCBzcmMgfHwgXCJcIn1cbiAgICAgIHdpZHRoPXt3aWR0aCB8fCAxMDB9XG4gICAgICBoZWlnaHQ9e2hlaWdodCB8fCAxMDB9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZSB8fCBudWxsfVxuICAgICAgc3R5bGU9e3N0eWxlIHx8IG51bGx9XG4gICAgICBwbGFjZWhvbGRlcj17d2lkdGggPCA0MCA/IFwiZW1wdHlcIiA6IFwiYmx1clwifVxuICAgICAgYmx1ckRhdGFVUkw9e3BsYWNlaG9sZGVyfVxuICAgICAgaWQ9e2lkIHx8IG51bGx9XG4gICAgICBvbk1vdXNlTW92ZT17bW91c2VNb3ZlIHx8IG51bGx9XG4gICAgICBvbk1vdXNlT3V0PXttb3VzZU91dCB8fCBudWxsfVxuICAgICAgb25DbGljaz17Y2xpY2sgfHwgbnVsbH1cbiAgICAgIHF1YWxpdHk9e3F1YWxpdHkgfHwgbnVsbH1cbiAgICAgIHByaW9yaXR5PXtwcmlvcml0eSB8fCB1bmRlZmluZWR9XG4gICAgICBvbkxvYWRpbmdDb21wbGV0ZT17KHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0Lm5hdHVyYWxXaWR0aCA9PT0gMCkge1xuICAgICAgICAgIC8vIEJyb2tlbiBpbWFnZVxuICAgICAgICAgIHNldF9pbWdTcmMocGxhY2Vob2xkZXIpO1xuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgb25FcnJvcj17KCkgPT4ge1xuICAgICAgICBzZXRfaW1nU3JjKHBsYWNlaG9sZGVyKTtcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwiSW1hZ2VMb2FkZXIiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInF1YWxpdHkiLCJjbGFzc05hbWUiLCJzdHlsZSIsImlkIiwibW91c2VNb3ZlIiwibW91c2VPdXQiLCJjbGljayIsInByaW9yaXR5IiwiaW1nU3JjIiwic2V0X2ltZ1NyYyIsInBsYWNlaG9sZGVyIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1VSTCIsImJsdXJEYXRhVVJMIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlT3V0Iiwib25DbGljayIsInVuZGVmaW5lZCIsIm9uTG9hZGluZ0NvbXBsZXRlIiwicmVzdWx0IiwibmF0dXJhbFdpZHRoIiwib25FcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Image/index.js\n");

/***/ })

};
;