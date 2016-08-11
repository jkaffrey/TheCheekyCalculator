'use strict';

function addOn(val) {

  if ($('#equation').text() === '0') {

    $('#equation').text(val);
  } else {

    $('#equation').text($('#equation').text() + val);
  }
}

function backspace() {

  var text = $('#equation').text();
  text = text.substring(0, text.charAt(text.length - 1)  === ' ' ? text.length - 3 : text.length - 1);

  if (text)
    $('#equation').text(text);
  else
    $('#equation').text('0');
}
