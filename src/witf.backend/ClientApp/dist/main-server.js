(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/wwwroot/scripts/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (params) {
	    return new Promise(function (resolve, reject) {
	        // Match the incoming request against the list of client-side routes
	        (0, _reactRouter.match)({ routes: _routes2.default, location: params.location }, function (error, redirectLocation, renderProps) {
	            if (error) {
	                throw error;
	            }
	            // If there's a redirection, just send this information back to the host application
	            if (redirectLocation) {
	                resolve({ redirectUrl: redirectLocation.pathname });
	                return;
	            }
	            // If it didn't match any route, renderProps will be undefined
	            if (!renderProps) {
	                throw new Error('The location \'' + params.url + '\' doesn\'t match any route configured in react-router.');
	            }
	            // Build an instance of the application
	            var store = (0, _configureStore2.default)();
	            var app = React.createElement(
	                _reactRedux.Provider,
	                { store: store },
	                React.createElement(_reactRouter.RouterContext, renderProps)
	            );
	            // Perform an initial render that will cause any async tasks (e.g., data access) to begin
	            (0, _server.renderToString)(app);
	            // Once the tasks are done, we can perform the final render
	            // We also send the redux store state, so the client can continue execution where the server left off
	            params.domainTasks.then(function () {
	                resolve({
	                    html: (0, _server.renderToString)(app),
	                    globals: { initialReduxState: store.getState() }
	                });
	            }, reject); // Also propagate any errors back into the host application
	        });
	    });
	};
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _server = __webpack_require__(3);
	
	var _reactRouter = __webpack_require__(4);
	
	var _routes = __webpack_require__(5);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _configureStore = __webpack_require__(25);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _layoutPage = __webpack_require__(7);
	
	var _homePage = __webpack_require__(9);
	
	var _recipePage = __webpack_require__(23);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = React.createElement(
	    _reactRouter.Route,
	    { component: _layoutPage.LayoutPage },
	    React.createElement(_reactRouter.Route, { path: "/", components: { body: _homePage.HomePage } }),
	    React.createElement(_reactRouter.Route, { path: "recipe/:id", components: { body: _recipePage.RecipePage } })
	);
	// Enable Hot Module Replacement (HMR)
	
	if (module && module.hot) {
	    module.hot.accept();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LayoutPage = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	__webpack_require__(8);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * This component will later hold menus and other layout props.
	 */
	var LayoutPage = exports.LayoutPage = function (_React$Component) {
	    _inherits(LayoutPage, _React$Component);
	
	    function LayoutPage() {
	        _classCallCheck(this, LayoutPage);
	
	        return _possibleConstructorReturn(this, (LayoutPage.__proto__ || Object.getPrototypeOf(LayoutPage)).apply(this, arguments));
	    }
	
	    _createClass(LayoutPage, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { id: "page_layout" },
	                React.createElement(
	                    "div",
	                    { className: "headerImageContainer" },
	                    React.createElement("img", { className: "headerImage", src: "/static/images/food-kitchen-cutting-board-cooking-retina.jpg" })
	                ),
	                this.props.body
	            );
	        }
	    }]);
	
	    return LayoutPage;
	}(React.Component);

/***/ },
/* 8 */
/***/ function(module, exports) {



/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HomePage = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _reduxTyped = __webpack_require__(10);
	
	var _recipeSearchBox = __webpack_require__(11);
	
	__webpack_require__(18);
	
	var _recipesSearchResultList = __webpack_require__(19);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_React$Component) {
	    _inherits(Home, _React$Component);
	
	    function Home(props) {
	        _classCallCheck(this, Home);
	
	        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
	    }
	
	    _createClass(Home, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { id: "page_home" },
	                React.createElement(
	                    "div",
	                    { className: "page" },
	                    React.createElement(_recipeSearchBox.RecipeSearchBox, { location: this.props.location }),
	                    React.createElement(_recipesSearchResultList.RecipesSearchResultList, { searching: this.props.isLoading, query: this.props.currentQuery, recipies: this.props.queryResults })
	                )
	            );
	        }
	    }]);
	
	    return Home;
	}(React.Component);
	
	var provider = (0, _reduxTyped.provide)(function (state) {
	    return state.recipeSearchsState;
	}, {}).withExternalProps();
	var HomePage = exports.HomePage = provider.connect(Home);

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("redux-typed");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RecipeSearchBox = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	__webpack_require__(12);
	
	var _reactAutosuggest = __webpack_require__(13);
	
	var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);
	
	var _reduxTyped = __webpack_require__(10);
	
	var _recipeSearchActions = __webpack_require__(14);
	
	var _loadIcon = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RecipeSearchBoxClass = function (_React$Component) {
	    _inherits(RecipeSearchBoxClass, _React$Component);
	
	    function RecipeSearchBoxClass() {
	        _classCallCheck(this, RecipeSearchBoxClass);
	
	        var _this = _possibleConstructorReturn(this, (RecipeSearchBoxClass.__proto__ || Object.getPrototypeOf(RecipeSearchBoxClass)).call(this));
	
	        _this.state = {
	            value: '',
	            suggestions: []
	        };
	        return _this;
	    }
	
	    _createClass(RecipeSearchBoxClass, [{
	        key: "renderSuggestion",
	        value: function renderSuggestion(_ref, query) {
	            var suggestion = _ref.suggestion;
	
	            return React.createElement(
	                "span",
	                null,
	                suggestion
	            );
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.input && this.input.focus();
	        }
	    }, {
	        key: "storeInputReference",
	        value: function storeInputReference(autosuggest) {
	            if (autosuggest !== null) {
	                this.input = autosuggest.input;
	            }
	        }
	    }, {
	        key: "queryRecipies",
	        value: function queryRecipies() {
	            this.props.queryRecipies(this.state.value);
	        }
	    }, {
	        key: "onSubmitForm",
	        value: function onSubmitForm(e) {
	            e.preventDefault();
	            this.queryRecipies();
	        }
	    }, {
	        key: "onSuggestionsFetchRequested",
	        value: function onSuggestionsFetchRequested(_ref2) {
	            var value = _ref2.value;
	
	            var opts = value.split(" ");
	            this.props.querySuggestions({ value: opts[opts.length - 1] });
	        }
	    }, {
	        key: "updateLastWord",
	        value: function updateLastWord(suggestedValue) {
	            var opts = this.state.value.split(" ");
	            var newValue = void 0;
	            if (opts.length > 1) {
	                newValue = opts.slice(0, opts.length - 1).join(" ") + " " + suggestedValue;
	            } else {
	                newValue = suggestedValue;
	            }
	            this.setState({
	                value: newValue
	            });
	        }
	    }, {
	        key: "onSuggestionSelected",
	        value: function onSuggestionSelected(a, _ref3) {
	            var suggestionValue = _ref3.suggestionValue;
	
	            this.updateLastWord(suggestionValue);
	        }
	    }, {
	        key: "onChange",
	        value: function onChange(event, b) {
	            var newValue = b.newValue,
	                method = b.method;
	
	            if (method !== "type") {
	                this.updateLastWord(newValue);
	            } else {
	                this.setState({
	                    value: newValue
	                });
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var inputProps = {
	                placeholder: "",
	                value: this.state.value,
	                onChange: this.onChange.bind(this)
	            };
	            return React.createElement(
	                "div",
	                { className: "searchbox-wrapper" },
	                React.createElement(
	                    "h2",
	                    { className: "text-shadow center", style: { color: "white" } },
	                    "Hva har du lyst p\xE5 i dag?"
	                ),
	                React.createElement(
	                    "form",
	                    { onSubmit: this.onSubmitForm.bind(this) },
	                    React.createElement(
	                        "div",
	                        { className: "searchBox" },
	                        React.createElement(_reactAutosuggest2.default, { onSuggestionSelected: this.onSuggestionSelected.bind(this), suggestions: this.props.suggestions, onSuggestionsFetchRequested: this.onSuggestionsFetchRequested.bind(this), onSuggestionsClearRequested: this.props.clearSuggestions, getSuggestionValue: function getSuggestionValue(_ref4) {
	                                var suggestion = _ref4.suggestion;
	                                return suggestion;
	                            }, renderSuggestion: this.renderSuggestion, inputProps: inputProps, ref: this.storeInputReference.bind(this) }),
	                        React.createElement(
	                            "button",
	                            { onClick: this.queryRecipies.bind(this), className: "searchBtn" },
	                            "S\xF8cc"
	                        )
	                    )
	                ),
	                React.createElement(_loadIcon.LoadIcon, { style: { marginTop: 15, opacity: this.props.isLoading ? 1 : 0 } })
	            );
	        }
	    }]);
	
	    return RecipeSearchBoxClass;
	}(React.Component);
	
	var provider = (0, _reduxTyped.provide)(function (state) {
	    return state.recipeSearchsState;
	}, _recipeSearchActions.recipeSearchActions).withExternalProps();
	var RecipeSearchBox = exports.RecipeSearchBox = provider.connect(RecipeSearchBoxClass);

/***/ },
/* 12 */
/***/ function(module, exports) {



/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("react-autosuggest");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.recipeSearchActions = exports.ClearRecipeSearchSuggestionsAction = exports.RecievedRecipeSearchSuggestionsAction = exports.QueryRecipeSearchSuggestionsAction = exports.RecievedRecipiQueryAction = exports.QueryRecipesAction = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _reduxTyped = __webpack_require__(10);
	
	var _domainTask = __webpack_require__(15);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var QueryRecipesAction = exports.QueryRecipesAction = function (_Action) {
	    _inherits(QueryRecipesAction, _Action);
	
	    function QueryRecipesAction(query) {
	        _classCallCheck(this, QueryRecipesAction);
	
	        var _this = _possibleConstructorReturn(this, (QueryRecipesAction.__proto__ || Object.getPrototypeOf(QueryRecipesAction)).call(this));
	
	        _this.query = query;
	        return _this;
	    }
	
	    return QueryRecipesAction;
	}(_reduxTyped.Action);
	exports.QueryRecipesAction = QueryRecipesAction = __decorate([(0, _reduxTyped.typeName)("RecipeSearch_QUERY_RECIPES")], QueryRecipesAction);
	var RecievedRecipiQueryAction = exports.RecievedRecipiQueryAction = function (_Action2) {
	    _inherits(RecievedRecipiQueryAction, _Action2);
	
	    function RecievedRecipiQueryAction(query, recipies) {
	        _classCallCheck(this, RecievedRecipiQueryAction);
	
	        var _this2 = _possibleConstructorReturn(this, (RecievedRecipiQueryAction.__proto__ || Object.getPrototypeOf(RecievedRecipiQueryAction)).call(this));
	
	        _this2.query = query;
	        _this2.recipies = recipies;
	        return _this2;
	    }
	
	    return RecievedRecipiQueryAction;
	}(_reduxTyped.Action);
	exports.RecievedRecipiQueryAction = RecievedRecipiQueryAction = __decorate([(0, _reduxTyped.typeName)("RecipeSearch_RECIEVED_RECIPIES_QUERY")], RecievedRecipiQueryAction);
	var QueryRecipeSearchSuggestionsAction = exports.QueryRecipeSearchSuggestionsAction = function (_Action3) {
	    _inherits(QueryRecipeSearchSuggestionsAction, _Action3);
	
	    function QueryRecipeSearchSuggestionsAction(query) {
	        _classCallCheck(this, QueryRecipeSearchSuggestionsAction);
	
	        var _this3 = _possibleConstructorReturn(this, (QueryRecipeSearchSuggestionsAction.__proto__ || Object.getPrototypeOf(QueryRecipeSearchSuggestionsAction)).call(this));
	
	        _this3.query = query;
	        return _this3;
	    }
	
	    return QueryRecipeSearchSuggestionsAction;
	}(_reduxTyped.Action);
	exports.QueryRecipeSearchSuggestionsAction = QueryRecipeSearchSuggestionsAction = __decorate([(0, _reduxTyped.typeName)("RecipeSearch_QUERY_RECIPE_SEARCH_SUGGESTIONS")], QueryRecipeSearchSuggestionsAction);
	var RecievedRecipeSearchSuggestionsAction = exports.RecievedRecipeSearchSuggestionsAction = function (_Action4) {
	    _inherits(RecievedRecipeSearchSuggestionsAction, _Action4);
	
	    function RecievedRecipeSearchSuggestionsAction(query, suggestions) {
	        _classCallCheck(this, RecievedRecipeSearchSuggestionsAction);
	
	        var _this4 = _possibleConstructorReturn(this, (RecievedRecipeSearchSuggestionsAction.__proto__ || Object.getPrototypeOf(RecievedRecipeSearchSuggestionsAction)).call(this));
	
	        _this4.query = query;
	        _this4.suggestions = suggestions;
	        return _this4;
	    }
	
	    return RecievedRecipeSearchSuggestionsAction;
	}(_reduxTyped.Action);
	exports.RecievedRecipeSearchSuggestionsAction = RecievedRecipeSearchSuggestionsAction = __decorate([(0, _reduxTyped.typeName)("RecipeSearch_RECIEVED_RECIPE_SEARCH_SUGGESTIONS")], RecievedRecipeSearchSuggestionsAction);
	var ClearRecipeSearchSuggestionsAction = exports.ClearRecipeSearchSuggestionsAction = function (_Action5) {
	    _inherits(ClearRecipeSearchSuggestionsAction, _Action5);
	
	    function ClearRecipeSearchSuggestionsAction() {
	        _classCallCheck(this, ClearRecipeSearchSuggestionsAction);
	
	        return _possibleConstructorReturn(this, (ClearRecipeSearchSuggestionsAction.__proto__ || Object.getPrototypeOf(ClearRecipeSearchSuggestionsAction)).call(this));
	    }
	
	    return ClearRecipeSearchSuggestionsAction;
	}(_reduxTyped.Action);
	exports.ClearRecipeSearchSuggestionsAction = ClearRecipeSearchSuggestionsAction = __decorate([(0, _reduxTyped.typeName)("RecipeSearch_CLEAR_RECIPE_SEARCH_SUGGESTIONS")], ClearRecipeSearchSuggestionsAction);
	var recipeSearchActions = exports.recipeSearchActions = {
	    queryRecipies: function queryRecipies(q) {
	        return function (dispatch, getState) {
	            var fetchTask = (0, _domainTask.fetch)("/api/findRecipes?q=" + q).then(function (response) {
	                return response.json();
	            }).then(function (data) {
	                dispatch(new RecievedRecipiQueryAction(q, data.recipes));
	            });
	            (0, _domainTask.addTask)(fetchTask); // Ensure server-side prerendering waits for this to complete
	            dispatch(new QueryRecipesAction(q));
	        };
	    },
	    querySuggestions: function querySuggestions(_ref) {
	        var value = _ref.value;
	        return function (dispatch, getState) {
	            var fetchTask = (0, _domainTask.fetch)("/api/autocomplete?w=" + value).then(function (response) {
	                return response.json();
	            }).then(function (data) {
	                dispatch(new RecievedRecipeSearchSuggestionsAction(value, data));
	            });
	            (0, _domainTask.addTask)(fetchTask); // Ensure server-side prerendering waits for this to complete
	            dispatch(new QueryRecipeSearchSuggestionsAction(value));
	        };
	    },
	    clearSuggestions: function clearSuggestions() {
	        return function (dispatch, getState) {
	            dispatch(new ClearRecipeSearchSuggestionsAction());
	        };
	    }
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("domain-task");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.LoadIcon = LoadIcon;
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	__webpack_require__(17);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function LoadIcon(props) {
	    return React.createElement(
	        "div",
	        _extends({}, props, { className: "loadIcon" }),
	        React.createElement(
	            "svg",
	            { className: "circular", viewBox: "25 25 50 50" },
	            React.createElement("circle", { className: "path", cx: "50", cy: "50", r: "20", fill: "none", strokeWidth: "2", strokeMiterlimit: "10" })
	        )
	    );
	}

/***/ },
/* 17 */
/***/ function(module, exports) {



/***/ },
/* 18 */
/***/ function(module, exports) {



/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RecipesSearchResultList = RecipesSearchResultList;
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	__webpack_require__(20);
	
	var _recipeCard = __webpack_require__(21);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function RecipesSearchResultList(props) {
	    var noResults = !!props.query && props.recipies.length < 1;
	    if (noResults && !props.searching) {
	        return React.createElement(
	            "h5",
	            { style: { color: "#FFF", width: "100%" } },
	            "S\xF8k etter '",
	            props.query,
	            "' gav ingen treff"
	        );
	    }
	    if (props.recipies.length > 0) {
	        return React.createElement(
	            "div",
	            { className: "recipesSearchResultList" },
	            props.recipies.map(function (recipe, i) {
	                return React.createElement(_recipeCard.RecipeCard, { recipe: recipe, key: i });
	            })
	        );
	    }
	    return null;
	}

/***/ },
/* 20 */
/***/ function(module, exports) {



/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RecipeCard = RecipeCard;
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	__webpack_require__(22);
	
	var _reactRouter = __webpack_require__(4);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function RecipeCard(_ref) {
	    var recipe = _ref.recipe;
	
	    var imgStyle = { backgroundImage: "url(\"" + recipe.imageUrl + "\")" };
	    return React.createElement(
	        _reactRouter.Link,
	        { alt: recipe.title, to: "recipe/" + recipe.id, className: "hoverable recipetCard" },
	        React.createElement("div", { className: "recipetImage", style: imgStyle }),
	        React.createElement(
	            "div",
	            { className: "recipetInfo" },
	            React.createElement(
	                "h1",
	                { className: "title" },
	                recipe.title
	            )
	        )
	    );
	}

/***/ },
/* 22 */
/***/ function(module, exports) {



/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RecipePage = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _reduxTyped = __webpack_require__(10);
	
	var _recipeDetailsActions = __webpack_require__(24);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RecipePageClass = function (_React$Component) {
	    _inherits(RecipePageClass, _React$Component);
	
	    function RecipePageClass() {
	        _classCallCheck(this, RecipePageClass);
	
	        return _possibleConstructorReturn(this, (RecipePageClass.__proto__ || Object.getPrototypeOf(RecipePageClass)).apply(this, arguments));
	    }
	
	    _createClass(RecipePageClass, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.props.loadRecipeDetails(this.props.params.id);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var id = this.props.params.id;
	            if (!!this.props.details[id]) {
	                var detailsMeta = this.props.details[id];
	                if (!!detailsMeta && !!detailsMeta.data) {
	                    return React.createElement(
	                        "div",
	                        { className: "page", style: { wordWrap: "break-word", whiteSpace: "pre-wrap", padding: 20, marginTop: "25%", height: 400, backgroundColor: "white" } },
	                        React.createElement(
	                            "h5",
	                            null,
	                            "Loaded details data for ",
	                            id,
	                            ":"
	                        ),
	                        JSON.stringify(detailsMeta)
	                    );
	                }
	            }
	            return React.createElement("div", null);
	        }
	    }]);
	
	    return RecipePageClass;
	}(React.Component);
	
	var provider = (0, _reduxTyped.provide)(function (state) {
	    return {
	        details: state.recipeDetails
	    };
	}, _recipeDetailsActions.recipeDetailsActions).withExternalProps();
	var RecipePage = exports.RecipePage = provider.connect(RecipePageClass);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.recipeDetailsActions = exports.ErrorLoadingRecipeDetailsAction = exports.RecievedRecipeDetailsAction = exports.LoadingRecipeDetailsAction = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _reduxTyped = __webpack_require__(10);
	
	var _domainTask = __webpack_require__(15);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var LoadingRecipeDetailsAction = exports.LoadingRecipeDetailsAction = function (_Action) {
	    _inherits(LoadingRecipeDetailsAction, _Action);
	
	    function LoadingRecipeDetailsAction(id) {
	        _classCallCheck(this, LoadingRecipeDetailsAction);
	
	        var _this = _possibleConstructorReturn(this, (LoadingRecipeDetailsAction.__proto__ || Object.getPrototypeOf(LoadingRecipeDetailsAction)).call(this));
	
	        _this.id = id;
	        return _this;
	    }
	
	    return LoadingRecipeDetailsAction;
	}(_reduxTyped.Action);
	exports.LoadingRecipeDetailsAction = LoadingRecipeDetailsAction = __decorate([(0, _reduxTyped.typeName)("recipeDetails_LoadingRecipeDetailsAction")], LoadingRecipeDetailsAction);
	var RecievedRecipeDetailsAction = exports.RecievedRecipeDetailsAction = function (_Action2) {
	    _inherits(RecievedRecipeDetailsAction, _Action2);
	
	    function RecievedRecipeDetailsAction(id, recipie) {
	        _classCallCheck(this, RecievedRecipeDetailsAction);
	
	        var _this2 = _possibleConstructorReturn(this, (RecievedRecipeDetailsAction.__proto__ || Object.getPrototypeOf(RecievedRecipeDetailsAction)).call(this));
	
	        _this2.id = id;
	        _this2.recipie = recipie;
	        return _this2;
	    }
	
	    return RecievedRecipeDetailsAction;
	}(_reduxTyped.Action);
	exports.RecievedRecipeDetailsAction = RecievedRecipeDetailsAction = __decorate([(0, _reduxTyped.typeName)("recipeDetails_LoadedRecipeDetailsAction")], RecievedRecipeDetailsAction);
	var ErrorLoadingRecipeDetailsAction = exports.ErrorLoadingRecipeDetailsAction = function (_Action3) {
	    _inherits(ErrorLoadingRecipeDetailsAction, _Action3);
	
	    function ErrorLoadingRecipeDetailsAction(id) {
	        _classCallCheck(this, ErrorLoadingRecipeDetailsAction);
	
	        var _this3 = _possibleConstructorReturn(this, (ErrorLoadingRecipeDetailsAction.__proto__ || Object.getPrototypeOf(ErrorLoadingRecipeDetailsAction)).call(this));
	
	        _this3.id = id;
	        return _this3;
	    }
	
	    return ErrorLoadingRecipeDetailsAction;
	}(_reduxTyped.Action);
	exports.ErrorLoadingRecipeDetailsAction = ErrorLoadingRecipeDetailsAction = __decorate([(0, _reduxTyped.typeName)("recipeDetails_ErrorLoadingRecipeDetailsAction")], ErrorLoadingRecipeDetailsAction);
	var recipeDetailsActions = exports.recipeDetailsActions = {
	    loadRecipeDetails: function loadRecipeDetails(id) {
	        return function (dispatch, getState) {
	            dispatch(new LoadingRecipeDetailsAction(id));
	            var fetchTask = (0, _domainTask.fetch)("/api/recipe/" + encodeURIComponent(id)).then(function (response) {
	                return response.json();
	            }).then(function (recipie) {
	                dispatch(new RecievedRecipeDetailsAction(id, recipie));
	            });
	            (0, _domainTask.addTask)(fetchTask);
	        };
	    }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;
	
	var _redux = __webpack_require__(26);
	
	var _reduxThunk = __webpack_require__(27);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reactRouterRedux = __webpack_require__(28);
	
	var _store = __webpack_require__(29);
	
	var Store = _interopRequireWildcard(_store);
	
	var _reduxTyped = __webpack_require__(10);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function configureStore(initialState) {
	    // Build middleware. These are functions that can process the actions before they reach the store.
	    var windowIfDefined = typeof window === 'undefined' ? null : window;
	    // If devTools is installed, connect to it
	    var devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension;
	    var createStoreWithMiddleware = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, _reduxTyped.typedToPlain), devToolsExtension ? devToolsExtension() : function (f) {
	        return f;
	    })(_redux.createStore);
	    // Combine all reducers and instantiate the app-wide store instance
	    var allReducers = buildRootReducer(Store.reducers);
	    var store = createStoreWithMiddleware(allReducers, initialState);
	    // Enable Webpack hot module replacement for reducers
	    if (false) {
	        module.hot.accept('./store/store', function () {
	            var nextRootReducer = require('./store/store');
	            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
	        });
	    }
	    return store;
	}
	function buildRootReducer(allReducers) {
	    return (0, _redux.combineReducers)(Object.assign({}, allReducers, { routing: _reactRouterRedux.routerReducer }));
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("react-router-redux");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.reducers = undefined;
	
	var _recipeSearchReducer = __webpack_require__(30);
	
	var _recipeDetailsReducer = __webpack_require__(31);
	
	// whenever an action is dispatched, Redux will update each top-level application state property using
	// the reducer with the matching name. It's important that the names match exactly, and that the reducer
	// acts on the corresponding ApplicationState property type.
	var reducers = exports.reducers = {
	    recipeSearchsState: _recipeSearchReducer.recipeSearchReducer,
	    recipeDetails: _recipeDetailsReducer.recipeDetailsReducer
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.recipeSearchReducer = undefined;
	
	var _reduxTyped = __webpack_require__(10);
	
	var _recipeSearchActions = __webpack_require__(14);
	
	var Actions = _interopRequireWildcard(_recipeSearchActions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var unloadedState = {
	    isLoading: false,
	    suggestions: [],
	    queryResults: [],
	    currentQuery: ""
	};
	var recipeSearchReducer = exports.recipeSearchReducer = function recipeSearchReducer(state, action) {
	    if ((0, _reduxTyped.isActionType)(action, Actions.QueryRecipesAction)) {
	        return {
	            suggestions: state.suggestions,
	            currentQuery: action.query,
	            isLoading: true,
	            queryResults: state.queryResults
	        };
	    }
	    if ((0, _reduxTyped.isActionType)(action, Actions.RecievedRecipiQueryAction)) {
	        return {
	            suggestions: state.suggestions,
	            currentQuery: state.currentQuery,
	            isLoading: false,
	            queryResults: action.recipies
	        };
	    }
	    if ((0, _reduxTyped.isActionType)(action, Actions.RecievedRecipeSearchSuggestionsAction)) {
	        return {
	            suggestions: action.suggestions,
	            currentQuery: state.currentQuery,
	            isLoading: state.isLoading,
	            queryResults: state.queryResults
	        };
	    }
	    if ((0, _reduxTyped.isActionType)(action, Actions.ClearRecipeSearchSuggestionsAction)) {
	        return {
	            suggestions: [],
	            currentQuery: state.currentQuery,
	            isLoading: state.isLoading,
	            queryResults: state.queryResults
	        };
	    }
	    return state || unloadedState;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.recipeDetailsReducer = undefined;
	
	var _reduxTyped = __webpack_require__(10);
	
	var _recipeDetailsActions = __webpack_require__(24);
	
	var Actions = _interopRequireWildcard(_recipeDetailsActions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var unloadedState = {};
	function init(id, state) {
	    if (!!state[id]) {
	        state[id] = { data: null, error: false, loading: false };
	        return Object.assign({}, state);
	    }
	    return state;
	}
	function update(id, state, newObject) {
	    init(id, state);
	    state[id] = Object.assign({}, state[id], newObject);
	    return Object.assign({}, state);
	}
	var recipeDetailsReducer = exports.recipeDetailsReducer = function recipeDetailsReducer(state, action) {
	    if ((0, _reduxTyped.isActionType)(action, Actions.LoadingRecipeDetailsAction)) {
	        state = update(action.id, state, { loading: true });
	        return state;
	    }
	    if ((0, _reduxTyped.isActionType)(action, Actions.ErrorLoadingRecipeDetailsAction)) {
	        state = update(action.id, state, { loading: false });
	        return state;
	    }
	    if ((0, _reduxTyped.isActionType)(action, Actions.RecievedRecipeDetailsAction)) {
	        state = update(action.id, state, { data: action.recipie, loading: false });
	        return state;
	    }
	    return state || unloadedState;
	};

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRkOWVkMzc0MDk5NzUwOTkyMjYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMudHN4Iiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudF9wYWdlcy9sYXlvdXRQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50X3BhZ2VzL2hvbWVQYWdlLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10eXBlZFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3JlY2lwZVNlYXJjaEJveC9yZWNpcGVTZWFyY2hCb3gudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWF1dG9zdWdnZXN0XCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL2FjdGlvbnMvcmVjaXBlU2VhcmNoQWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb21haW4tdGFza1wiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2ljb25zL2xvYWRJY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9yZWNpcGVzU2VhcmNoUmVzdWx0TGlzdC9yZWNpcGVzU2VhcmNoUmVzdWx0TGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvcmVjaXBlQ2FyZC9yZWNpcGVDYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50X3BhZ2VzL3JlY2lwZVBhZ2UudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9hY3Rpb25zL3JlY2lwZURldGFpbHNBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb25maWd1cmVTdG9yZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLXJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL3N0b3JlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9yZWR1Y2Vycy9yZWNpcGVTZWFyY2hSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9yZWR1Y2Vycy9yZWNpcGVEZXRhaWxzUmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs2QkM3Qm9DO0FBQzFCLGdCQUFZLFFBQWEsVUFBUSxTQUFRO0FBQ3lCO0FBQy9ELGlDQUFDLEVBQVEsMEJBQVUsVUFBUSxPQUFXLFlBQUUsVUFBTSxPQUFrQixrQkFBa0I7QUFDaEYsaUJBQU8sT0FBRTtBQUNSLHVCQUNKO0FBQUM7QUFFbUY7QUFDakYsaUJBQWtCLGtCQUFFO0FBQ1oseUJBQUMsRUFBYSxhQUFrQixpQkFBYTtBQUV4RDtBQUFDO0FBRTZEO0FBQzNELGlCQUFDLENBQWEsYUFBRTtBQUNmLHVCQUFNLElBQVUsMEJBQXdCLE9BQzVDO0FBQUM7QUFFc0M7QUFDdkMsaUJBQVcsUUFBb0I7QUFDL0IsaUJBQVk7QUFDQzttQkFBTyxPQUNaO0FBQWMsaUVBRXBCOztBQUV1RjtBQUMzRSx5Q0FBTTtBQUV1QztBQUMwQztBQUMvRixvQkFBWSxZQUFLLEtBQUM7QUFDYjtBQUNDLDJCQUFnQiw0QkFBSztBQUNsQiw4QkFBRSxFQUFtQixtQkFBTyxNQUUzQztBQUpZO0FBSVgsZ0JBQVUsU0FDZjtBQUNKO0FBQ0osTUF2Q1c7QUF1Q1Y7O0FBakRNOztLQUF1Qjs7QUFDUTs7QUFDVzs7QUFDRTs7QUFFdEI7Ozs7QUFJN0I7Ozs7Ozs7Ozs7OztBQ1RBLG1DOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7Ozs7QUNBTzs7S0FBdUI7O0FBQzJCOztBQUNBOztBQUNKOztBQUdyRDs7Ozs7QUFBcUI7T0FDakI7QUFBTSwrQ0FBSyxNQUFJLEtBQVksWUFBQyxFQUM1QjtBQUFNLCtDQUFLLE1BQWEsY0FBWSxZQUFDLEVBQ2hDOztBQUU2Qjs7QUFDbkMsS0FBTyxVQUFVLE9BQUssS0FBRTtBQUNqQixZQUFJLElBQ2Q7QUFBQyxFOzs7Ozs7O0FDZEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUTzs7S0FBdUI7O0FBQ0o7Ozs7Ozs7Ozs7QUFRMUI7Ozs7Ozs7Ozs7Ozs7OztBQUVjO0FBQUs7bUJBQUcsSUFDVjtBQUFJOzt1QkFBVSxXQUNWO0FBQUksa0RBQVUsV0FBYyxlQUFJLEtBRW5DOztBQUFNLHNCQUFNLE1BRXJCOztBQUNIOzs7O0dBVG9DLE1BQzNCLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZIOztLQUF1Qjs7QUFDTzs7QUFDMEM7O0FBQ3ZEOztBQUl4Qjs7Ozs7Ozs7Ozs7OztBQUNJLG1CQUFpQjtBQUNiOzs0R0FDSjtBQUVhOzs7OztBQUNGO0FBQ0M7bUJBQUcsSUFDSDtBQUFJOzt1QkFBVSxXQUNWO0FBQWdCLDZFQUFVLFVBQUssS0FBTSxNQUNyQztBQUF3Qiw2RkFBVyxXQUFLLEtBQU0sTUFBVyxXQUFPLE9BQUssS0FBTSxNQUFjLGNBQVUsVUFBSyxLQUFNLE1BSTlIOzs7QUFDSDs7OztHQWZ1QixNQUFVOztBQWlCbEMsS0FBYyw4Q0FDZTtBQUF6QixZQUFtQyxNQUFtQjtFQURsQyxFQUd2QixJQUtEO0FBQU8sS0FBYyw4QkFBVyxTQUFRLFFBQWMsTTs7Ozs7O0FDaEN0RCx5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQU87O0tBQXVCOztBQUNDOztBQUNZOzs7O0FBQ047O0FBQ3dDOztBQUk3RTs7Ozs7Ozs7Ozs7Ozs7O0FBQ0k7QUFDWTs7OztBQUNKLGVBQU07QUFDRCxvQkFBSTtBQUNFLDBCQUVuQjtBQUppQjs7QUFPQTs7OztnREFBbUI7aUJBQVA7O0FBQ25CO0FBQU87O0FBQ2pCOztBQUNpQjs7OztBQUNULGtCQUFNLFNBQVEsS0FBTSxNQUM1QjtBQUVtQjs7OzZDQUFZO0FBQ3hCLGlCQUFZLGdCQUFVLE1BQUU7QUFDbkIsc0JBQU0sUUFBYyxZQUM1QjtBQUNKO0FBQ2E7Ozs7QUFDTCxrQkFBTSxNQUFjLGNBQUssS0FBTSxNQUN2QztBQUNZOzs7c0NBQStCO0FBQ3RDLGVBQWtCO0FBQ2Ysa0JBQ1I7QUFFNEI7Ozs7aUJBQU87O0FBQy9CLGlCQUFVLE9BQVEsTUFBTSxNQUFNO0FBQzFCLGtCQUFNLE1BQWlCLGlCQUFDLEVBQU0sT0FBTSxLQUFLLEtBQU8sU0FDeEQ7QUFDYzs7O3dDQUFlO0FBQ3pCLGlCQUFVLE9BQU8sS0FBTSxNQUFNLE1BQU0sTUFBTTtBQUN6QyxpQkFBYTtBQUNWLGlCQUFLLEtBQU8sU0FBSyxHQUFFO0FBQ1YsNEJBQU8sS0FBTSxNQUFFLEdBQU0sS0FBTyxTQUFLLEdBQUssS0FBSyxPQUFNLE1BQzdEO0FBQU0sb0JBQUU7QUFDSSw0QkFDWjtBQUFDO0FBQ0csa0JBQVM7QUFDSix3QkFFYjtBQUhrQjtBQUlFOzs7OENBQUk7aUJBQWlCOztBQUNqQyxrQkFBZSxlQUN2QjtBQUNROzs7a0NBQU0sT0FBRztBQUNQLGlCQUFVO2lCQUFVLFNBQUs7O0FBQzVCLGlCQUFPLFdBQVksUUFBRTtBQUNoQixzQkFBZSxlQUN2QjtBQUFNLG9CQUFFO0FBQ0Esc0JBQVM7QUFDSiw0QkFFYjtBQUhrQjtBQUl0QjtBQUNNOzs7O0FBQ0YsaUJBQWdCO0FBQ0QsOEJBQUk7QUFDVix3QkFBTSxLQUFNLE1BQU07QUFDZiwyQkFBTSxLQUFTLFNBQUssS0FDOUI7QUFKaUI7QUFNWjtBQUNDO21CQUFVLFdBQ1Y7QUFBRzs7dUJBQVUsV0FBcUIsc0JBQU8sT0FBQyxFQUFPLE9BQ2pEOzs7QUFBSzs7dUJBQVUsVUFBSyxLQUFhLGFBQUssS0FDbEM7QUFBSTs7MkJBQVUsV0FDVjtBQUFZLDJFQUNhLHNCQUFLLEtBQXFCLHFCQUFLLEtBQU8sT0FDL0MsYUFBSyxLQUFNLE1BQWEsYUFDUiw2QkFBSyxLQUE0Qiw0QkFBSyxLQUFPLE9BQzdDLDZCQUFLLEtBQU0sTUFBa0Isa0JBQ3RDO0FBQUUscUNBQWM7d0NBQWdCO2dDQUNsQyxrQkFBSyxLQUFrQixrQkFDN0IsWUFBWSxZQUNuQixLQUFLLEtBQW9CLG9CQUFLLEtBQ3RDO0FBQU87OytCQUFTLFNBQUssS0FBYyxjQUFLLEtBQU8sT0FBVSxXQUdqRTs7Ozs7QUFBUywyREFBTyxPQUFDLEVBQVcsV0FBSSxJQUFTLFNBQU0sS0FBTSxNQUFVLFlBQUksSUFHL0U7O0FBQ0g7Ozs7R0F2RnVDLE1BQVU7O0FBeUZsRCxLQUFjLDhDQUNlO0FBQXpCLFlBQW1DLE1BRXRDO0VBSHVCLDRDQVF4QjtBQUFPLEtBQXFCLDRDQUFXLFNBQVEsUUFBOEIsc0I7Ozs7Ozs7Ozs7OztBQ3pHN0UsK0M7Ozs7Ozs7Ozs7Ozs7OztBQ0E4Qzs7QUFLOUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDOztBQUMxQyxpQ0FBZ0M7QUFDcEI7Ozs7QUFETyxlQUFLLFFBRXhCOztBQUNIOzs7O0FBTEQsK0RBQVMsMEJBQThCLGdDQU92Qzs7QUFBcUQ7O0FBQ2pELHdDQUFnQyxPQUE2QjtBQUNqRDs7OztBQURPLGdCQUFLLFFBQVE7QUFBUyxnQkFBUSxXQUVqRDs7QUFDSDs7OztBQUxELDZFQUFTLDBCQUF3QywwQ0FPakQ7O0FBQThEOztBQUMxRCxpREFBZ0M7QUFDcEI7Ozs7QUFETyxnQkFBSyxRQUV4Qjs7QUFDSDs7OztBQUxELCtGQUFTLDBCQUFnRCxrREFPekQ7O0FBQWlFOztBQUM3RCxvREFBZ0MsT0FBeUM7QUFDN0Q7Ozs7QUFETyxnQkFBSyxRQUFRO0FBQVMsZ0JBQVcsY0FFcEQ7O0FBQ0g7Ozs7QUFMRCxxR0FBUywwQkFBbUQscURBTzVEOztBQUE4RDs7QUFDMUQ7QUFFQTs7O0FBQ0g7Ozs7QUFMRCwrRkFBUywwQkFBZ0Qsa0RBT3pEO0FBQU8sS0FBeUI7QUFDZiwyQ0FBWTtBQUFWLGdCQUE4QixVQUFTLFVBQVU7QUFDNUQsaUJBQWEsMkRBQW1DLEdBQ3ZDO0FBQVMsd0JBQVksU0FBUTtjQURoQixFQUViLEtBQUMsVUFBa0Q7QUFDNUMsMEJBQUMsSUFBNkIsMEJBQUUsR0FBTSxLQUNsRDtBQUFHO0FBRUEsc0NBQVksWUFBOEQ7QUFDekUsc0JBQUMsSUFBc0IsbUJBQ25DO0FBQUM7O0FBQ2U7QUFBRyxhQUFPO2dCQUFvQixVQUFTLFVBQVU7QUFDN0QsaUJBQWEsNERBQXdDLE9BQzVDO0FBQVMsd0JBQVksU0FBUTtjQURoQixFQUViLEtBQUMsVUFBMEI7QUFDcEIsMEJBQUMsSUFBeUMsc0NBQU0sT0FDNUQ7QUFBRztBQUNBLHNDQUFZLFlBQThEO0FBQ3pFLHNCQUFDLElBQXNDLG1DQUNuRDtBQUFDOztBQUNlO0FBQUUsZ0JBQXFCLFVBQVMsVUFBVTtBQUM5QyxzQkFBQyxJQUNiO0FBQ0Y7O0FBdkJpQyxHOzs7Ozs7QUNuQ25DLHlDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQU87O0tBQXVCOztBQUc5Qjs7OzttQkFBOEI7QUFDbkI7QUFDQztzQkFBVSxTQUFXLFdBQ3JCO0FBQUk7O2VBQVUsV0FBVyxZQUFRLFNBQzdCO0FBQU8sNkNBQVUsV0FBTyxRQUFHLElBQUssTUFBRyxJQUFLLE1BQUUsR0FBSyxNQUFLLE1BQU8sUUFBWSxhQUFJLEtBQWlCLGtCQUk1Rzs7O0FBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hNOztLQUF1Qjs7QUFDUzs7QUFTdkM7Ozs7a0NBQTRFO0FBQ3hFLFNBQWUsWUFBRyxDQUFDLENBQU0sTUFBTSxTQUFTLE1BQVMsU0FBTyxTQUFLO0FBRTFELFNBQVUsYUFBSSxDQUFNLE1BQVcsV0FBRTtBQUMxQjtBQUFJO2VBQU8sT0FBQyxFQUFNLE9BQVEsUUFBTyxPQUF1Qjs7QUFBTSxtQkFDeEU7OztBQUFDO0FBRUUsU0FBTSxNQUFTLFNBQU8sU0FBSyxHQUFFO0FBQ3JCO0FBQ0M7ZUFBVSxXQUNWO0FBQU0sbUJBQVMsU0FBSSxjQUFRLFFBQUc7QUFBVix3QkFBMEIsOENBQVEsUUFBUSxRQUFLLEtBRy9FOzs7QUFBQztBQUVLLFlBQ1Y7QUFBQyxFOzs7Ozs7Ozs7Ozs7Ozs7OztTQ3RCMEI7O0FBSnBCOztLQUF1Qjs7QUFDSjs7QUFHMUI7Ozs7O1NBQXlEOztBQUVyRCxTQUFjLFdBQUcsRUFBbUIsNEJBQWMsT0FBZ0I7QUFFM0Q7QUFDRTtXQUFLLEtBQU8sT0FBTyxPQUFLLGdCQUFnQixPQUFNLElBQVUsV0FDekQ7QUFBSSxzQ0FBVSxXQUFlLGdCQUFPLE9BQ3BDO0FBQUk7O2VBQVUsV0FDVjtBQUFHOzttQkFBVSxXQUFTO0FBQU8sd0JBSTdDOzs7O0FBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJNOztLQUF1Qjs7QUFDTzs7QUFJckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHWSxrQkFBTSxNQUFrQixrQkFBSyxLQUFNLE1BQU8sT0FDbEQ7QUFFTTs7OztBQUNGLGlCQUFRLEtBQU8sS0FBTSxNQUFPLE9BQUk7QUFDN0IsaUJBQUMsQ0FBQyxDQUFLLEtBQU0sTUFBUSxRQUFLLEtBQUU7QUFDM0IscUJBQWlCLGNBQU8sS0FBTSxNQUFRLFFBQUs7QUFFeEMscUJBQUMsQ0FBQyxDQUFZLGVBQUksQ0FBQyxDQUFZLFlBQU0sTUFBRTtBQUNoQztBQUFLOzJCQUFVLFdBQU8sUUFBTyxPQUFDLEVBQVMsVUFBYyxjQUFZLFlBQVksWUFBUyxTQUFJLElBQVcsV0FBTyxPQUFRLFFBQUssS0FBaUIsaUJBQzVJO0FBQTRCOzs7O0FBQzVCOzs7QUFBSyw4QkFBVSxVQUV2Qjs7QUFFSjtBQUFDO0FBRUssb0JBQ1Y7QUFDSDs7OztHQXRCa0MsTUFFZDs7QUEyQnJCLEtBQWMsb0NBQVcsVUFBeUI7QUFDcEM7QUFDSyxrQkFBTyxNQUV0QjtBQUhXO0FBS2QsRUFOdUIsOENBUXhCO0FBQU8sS0FBZ0Isa0NBQVcsU0FBUSxRQUF5QixpQjs7Ozs7Ozs7Ozs7Ozs7O0FDMUNyQjs7QUFLOUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEOztBQUNsRCx5Q0FBNkI7QUFDakI7Ozs7QUFETyxlQUFFLEtBRXJCOztBQUNIOzs7O0FBTEQsK0VBQVMsMEJBQTRDLDhDQU9yRDs7QUFBdUQ7O0FBQ25ELDBDQUE2QixJQUFpQztBQUNsRDs7OztBQURPLGdCQUFFLEtBQVE7QUFBUyxnQkFBTyxVQUU3Qzs7QUFDSDs7OztBQUxELGlGQUFTLDBCQUEyQyw2Q0FPcEQ7O0FBQTJEOztBQUN2RCw4Q0FBNkI7QUFDakI7Ozs7QUFETyxnQkFBRSxLQUVyQjs7QUFDSDs7OztBQUxELHlGQUFTLDBCQUFpRCxtREFPMUQ7QUFBTyxLQUEwQjtBQUNaLG1EQUFZO0FBQVYsZ0JBQThCLFVBQVMsVUFBVTtBQUN4RCxzQkFBQyxJQUE4QiwyQkFBTTtBQUU3QyxpQkFBZSxvREFBMEMsbUJBQU8sS0FDdkQ7QUFBUyx3QkFBWSxTQUFRO2NBRGQsRUFFZixLQUFDLFVBQXlCO0FBQ25CLDBCQUFDLElBQStCLDRCQUFHLElBQy9DO0FBQUc7QUFFQSxzQ0FDWDtBQUNGOztBQVprQyxHOzs7Ozs7Ozs7Ozs7O0FDdkJnRTs7QUFDckU7Ozs7QUFDbUI7O0FBQzNDOztLQUErQjs7QUFHdEM7Ozs7Ozt5QkFBdUU7QUFDK0I7QUFDbEcsU0FBcUIsa0JBQUcsT0FBYSxXQUFnQixjQUFPLE9BQWlCO0FBQ25DO0FBQzFDLFNBQXVCLG9CQUFrQixtQkFBbUIsZ0JBQWlEO0FBQzdHLFNBQStCLGdEQUNTLDZFQUNuQixvQkFBc0I7QUFBSSxnQkFDaEM7TUFIMEI7QUFLMEI7QUFDbkUsU0FBaUIsY0FBbUIsaUJBQU0sTUFBVztBQUNyRCxTQUFXLFFBQTRCLDBCQUFZLGFBQWtEO0FBRWhEO0FBQ2xELFNBQU8sS0FBSyxFQUFFO0FBQ1AsZ0JBQUksSUFBTyxPQUFnQixpQkFBRTtBQUMvQixpQkFBcUIsa0JBQVUsUUFBZ0M7QUFDMUQsbUJBQWUsZUFBaUIsaUJBQWdCLGdCQUN6RDtBQUNKO0FBQUM7QUFFSyxZQUNWO0FBQUM7QUFFRCwyQkFBcUM7QUFDM0IsWUFBZ0IsNEJBQTBCLE9BQU8sT0FBRyxJQUFhLGFBQUUsRUFDN0U7QUFBQyxFOzs7Ozs7QUNqQ0QsbUM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7OztBQ0NtRTs7QUFDRzs7QUFFZ0M7QUFDRTtBQUV4RztBQUFPLEtBQWM7QUFDc0I7QUFFekM7QUFIc0IsRzs7Ozs7Ozs7Ozs7OztBQ1AyQjs7QUFDNUM7O0tBQWtEOzs7O0FBQ3pELEtBQW1CO0FBQ04sZ0JBQU87QUFDTCxrQkFBSTtBQUNILG1CQUFJO0FBQ0osbUJBR2hCO0FBUDJDO0FBT3BDLEtBQXlCLG9EQUFpQyw2QkFBTSxPQUFRO0FBQ3hFLFNBQWEsOEJBQU8sUUFBUyxRQUFxQixxQkFBRTtBQUM3QztBQUNTLDBCQUFPLE1BQVk7QUFDbEIsMkJBQVEsT0FBTTtBQUNqQix3QkFBTTtBQUNILDJCQUFPLE1BRTNCO0FBTlc7QUFNVjtBQUNFLFNBQWEsOEJBQU8sUUFBUyxRQUE0Qiw0QkFBRTtBQUNwRDtBQUNTLDBCQUFPLE1BQVk7QUFDbEIsMkJBQ1AsTUFBYTtBQUNULHdCQUFPO0FBQ0osMkJBQVEsT0FFNUI7QUFQVztBQU9WO0FBQ0UsU0FBYSw4QkFBTyxRQUFTLFFBQXdDLHdDQUFFO0FBQ2hFO0FBQ1MsMEJBQVEsT0FBWTtBQUNuQiwyQkFBTyxNQUFhO0FBQ3ZCLHdCQUFPLE1BQVU7QUFDZCwyQkFBTyxNQUUzQjtBQU5XO0FBTVY7QUFDRSxTQUFhLDhCQUFPLFFBQVMsUUFBcUMscUNBQUU7QUFDN0Q7QUFDUywwQkFBSTtBQUNILDJCQUFPLE1BQWE7QUFDdkIsd0JBQU8sTUFBVTtBQUNkLDJCQUFPLE1BRTNCO0FBTlc7QUFNVjtBQUNLLFlBQU0sU0FDaEI7QUFBRSxHOzs7Ozs7Ozs7Ozs7O0FDNUNpRDs7QUFDNUM7O0tBQW1EOzs7O0FBQzFELEtBQW1CLGdCQUEyQjtBQUU5QyxlQUF3QixJQUE0QjtBQUM3QyxTQUFDLENBQUMsQ0FBTSxNQUFLLEtBQUU7QUFDVCxlQUFJLE1BQUcsRUFBTSxNQUFNLE1BQU8sT0FBTyxPQUFTLFNBQVU7QUFDbkQsZ0JBQU8sT0FBTyxPQUFHLElBQzNCO0FBQUM7QUFDSyxZQUNWO0FBQUM7QUFFRCxpQkFBMEIsSUFBNEIsT0FBeUM7QUFDdkYsVUFBRyxJQUFTO0FBQ1gsV0FBSSxNQUFTLE9BQU8sT0FBRyxJQUFPLE1BQUksS0FBYTtBQUM5QyxZQUFPLE9BQU8sT0FBRyxJQUMzQjtBQUVBO0FBQU8sS0FBMEIsc0RBQWlDLDhCQUFNLE9BQVE7QUFDekUsU0FBYSw4QkFBTyxRQUFTLFFBQTZCLDZCQUFFO0FBQ3RELGlCQUFTLE9BQU8sT0FBRyxJQUFPLE9BQUUsRUFBUyxTQUFVO0FBQzlDLGdCQUNWO0FBQUM7QUFFRSxTQUFhLDhCQUFPLFFBQVMsUUFBa0Msa0NBQUU7QUFDM0QsaUJBQVMsT0FBTyxPQUFHLElBQU8sT0FBRSxFQUFTLFNBQVc7QUFDL0MsZ0JBQ1Y7QUFBQztBQUVFLFNBQWEsOEJBQU8sUUFBUyxRQUE4Qiw4QkFBRTtBQUN2RCxpQkFBUyxPQUFPLE9BQUcsSUFBTyxPQUFFLEVBQUssTUFBUSxPQUFRLFNBQVMsU0FBVztBQUNwRSxnQkFDVjtBQUFDO0FBRUssWUFBTSxTQUNoQjtBQUFFLEciLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvd3d3cm9vdC9zY3JpcHRzL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmRkOWVkMzc0MDk5NzUwOTkyMjYiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBtYXRjaCwgUm91dGVyQ29udGV4dCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgY3JlYXRlTWVtb3J5SGlzdG9yeSBmcm9tICdoaXN0b3J5L2xpYi9jcmVhdGVNZW1vcnlIaXN0b3J5JztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29uZmlndXJlU3RvcmUnO1xudHlwZSBCb290UmVzdWx0ID0geyBodG1sPzogc3RyaW5nLCBnbG9iYWxzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSwgcmVkaXJlY3RVcmw/OiBzdHJpbmd9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpOiBQcm9taXNlPHsgaHRtbDogc3RyaW5nIH0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Qm9vdFJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBNYXRjaCB0aGUgaW5jb21pbmcgcmVxdWVzdCBhZ2FpbnN0IHRoZSBsaXN0IG9mIGNsaWVudC1zaWRlIHJvdXRlc1xuICAgICAgICBtYXRjaCh7IHJvdXRlcywgbG9jYXRpb246IHBhcmFtcy5sb2NhdGlvbiB9LCAoZXJyb3IsIHJlZGlyZWN0TG9jYXRpb24sIHJlbmRlclByb3BzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcmVkaXJlY3Rpb24sIGp1c3Qgc2VuZCB0aGlzIGluZm9ybWF0aW9uIGJhY2sgdG8gdGhlIGhvc3QgYXBwbGljYXRpb25cbiAgICAgICAgICAgIGlmIChyZWRpcmVjdExvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHJlZGlyZWN0VXJsOiByZWRpcmVjdExvY2F0aW9uLnBhdGhuYW1lIH0pOyBcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCBtYXRjaCBhbnkgcm91dGUsIHJlbmRlclByb3BzIHdpbGwgYmUgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoIXJlbmRlclByb3BzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbG9jYXRpb24gJyR7IHBhcmFtcy51cmwgfScgZG9lc24ndCBtYXRjaCBhbnkgcm91dGUgY29uZmlndXJlZCBpbiByZWFjdC1yb3V0ZXIuYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEJ1aWxkIGFuIGluc3RhbmNlIG9mIHRoZSBhcHBsaWNhdGlvblxuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuICAgICAgICAgICAgY29uc3QgYXBwID0gKFxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17IHN0b3JlIH0+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXJDb250ZXh0IHsuLi5yZW5kZXJQcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gUGVyZm9ybSBhbiBpbml0aWFsIHJlbmRlciB0aGF0IHdpbGwgY2F1c2UgYW55IGFzeW5jIHRhc2tzIChlLmcuLCBkYXRhIGFjY2VzcykgdG8gYmVnaW5cbiAgICAgICAgICAgIHJlbmRlclRvU3RyaW5nKGFwcCk7XG5cbiAgICAgICAgICAgIC8vIE9uY2UgdGhlIHRhc2tzIGFyZSBkb25lLCB3ZSBjYW4gcGVyZm9ybSB0aGUgZmluYWwgcmVuZGVyXG4gICAgICAgICAgICAvLyBXZSBhbHNvIHNlbmQgdGhlIHJlZHV4IHN0b3JlIHN0YXRlLCBzbyB0aGUgY2xpZW50IGNhbiBjb250aW51ZSBleGVjdXRpb24gd2hlcmUgdGhlIHNlcnZlciBsZWZ0IG9mZlxuICAgICAgICAgICAgcGFyYW1zLmRvbWFpblRhc2tzLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBodG1sOiByZW5kZXJUb1N0cmluZyhhcHApLFxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzOiB7IGluaXRpYWxSZWR1eFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSgpIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7IC8vIEFsc28gcHJvcGFnYXRlIGFueSBlcnJvcnMgYmFjayBpbnRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgSGlzdG9yeUJhc2UgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IExheW91dFBhZ2UgfSBmcm9tIFwiLi9jb21wb25lbnRfcGFnZXMvbGF5b3V0UGFnZVwiO1xyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gXCIuL2NvbXBvbmVudF9wYWdlcy9ob21lUGFnZVwiOyBcclxuaW1wb3J0IHsgUmVjaXBlUGFnZSB9IGZyb20gXCIuL2NvbXBvbmVudF9wYWdlcy9yZWNpcGVQYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCA8Um91dGUgY29tcG9uZW50PXsgTGF5b3V0UGFnZSB9PlxyXG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50cz17eyBib2R5OiBIb21lUGFnZSB9fSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9XCJyZWNpcGUvOmlkXCIgY29tcG9uZW50cz17eyBib2R5OiBSZWNpcGVQYWdlIH19IC8+XHJcbjwvUm91dGU+O1xyXG5cclxuLy8gRW5hYmxlIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgKEhNUilcclxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9yb3V0ZXMudHN4IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFwiLi9sYXlvdXRQYWdlLnNjc3NcIjtcclxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRQcm9wcyB7XHJcbiAgICBib2R5OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgY29tcG9uZW50IHdpbGwgbGF0ZXIgaG9sZCBtZW51cyBhbmQgb3RoZXIgbGF5b3V0IHByb3BzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExheW91dFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TGF5b3V0UHJvcHMsIHZvaWQ+IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBpZD1cInBhZ2VfbGF5b3V0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVySW1hZ2VDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGVhZGVySW1hZ2VcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9mb29kLWtpdGNoZW4tY3V0dGluZy1ib2FyZC1jb29raW5nLXJldGluYS5qcGdcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5ib2R5IH1cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudF9wYWdlcy9sYXlvdXRQYWdlLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBwcm92aWRlIH0gZnJvbSBcInJlZHV4LXR5cGVkXCI7XHJcbmltcG9ydCB7IFJlY2lwZVNlYXJjaEJveCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3JlY2lwZVNlYXJjaEJveC9yZWNpcGVTZWFyY2hCb3hcIjtcclxuaW1wb3J0IFwiLi9ob21lUGFnZS5zY3NzXCI7XHJcbmltcG9ydCAqIGFzIEggZnJvbSBcImhpc3RvcnlcIjtcclxuaW1wb3J0IHtSZWNpcGVzU2VhcmNoUmVzdWx0TGlzdH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVjaXBlc1NlYXJjaFJlc3VsdExpc3QvcmVjaXBlc1NlYXJjaFJlc3VsdExpc3RcIjtcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SG9tZVByb3BzLCB7IHNlYXJjaFRleHQ6IHN0cmluZzsgfT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2VfaG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlY2lwZVNlYXJjaEJveCBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWNpcGVzU2VhcmNoUmVzdWx0TGlzdCBzZWFyY2hpbmc9e3RoaXMucHJvcHMuaXNMb2FkaW5nfSBxdWVyeT17dGhpcy5wcm9wcy5jdXJyZW50UXVlcnl9IHJlY2lwaWVzPXt0aGlzLnByb3BzLnF1ZXJ5UmVzdWx0c30vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHByb3ZpZGVyID0gcHJvdmlkZShcclxuICAgIChzdGF0ZTogSUFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLnJlY2lwZVNlYXJjaHNTdGF0ZSxcclxuICAgIHt9XHJcbikud2l0aEV4dGVybmFsUHJvcHM8e1xyXG4gICAgbG9jYXRpb246IEguTG9jYXRpb24sXHJcbiAgICBwYXJhbXM6IHsgcTogc3RyaW5nIH1cclxufT4oKTtcclxudHlwZSBIb21lUHJvcHMgPSB0eXBlb2YgcHJvdmlkZXIuYWxsUHJvcHM7XHJcbmV4cG9ydCBjb25zdCBIb21lUGFnZSA9IHByb3ZpZGVyLmNvbm5lY3QoSG9tZSBhcyBhbnkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRfcGFnZXMvaG9tZVBhZ2UudHN4IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdHlwZWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eC10eXBlZFwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9yZWNpcGVTZWFyY2hCb3guc2Nzc1wiO1xyXG5pbXBvcnQgQXV0b3N1Z2dlc3QgZnJvbSBcInJlYWN0LWF1dG9zdWdnZXN0XCI7XHJcbmltcG9ydCB7IHByb3ZpZGUgfSBmcm9tIFwicmVkdXgtdHlwZWRcIjtcclxuaW1wb3J0IHsgcmVjaXBlU2VhcmNoQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3JlY2lwZVNlYXJjaEFjdGlvbnNcIjtcclxuaW1wb3J0IHtMb2FkSWNvbn0gZnJvbSBcIi4uL2ljb25zL2xvYWRJY29uXCI7XHJcbmltcG9ydCAqIGFzIEggZnJvbSBcImhpc3RvcnlcIjtcclxuXHJcbmNsYXNzIFJlY2lwZVNlYXJjaEJveENsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFNlYXJjaEJveFByb3BzLCBhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBzdWdnZXN0aW9uczogW11cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgIFxyXG4gICAgcmVuZGVyU3VnZ2VzdGlvbih7c3VnZ2VzdGlvbn0sIHF1ZXJ5KSB7XHJcbiAgICAgICAgcmV0dXJuIDxzcGFuPntzdWdnZXN0aW9ufTwvc3Bhbj47XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGlucHV0OiBhbnk7XHJcbiAgICBzdG9yZUlucHV0UmVmZXJlbmNlKGF1dG9zdWdnZXN0KSB7XHJcbiAgICAgICAgaWYgKGF1dG9zdWdnZXN0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBhdXRvc3VnZ2VzdC5pbnB1dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBxdWVyeVJlY2lwaWVzKCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMucXVlcnlSZWNpcGllcyh0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgIH1cclxuICAgIG9uU3VibWl0Rm9ybShlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxFdmVudD4pIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5xdWVyeVJlY2lwaWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWdnZXN0aW9uc0ZldGNoUmVxdWVzdGVkKHt2YWx1ZX0pIHtcclxuICAgICAgICBjb25zdCBvcHRzID0gdmFsdWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIHRoaXMucHJvcHMucXVlcnlTdWdnZXN0aW9ucyh7dmFsdWU6IG9wdHNbb3B0cy5sZW5ndGggLSAxXSB9KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUxhc3RXb3JkKHN1Z2dlc3RlZFZhbHVlKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0cyA9IHRoaXMuc3RhdGUudmFsdWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGxldCBuZXdWYWx1ZTtcclxuICAgICAgICBpZiAob3B0cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gb3B0cy5zbGljZSgwLCBvcHRzLmxlbmd0aCAtIDEpLmpvaW4oXCIgXCIpICsgXCIgXCIgKyBzdWdnZXN0ZWRWYWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHN1Z2dlc3RlZFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWU6IG5ld1ZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvblN1Z2dlc3Rpb25TZWxlY3RlZChhLCB7c3VnZ2VzdGlvblZhbHVlfSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGFzdFdvcmQoc3VnZ2VzdGlvblZhbHVlKTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlKGV2ZW50LCBiKSB7XHJcbiAgICAgICAgY29uc3QgeyBuZXdWYWx1ZSwgbWV0aG9kIH0gPSBiO1xyXG4gICAgICAgIGlmIChtZXRob2QgIT09IFwidHlwZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGFzdFdvcmQobmV3VmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ld1ZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBpbnB1dFByb3BzID0ge1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIixcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWUsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaGJveC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1zaGFkb3cgY2VudGVyXCIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5IdmEgaGFyIGR1IGx5c3QgcMOlIGkgZGFnPzwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdEZvcm0uYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9zdWdnZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Z2dlc3Rpb25TZWxlY3RlZD17dGhpcy5vblN1Z2dlc3Rpb25TZWxlY3RlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM9e3RoaXMucHJvcHMuc3VnZ2VzdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Z2dlc3Rpb25zRmV0Y2hSZXF1ZXN0ZWQ9e3RoaXMub25TdWdnZXN0aW9uc0ZldGNoUmVxdWVzdGVkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Z2dlc3Rpb25zQ2xlYXJSZXF1ZXN0ZWQ9e3RoaXMucHJvcHMuY2xlYXJTdWdnZXN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFN1Z2dlc3Rpb25WYWx1ZT17KHsgc3VnZ2VzdGlvbiB9KSA9PiBzdWdnZXN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyU3VnZ2VzdGlvbj17dGhpcy5yZW5kZXJTdWdnZXN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17aW5wdXRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5zdG9yZUlucHV0UmVmZXJlbmNlLmJpbmQodGhpcyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5xdWVyeVJlY2lwaWVzLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cInNlYXJjaEJ0blwiPlPDuGNjPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8TG9hZEljb24gc3R5bGU9e3sgbWFyZ2luVG9wOiAxNSwgb3BhY2l0eTogdGhpcy5wcm9wcy5pc0xvYWRpbmcgPyAxIDogMCB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBwcm92aWRlciA9IHByb3ZpZGUoXHJcbiAgICAoc3RhdGU6IElBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5yZWNpcGVTZWFyY2hzU3RhdGUsXHJcbiAgICByZWNpcGVTZWFyY2hBY3Rpb25zXHJcbikud2l0aEV4dGVybmFsUHJvcHM8e1xyXG4gICAgbG9jYXRpb246IEguTG9jYXRpb24sXHJcbn0+KCk7XHJcblxyXG50eXBlIFNlYXJjaEJveFByb3BzID0gdHlwZW9mIHByb3ZpZGVyLmFsbFByb3BzO1xyXG5leHBvcnQgY29uc3QgUmVjaXBlU2VhcmNoQm94ID0gcHJvdmlkZXIuY29ubmVjdChSZWNpcGVTZWFyY2hCb3hDbGFzcyBhcyBhbnkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL3JlY2lwZVNlYXJjaEJveC9yZWNpcGVTZWFyY2hCb3gudHN4IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXV0b3N1Z2dlc3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1hdXRvc3VnZ2VzdFwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyB0eXBlTmFtZSwgQWN0aW9uIH0gZnJvbSAncmVkdXgtdHlwZWQnO1xyXG5pbXBvcnQgeyBmZXRjaCwgYWRkVGFzayB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgQWN0aW9uQ3JlYXRvciB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5cclxuQHR5cGVOYW1lKFwiUmVjaXBlU2VhcmNoX1FVRVJZX1JFQ0lQRVNcIilcclxuZXhwb3J0IGNsYXNzIFF1ZXJ5UmVjaXBlc0FjdGlvbiBleHRlbmRzIEFjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcXVlcnk6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbn1cclxuQHR5cGVOYW1lKFwiUmVjaXBlU2VhcmNoX1JFQ0lFVkVEX1JFQ0lQSUVTX1FVRVJZXCIpXHJcbmV4cG9ydCBjbGFzcyBSZWNpZXZlZFJlY2lwaVF1ZXJ5QWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBxdWVyeTogc3RyaW5nLCBwdWJsaWMgcmVjaXBpZXM6IElSZWNpcGllW10pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG59XHJcbkB0eXBlTmFtZShcIlJlY2lwZVNlYXJjaF9RVUVSWV9SRUNJUEVfU0VBUkNIX1NVR0dFU1RJT05TXCIpXHJcbmV4cG9ydCBjbGFzcyBRdWVyeVJlY2lwZVNlYXJjaFN1Z2dlc3Rpb25zQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBxdWVyeTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufVxyXG5AdHlwZU5hbWUoXCJSZWNpcGVTZWFyY2hfUkVDSUVWRURfUkVDSVBFX1NFQVJDSF9TVUdHRVNUSU9OU1wiKVxyXG5leHBvcnQgY2xhc3MgUmVjaWV2ZWRSZWNpcGVTZWFyY2hTdWdnZXN0aW9uc0FjdGlvbiBleHRlbmRzIEFjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcXVlcnk6IHN0cmluZywgcHVibGljIHN1Z2dlc3Rpb25zOiBJU2VhcmNoU3VnZ2VzdGlvbltdKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufVxyXG5AdHlwZU5hbWUoXCJSZWNpcGVTZWFyY2hfQ0xFQVJfUkVDSVBFX1NFQVJDSF9TVUdHRVNUSU9OU1wiKVxyXG5leHBvcnQgY2xhc3MgQ2xlYXJSZWNpcGVTZWFyY2hTdWdnZXN0aW9uc0FjdGlvbiBleHRlbmRzIEFjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVjaXBlU2VhcmNoQWN0aW9ucyA9IHtcclxuICAgIHF1ZXJ5UmVjaXBpZXM6IChxOiBzdHJpbmcpOiBBY3Rpb25DcmVhdG9yID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBsZXQgZmV0Y2hUYXNrID0gZmV0Y2goYC9hcGkvZmluZFJlY2lwZXM/cT0ke3F9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YTogeyByZWNpcGVzOiBJUmVjaXBpZVtdLCBza2lwTWFya2VyOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2gobmV3IFJlY2lldmVkUmVjaXBpUXVlcnlBY3Rpb24ocSwgZGF0YS5yZWNpcGVzKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhZGRUYXNrKGZldGNoVGFzayk7IC8vIEVuc3VyZSBzZXJ2ZXItc2lkZSBwcmVyZW5kZXJpbmcgd2FpdHMgZm9yIHRoaXMgdG8gY29tcGxldGVcclxuICAgICAgICBkaXNwYXRjaChuZXcgUXVlcnlSZWNpcGVzQWN0aW9uKHEpKTtcclxuICAgIH0sXHJcbiAgICBxdWVyeVN1Z2dlc3Rpb25zOiAoe3ZhbHVlfSk6IEFjdGlvbkNyZWF0b3IgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIGxldCBmZXRjaFRhc2sgPSBmZXRjaChgL2FwaS9hdXRvY29tcGxldGU/dz0ke3ZhbHVlfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGE6IElTZWFyY2hTdWdnZXN0aW9uW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5ldyBSZWNpZXZlZFJlY2lwZVNlYXJjaFN1Z2dlc3Rpb25zQWN0aW9uKHZhbHVlLCBkYXRhKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGFkZFRhc2soZmV0Y2hUYXNrKTsgLy8gRW5zdXJlIHNlcnZlci1zaWRlIHByZXJlbmRlcmluZyB3YWl0cyBmb3IgdGhpcyB0byBjb21wbGV0ZVxyXG4gICAgICAgIGRpc3BhdGNoKG5ldyBRdWVyeVJlY2lwZVNlYXJjaFN1Z2dlc3Rpb25zQWN0aW9uKHZhbHVlKSk7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJTdWdnZXN0aW9uczogKCk6IEFjdGlvbkNyZWF0b3IgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKG5ldyBDbGVhclJlY2lwZVNlYXJjaFN1Z2dlc3Rpb25zQWN0aW9uKCkpO1xyXG4gICAgfVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9hY3Rpb25zL3JlY2lwZVNlYXJjaEFjdGlvbnMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb21haW4tdGFza1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImRvbWFpbi10YXNrXCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL2xvYWRJY29uLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2FkSWNvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHsuLi5wcm9wc30gY2xhc3NOYW1lPVwibG9hZEljb25cIj5cclxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJjaXJjdWxhclwiIHZpZXdCb3g9XCIyNSAyNSA1MCA1MFwiPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjbGFzc05hbWU9XCJwYXRoXCIgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiMjBcIiBmaWxsPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaWNvbnMvbG9hZEljb24udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vcmVjaXBlc1NlYXJjaFJlc3VsdExpc3Quc2Nzc1wiO1xyXG5pbXBvcnQgeyBSZWNpcGVDYXJkIH0gZnJvbSBcIi4uL3JlY2lwZUNhcmQvcmVjaXBlQ2FyZFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUmVjaXBlc1NlYXJjaFJlc3VsdExpc3RQcm9wcyB7XHJcbiAgICByZWNpcGllczogSVJlY2lwaWVbXTtcclxuICAgIHF1ZXJ5OiBzdHJpbmc7XHJcbiAgICBzZWFyY2hpbmc6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWNpcGVzU2VhcmNoUmVzdWx0TGlzdChwcm9wczogSVJlY2lwZXNTZWFyY2hSZXN1bHRMaXN0UHJvcHMpIHtcclxuICAgIGNvbnN0IG5vUmVzdWx0cyA9ICEhcHJvcHMucXVlcnkgJiYgcHJvcHMucmVjaXBpZXMubGVuZ3RoIDwgMTtcclxuXHJcbiAgICBpZiAobm9SZXN1bHRzICYmICFwcm9wcy5zZWFyY2hpbmcpIHtcclxuICAgICAgICByZXR1cm4gPGg1IHN0eWxlPXt7Y29sb3I6IFwiI0ZGRlwiLCB3aWR0aDogXCIxMDAlXCIgfX0+U8O4ayBldHRlciAne3Byb3BzLnF1ZXJ5fScgZ2F2IGluZ2VuIHRyZWZmPC9oNT47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb3BzLnJlY2lwaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2lwZXNTZWFyY2hSZXN1bHRMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMucmVjaXBpZXMubWFwKChyZWNpcGUsIGkpID0+IDxSZWNpcGVDYXJkIHJlY2lwZT17cmVjaXBlfSBrZXk9e2l9IC8+KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL3JlY2lwZXNTZWFyY2hSZXN1bHRMaXN0L3JlY2lwZXNTZWFyY2hSZXN1bHRMaXN0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL3JlY2lwZUNhcmQuc2Nzc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlY2lwZUNhcmQoe3JlY2lwZX06IHsgcmVjaXBlOiBJUmVjaXBpZSB9KSB7XHJcblxyXG4gICAgY29uc3QgaW1nU3R5bGUgPSB7IGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7cmVjaXBlLmltYWdlVXJsfVwiKWAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGFsdD17cmVjaXBlLnRpdGxlfSB0bz17YHJlY2lwZS8ke3JlY2lwZS5pZH1gfSBjbGFzc05hbWU9XCJob3ZlcmFibGUgcmVjaXBldENhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNpcGV0SW1hZ2VcIiBzdHlsZT17aW1nU3R5bGV9PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2lwZXRJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57cmVjaXBlLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9yZWNpcGVDYXJkL3JlY2lwZUNhcmQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHByb3ZpZGUgfSBmcm9tIFwicmVkdXgtdHlwZWRcIjtcclxuaW1wb3J0ICogYXMgSCBmcm9tIFwiaGlzdG9yeVwiO1xyXG5pbXBvcnQge3JlY2lwZURldGFpbHNBY3Rpb25zfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9ucy9yZWNpcGVEZXRhaWxzQWN0aW9uc1wiO1xyXG5cclxuY2xhc3MgUmVjaXBlUGFnZUNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJlY2lwZVBhZ2VQcm9wcywgYW55PntcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmxvYWRSZWNpcGVEZXRhaWxzKHRoaXMucHJvcHMucGFyYW1zLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLnBhcmFtcy5pZDtcclxuICAgICAgICBpZiAoISF0aGlzLnByb3BzLmRldGFpbHNbaWRdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbHNNZXRhID0gdGhpcy5wcm9wcy5kZXRhaWxzW2lkXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghIWRldGFpbHNNZXRhICYmICEhZGV0YWlsc01ldGEuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiIHN0eWxlPXt7d29yZFdyYXA6IFwiYnJlYWstd29yZFwiLCB3aGl0ZVNwYWNlOiBcInByZS13cmFwXCIsIHBhZGRpbmc6IDIwLCBtYXJnaW5Ub3A6IFwiMjUlXCIsIGhlaWdodDogNDAwLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5Mb2FkZWQgZGV0YWlscyBkYXRhIGZvciB7aWR9OjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGRldGFpbHNNZXRhKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PjsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxudHlwZSBFeHRlcm5hbFByb3BzID0ge1xyXG4gICAgbG9jYXRpb246IEguTG9jYXRpb24sXHJcbiAgICBwYXJhbXM6IHsgaWQ6IHN0cmluZyB9XHJcbn1cclxuY29uc3QgcHJvdmlkZXIgPSBwcm92aWRlKChzdGF0ZTogSUFwcGxpY2F0aW9uU3RhdGUpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkZXRhaWxzOiBzdGF0ZS5yZWNpcGVEZXRhaWxzXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlY2lwZURldGFpbHNBY3Rpb25zXHJcbikud2l0aEV4dGVybmFsUHJvcHM8RXh0ZXJuYWxQcm9wcz4oKTtcclxudHlwZSBSZWNpcGVQYWdlUHJvcHMgPSB0eXBlb2YgcHJvdmlkZXIuYWxsUHJvcHM7XHJcbmV4cG9ydCBjb25zdCBSZWNpcGVQYWdlID0gcHJvdmlkZXIuY29ubmVjdChSZWNpcGVQYWdlQ2xhc3MgYXMgYW55KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50X3BhZ2VzL3JlY2lwZVBhZ2UudHN4IiwiaW1wb3J0IHsgdHlwZU5hbWUsIEFjdGlvbiB9IGZyb20gJ3JlZHV4LXR5cGVkJztcclxuaW1wb3J0IHsgZmV0Y2gsIGFkZFRhc2sgfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IEFjdGlvbkNyZWF0b3IgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbkB0eXBlTmFtZShcInJlY2lwZURldGFpbHNfTG9hZGluZ1JlY2lwZURldGFpbHNBY3Rpb25cIilcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdSZWNpcGVEZXRhaWxzQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufVxyXG5AdHlwZU5hbWUoXCJyZWNpcGVEZXRhaWxzX0xvYWRlZFJlY2lwZURldGFpbHNBY3Rpb25cIilcclxuZXhwb3J0IGNsYXNzIFJlY2lldmVkUmVjaXBlRGV0YWlsc0FjdGlvbiBleHRlbmRzIEFjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IHN0cmluZywgcHVibGljIHJlY2lwaWU6IElSZWNpcGllRGV0YWlscykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbn1cclxuQHR5cGVOYW1lKFwicmVjaXBlRGV0YWlsc19FcnJvckxvYWRpbmdSZWNpcGVEZXRhaWxzQWN0aW9uXCIpXHJcbmV4cG9ydCBjbGFzcyBFcnJvckxvYWRpbmdSZWNpcGVEZXRhaWxzQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlY2lwZURldGFpbHNBY3Rpb25zID0ge1xyXG4gICAgbG9hZFJlY2lwZURldGFpbHM6IChpZDpzdHJpbmcpOiBBY3Rpb25DcmVhdG9yID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChuZXcgTG9hZGluZ1JlY2lwZURldGFpbHNBY3Rpb24oaWQpKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmV0Y2hUYXNrID0gZmV0Y2goYC9hcGkvcmVjaXBlLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGlkKX1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChyZWNpcGllOiBJUmVjaXBpZURldGFpbHMpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5ldyBSZWNpZXZlZFJlY2lwZURldGFpbHNBY3Rpb24oaWQsIHJlY2lwaWUpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFkZFRhc2soZmV0Y2hUYXNrKTtcclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvYWN0aW9ucy9yZWNpcGVEZXRhaWxzQWN0aW9ucy50cyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNvbWJpbmVSZWR1Y2VycywgR2VuZXJpY1N0b3JlRW5oYW5jZXIgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBTdG9yZSBmcm9tICcuL3N0b3JlL3N0b3JlJztcclxuaW1wb3J0IHsgdHlwZWRUb1BsYWluIH0gZnJvbSAncmVkdXgtdHlwZWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlPzogSUFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICAgIC8vIEJ1aWxkIG1pZGRsZXdhcmUuIFRoZXNlIGFyZSBmdW5jdGlvbnMgdGhhdCBjYW4gcHJvY2VzcyB0aGUgYWN0aW9ucyBiZWZvcmUgdGhleSByZWFjaCB0aGUgc3RvcmUuXHJcbiAgICBjb25zdCB3aW5kb3dJZkRlZmluZWQgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB3aW5kb3cgYXMgYW55O1xyXG4gICAgLy8gSWYgZGV2VG9vbHMgaXMgaW5zdGFsbGVkLCBjb25uZWN0IHRvIGl0XHJcbiAgICBjb25zdCBkZXZUb29sc0V4dGVuc2lvbiA9IHdpbmRvd0lmRGVmaW5lZCAmJiB3aW5kb3dJZkRlZmluZWQuZGV2VG9vbHNFeHRlbnNpb24gYXMgKCkgPT4gR2VuZXJpY1N0b3JlRW5oYW5jZXI7XHJcbiAgICBjb25zdCBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlID0gY29tcG9zZShcclxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmssIHR5cGVkVG9QbGFpbiksXHJcbiAgICAgICAgZGV2VG9vbHNFeHRlbnNpb24gPyBkZXZUb29sc0V4dGVuc2lvbigpIDogZiA9PiBmIFxyXG4gICAgKShjcmVhdGVTdG9yZSk7XHJcblxyXG4gICAgLy8gQ29tYmluZSBhbGwgcmVkdWNlcnMgYW5kIGluc3RhbnRpYXRlIHRoZSBhcHAtd2lkZSBzdG9yZSBpbnN0YW5jZVxyXG4gICAgY29uc3QgYWxsUmVkdWNlcnMgPSBidWlsZFJvb3RSZWR1Y2VyKFN0b3JlLnJlZHVjZXJzKTtcclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZShhbGxSZWR1Y2VycywgaW5pdGlhbFN0YXRlKSBhcyBSZWR1eC5TdG9yZTxJQXBwbGljYXRpb25TdGF0ZT47XHJcblxyXG4gICAgLy8gRW5hYmxlIFdlYnBhY2sgaG90IG1vZHVsZSByZXBsYWNlbWVudCBmb3IgcmVkdWNlcnNcclxuICAgIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vc3RvcmUvc3RvcmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmU8dHlwZW9mIFN0b3JlPignLi9zdG9yZS9zdG9yZScpO1xyXG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihidWlsZFJvb3RSZWR1Y2VyKG5leHRSb290UmVkdWNlci5yZWR1Y2VycykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgICBcclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRSb290UmVkdWNlcihhbGxSZWR1Y2Vycykge1xyXG4gICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyczxJQXBwbGljYXRpb25TdGF0ZT4oT2JqZWN0LmFzc2lnbih7fSwgYWxsUmVkdWNlcnMsIHsgcm91dGluZzogcm91dGVyUmVkdWNlciB9KSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LXRodW5rXCJcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1yZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBBY3Rpb25DcmVhdG9yR2VuZXJpYyB9IGZyb20gXCJyZWR1eC10eXBlZFwiO1xyXG5pbXBvcnQgeyByZWNpcGVTZWFyY2hSZWR1Y2VyfSBmcm9tIFwiLi9yZWR1Y2Vycy9yZWNpcGVTZWFyY2hSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IHJlY2lwZURldGFpbHNSZWR1Y2VyIH0gZnJvbSBcIi4vcmVkdWNlcnMvcmVjaXBlRGV0YWlsc1JlZHVjZXJcIjtcclxuXHJcbi8vIHdoZW5ldmVyIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLCBSZWR1eCB3aWxsIHVwZGF0ZSBlYWNoIHRvcC1sZXZlbCBhcHBsaWNhdGlvbiBzdGF0ZSBwcm9wZXJ0eSB1c2luZ1xyXG4vLyB0aGUgcmVkdWNlciB3aXRoIHRoZSBtYXRjaGluZyBuYW1lLiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZSBuYW1lcyBtYXRjaCBleGFjdGx5LCBhbmQgdGhhdCB0aGUgcmVkdWNlclxyXG4vLyBhY3RzIG9uIHRoZSBjb3JyZXNwb25kaW5nIEFwcGxpY2F0aW9uU3RhdGUgcHJvcGVydHkgdHlwZS5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzID0ge1xyXG4gICAgcmVjaXBlU2VhcmNoc1N0YXRlOiByZWNpcGVTZWFyY2hSZWR1Y2VyLFxyXG4gICAgcmVjaXBlRGV0YWlsczogcmVjaXBlRGV0YWlsc1JlZHVjZXJcclxufTtcclxuIFxyXG4vLyB0aGlzIHR5cGUgY2FuIGJlIHVzZWQgYXMgYSBoaW50IG9uIGFjdGlvbiBjcmVhdG9ycyBzbyB0aGF0IGl0cyAnZGlzcGF0Y2gnIGFuZCAnZ2V0U3RhdGUnIHBhcmFtcyBhcmVcclxuLy8gY29ycmVjdGx5IHR5cGVkIHRvIG1hdGNoIHlvdXIgc3RvcmUuXHJcbmV4cG9ydCB0eXBlIEFjdGlvbkNyZWF0b3IgPSBBY3Rpb25DcmVhdG9yR2VuZXJpYzxJQXBwbGljYXRpb25TdGF0ZT47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL3N0b3JlLnRzIiwiaW1wb3J0IHsgaXNBY3Rpb25UeXBlLCBSZWR1Y2VyIH0gZnJvbSAncmVkdXgtdHlwZWQnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9ucy9yZWNpcGVTZWFyY2hBY3Rpb25zXCI7XG5jb25zdCB1bmxvYWRlZFN0YXRlOiBJUmVjaXBlU2VhcmNoc1N0YXRlID0ge1xuICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgc3VnZ2VzdGlvbnM6IFtdLFxuICAgIHF1ZXJ5UmVzdWx0czogW10sXHJcbiAgICBjdXJyZW50UXVlcnk6IFwiXCJcclxufTtcblxuZXhwb3J0IGNvbnN0IHJlY2lwZVNlYXJjaFJlZHVjZXI6IFJlZHVjZXI8SVJlY2lwZVNlYXJjaHNTdGF0ZT4gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGlmIChpc0FjdGlvblR5cGUoYWN0aW9uLCBBY3Rpb25zLlF1ZXJ5UmVjaXBlc0FjdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBzdGF0ZS5zdWdnZXN0aW9ucyxcbiAgICAgICAgICAgIGN1cnJlbnRRdWVyeTogYWN0aW9uLnF1ZXJ5LFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcXVlcnlSZXN1bHRzOiBzdGF0ZS5xdWVyeVJlc3VsdHNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGlzQWN0aW9uVHlwZShhY3Rpb24sIEFjdGlvbnMuUmVjaWV2ZWRSZWNpcGlRdWVyeUFjdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBzdGF0ZS5zdWdnZXN0aW9ucyxcbiAgICAgICAgICAgIGN1cnJlbnRRdWVyeTpcbiAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRRdWVyeSxcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBxdWVyeVJlc3VsdHM6IGFjdGlvbi5yZWNpcGllc1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoaXNBY3Rpb25UeXBlKGFjdGlvbiwgQWN0aW9ucy5SZWNpZXZlZFJlY2lwZVNlYXJjaFN1Z2dlc3Rpb25zQWN0aW9uKSkge1xuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWdnZXN0aW9uczogYWN0aW9uLnN1Z2dlc3Rpb25zLFxuICAgICAgICAgICAgY3VycmVudFF1ZXJ5OiBzdGF0ZS5jdXJyZW50UXVlcnksXHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogc3RhdGUuaXNMb2FkaW5nLFxyXG4gICAgICAgICAgICBxdWVyeVJlc3VsdHM6IHN0YXRlLnF1ZXJ5UmVzdWx0c1xyXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChpc0FjdGlvblR5cGUoYWN0aW9uLCBBY3Rpb25zLkNsZWFyUmVjaXBlU2VhcmNoU3VnZ2VzdGlvbnNBY3Rpb24pKSB7XG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXSxcbiAgICAgICAgICAgIGN1cnJlbnRRdWVyeTogc3RhdGUuY3VycmVudFF1ZXJ5LFxyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHN0YXRlLmlzTG9hZGluZyxcclxuICAgICAgICAgICAgcXVlcnlSZXN1bHRzOiBzdGF0ZS5xdWVyeVJlc3VsdHNcclxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGUgfHwgdW5sb2FkZWRTdGF0ZTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL3JlZHVjZXJzL3JlY2lwZVNlYXJjaFJlZHVjZXIudHMiLCJpbXBvcnQgeyBpc0FjdGlvblR5cGUsIFJlZHVjZXIgfSBmcm9tICdyZWR1eC10eXBlZCc7XHJcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSBcIi4uL2FjdGlvbnMvcmVjaXBlRGV0YWlsc0FjdGlvbnNcIjtcclxuY29uc3QgdW5sb2FkZWRTdGF0ZTogSVJlY2lwZURldGFpbHNTdGF0ZSA9IHt9O1xyXG5cclxuZnVuY3Rpb24gaW5pdChpZDogc3RyaW5nLCBzdGF0ZTogSVJlY2lwZURldGFpbHNTdGF0ZSkge1xyXG4gICAgaWYgKCEhc3RhdGVbaWRdKSB7XHJcbiAgICAgICAgc3RhdGVbaWRdID0geyBkYXRhOiBudWxsLCBlcnJvcjogZmFsc2UsIGxvYWRpbmc6IGZhbHNlIH07XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdGF0ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlKGlkOiBzdHJpbmcsIHN0YXRlOiBJUmVjaXBlRGV0YWlsc1N0YXRlLCBuZXdPYmplY3Q6IElFbnRpdHlNZXRhPElSZWNpcGllRGV0YWlscz4pIHtcclxuICAgIGluaXQoaWQsIHN0YXRlKTtcclxuICAgIHN0YXRlW2lkXSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlW2lkXSwgbmV3T2JqZWN0KTtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZWNpcGVEZXRhaWxzUmVkdWNlcjogUmVkdWNlcjxJUmVjaXBlRGV0YWlsc1N0YXRlPiA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBpZiAoaXNBY3Rpb25UeXBlKGFjdGlvbiwgQWN0aW9ucy5Mb2FkaW5nUmVjaXBlRGV0YWlsc0FjdGlvbikpIHtcclxuICAgICAgICBzdGF0ZSA9IHVwZGF0ZShhY3Rpb24uaWQsIHN0YXRlLCB7IGxvYWRpbmc6IHRydWUgfSk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0FjdGlvblR5cGUoYWN0aW9uLCBBY3Rpb25zLkVycm9yTG9hZGluZ1JlY2lwZURldGFpbHNBY3Rpb24pKSB7XHJcbiAgICAgICAgc3RhdGUgPSB1cGRhdGUoYWN0aW9uLmlkLCBzdGF0ZSwgeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQWN0aW9uVHlwZShhY3Rpb24sIEFjdGlvbnMuUmVjaWV2ZWRSZWNpcGVEZXRhaWxzQWN0aW9uKSkge1xyXG4gICAgICAgIHN0YXRlID0gdXBkYXRlKGFjdGlvbi5pZCwgc3RhdGUsIHtkYXRhOiBhY3Rpb24ucmVjaXBpZSwgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGF0ZSB8fCB1bmxvYWRlZFN0YXRlO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9yZWR1Y2Vycy9yZWNpcGVEZXRhaWxzUmVkdWNlci50cyJdLCJzb3VyY2VSb290IjoiIn0=