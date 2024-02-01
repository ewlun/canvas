"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
class Canvas {
    constructor(width, height) {
        if (width === undefined)
            width = window.innerWidth;
        if (height === undefined)
            height = window.innerHeight;
        this.width = width;
        this.height = height;
        this.parentDiv = document.createElement("div");
        this.parentDiv.classList.add('canvas-parent');
        this.parentDiv.style.width = this.width.toString() + "px";
        this.parentDiv.style.height = this.height.toString() + "px";
        this.layers = [];
    }
    createLayer(name) {
        let layer = new Layer(name);
        this.layers.push(layer);
        return layer;
    }
}
exports.Canvas = Canvas;
class Layer extends Canvas {
    constructor(name) {
        super();
        this.canvasElement = document.createElement('canvas');
        this.canvasElement.id = name;
        this.parentDiv.appendChild(this.canvasElement);
        this.canvasElement.style.width = "100%";
        this.canvasElement.style.height = "100%";
        this.ctx = this.canvasElement.getContext('2d');
    }
}
