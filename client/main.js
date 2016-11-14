import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import 'fs';

Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});

Meteor.startup(function() {
  Uploader.uploadUrl = Meteor.absoluteUrl("Upload");
});

// var fs = require('fs');
// var files = fs.readdir('/server/');
// console.log(files);

Template.body.helpers({
  imageFiles: [
    { imageFile: 'This is file 1' },
    { imageFile: 'This is file 2' },
    { imageFile: 'This is file 3' },
  ],
});