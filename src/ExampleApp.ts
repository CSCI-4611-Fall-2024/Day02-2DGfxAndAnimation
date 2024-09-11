/** CSci-4611 Example Code
 * Copyright 2023+ Regents of the University of Minnesota
 * Please do not distribute beyond the CSci-4611 course
 */

import * as gfx from 'gophergfx'


export class ExampleApp extends gfx.GfxApp
{   
 
    bgColor : gfx.Color = new gfx.Color(0, 0, 0);
    nose : gfx.Node2 | null = null;
    mouth : gfx.Node2 | null = null;
    elapsedTime = 0.0;

    // --- Create the ExampleApp class ---
    constructor()
    {
        // initialize the base class gfx.GfxApp
        super();

    }


    // --- Initialize the graphics scene ---
    createScene(): void 
    {
        this.renderer.background = this.bgColor;

        const rEye = gfx.Geometry2Factory.createRect(0.5, 0.5);
        //rEye.position.x = 0.5;
        //rEye.position.y = 0.5;
        rEye.position = new gfx.Vector2(0.5, 0.5);
        rEye.material.color = gfx.Color.BLACK;
        this.scene.add(rEye);

        const lEye = gfx.Geometry2Factory.createRect(0.5, 0.5);
        lEye.position = new gfx.Vector2(-0.5, 0.5);
        this.scene.add(lEye);

        this.nose = gfx.Geometry2Factory.createRect(0.25, 0.25);
        this.scene.add(this.nose);

        this.mouth = gfx.Geometry2Factory.createRect(1.8, 0.15);
        this.mouth.position = new gfx.Vector2(0, -0.5);
        this.scene.add(this.mouth);

        console.log("Hello world");
    }

    // --- Update is called once each frame by the main graphics loop ---
    update(deltaTime: number): void 
    {
        this.elapsedTime += deltaTime;

        if (this.bgColor.g < 0.3) {
            this.bgColor.g += 0.01;
        }
        this.renderer.background = this.bgColor;

        if (this.nose instanceof gfx.Node2) {
            this.nose.position.x += 0.01;
        }

        if (this.mouth instanceof gfx.Node2) {
            const fasterTime = 10.0 * this.elapsedTime;
            const neg1toPos1 = Math.sin(fasterTime);
            const zeroToPos1 = Math.abs(neg1toPos1);
            this.mouth.scale = new gfx.Vector2(1, zeroToPos1);
        }

    }
}
