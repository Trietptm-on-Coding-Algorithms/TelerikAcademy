/*jshint es5: true */

function GameObject(image, position) {
    this.image = image
    this.position = position
}

GameObject.prototype =
    { get rows() {
        return this.image.length
    }

    , get cols() {
        return this.image[0].length
    }
}
