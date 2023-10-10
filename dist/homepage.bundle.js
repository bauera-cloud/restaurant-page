/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* 
    <div id="content">
        <nav>
            <ul>
                <li><a href="" id="home">HOME</a></li>
                <li><a href="" id="menu">MENU</a></li>
                <li><a href="" id="about">ABOUT</a></li>
            </ul>
        </nav>
        <div id="main-content">
            <h1>LICENSE TO GRILL</h1>
        </div>
        <footer>
            <div>Copyright &copy 2023 bauera-cloud </div>
            <a href="https://github.com/bauera-cloud"><img id="githubImg" src="../src/github-mark-white.png"
                    alt="github-mark"></a>
        </footer>
    </div>
*/

// import { navbar, footerDiv } from "./partials";

let homepageContent = document.createElement('div')

//content
let mainContentDiv = document.createElement('div');
mainContentDiv.setAttribute('class', 'main-content');
mainContentDiv.setAttribute('id', 'homepage-content');
let restaurantName = document.createElement('h1');
restaurantName.textContent = 'LICENSE TO GRILL';
mainContentDiv.appendChild(restaurantName)


// console.log(navbar, footerDiv)
// homepageContent.appendChild(navbar)
// homepageContent.appendChild(mainContentDiv)
// homepageContent.appendChild(footerDiv)

// console.log(homepageContent)

// export default homepageContent

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainContentDiv);






/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxvQkFBb0I7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpRUFBZSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogXG4gICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiIGlkPVwiaG9tZVwiPkhPTUU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiIGlkPVwibWVudVwiPk1FTlU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiIGlkPVwiYWJvdXRcIj5BQk9VVDwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMT5MSUNFTlNFIFRPIEdSSUxMPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8ZGl2PkNvcHlyaWdodCAmY29weSAyMDIzIGJhdWVyYS1jbG91ZCA8L2Rpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYmF1ZXJhLWNsb3VkXCI+PGltZyBpZD1cImdpdGh1YkltZ1wiIHNyYz1cIi4uL3NyYy9naXRodWItbWFyay13aGl0ZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJnaXRodWItbWFya1wiPjwvYT5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4qL1xuXG4vLyBpbXBvcnQgeyBuYXZiYXIsIGZvb3RlckRpdiB9IGZyb20gXCIuL3BhcnRpYWxzXCI7XG5cbmxldCBob21lcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4vL2NvbnRlbnRcbmxldCBtYWluQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbkNvbnRlbnREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYWluLWNvbnRlbnQnKTtcbm1haW5Db250ZW50RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZXBhZ2UtY29udGVudCcpO1xubGV0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbnJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gJ0xJQ0VOU0UgVE8gR1JJTEwnO1xubWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpXG5cblxuLy8gY29uc29sZS5sb2cobmF2YmFyLCBmb290ZXJEaXYpXG4vLyBob21lcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2YmFyKVxuLy8gaG9tZXBhZ2VDb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50RGl2KVxuLy8gaG9tZXBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGZvb3RlckRpdilcblxuLy8gY29uc29sZS5sb2coaG9tZXBhZ2VDb250ZW50KVxuXG4vLyBleHBvcnQgZGVmYXVsdCBob21lcGFnZUNvbnRlbnRcblxuZXhwb3J0IGRlZmF1bHQgbWFpbkNvbnRlbnREaXZcblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=