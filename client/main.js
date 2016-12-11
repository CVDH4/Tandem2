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
  img.src = 'http://placekitten.com/2000/500';
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
    img.style.display = 'none';
  };

  document.getElementById('canvas').innerHTML = img.height;
  document.getElementById('canvas').innerHTML = img.width;

  console.log(img.height);
  console.log(img.width);

});
