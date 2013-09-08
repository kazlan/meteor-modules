#Abrimos la coleccion de noticias
@Posts = new Meteor.Collection 'posts'  
Meteor.subscribe "last_posts"

Meteor.startup ->
  @key = "AfUn2DwATciNCAXv3wPVgz"
  
Template.blog_edit_panel.rendered = ->
  console.log "picked"
  loadPicker(key)

Template.blog_edit_panel.events
  # NEW POST EVENTS
  'click #form_newpost_submit': (e)->
    e.preventDefault()
    form_titulo = $('#form_newpost_titulo').val()
    form_texto = $('#form_newpost_texto').val()
    form_imagen = $('#form_newpost_imagen_nombre').val()
    form_imagen_url = $('#form_newpost_imagen_url').val()
    form_fecha_corta = moment().format("YYYY-MM-DD")
    form_fecha = moment().format('YYYY-MM-DD HH:mm:ss')
    Posts.insert
      titulo: form_titulo
      texto: form_texto
      imagen_nombre: form_imagen
      imagen_url: form_imagen_url
      fecha: form_fecha_corta
      timestamp: form_fecha
      
  'click #form_newpost_imagen': (e)->
    e.preventDefault()
    filepicker.pick({
      #debug: true,
      mimetype: 'image/*'
      },
      (blob)->
        $('#form_newpost_imagen_nombre').attr('placeholder',blob.filename).val(blob.filename)
        $('#form_newpost_imagen_url').val(blob.url)
      )
    
  # EDIT POST EVENTS  
  'click .delete_post_btn': (e)->
    e.preventDefault()
    #bootbox.confirm "Eliminar la entrada?","mejor no","Bórrala", (ok)->
    #  if ok
    Posts.remove {"_id": $(e.target).data('id')}
  'click .edit_post_btn': (e)->
    e.preventDefault()
    post_id = $(e.target).data('id')
    $('#edit_post_'+post_id).fadeIn()
  
  # OK a editar un post  
  'click .edit_post_submit': (e)->
    e.preventDefault()
    post_id = $(e.currentTarget).attr('data_id')
    Posts.update {'_id': post_id},
      titulo: $('#edit_post_titulo_'+post_id).val()
      texto: $('#edit_post_texto_'+post_id).val()
      imagen: $('#edit_post_imagen_'+post_id).val()
      fecha: moment().format("YYYY-MM-DD")
    $('#edit_post_'+post_id).fadeOut()
    
Template.blog_edit_panel.items = ->
  return Posts.find({}).fetch()