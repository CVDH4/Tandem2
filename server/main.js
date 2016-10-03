import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {
  UploadServer.init({
    tmpDir: process.env.PWD + '/.uploads/tmp',
    uploadDir: process.env.PWD + '/.uploads/',
    checkCreateDirectories: true //create the directories for you
  });
});

Meteor.startup(() => {
  // code to run on server at startup
  // UploadServer.init({
  //   tmpDir: process.env.PWD + '/.uploads/tmp',
  //   uploadDir: process.env.PWD + '/.uploads/',
  //   checkCreateDirectories: true //create the directories for you
  // });
});