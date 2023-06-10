# Episode-2- Theory

# What is NPM?

NPM is a package manager that is used to manage all JS package globally. It does not stand with Node Package Manager but anything else, but on backend it do same thing in our app.

npm init         

above command is used to setup our App.
npm init -y can be used to skip setup, it creates package.json in our app, but without configurations. 

# What is Parcel/Webpack? Why do we need it?

Parcel/Webpack are JS package that are used as a bunlder for our app, and they provide great features to our app.

# What is .parcel-cache?

this folder is create when we run npx parcel index.html command, it contains project related information and used to run our app faster by caching the essentional information in this folder.

# what is npx?

npx is used to execute the package in our application without installing them that are present in npm registry.

# What is difference between dependencies and DevDependencies?

Dependencies are used for both production and development, but devdependencies are used only for development.

# What is tree shaking?

REmoval of dead code in our app that we don't use while development known as tree shaking, it is done by Parcel.

# What is hot module replacement?

Live re-loading of our app after saving the code is known as HMR that is a feature used by bundler(parcel). It uses File Watcher Algorithm.

# List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words?

HMR -  Live re-loading of our app after saving the code is known as HMR that is a feature used by bundler(parcel). It uses File Watcher Algorithm.

Tree Shaking -  REmoval of dead code in our app that we don't use while development known as tree shaking, it is done by Parcel.

Compression - It compress the code that we can use for production.

Minification - It minimize the size of app by compression the, you just need to run npx parcel index.html

Zero Config - it require zero configuration to our app. <script type="module" src="app.tsx"></script>
Old browser compatibility - it allows older browser compatibility by using browserslit library.
Dev Server - it provide a development server.
Diagnosis - 
Multi core - 
Reliable caching - it used .parcel-cache for caching your code.
Lazy dev build - 
Image optimization - it do image optimization as per requirement for our code to make app faster.

# What is '.gitignore'? What should we add and not add into it?

gitignore can be used to ignore some files/folders which need not be checked in on github. The code or files which we can regenerate donot need to checkin.

# What is difference between package.json and package-lock.json?

package.json that contains approx version of any library. it is mandatory file for any application. It contains information about project.

package-lock.json contains exact version of library. It generates whenever there is any change in project by npm in node_modules or tree structure. It is mandatory for production deployment.

# Why should I not modify 'package-lock.json'?

It contains all information about the project i.e. version, dependencies. It would create problem if dependencies mismatch for production environment.

# What is node_modules? is it a good idea to push that on git?

It contains the original js code for libraries. It shouldn't push on git because it can be regenerate on server using npm init command.

# What is the dist folder?
dist folder is created when parcel creates the build for the application . It contains the HTML and CSS and JS with other files for the build.

# What is browserlists?
browserlist is a list browsers that our applicaion should support . It also covers the browser coverage over a geographical area.

# Read about diff bundlers : vite, webpack, parcel
All these bundlers are used to bundle our code.

# Read about ^ (Caret) and ~ (tilde) 
^ - is used for  minor or patch e.g.  you see ^1.0.2 it means to install version 1.0.2 or the latest minor or patch version such as 1.1.0.

~ - is used for patch e.g. you see ~1.0.2 it means to install version 1.0.2 or the latest patch version such as 1.0.4
