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
