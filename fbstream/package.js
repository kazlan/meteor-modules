Package.describe({
  summary: "parse facebook page/profile stream v0.1"
});

Package.on_use(function (api, where) {

	api.use(['jquery','coffeescript','universal-events','logging','domutils','deps','templating'], 'client');
	api.add_files([
		'client/fbstream.coffee',
    'client/fbstream.css',
		'client/fbstrip.html'
    ], 'client');
  api.add_files(['server/server.coffee'],'server');
});