Package.describe({
  summary: "Jquery Social Stream for Meteor"
});

Package.on_use(function (api, where) {

	api.use(['jquery','universal-events','logging','domutils','deps','templating'], 'client');
	api.add_files([
		'js/jquery.social.stream.1.5.4.min.js',
    'js/jquery.social.stream.wall.1.3.js',
		'css/dcsns_dark.css',
		'css/dcsns_light.css',
    'css/dcsns_wall.css'
    ], 'client');
});
