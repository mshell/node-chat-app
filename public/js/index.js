var socket = io();
socket.on(('connect'), function() {
  console.log('Connected to server');


});
socket.on(('disconnect'), function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
  var li = jQuery('<li></li>');

  jQuery('#messages').append(li);

  li.text(`${message.from}: ${message.text}`);
});

socket.on('newLocationMessage', function(message) {
  var li = jQuery('<li></li');
  var a = jQuery('<a target="blank">My CurrentLocation</a>');
  li.text(`${message.from}: `);
  a.attr('href', message.url);
  li.append(a);
  jQuery('#messages').append(li);

})
jQuery('#message-form').on('submit', function(e) {
  e.preventDefault();
  messageTextbox = jQuery('[name=message]');
  socket.emit('createMessage', {
      from: 'User',
      text: messageTextbox.val()
    },
    function() {
      messageTextbox.val('');
    });
});

var locationButton = jQuery('#send-location');
locationButton.on('click', function() {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser.');
  }

locationButton.attr('disabled', 'disabled').text('Sending location...');

  navigator.geolocation.getCurrentPosition(function(position) {
      // console.log(position);
      socket.emit('createLocationMessage', {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
      locationButton.removeAttr('disabled').text('Send location');
    },
    function() {
      alert('Unable to fetch your location');
      locationButton.removeAttr('disabled').text(sendLocation);
    });
})
