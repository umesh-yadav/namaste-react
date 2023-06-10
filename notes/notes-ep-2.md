# Episode 2
# Ignite our App 

NPM basically does not stand for Node Package manager, but on the backend it works as a package manager for our application.


We have used npm init to initialise node package Manager in our App. One file name wit packages.json create in our project.

Now, first package we will use for bundler (parcel, webpack,veet)

in below -D is for dev-dependencies

npm install -D parcel 

~ (tilde) is for patches
^ (caret) is for minor and major version

what is difference between package.json and package-lock.json
package.json - contains the approx version of packages with ~ (tilde) or ^ (caret).
package-lock.json - contains the exact match of the all packages along with the other information like (integerity -- hashkey)



Transitive dependencies - package which has dependencies and those dependencies have another dependencies.

other important packages :
babel, browserlist

For https server
npx parcel index.html --https

parcel generate development build for app in dist folder


to build production ready buily we use below command, but need to remove main : "App.js" line from package.json
npx parcel build index.html


# browserslist - the package which is used to make your app Compatible with older browser versions.


# 1. What is a bundler?
A bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser

For example:

parcel
webpack (used by create-react-app) and
vite ( prounounced as veet)

# 2. Parcel:
 Parcel is a bundler used for development and productions purposes.

# Parcel Features:
HMR - Hot Module Replacement - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
File watcher algorithm - made with C++
MINIFY
BUNDLING
Cleaning our code
DEV and production Build
Super fast building algorithm
does image optimization also
Caching while development
Compresses
Compatible with older version of browser
HTTPS in dev
port Number
Consistent hashin algorithm
Zero Configuration
installation commands:
Install:
npm install -D parcel
-D is used for development and as a development dependency.

# Parcel Commands :
For development build:
npx parcel <entry_point> 
For production build :
npx parcel build <entry_point> 
# 3. Why react is fast?
It is not only the virtual DOM that makes React faster but other components like bundlers (e.g. parcel, webpack ,vite etc. ) and development ecosystme also.

# 4. Transitive dependencies:
It is a type of dependency where one dependency requires another dependency to work properly and another dependency requires an another dependecy.