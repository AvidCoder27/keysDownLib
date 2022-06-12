# keysDownLib
Created in 2022 by Gili Reeves
This is a super simple library that makes using keys in JavaScript a lot easier.

# How to use:
1. First, download the **keysDownLib.js** file and put it in the directory with your project. Make sure to include it as a script in your HTML file.

2. When using this library, you have a choice between two options:
    1. You can just use the _keyHandler_ object as it already exists here and run all of it's functions from it's namespace.
    2. You can easily create a pointer to the _keyHandler_ object by running:
    ```
    yourNewName = keyHandler;
    ```
3. Before you can do anything, you need to initialize the library. Just run:
    ```
    keyHandler.init();
    ```
    Or if you chose option ii,
    ```
    yourNewName.init();
    ```

4. Now you can use the _isHeld_ function to check if a key is currently held down. Use this website <https://www.toptal.com/developers/keycode> to know what code corresponds to each key.
Use the box that says **event.code**, that is the one that this library uses.
You may also use the _keysDown_ array to check what keys are currently held down yourself but the _isHeld_ function will be enough for almost every use.
