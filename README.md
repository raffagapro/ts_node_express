# Commands
start with your git ingore

##production
npm init -y
tsc --init
npm i express
npm i body-parser

##Development
nodemon
npm i --save-dev @types/node
npm i --save-dev @types/express

##tsconfig.json
"mudleResolution" : "node"
"outDir": "./dist",
"rootDir": "./src",

##To run
in terminal

tsc -w

in another terminal 

npm start (after adding the start script)