// import { Chart } from 'meteor/chart:chart';


// - - - - - - OCR - - - - - - //

// var Tesseract = require('tesseract.js');

// window.progressUpdate = function (packet){
//   var log = document.getElementById('log');

//   if(log.firstChild && log.firstChild.status === packet.status){
//     if('progress' in packet){
//       var progress = log.firstChild.querySelector('progress')
//       progress.value = packet.progress
//     }
//   }else{
//     var line = document.createElement('div');
//     line.status = packet.status;
//     var status = document.createElement('div')
//     status.className = 'status'
//     status.appendChild(document.createTextNode(packet.status))
//     line.appendChild(status)

//     if('progress' in packet){
//       var progress = document.createElement('progress')
//       progress.value = packet.progress
//       progress.max = 1
//       line.appendChild(progress)
//     }


//     if(packet.status == 'done'){
//       var pre = document.createElement('pre')
//       pre.appendChild(document.createTextNode(packet.data.text))
//       line.innerHTML = ''
//       line.appendChild(pre)

//     }

//     log.insertBefore(line, log.firstChild)
//   }
// }

// window.recognizeFile = function (file){
//   document.querySelector("#log").innerHTML = ''

//   var recognize = require('../node_modules/tesseract.js')

//   Tesseract.recognize(file, {
//     lang: document.querySelector('#langsel').value
//   })
//     .progress(function(packet){
//       console.info(packet)
//       progressUpdate(packet)

//     })
//     .then(function(data){
//       console.log(data)
//       progressUpdate({ status: 'done', data: data })
//     })
// }

// TEST Image Encode to Base64

// var canvas = document.getElementById("canvas");
// var dataURL = canvas.toDataURL("image/jpeg", 1.0);

// var canvai = document.getElementById("canvas");
// var dataURL = canvai.toDataURL("image/jpeg", 1.0);
// console.log(dataURL);

// TEST Image RGB http://jsfiddle.net/xLF38/818/

// var rgb = getAverageRGB(document.getElementById('test123'));

// var rgb = getAverageRGB(dataURL);
 

// document.body.style.backgroundColor = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';

// function getAverageRGB(imgEl) {
    
//     var blockSize = 5, // only visit every 5 pixels
//         defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
//         canvas = document.createElement('canvas'),
//         context = canvas.getContext && canvas.getContext('2d'),
//         data, width, height,
//         i = -4,
//         length,
//         rgb = {r:0,g:0,b:0},
//         count = 0;
        
//     if (!context) {
//         return defaultRGB;
//     }
    
//     console.log(imgEl);

//     height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
//     width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

//     console.log(height);
//     console.log(width);
    
//     context.drawImage(imgEl, 0, 0);
    
//     try {
//         data = context.getImageData(0, 0, width, height);
//     } catch(e) {
//         /* security error, img on diff domain */alert('x');
//         return defaultRGB;
//     }
    
//     length = data.data.length;
    
//     while ( (i += blockSize * 4) < length ) {
//         ++count;
//         rgb.r += data.data[i];
//         rgb.g += data.data[i+1];
//         rgb.b += data.data[i+2];
//     }
    
//     // ~~ used to floor values
//     rgb.r = ~~(rgb.r/count);
//     rgb.g = ~~(rgb.g/count);
//     rgb.b = ~~(rgb.b/count);
    
//     return rgb;
    
// }

// - - - - - - THIS WORKS! - - - - - - //

// var color = document.getElementById('color');
// function pick(event) {
//   var x = event.layerX;
//   var y = event.layerY;
//   var pixel = ctx.getImageData(x, y, 1, 1);
//   var data = pixel.data;
//   var rgba = 'rgba(' + data[0] + ',' + data[1] +
//              ',' + data[2] + ',' + (data[3] / 255) + ')';
//   color.style.background =  rgba;
//   color.textContent = rgba;
// }
// canvas.addEventListener('mousemove', pick);
