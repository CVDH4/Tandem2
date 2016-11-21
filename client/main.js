import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

// import { Chart } from 'meteor/chart:chart';

Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});

Meteor.startup(function() {
  Uploader.uploadUrl = Meteor.absoluteUrl("Upload");
});

// Template['home'].helpers({
//   myFormData: function() {
//     return { directoryName: 'uploads', prefix: this._id, _id: this._id }
//   },
//   filesToUpload: function() {
//     return Uploader.info.get();
//   }
// });

// Template['uploadedInfo'].helpers({
//   src: function() {
//     if (this.type.indexOf('image') >= 0) {
//       return 'upload/' + this.path;
//     } else return 'file_icon.png';
//   }
// });

// Template['uploadedInfo'].events({
//   'click .deleteUpload':function() {
//     if (confirm('Are you sure?')) {
//       Meteor.call('deleteFile', this._id);
//     }
//   }
// });


// Router.configure({
//   layoutTemplate: 'layout'
// });

// Router.map(function () {
//   this.route('home', {
//     path: '/',
//     waitOn: function() {
//       return [
//         Meteor.subscribe('items'),
//         Meteor.subscribe('uploads')
//       ];
//     },
//     data: function() {
//       return {
//         item: Items.findOne(),
//         uploads: Uploads.find()
//       }
//     }
//   });
// });

// Meteor.startup(function() {
//   var ctx = document.getElementById("myChart");
//   var myChart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//           labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//           datasets: [{
//               label: '# of Votes',
//               data: [12, 19, 3, 5, 2, 3],
//               backgroundColor: [
//                   'rgba(255, 99, 132, 0.2)',
//                   'rgba(54, 162, 235, 0.2)',
//                   'rgba(255, 206, 86, 0.2)',
//                   'rgba(75, 192, 192, 0.2)',
//                   'rgba(153, 102, 255, 0.2)',
//                   'rgba(255, 159, 64, 0.2)'
//               ],
//               borderColor: [
//                   'rgba(255,99,132,1)',
//                   'rgba(54, 162, 235, 1)',
//                   'rgba(255, 206, 86, 1)',
//                   'rgba(75, 192, 192, 1)',
//                   'rgba(153, 102, 255, 1)',
//                   'rgba(255, 159, 64, 1)'
//               ],
//               borderWidth: 1
//           }]
//       },
//       options: {
//           scales: {
//               yAxes: [{
//                   ticks: {
//                       beginAtZero:true
//                   }
//               }]
//           }
//       }
//   });
// });

// Template.body.helpers({
//   imageFiles: [
//     { imageFile: 'This is file 1' },
//     { imageFile: 'This is file 2' },
//     { imageFile: 'This is file 3' },
//   ],
// });

