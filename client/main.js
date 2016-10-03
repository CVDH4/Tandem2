import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Resolutions = new Mongo.Collection('resolutions');

Template.body.helpers({
	resolutions: function() {
		return Resolutions.find();
	}
});

Template.body.events({
	'submit .new-resolution': function(event) {
		var title = event.target.title.value;

		Resolutions.insert({
			title: title,
			createdAt : new Date()
		});

		event.target.title.value = "";

		return false;
	}
});

Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});

Meteor.startup(function() {
  Uploader.uploadUrl = Meteor.absoluteUrl("Upload"); // Cordova needs absolute URL
});

var img = document.createElement('img');
img.setAttribute('src', 'Tandem2.uploads/tmp/AlphabetBook_Page_09.jpg')

img.addEventListener('load', function() {
    var vibrant = new Vibrant(img);
    var swatches = vibrant.swatches()
    for (var swatch in swatches)
        if (swatches.hasOwnProperty(swatch) && swatches[swatch])
            console.log(swatch, swatches[swatch].getHex())

    /*
     * Results into:
     * Vibrant #7a4426
     * Muted #7b9eae
     * DarkVibrant #348945
     * DarkMuted #141414
     * LightVibrant #f3ccb4
     */
});

var dropZone, handleDragOver, handleFileSelect;

dropZone = document.getElementById("drop");

handleFileSelect = function(event) {
  var data, f, files, parseFile, progress, reader;
  event.stopPropagation();
  event.preventDefault();
  files = event.dataTransfer.files;
  f = files[0];
  reader = new FileReader;
  
progress = function(event) {
    var el, image, results, swatch, swatches, vibrant;
    image = new Image(200, 200);
    image.src = event.target.result;
    document.getElementById("image").innerHTML = "<img src='" + event.target.result + "' />";
    vibrant = new Vibrant(image);
    swatches = vibrant.swatches();
    results = [];
    for (swatch in swatches) {
      if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
        results.push((function() {
          var i, len, ref, results1;
          ref = document.querySelectorAll(".color" + swatch);
          results1 = [];
          for (i = 0, len = ref.length; i < len; i++) {
            el = ref[i];
            results1.push(el.style.backgroundColor = swatches[swatch].getHex());
          }
          return results1;
        })());
      } else {
        results.push(void 0);
      }
    }
    return results;
  };
  parseFile = function(theFile) {
    return progress;
  };
  reader.onload = parseFile(f);
  return data = reader.readAsDataURL(f);
};

handleDragOver = function(event) {
  event.stopPropagation();
  event.preventDefault();
  return event.dataTransfer.dropEffect = "copy";
};

dropZone.addEventListener("dragover", handleDragOver, false);

dropZone.addEventListener("drop", handleFileSelect, false);


var vibrant = new Vibrant(img);
var swatches = vibrant.swatches()
for (var swatch in swatches)
    if (swatches.hasOwnProperty(swatch) && swatches[swatch])
        console.log(swatch, swatches[swatch].getHex());



// Template.customUpload.created = function() {
//   Uploader.init(this);
// }

// Template.customUpload.rendered = function () {
//   Uploader.render.call(this);
// };

// Template.customUpload.events({
//   'click .start': function (e) {
//     Uploader.startUpload.call(Template.instance(), e);
//   }
// });

// Template.customUpload.helpers({
//   'infoLabel': function() {
//     var instance = Template.instance();

//     // we may have not yet selected a file
//     var info = instance.info.get()
//     if (!info) {
//       return;
//     }

//     var progress = instance.globalInfo.get();

//     // we display different result when running or not
//     return progress.running ?
//       info.name + ' - ' + progress.progress + '% - [' + progress.bitrate + ']' :
//       info.name + ' - ' + info.size + 'B';
//   },
//   'progress': function() {
//     return Template.instance().globalInfo.get().progress + '%';
//   }
// });

// Template.home.helpers({
//   specificFormData: function() {
//     return {
//       id: this._id,
//       other: this.other,
//       hard: 'Lolcats'
//     }
//   }
// });