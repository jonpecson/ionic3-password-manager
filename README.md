# Ionic 3 Password Manager 🔒 

Password manager that makes use of the AES specification using Ionic 3. 


* 🎨 This application will work for both Android and iOS and look great on both.

* ⚡️ This project has BcryptJS and Forge Ciphertext implementation to ensure optimal level of security. 👌

* 📝 It's based on "Build A Password Manager For Android And iOS Using Ionic 2" article by Nic Raboy

* ✏️ It's rewritten in Ionic 3 and should be compatible with Ionic 4 projects.

## Guide
https://www.thepolyglotdeveloper.com/2016/07/build-a-password-manager-for-android-and-ios-using-ionic-2/

## Clone repository 📦
`
git clone https://github.com/jonpecson/ionic3-password-manager
`
## Install Dependencies ✅
`
npm install
`
## Configure platform 🔧


`
ionic cordova platform add [<platform>]
`

The platform that you would like to add (android, ios)


## Testing in real device 📱

`
ionic cordova run [<platform>]
`

The platform that you would like to run (android, ios)

## Testing in the browser 🌐

Replace database.ts file with this code
https://pastebin.com/raw/1d07svU8

`
ionic serve
`
