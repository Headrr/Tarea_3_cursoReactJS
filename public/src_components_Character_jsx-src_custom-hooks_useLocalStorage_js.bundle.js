"use strict";
(self["webpackChunkredux_app"] = self["webpackChunkredux_app"] || []).push([["src_components_Character_jsx-src_custom-hooks_useLocalStorage_js"],{

/***/ "./src/assets/static/icons/close.svg":
/*!*******************************************!*\
  !*** ./src/assets/static/icons/close.svg ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgClose(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 47.971 47.971"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgClose);

/***/ }),

/***/ "./src/assets/static/icons/star.svg":
/*!******************************************!*\
  !*** ./src/assets/static/icons/star.svg ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgStar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 49.94 49.94"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M48.856 22.73a3.56 3.56 0 00.906-3.671 3.56 3.56 0 00-2.892-2.438l-12.092-1.757a1.58 1.58 0 01-1.19-.865L28.182 3.043a3.56 3.56 0 00-3.212-1.996 3.56 3.56 0 00-3.211 1.996L16.352 14c-.23.467-.676.79-1.191.865L3.069 16.622A3.56 3.56 0 00.177 19.06a3.56 3.56 0 00.906 3.671l8.749 8.528c.373.364.544.888.456 1.4L8.224 44.701a3.506 3.506 0 00.781 2.904c1.066 1.267 2.927 1.653 4.415.871l10.814-5.686a1.619 1.619 0 011.472 0l10.815 5.686a3.544 3.544 0 001.666.417c1.057 0 2.059-.47 2.748-1.288a3.505 3.505 0 00.781-2.904l-2.065-12.042a1.582 1.582 0 01.456-1.4l8.749-8.529z"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgStar);

/***/ }),

/***/ "./src/components/Character.jsx":
/*!**************************************!*\
  !*** ./src/components/Character.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _assets_styles_components_Character_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/styles/components/Character.scss */ "./src/assets/styles/components/Character.scss");
/* harmony import */ var _assets_static_icons_star_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/static/icons/star.svg */ "./src/assets/static/icons/star.svg");
/* harmony import */ var _CharacterDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CharacterDetail */ "./src/components/CharacterDetail.jsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal.jsx");
/* harmony import */ var _custom_hooks_useModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../custom-hooks/useModal */ "./src/custom-hooks/useModal.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





 // import { ReactComponent as SVGStar } from "../assets/static/icons/star.svg"






var Character = function Character(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      favorite = _useState2[0],
      setFavorite = _useState2[1];

  var _useModal = (0,_custom_hooks_useModal__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      modal = _useModal.modal,
      handleCloseModal = _useModal.handleCloseModal,
      handleOpenModal = _useModal.handleOpenModal;

  var data = props.data,
      favoriteCharacters = props.favoriteCharacters;
  var id = data.id,
      image = data.image,
      name = data.name,
      status = data.status,
      species = data.species,
      gender = data.gender;

  var handleSetFavorite = function handleSetFavorite() {
    props.setFavorite({
      data: data
    });
    setFavorite(true);
  };

  var isFavorite = function isFavorite() {
    var result = favoriteCharacters.filter(function (favoriteCharacter) {
      return favoriteCharacter.data.id === id;
    });

    if (result.length) {
      setFavorite(true);
    }
  };

  var handleDeleteFavorite = function handleDeleteFavorite(itemId) {
    props.deleteFavorite(itemId);
    setFavorite(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isFavorite();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "character"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "character__img",
    src: image,
    alt: "Character"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "character__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "character__details-name"
  }, name), favorite ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_assets_static_icons_star_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: function onClick() {
      return handleDeleteFavorite(id);
    },
    className: "character__details-star favorite"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_assets_static_icons_star_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleSetFavorite,
    className: "character__details-star noFavorite"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "character__details__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "character__details__item-type"
  }, "Status: "), " ", status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "character__details__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "character__details__item-type"
  }, "Species: "), " ", species), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "character__details__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "character__details__item-type"
  }, "Gender: "), " ", gender), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    onClick: handleOpenModal,
    className: "character__details__item-more"
  }, "More details...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isOpen: modal,
    onClose: handleCloseModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CharacterDetail__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data
  })));
}; // DOCUMENTACIÓN PROP-TYPE


Character.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  modal: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  favorite: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
}; // DEFINICIONES NATIVAS DE REDUX

var mapStateToProps = function mapStateToProps(state) {
  return {
    favoriteCharacters: state.favoriteCharacters
  };
};

var mapDispatchToProps = {
  setFavorite: _actions__WEBPACK_IMPORTED_MODULE_3__.setFavorite,
  deleteFavorite: _actions__WEBPACK_IMPORTED_MODULE_3__.deleteFavorite
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Character));

/***/ }),

/***/ "./src/components/CharacterDetail.jsx":
/*!********************************************!*\
  !*** ./src/components/CharacterDetail.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_styles_components_CharacterDetail_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/components/CharacterDetail.scss */ "./src/assets/styles/components/CharacterDetail.scss");



var CharacterDetail = function CharacterDetail(prop) {
  var data = prop.data;
  var image = data.image,
      name = data.name,
      status = data.status,
      species = data.species,
      gender = data.gender,
      origin = data.origin,
      location = data.location,
      episode = data.episode;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "characterDetail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "characterDetail-img",
    src: image,
    alt: "Character"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "characterDetail__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "characterDetail-name"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "characterDetail__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "characterDetail__item-type"
  }, "Status:"), " ", status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "characterDetail__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "characterDetail__item-type"
  }, "Species:"), " ", species), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "characterDetail__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "characterDetail__item-type"
  }, "Gender:"), " ", gender), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "characterDetail__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "characterDetail__item-type"
  }, "Origin:"), " ", origin.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "characterDetail__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "characterDetail__item-type"
  }, "Location:"), " ", location.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "characterDetail__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "characterDetail__item-type"
  }, "Episodes:"), " ", episode.length)));
};

/* harmony default export */ __webpack_exports__["default"] = (CharacterDetail);

/***/ }),

/***/ "./src/components/Modal.jsx":
/*!**********************************!*\
  !*** ./src/components/Modal.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _assets_styles_components_Modal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/styles/components/Modal.scss */ "./src/assets/styles/components/Modal.scss");
/* harmony import */ var _assets_static_icons_close_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/static/icons/close.svg */ "./src/assets/static/icons/close.svg");


 // import { ReactComponent as SVGClose } from "../assets/static/icons/close.svg";



var Modal = function Modal(props) {
  return props.isOpen ? /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("figure", {
    className: "modal__close",
    onClick: props.onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_assets_static_icons_close_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "modal__close-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal__container"
  }, props.children)), document.getElementById("modal")) : "";
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/custom-hooks/useLocalStorage.js":
/*!*********************************************!*\
  !*** ./src/custom-hooks/useLocalStorage.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useLocalStorage": function() { return /* binding */ useLocalStorage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useLocalStorage(key, initialValue) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    try {
      var item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      return initialValue;
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      storedValue = _useState2[0],
      setStoredValue = _useState2[1];

  var setValue = function setValue(value) {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };

  return [storedValue, setValue];
}

/***/ }),

/***/ "./src/custom-hooks/useModal.js":
/*!**************************************!*\
  !*** ./src/custom-hooks/useModal.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useModal = function useModal() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var handleCloseModal = function handleCloseModal() {
    setModal(false);
  };

  var handleOpenModal = function handleOpenModal() {
    setModal(true);
  };

  return {
    modal: modal,
    handleCloseModal: handleCloseModal,
    handleOpenModal: handleOpenModal
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useModal);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/Character.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/Character.scss ***!
  \**********************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box; }\n\na:link,\na:visited {\n  color: inherit;\n  text-decoration: none; }\n\nbody {\n  margin: 0;\n  background-color: #000000;\n  color: #ffffff;\n  font-family: \"Source Sans Pro\", sans-serif; }\n\nh1,\nh2,\nh3,\nh3,\nh4,\nh5,\nh6 {\n  color: #65fafb;\n  font-family: \"Oswald\", sans-serif; }\n\nfigure {\n  margin: 0;\n  padding: 0; }\n\nsection {\n  min-height: calc(100vh - 300px); }\n\n.character {\n  width: 300px;\n  margin: 25px;\n  border-radius: 15px;\n  overflow: hidden; }\n\n.character__img {\n  width: 300px;\n  height: 300px; }\n\n.character__details {\n  padding: 35px 15px 10px;\n  margin-top: -35px;\n  background-color: #fc859e; }\n\n.character__details-star {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  position: relative;\n  top: -25px;\n  left: 245px; }\n\n.character__details-star.favorite {\n  fill: #faf76a; }\n\n.character__details-star.favorite:hover {\n  fill: #ffffff; }\n\n.character__details-star.noFavorite {\n  fill: #ffffff; }\n\n.character__details-star.noFavorite:hover {\n  fill: #faf76a; }\n\n.character__details-name {\n  margin: 0;\n  margin-top: 20px;\n  text-align: center;\n  font-size: 21px; }\n\n.character__details__item {\n  margin: 5px 0; }\n\n.character__details__item-more {\n  text-align: end; }\n\n.character__details__item-more:hover {\n  cursor: pointer;\n  color: #62c241; }\n\n.character__details__item-type {\n  color: #faf76a;\n  font-weight: bolder; }\n", "",{"version":3,"sources":["webpack://./src/assets/styles/App.scss","webpack://./src/assets/styles/Vars.scss","webpack://./src/assets/styles/components/Character.scss"],"names":[],"mappings":"AA2BA;EACE,sBAAsB,EAAA;;AAGxB;;EAEE,cAAc;EACd,qBAAqB,EAAA;;AAGvB;EACE,SAAS;EACT,yBC7BkB;ED8BlB,cC7BmB;ED8BnB,0CCrCuC,EAAA;;ADwCzC;;;;;;;EAOE,cC5CqB;ED6CrB,iCCjD+B,EAAA;;ADoDjC;EACE,SAAS;EACT,UAAU,EAAA;;AAGZ;EACE,+BAA+B,EAAA;;AE3DjC;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,gBAAgB,EAAA;;AAGlB;EACE,YAAY;EACZ,aAAa,EAAA;;AAGf;EACE,uBAAuB;EACvB,iBAAiB;EACjB,yBDLoB,EAAA;;ACQtB;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,WAAW,EAAA;;AAGb;EACE,aDrBqB,EAAA;;ACwBvB;EACE,aDvBmB,EAAA;;AC0BrB;EACE,aD3BmB,EAAA;;AC8BrB;EACE,aDjCqB,EAAA;;ACoCvB;EACE,SAAS;EACT,gBAAgB;EAChB,kBAAkB;EAClB,eAAe,EAAA;;AAGjB;EACE,aAAa,EAAA;;AAGf;EACE,eAAe,EAAA;;AAGjB;EACE,eAAe;EACf,cDtDuB,EAAA;;ACyDzB;EACE,cDzDqB;EC0DrB,mBAAmB,EAAA","sourcesContent":["@import './Vars.scss';\r\n\r\n@mixin colCenCen {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n@mixin flexBetCen {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n@mixin flexCenCen {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@mixin flexStaSta {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\na:link,\r\na:visited {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: $dark-color;\r\n  color: $light-color;\r\n  font-family: $text-font;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  color: $primary-color;\r\n  font-family: $title-font;\r\n}\r\n\r\nfigure {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nsection {\r\n  min-height: calc(100vh - 300px);\r\n}\r\n","@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);\r\n\r\n//Fonts\r\n$title-font: 'Oswald', sans-serif;\r\n$text-font: 'Source Sans Pro', sans-serif;\r\n\r\n//Colors\r\n$primary-color: #65fafb;\r\n$secondary-color: #62c241;\r\n$success-color: #faf76a;\r\n$dark-color: #000000;\r\n$light-color: #ffffff;\r\n$danger-color: #fc859e;\r\n","@import '../App.scss';\r\n\r\n.character {\r\n  width: 300px;\r\n  margin: 25px;\r\n  border-radius: 15px;\r\n  overflow: hidden;\r\n}\r\n\r\n.character__img {\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n\r\n.character__details {\r\n  padding: 35px 15px 10px;\r\n  margin-top: -35px;\r\n  background-color: $danger-color;\r\n}\r\n\r\n.character__details-star {\r\n  cursor: pointer;\r\n  width: 20px;\r\n  height: 20px;\r\n  position: relative;\r\n  top: -25px;\r\n  left: 245px;\r\n}\r\n\r\n.character__details-star.favorite {\r\n  fill: $success-color;\r\n}\r\n\r\n.character__details-star.favorite:hover {\r\n  fill: $light-color;\r\n}\r\n\r\n.character__details-star.noFavorite {\r\n  fill: $light-color;\r\n}\r\n\r\n.character__details-star.noFavorite:hover {\r\n  fill: $success-color;\r\n}\r\n\r\n.character__details-name {\r\n  margin: 0;\r\n  margin-top: 20px;\r\n  text-align: center;\r\n  font-size: 21px;\r\n}\r\n\r\n.character__details__item {\r\n  margin: 5px 0;\r\n}\r\n\r\n.character__details__item-more {\r\n  text-align: end;\r\n}\r\n\r\n.character__details__item-more:hover {\r\n  cursor: pointer;\r\n  color: $secondary-color;\r\n}\r\n\r\n.character__details__item-type {\r\n  color: $success-color;\r\n  font-weight: bolder;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/CharacterDetail.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/CharacterDetail.scss ***!
  \****************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box; }\n\na:link,\na:visited {\n  color: inherit;\n  text-decoration: none; }\n\nbody {\n  margin: 0;\n  background-color: #000000;\n  color: #ffffff;\n  font-family: \"Source Sans Pro\", sans-serif; }\n\nh1,\nh2,\nh3,\nh3,\nh4,\nh5,\nh6 {\n  color: #65fafb;\n  font-family: \"Oswald\", sans-serif; }\n\nfigure {\n  margin: 0;\n  padding: 0; }\n\nsection {\n  min-height: calc(100vh - 300px); }\n\n.characterDetail {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  overflow: hidden; }\n\n.characterDetail__container {\n  width: 400px;\n  height: 300px;\n  padding: 0 35px;\n  background-color: #fc859e; }\n\n.characterDetail__item {\n  margin: 15px 0; }\n\n.characterDetail__item-type {\n  color: #faf76a;\n  font-weight: bolder; }\n", "",{"version":3,"sources":["webpack://./src/assets/styles/App.scss","webpack://./src/assets/styles/Vars.scss","webpack://./src/assets/styles/components/CharacterDetail.scss"],"names":[],"mappings":"AA2BA;EACE,sBAAsB,EAAA;;AAGxB;;EAEE,cAAc;EACd,qBAAqB,EAAA;;AAGvB;EACE,SAAS;EACT,yBC7BkB;ED8BlB,cC7BmB;ED8BnB,0CCrCuC,EAAA;;ADwCzC;;;;;;;EAOE,cC5CqB;ED6CrB,iCCjD+B,EAAA;;ADoDjC;EACE,SAAS;EACT,UAAU,EAAA;;AAGZ;EACE,+BAA+B,EAAA;;AE3DjC;EFcE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EEdnB,mBAAmB;EACnB,gBAAgB,EAAA;;AAGlB;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,yBDAoB,EAAA;;ACGtB;EACE,cAAc,EAAA;;AAGhB;EACE,cDXqB;ECYrB,mBAAmB,EAAA","sourcesContent":["@import './Vars.scss';\r\n\r\n@mixin colCenCen {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n@mixin flexBetCen {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n@mixin flexCenCen {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@mixin flexStaSta {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\na:link,\r\na:visited {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: $dark-color;\r\n  color: $light-color;\r\n  font-family: $text-font;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  color: $primary-color;\r\n  font-family: $title-font;\r\n}\r\n\r\nfigure {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nsection {\r\n  min-height: calc(100vh - 300px);\r\n}\r\n","@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);\r\n\r\n//Fonts\r\n$title-font: 'Oswald', sans-serif;\r\n$text-font: 'Source Sans Pro', sans-serif;\r\n\r\n//Colors\r\n$primary-color: #65fafb;\r\n$secondary-color: #62c241;\r\n$success-color: #faf76a;\r\n$dark-color: #000000;\r\n$light-color: #ffffff;\r\n$danger-color: #fc859e;\r\n","@import '../App.scss';\r\n\r\n.characterDetail {\r\n  @include flexCenCen;\r\n  border-radius: 15px;\r\n  overflow: hidden;\r\n}\r\n\r\n.characterDetail__container {\r\n  width: 400px;\r\n  height: 300px;\r\n  padding: 0 35px;\r\n  background-color: $danger-color;\r\n}\r\n\r\n.characterDetail__item {\r\n  margin: 15px 0;\r\n}\r\n\r\n.characterDetail__item-type {\r\n  color: $success-color;\r\n  font-weight: bolder;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/Modal.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/Modal.scss ***!
  \******************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box; }\n\na:link,\na:visited {\n  color: inherit;\n  text-decoration: none; }\n\nbody {\n  margin: 0;\n  background-color: #000000;\n  color: #ffffff;\n  font-family: \"Source Sans Pro\", sans-serif; }\n\nh1,\nh2,\nh3,\nh3,\nh4,\nh5,\nh6 {\n  color: #65fafb;\n  font-family: \"Oswald\", sans-serif; }\n\nfigure {\n  margin: 0;\n  padding: 0; }\n\nsection {\n  min-height: calc(100vh - 300px); }\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.75);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n\n.modal__close {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  height: 45px;\n  margin: 25px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 45px; }\n\n.modal__close:hover {\n  background-color: #62c241;\n  cursor: pointer; }\n\n.modal__close-icon {\n  height: 20px;\n  width: 20px;\n  fill: #faf76a; }\n", "",{"version":3,"sources":["webpack://./src/assets/styles/App.scss","webpack://./src/assets/styles/Vars.scss","webpack://./src/assets/styles/components/Modal.scss"],"names":[],"mappings":"AA2BA;EACE,sBAAsB,EAAA;;AAGxB;;EAEE,cAAc;EACd,qBAAqB,EAAA;;AAGvB;EACE,SAAS;EACT,yBC7BkB;ED8BlB,cC7BmB;ED8BnB,0CCrCuC,EAAA;;ADwCzC;;;;;;;EAOE,cC5CqB;ED6CrB,iCCjD+B,EAAA;;ADoDjC;EACE,SAAS;EACT,UAAU,EAAA;;AAGZ;EACE,+BAA+B,EAAA;;AE3DjC;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,SAAS;EACT,QAAQ;EACR,qCAAqC;EAErC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB,EAAA;;AAGzB;EFAE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EEAnB,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,MAAM;EACN,WAAW,EAAA;;AAGb;EACE,yBDpBuB;ECqBvB,eAAe,EAAA;;AAGjB;EACE,YAAY;EACZ,WAAW;EACX,aD1BqB,EAAA","sourcesContent":["@import './Vars.scss';\r\n\r\n@mixin colCenCen {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n@mixin flexBetCen {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n@mixin flexCenCen {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@mixin flexStaSta {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\na:link,\r\na:visited {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: $dark-color;\r\n  color: $light-color;\r\n  font-family: $text-font;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  color: $primary-color;\r\n  font-family: $title-font;\r\n}\r\n\r\nfigure {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nsection {\r\n  min-height: calc(100vh - 300px);\r\n}\r\n","@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);\r\n\r\n//Fonts\r\n$title-font: 'Oswald', sans-serif;\r\n$text-font: 'Source Sans Pro', sans-serif;\r\n\r\n//Colors\r\n$primary-color: #65fafb;\r\n$secondary-color: #62c241;\r\n$success-color: #faf76a;\r\n$dark-color: #000000;\r\n$light-color: #ffffff;\r\n$danger-color: #fc859e;\r\n","@import '../App.scss';\r\n\r\n.modal {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background-color: rgba(0, 0, 0, 0.75);\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.modal__close {\r\n  @include flexCenCen;\r\n  border-radius: 50%;\r\n  height: 45px;\r\n  margin: 25px;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  width: 45px;\r\n}\r\n\r\n.modal__close:hover {\r\n  background-color: $secondary-color;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal__close-icon {\r\n  height: 20px;\r\n  width: 20px;\r\n  fill: $success-color;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/styles/components/Character.scss":
/*!*****************************************************!*\
  !*** ./src/assets/styles/components/Character.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Character_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Character.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/Character.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Character_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Character_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/assets/styles/components/CharacterDetail.scss":
/*!***********************************************************!*\
  !*** ./src/assets/styles/components/CharacterDetail.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CharacterDetail_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./CharacterDetail.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/CharacterDetail.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CharacterDetail_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CharacterDetail_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/assets/styles/components/Modal.scss":
/*!*************************************************!*\
  !*** ./src/assets/styles/components/Modal.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Modal_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Modal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/Modal.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Modal_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Modal_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);
//# sourceMappingURL=src_components_Character_jsx-src_custom-hooks_useLocalStorage_js.bundle.js.map