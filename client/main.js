import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Resolutions = new Mongo.Collection('resolutions');

Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});

Meteor.startup(function() {
  Uploader.uploadUrl = Meteor.absoluteUrl("Upload");
});

// Experimenting with image stuff

var corpus = imgpath(/tmp/AlphabetBook_Page_09.jpg);

Meteor.startup(function() {
	PixelMilk.getImageSize(corpus);
	PixelMilk.getImagePalette(corpus);
});