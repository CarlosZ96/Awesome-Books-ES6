/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/book.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nconst form = document.querySelector('form');\r\nconst bookList = document.getElementById('bookList');\r\nconst menua = document.querySelector('.menua');\r\nconst menub = document.querySelector('.menub');\r\nconst menuc = document.querySelector('.menuc');\r\nconst main = document.querySelector('.list');\r\nconst add = document.querySelector('.add_new');\r\nconst contact = document.querySelector('.contact');\r\nconst books = [];\r\n\r\n\r\n\r\nconst Abooksa = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/book.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(books);\r\nAbooksa.local();\r\nAbooksa.displayBooks();\r\n\r\nform.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  const Abooksa = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/book.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(books);\r\n  Abooksa.submitbtn();\r\n  Abooksa.displayBooks();\r\n});\r\n\r\nbookList.addEventListener('click', (event) => {\r\n  if (event.target.classList.contains('removeBtn')) {\r\n    const { index } = event.target.dataset;\r\n    books.splice(index, 1);\r\n    localStorage.setItem('books', JSON.stringify(books));\r\n    const Abooksa = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/book.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(books);\r\n    Abooksa.displayBooks();\r\n  }\r\n});\r\nAbooksa.displayBooks();\r\n\r\nmenua.addEventListener('click', () => {\r\n  main.classList.toggle('hide');\r\n  add.classList.add('hide');\r\n  contact.classList.add('hide');\r\n});\r\nmenub.addEventListener('click', () => {\r\n  add.classList.toggle('hide');\r\n  main.classList.add('hide');\r\n  contact.classList.add('hide');\r\n});\r\nmenuc.addEventListener('click', () => {\r\n  contact.classList.toggle('hide');\r\n  main.classList.add('hide');\r\n  add.classList.add('hide');\r\n});\n\n//# sourceURL=webpack://awesome-books/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;