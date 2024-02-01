export declare class Canvas {
    parentDiv: HTMLDivElement;
    width: number;
    height: number;
    layers: Layer[];
    constructor(width?: number, height?: number);
    createLayer(name: string): Layer;
}
declare class Layer extends Canvas {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor(name: string);
}
export {};
