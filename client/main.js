import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Chart } from 'meteor/chart:chart';
import './main.html';

Items = new Mongo.Collection('items');
Uploads = new Mongo.Collection('uploads');

Meteor.subscribe('items'),
Meteor.subscribe('uploads')

Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});

Meteor.startup(function() {
  Uploader.finished = function(index, file) {
    Uploads.insert(file);
  }
});

Router.configure({
  layoutTemplate: 'uploadedInfo'
});

Router.map(function () {
  this.route('home', {
    path: '/',
    waitOn: function() {
      return [
        Meteor.subscribe('items'),
        Meteor.subscribe('uploads')
      ];
    },
    data: function() {
      return {
        item: Items.findOne(),
        uploads: Uploads.find()
      }
    }
  });
});

Template.body.helpers({
  myFormData: function() {
    return { directoryName: '.uploads', prefix: this._id, _id: this._id }
  },
  filesToUpload: function() {
    return Uploader.info.get();
  }
});

Template.uploadedInfo.helpers({
  src: function() {
    if (this.type.indexOf('image') >= 0) {
      return '.uploads/' + this.path;
    } else return 'file_icon.png';
  }
});

Template.uploadedInfo.events({
  'click .deleteUpload':function() {
    if (confirm('Are you sure?')) {
      Meteor.call('deleteFile', this._id);
    }
  }
});

Meteor.startup(function() {
  var img = new Image();
  img.src = '../images/space-header.jpg';
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
    ctx.createImageData(600, 500);
    img.style.display = 'none';

    console.log("Height = " + img.height);
    console.log("Width = " + img.width);
    console.log("Total Pixels = " + img.width * img.height);
    console.log(ctx.createImageData(600, 500))

  };

  function addElement () { 
    var newDiv = document.createElement("div"); 
    var newContent = document.createTextNode("Hi there and greetings!");
      // document.createTextNode("Height = " + img.height);
      // document.createTextNode("Width = " + img.width);
      // document.createTextNode("Total Pixels = " + img.width * img.height);
    newDiv.appendChild(newContent); 
    //add the text node to the newly created div. 
    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
  };

  var color = document.getElementById('color');
    function pick(event) {
      var x = event.layerX;
      var y = event.layerY;
      var pixel = ctx.getImageData(x, y, 1, 1);
      var data = pixel.data;
      var rgba = 'rgba(' + data[0] + ',' + data[1] +
                 ',' + data[2] + ',' + (data[3] / 255) + ')';
      color.style.background =  rgba;
      color.textContent = rgba;
    }
    canvas.addEventListener('mousemove', pick);

});
