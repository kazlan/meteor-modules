// Generated by CoffeeScript 1.6.2
(function() {
  var BootstrapDB;

  this.posts = new Meteor.Collection('posts');

  Meteor.startup(function() {
    BootstrapDB();
    return Meteor.publish('last_posts', function() {
      return posts.find({});
    });
  });

  BootstrapDB = function() {
    if (!posts.find({}).count()) {
      console.log("0 registros en posts");
      posts.insert({
        titulo: 'first post',
        texto: 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos. Eu sit tincidunt incorrupte definitionem, vis mutat affert percipit cu, eirmod consectetuer signiferumque eu per. In usu latine equidem dolores.',
        imagen: '',
        fecha: moment().format("YYYY-MM-DD")
      });
      return console.log("añadido un registrillo para ir jugando");
    }
  };

}).call(this);
