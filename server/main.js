import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {
  UploadServer.init({
    tmpDir: process.env.PWD + '/client/.uploads/tmp',
    uploadDir: process.env.PWD + '/client/.uploads/',
    checkCreateDirectories: true, //create the directories for you
  });
});