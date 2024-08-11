new Typewriter('#name', {
  strings: ['Interact with my work below','Onalerona Zwane', 'Self-motivated web dev!'],
  autoStart: true,
  delay:60,
  loop:true

});

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});