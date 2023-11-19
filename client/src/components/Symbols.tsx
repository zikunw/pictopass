const STROKE_WIDTH = 4;

const DiagnalHatch = () => {
    return (
        <defs>
            <pattern
                id="hatchPattern"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
            >
                <line x1="0" y1="0" x2="0" y2="8" stroke="black" strokeWidth="4" />
            </pattern>
        </defs>
    )
}

const SymbolSquare = () => {
    return (
        <div className="w-10 h-10 rounded-md ">
            <svg viewBox="0 0 50 50">
                <rect x="10" y="10" width="32" height="32"/>
            </svg>
        </div>
    );
}

const SymbolSquareOutline = () => {
    return (
        <div className="w-10 h-10 rounded-md ">
            <svg viewBox="0 0 50 50">
                <rect x="10" y="10" width="30" height="30" fill="none" stroke="black" strokeWidth={STROKE_WIDTH}/>
            </svg>
        </div>
    );
}

const SymbolSquareDiagnalHatch = () => {
    return (
        <div className="w-10 h-10 rounded-md">
            <svg viewBox="0 0 50 50">
                <DiagnalHatch />
                <rect x="10" y="10" width="32" height="32" fill="url(#hatchPattern)" stroke="black" strokeWidth={STROKE_WIDTH} />
            </svg>
        </div>
    );
};

const SymbolCircle = () => {
    return (
        <div className="w-10 h-10 rounded-md ">
            <svg viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="18"/>
            </svg>
        </div>
    );
}

const SymbolCircleOutline = () => {
    return (
        <div className="w-10 h-10 rounded-md ">
            <svg viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="18" fill="none" stroke="black" strokeWidth={STROKE_WIDTH}/>
            </svg>
        </div>
    );
}

const SymbolCircleDiagnalHatch = () => {
    return (
        <div className="w-10 h-10 rounded-md">
            <svg viewBox="0 0 50 50">
                <DiagnalHatch />
                <circle cx="25" cy="25" r="18" fill="url(#hatchPattern)" stroke="black" strokeWidth={STROKE_WIDTH} />
            </svg>
        </div>
    );
}

const SymbolTriangle = () => {
    return (
        <div className="w-10 h-10 rounded-md ">
            <svg viewBox="0 0 50 50">
                <g transform="scale(1.1)">
                    <polygon points="25,10 10,40 40,40"/>
                </g>
            </svg>
        </div>
    );
}

const SymbolTriangleOutline = () => {
    return (
        <div className="w-10 h-10 rounded-md ">
            <svg viewBox="0 0 50 50">
                <polygon points="25,10 10,40 40,40" fill="none" stroke="black" strokeWidth={STROKE_WIDTH}/>
            </svg>
        </div>
    );
}

const SymbolTriangleDiagnalHatch = () => {
    return (
        <div className="w-10 h-10 rounded-md">
            <svg viewBox="0 0 50 50">
                <DiagnalHatch />
                <polygon points="25,10 10,40 40,40" fill="url(#hatchPattern)" stroke="black" strokeWidth={STROKE_WIDTH} />
            </svg>
        </div>
    );
}

const SymbolHeart = () => {
    return (
        <div className="w-10 h-10 rounded-md flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="m-auto" width="28px" height="28px" viewBox="0 0 29 28">
                <g transform="translate(2, 2)">
                    <g transform="scale(1.1)">
                        <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/>
                    </g>
                </g>        
            </svg>
        </div>
    );
}

const SymbolHeartOutline = () => {
    return (
        <div className="w-10 h-10 rounded-md flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="m-auto" width="28px" height="28px" viewBox="0 0 28 28">
                <g transform="translate(2, 2)">
                    <path id="heart" d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" fill="none"stroke="black" strokeWidth={STROKE_WIDTH-1}/>
                </g>
            </svg>
        </div>
    );
}

const SymbolHeartDiagnalHatch = () => {
    return (
        <div className="w-10 h-10 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="m-auto" width="28px" height="28px" viewBox="0 0 28 28">
                
                <g transform="translate(2, 2)">
                    <path id="heart" d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" fill="url(#hatchPattern)"stroke="black" strokeWidth={STROKE_WIDTH-1}/>
                </g>
            </svg>
        </div>
    );
}

const SymbolStar = () => {
    return (
        <div className="w-10 h-10 rounded-md border-black">
            <span className="h-full align-middle text-4xl">★</span>
        </div>
    );
}

const SymbolStarOutline = () => {
    return (
        <div className="w-10 h-10 rounded-md border-black">
            <span className="h-full align-middle text-4xl">☆</span>
        </div>
    );
}

export { 
    SymbolSquare, 
    SymbolSquareOutline, 
    SymbolSquareDiagnalHatch,
    SymbolCircle,
    SymbolCircleOutline,
    SymbolCircleDiagnalHatch,
    SymbolTriangle, 
    SymbolTriangleOutline,
    SymbolTriangleDiagnalHatch,
    SymbolHeart, 
    SymbolHeartOutline,
    SymbolHeartDiagnalHatch,
    SymbolStar,
    SymbolStarOutline,
};