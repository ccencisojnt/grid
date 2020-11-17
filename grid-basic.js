function Grid(ctx, colour){
    this.init = ()=>{
        this.ctx = ctx;
        this.lineAlpha = 10;
        this.lineWidth = 1;
        this.lineColour = this.convertToRgba(colour);
    }

    this.convertToRgba = ()=>{
        colour = colour.replace("#", "");
        if( typeof colour == "undefined" ) return [0, 0, 0, 10];
        
        rHex = {
            0 : 0, 1 : 1, 2 : 2, 3 : 3, 4 : 4, 5 : 5, 
            6 : 6, 7 : 7, 8 : 8, 9 : 9, a : 10, 
            b : 11, c : 12, d : 13, e : 14, f : 15
        }

        let rgba = [];
        let lenColour = colour.length;

        if(lenColour < 6){
            let subs = 6 - lenColour;
            let last = colour[lenColour - 1];
            colour = colour[0] + colour;
            colour = colour + last.repeat(subs - 1);
            lenColour = colour.length;
        }
    
    
        for(let i = 0; i < lenColour; i+=2){
            let number = rHex[colour[i]];
            let numberNext = rHex[colour[i + 1]];
            rgba.push(number * numberNext);
        }

        rgba.push[10];
        return rgba;
        
    }

    this.vertical = (numLines)=>{
        this.lineColour[3] = this.lineAlpha;
        let widthLine = innerWidth / numLines;
        for(let i = 0; i < numLines; i++){
            ctx.beginPath();
            ctx.moveTo(widthLine * i, 0)
            ctx.lineTo(widthLine * i, innerHeight);
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = "rgba(" + this.lineColour.join() + ")";
            ctx.stroke();
            ctx.closePath();
        }
    }

    this.horizontal = (numLines)=>{
        this.lineColour[3] = this.lineAlpha;
        let heightLine = innerHeight / numLines;
        for(let i = 0; i < numLines; i++){
            ctx.beginPath();
            ctx.moveTo(0, heightLine * i)
            ctx.lineTo(innerWidth, heightLine * i);
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = "rgba(" + this.lineColour.join() + ")";
            ctx.stroke();
            ctx.closePath();
        }
    }
    
    this.square = (sizeSquare)=>{
        let numVertivalSquare = parseInt(innerWidth  / sizeSquare);
        let numHorizontalSquare = parseInt(innerHeight / sizeSquare);
        this.vertical(numVertivalSquare);
        this.horizontal(numHorizontalSquare);
    }

    this.init();
    return this;
}