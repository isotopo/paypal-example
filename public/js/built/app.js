webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var form = (0, _jquery2['default'])('form#payment');
	var spinner = (0, _jquery2['default'])('.spinner');
	var successElement = (0, _jquery2['default'])('.success');
	var failedElement = (0, _jquery2['default'])('.failed');

	form.submit(function (e) {
	  e.preventDefault();

	  form.addClass('loading');
	  failedElement.hide();
	  successElement.hide();
	  spinner.show();

	  _jquery2['default'].post('/checkout', form.serialize()).done(function (a, b, c) {
	    console.log(a, b, c);
	    successElement.show();
	    failedElement.hide();
	  }).fail(function (response) {
	    failedElement.html(response.responseText);
	    failedElement.show();
	    successElement.hide();
	  }).always(function () {
	    form.removeClass('loading');
	    spinner.hide();
	  });
	});

/***/ }
]);