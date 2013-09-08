Package.describe({
  summary: "Gumby 2.4 decaf, no icon-font, use font-awesome or whatever.."
});

Package.on_use(function (api, where) {

	api.use(['templating'], 'client');
	api.add_files([
		'css/gumby.css',
		'js/libs/modernizr-2.6.2.min.js',
		'js/libs/gumby.min.js',
    'js/libs/jquery.mobile.custom.min.js',
    'js/libs/gumby.init.js'
    ], 'client');
});
