import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import 'node-tesseract';
import './main.html';

Resolutions = new Mongo.Collection('resolutions');

Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});

Meteor.startup(function() {
  Uploader.uploadUrl = Meteor.absoluteUrl("Upload");
});

// Experimenting with OCR

var tesseract = require('node-tesseract');
 
// Recognize text of any language in any format

tesseract.process(__dirname + '/.uploads/AlphabetBook_Page_09.jpg',function(err, text) {
    if(err) {
        console.error(err);
    } else {
        console.log(text);
    }
});
 
// Recognize German text in a single uniform block of text and set the binary path
 
// var options = {
//     l: 'deu',
//     psm: 6,
//     binary: '/usr/local/bin/tesseract'
// };
 
// tesseract.process(__dirname + '/path/to/image.jpg', options, function(err, text) {
//     if(err) {
//         console.error(err);
//     } else {
//         console.log(text);
//     }
// });