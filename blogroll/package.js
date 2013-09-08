Package.describe({
  summary: "Sistema de blogging para news/ofertas v0.1\nIncluye un template de base blogStrip3 que muestra 3 cajas en una row de gumby"
});

Package.on_use(function (api, where) {

	api.use(['loadpicker','meteor','jquery','universal-events','logging','coffeescript','deps','minimongo','mongo-livedata','templating','gumbydecaf'], 'client');
  api.use(['logging','meteor','coffeescript','deps','mongo-livedata'],'server');
	api.add_files([
		'client/blogstrips.html',
    'client/blog-admin-panel.html',
		'client/blog.coffee',
		'client/blog-admin.coffee',
    'client/blog.less',
    'client/blog-admin.less'
    ], 'client');
  api.add_files([
    'server/blog.coffee'
    ], 'server');
});
