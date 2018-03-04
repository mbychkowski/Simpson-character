# Modal
## server.js
This is for adding the style.css. 
```app.use(express.static(__dirname + '/app/public'));```
## survey.html
Put the below code at the body of the html before closing `</body>`
```
<!-- The Modal -->
<div id="my-modal">
  <h3 id="friend-name"></h3>
  <span class="close">&times;</span>
  <img class="modal-content" id="modal-img">
</div>
```
Put the below code in the `<script>` just after the closing `</body>`
```
function friendModal(imgURL, name) {

  $('#friend-name').text('Meet your new friend, ' + name);

  // start modal
  $('#my-modal').addClass('modal');
    $('#modal-img').attr('src', imgURL);

    // close modal
    $('.close').on('click', function() {
      $('#my-modal').removeClass('modal');
      $('#modal-img').attr('src', '');
  });
}
```
## style.css
```
/* modal styles */

.modal {
  display: block;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  padding-top: 100px;
  /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9);
  /* Black w/ opacity */
}

/* Modal Content (image) */

.modal-content {
  margin: auto;
  display: block;
  width: 30%;
  max-width: 380px;
}

#friend-name {
  color: white;
  text-align: center;
}

/* The Close Button */

.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover, .close:focus {
  color: white;
  text-decoration: none;
  cursor: pointer;
}
```
