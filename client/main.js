import './main.html';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Chart } from 'meteor/chart:chart';
import 'meteor/ecwyne:mathjs'
import 'meteor/lablancas:export-csv';
import Tesseract from 'tesseract.js';

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

Template.exportData.events({
    'click .export-data': function(events, template){
        Session.set(template.data.name + "-exported", undefined);

        Meteor.call("exportcsv-export", template.data.uploads.fetch(), function(err, exported){

            if(err)
                console.log(err);
            else
                Session.set(template.data.name + "-exported", exported);
    });
}});

Template.exportData.helpers({
    exportReady: function(){

        var exported = Session.get(this.name + "-exported");

        return exported ? ExportCSV.Exports.findOne(exported._id) : undefined;
}});

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
  img.src = '../images/img066.jpg';

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var imageData = img.data;
  var pixelsFirst = (0, 0, img.width, img.height);
  var r, g, b, a;

  var fileNameGrabber = (img.src).split("/");
  var fileName = fileNameGrabber[fileNameGrabber.length - 1];

  img.onload = function() {
    ctx.drawImage(img, 0, 0);
    ctx.createImageData(img.width, img.height);
    img.style.display = 'none';

    document.getElementById("filename").innerHTML = (fileName);
    document.getElementById("imageHeight").innerHTML = (img.naturalHeight);
    document.getElementById("imageWidth").innerHTML = (img.naturalWidth);
    document.getElementById("imageTotalPixels").innerHTML = (img.naturalWidth * img.naturalHeight);

    while(pixelsFirst){
       imageData[4*pixelsFirst+0] = r; // Red value
       imageData[4*pixelsFirst+1] = g; // Green value
       imageData[4*pixelsFirst+2] = b; // Blue value
       imageData[4*pixelsFirst+3] = a; // Alpha value
    }
    img.data = imageData; // And here we attache it back (not needed cf. update)
    context.putImageData(image, 0, 0);

    console.log(imageData);

  };

document.body.onload = addElement;

  function addElement () { 
    var newDiv = document.createElement("div"); 
    var newContent = document.createTextNode("Images:");
    newDiv.appendChild(newContent); 
    var currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
  };

  var color = document.getElementById('color');
    function pick(event) {
      var x = event.layerX;
      var y = event.layerY;
      var pixel = ctx.getImageData(x, y, 5, 5);
      var data = pixel.data;
      var rgba = 'rgba(' + data[0] + ',' + data[1] +
                 ',' + data[2] + ',' + (data[3] / 255) + ')';
      color.style.background =  rgba;
      color.textContent = rgba;
    }
    canvas.addEventListener('mousemove', pick);

});

// TESTING PIXEL ITERATION - http://stackoverflow.com/questions/21176827/js-generate-rgb-of-each-pixel-in-an-image
// CODE ADAPTED FROM - http://www.html5canvastutorials.com/advanced/html5-canvas-get-image-data-tutorial/

function drawImage(imageObj) {

    var codepanel = document.getElementById('code');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var imageX = 0;
    var imageY = 0;
    var imageWidth = imageObj.width;
    var imageHeight = imageObj.height;
    var pixels = new Array();
    var pixel = 0; 

    context.drawImage(imageObj, imageX, imageY);

    var imageData = context.getImageData(imageX, imageY, imageWidth, imageHeight);
    var data = imageData.data;

    // iterate over all pixels
    for(var i = 0, n = data.length; i < n; i += 4) {
      var red = data[i];
      var green = data[i + 1];
      var blue = data[i + 2];
      var alpha = data[i + 3];
       pixels[pixel] = "[" + red + "," + green + "," + blue + "]";
       pixel++
    }

    function notBlack(value) {
      return value !== "[0,0,0]";
    }

    var filteredPixels = pixels.filter(notBlack);

    codepanel.innerHTML = filteredPixels.join();

    var modeRGB = math.mode(filteredPixels);

    document.getElementById("modeRGB").innerHTML = (modeRGB);

    var x = 20;
    var y = 20;
    var red = data[((imageWidth * y) + x) * 4];
    var green = data[((imageWidth * y) + x) * 4 + 1];
    var blue = data[((imageWidth * y) + x) * 4 + 2];
    var alpha = data[((imageWidth * y) + x) * 4 + 3];

    for(var y = 0; y < imageHeight; y++) {
      for(var x = 0; x < imageWidth; x++) {
        var red = data[((imageWidth * y) + x) * 4];
        var green = data[((imageWidth * y) + x) * 4 + 1];
        var blue = data[((imageWidth * y) + x) * 4 + 2];
        var alpha = data[((imageWidth * y) + x) * 4 + 3];         
      }
    }
  }

  var imageObj = new Image();
  imageObj.onload = function() {
    drawImage(this);
  };

  imageObj.src = '../images/img066.jpg';

  var csvContent = "data:text/csv;charset=utf-8,";
    pixels.forEach(function(infoArray, index){

    dataString = infoArray.join(",");
    csvContent += index < pixels.length ? dataString+ "\n" : dataString;

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".

  console.log(csvContent);

// OCR

window.progressUpdate = function (packet){
  var log = document.getElementById('log');

  if(log.firstChild && log.firstChild.status === packet.status){
    if('progress' in packet){
      var progress = log.firstChild.querySelector('progress')
      progress.value = packet.progress
    }
  }else{
    var line = document.createElement('div');
    line.status = packet.status;
    var status = document.createElement('div')
    status.className = 'status'
    status.appendChild(document.createTextNode(packet.status))
    line.appendChild(status)

    if('progress' in packet){
      var progress = document.createElement('progress')
      progress.value = packet.progress
      progress.max = 1
      line.appendChild(progress)
    }


    if(packet.status == 'done'){
      var pre = document.createElement('pre')
      pre.appendChild(document.createTextNode(packet.data.text))
      line.innerHTML = ''
      line.appendChild(pre)

    }

    log.insertBefore(line, log.firstChild)
  }
}

window.recognizeFile = function (file){
  document.querySelector("#log").innerHTML = ''

  var recognize = require('../node_modules/tesseract.js')

  Tesseract.recognize(file, {
    lang: document.querySelector('#langsel').value
  })
    .progress(function(packet){
      console.info(packet)
      progressUpdate(packet)

    })
    .then(function(data){
      console.log(data)
      progressUpdate({ status: 'done', data: data })
    })
}

});