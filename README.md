# keysDownLib
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
