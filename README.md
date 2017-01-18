# Tandem 2.0

TANDEM (2.0) is a Meteor application that generates quantitative image and text data from files submitted by the user. The TANDEM output is intended to be used as source material for data visualization, quantitative analysis, and distant reading of multimodal print objects.

The project is currently hosted on [Galaxy](https://galaxy.meteor.com/) and can be accessed at this URL:
http://tandem.meteorapp.com/

A version of this project was completed as a Capstone Thesis and Digital Project in fulfillment of the Master's of Liberal Studies in Digital Humanities degree from the CUNY Graduate Center.

#### Steps to Reproduce

1. Begin by installing [Meteor](https://www.meteor.com/) on your machine. (This will also check to ensure that [Node.js(https://nodejs.org/en/) is also installed on your machine.
2. Clone or download Tandem2 from this [Github]( https://github.com/CVDH4/Tandem2).
3. Locate the directory where the cloned/downloaded application resides. 
4. Open Terminal and enter the following command:

```
cd XYZDirectory/Tandem2
```

Then run the application:

```
meteor
```

If successfully installed, the application will run on localhost:3000.

On your first attempt to run, meteor will automatically downloaded necessary dependencies or alert you to resolve missing meteor packages or npm packages. You may need to troubleshoot missing packages and npm modules.

#### Versions & Dependencies:

Meteor Version: METEOR@1.4.1.1

Check the "packages" file in the meteor directory for more information about dependencies. When you fork this project to replicate on your machine, the relevant dependencies will be installed. 'meteor add' and 'meteor remove' will allow you to edit this file, but you can also edit it by hand. All packages can be referenced in the [Atmosphere](https://atmospherejs.com) meteor package directory.

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

