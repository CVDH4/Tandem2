# Tandem 2.0

TANDEM (2.0) is a Meteor application that generates quantitative image and text data from files submitted by the user. The TANDEM output is intended to be used as source material for data visualization, quantitative analysis, and distant reading of multimodal print objects.

The project is currently hosted on [Galaxy](https://galaxy.meteor.com/) and can be accessed at this URL:
http://tandem.meteorapp.com/

A version of this project was completed as a Capstone Thesis and Digital Project in fulfillment of the Master's of Liberal Studies in Digital Humanities degree from the CUNY Graduate Center.

#### Steps to Reproduce:

1. Begin by installing [Meteor](https://www.meteor.com/) on your machine. (This will also check to ensure that [Node.js](https://nodejs.org/en/) is also installed on your machine.
2. Unzip the compressed ZIP file containing the project source code in the directory of your choice on a development machine.
3. Locate the directory where the cloned/downloaded application resides. 

NOTE: The application does not require any additional environmental setup to function on a local machine.

4. Open Terminal and enter the following command:

```
cd XYZDirectory/Tandem2
```

Once in the directory, you will run the application using this simple command:

```
meteor
```

If successfully installed, the application will run on localhost:3000. Note that login authorization via external providers like GitHub and Twitter require the generation of an API key. Regular account setup will be fully functional.

On your first attempt to run, meteor will automatically downloaded necessary dependencies or alert you to resolve missing meteor packages or npm packages. You may need to troubleshoot missing packages and npm modules.

To deploy this application to a live environment on the web, we recommend consulting the [Meteor Guide: Deployment](https://guide.meteor.com/deployment.html). Further we recommend the use of Galaxy, a meteor sponsored and created deployment and hosting solution specifically designed for applications of this type.

##### Custom Deployment procedures:

In order to host a live version of this project on the web that is not hosted on Meteor, you will need to follow a series of additional steps.

At the time of deposition, the Meteor Guide explains the following:
> The easiest way to operate your app with confidence is to use Galaxy, the service built by Meteor Development Group specifically to run Meteor apps.

>If you want to figure out your hosting solution completely from scratch, the Meteor tool has a command meteor build that creates a deployment bundle that contains a plain Node.js application. Any npm dependencies must be installed before issuing the meteor build command to be included in the bundle. You can host this application wherever you like and there are many options in terms of how you set it up and configure it.

>NOTE it’s important that you build your bundle for the correct architecture. If you are building on your development machine, there’s a good chance you are deploying to a different server architecture. You’ll want to specify the correct architecture with --architecture:

> For example if deploying to a Ubuntu linux server:
```
npm install --production
meteor build /path/to/build --architecture os.linux.x86_64
```
>This will provide you with a bundled application .tar.gz which you can extract and run without the meteor tool. The environment you choose will need the correct version of Node.js and connectivity to a MongoDB server.

>Depending on the version of Meteor you are using, you should install the proper version of node using the appropriate installation process for your platform.

>Node 4.6.2 for Meteor 1.4.x
Node 0.10.43 for Meteor 1.3.x and earlier
If you use a mis-matched version of Node when deploying your application, you will encounter errors!
You can then run the application by invoking node with a ROOT_URL, and MONGO_URL. These instructions are also available in the README file found in the root of the bundle you built above.

```
cd my_build_bundle_directory
(cd programs/server && npm install)
MONGO_URL=mongodb://localhost:27017/myapp ROOT_URL=http://my-app.com node main.js
```

> * ROOT_URL is the base URL for your Meteor project
> * MONGO_URL is a Mongo connection string URI supplied by the MongoDB provider.


> Unless you have a specific need to roll your own hosting environment, the other options here are definitely easier, and probably make for a better setup than doing everything from scratch. Operating a Meteor app in a way that it works correctly for everyone can be complex, and Galaxy handles a lot of the specifics like routing clients to the right containers and handling coordinated version updates for you.

> Galaxy is a distributed system that runs on Amazon AWS. If you understand what it takes to run Meteor apps correctly and just how Galaxy works, you’ll come to appreciate Galaxy’s value, and that it will save you a lot of time and trouble. Most large Meteor apps run on Galaxy today, and many of them have switched from custom solutions they used prior to Galaxy’s launch.

At the time of deposition, the author of this project recommends the use of Galaxy for a live deployment of this application for the best results.

#### Versions & Dependencies:

Meteor Version: METEOR@1.4.1.1

A full list of directories and files contained within them associated with this project can be found in the file-manifest.txt contained in the ZIP.

Check the "packages" file in the meteor directory for more information regarding dependencies. When you attempt to run a replicated version on your machine, the relevant dependencies will be installed. 'meteor add' and 'meteor remove' will allow you to edit this file, but you can also edit it by hand. All packages can be referenced in the [Atmosphere](https://atmospherejs.com) meteor package directory.

Meteor packages used by this project, one per line:

+ meteor-base@1.0.4

+ mobile-experience@1.0.4

+ mongo@1.1.12 

+ blaze-html-templates@1.0.4

+ reactive-var@1.0.10

+ jquery@1.11.9

+ tracker@1.1.0

+ standard-minifier-js@1.2.0

+ es5-shim@4.6.14

+ ecmascript@0.5.8

+ shell-server@0.2.1

+ tomi:upload-server

+ tomi:upload-jquery

+ semantic:ui

+ less

+ juliancwirko:postcss

+ dbarrett:dropzonejs

+ accounts-password

+ accounts-ui

+ accounts-github

+ accounts-twitter

+ accounts-google

+ ostrio:files

+ chart:chart

+ ostrio:autoform-files

+ ostrio:templatehelpers

+ iron:router

+ ecwyne:mathjs

+ lablancas:export-csv

+ session


#### Important Node Modules:

+ The OCR for this application uses Tesseract OCR via [Tesseract.js](http://tesseract.projectnaptha.com/).



+ [Math.js](www.mathjs.org) is used for calculation and math support.

