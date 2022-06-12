/*
Created in 2022 by Gili Reeves
This is a super simple library that makes using keys in JavaScript a lot easier.

HOW TO USE:
    1) When using this library, you have a choice between two options:
        a) You can just use the keyHandler object as it already exists here and run all of it's functions from it's namespace.
        b) You can easily create a pointer to the keyHandler object by running: yourNewName = keyHandler;

    2) Before you can do anything, you need to initialize the library. Just run:
        keyHandler.init();
        OR
        yourNewName.init();

    3) Now you can use the isHeld function to check if a key is currently held down. Use this website <https://www.toptal.com/developers/keycode> to know what code corresponds to each key.
        Use the box that says event.code, that is the one that this library uses.
        You may also use the keysDown array to check what keys are currently held down yourself but the isHeld function will be enough for almost every use.
*/

keyHandler = {
    keysDown: [],
    init: function () {
        document.addEventListener("keydown", function (e) {
            keyHandler.addKey(e.code);
        })
        document.addEventListener("keyup", function (e) {
            keyHandler.removeKey(e.code);
        })
        console.log("KeysDownLibrary has been initialized")
    },
    addKey: function (e) {
        if (!this.keysDown.includes(e)) {
            this.keysDown.push(e);
        }
    },
    removeKey: function (e) {
        if (this.keysDown.includes(e)) {
            // The line below splices the element in the array at the index of the key that was released. The 1 meanns only remove 1 element.
            this.keysDown.splice(this.keysDown.indexOf(e), 1);
        }
    },
    isHeld: function (key) {
        return this.keysDown.includes(key)
    }
}