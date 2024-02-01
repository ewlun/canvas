export class Canvas {
    parentDiv: HTMLDivElement;
    width: number;
    height: number;
    layers: Layer[];

    constructor(width?: number, height?: number) {
        if (width === undefined) width = window.innerWidth;
        if (height === undefined) height = window.innerHeight;

        this.width = width;
        this.height = height;

        this.parentDiv = document.createElement("div");
        this.parentDiv.classList.add('canvas-parent');
        this.parentDiv.style.width = this.width.toString() + "px";
        this.parentDiv.style.height = this.height.toString() + "px";

        this.layers = [];
    }

    createLayer(name: string) {
        let layer = new Layer(name);
        this.layers.push(layer);
        return layer;
    }
}

class Layer extends Canvas {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    constructor(name: string) {
        super();

        this.canvasElement = document.createElement('canvas');
        this.canvasElement.id = name;
        this.parentDiv.appendChild(this.canvasElement);

        this.canvasElement.style.width = "100%";
        this.canvasElement.style.height = "100%";

        this.ctx = this.canvasElement.getContext('2d')!;
    }
}