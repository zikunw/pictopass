const STROKE_WIDTH = 4;

const DiagnalHatch = () => {
    return (
        <defs>
            <pattern
                id="hatchPattern"
                width="4"
                height="4"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
            >
                <line x1="0" y1="0" x2="0" y2="8" stroke="black" strokeWidth="3" />
            </pattern>
        </defs>
    )
}

const SymbolSquare = () => {
    return (
        <div className="w-10 h-10 rounded-md ">
            <svg viewBox="0 0 50 50">
                <rect x="10" y="10" width="32" height="32" stroke="black" strokeWidth={STROKE_WIDTH}/>
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
                <circle cx="25" cy="25" r="18" stroke="black" strokeWidth={STROKE_WIDTH}/>
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
                <g transform="scale(1)">
                    <polygon points="25,10 10,40 40,40" stroke="black" strokeWidth={STROKE_WIDTH}/>
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
                    <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" stroke="black" strokeWidth={STROKE_WIDTH-1}/>
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
                    <path id="heart" d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" fill="none" stroke="black" strokeWidth={STROKE_WIDTH-1}/>
                </g>
            </svg>
        </div>
    );
}

const SymbolHeartDiagnalHatch = () => {
    return (
        <div className="w-10 h-10 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="m-auto" width="28px" height="33px" viewBox="0 0 28 33">
                <DiagnalHatch />
                <g transform="translate(2, 7)">   
                    <path id="heart" d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" fill="url(#hatchPattern)"stroke="black" strokeWidth={STROKE_WIDTH-1}/>
                </g>
            </svg>
        </div>
    );
}

const SymbolStar = () => {
    return (
        <div className="w-10 h-10 rounded-md border-black flex items-center justify-center">
            <svg id="svgelem" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                <g transform="scale(1.2,1)">
                    <g transform = "translate(0, 2)">
                        <polygon
                            points="15,0 18,9 24,9 19,14.4 21,23.4 15,18 9,23.4 11,14.4 6,9 12,9"
                            fill="black"
                            stroke="black"
                            strokeWidth="2"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
};

const SymbolStarOutline = () => {
    return (
        <div className="w-10 h-10 rounded-md border-black flex items-center justify-center">
            <svg id="svgelem" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                <g transform="scale(1.2,1)">
                    <g transform = "translate(0, 2)">
                        <polygon
                            points="15,0 18,9 24,9 19,14.4 21,23.4 15,18 9,23.4 11,14.4 6,9 12,9"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
};

const SymbolStarDiagnalHatch = () => {
    return (
        <div className="w-10 h-10 rounded-md border-black flex items-center justify-center">
            <svg id="svgelem" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                <DiagnalHatch />
                <g transform="scale(1.2,1)">
                    <g transform = "translate(0, 2)">
                        <polygon
                            points="15,0 18,9 24,9 19,14.4 21,23.4 15,18 9,23.4 11,14.4 6,9 12,9"
                            fill="url(#hatchPattern)"
                            stroke="black"
                            strokeWidth="2"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
};

const SymbolSignIn = () => {
    return (
        <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 28 28">
            <g transform="scale(0.1)">
                <circle cx="141.63" cy="77.54" r="19.08"/><path d="m201.46,101.94h-67.61s-9.82,3.4-14.35,9.44-10.2,19.64-12.84,21.53-15.49,0-15.49,0v18.51s18.13,1.13,21.15,0,6.8-2.61,8.11-4.58,12.15-17.89,12.15-17.89l11.98,26.32-40.22,101.56h23.47l37.59-84.38s1.48-1.64,1.97-.33.33,42.68,1.31,44.98,5.09,6.07,7.72,6.89,68.95.49,68.95.49c0,0-2.46-8.86-7.39-13.63s-11.82-8.04-11.82-8.04h-35.79s2.63-36.61,1.48-42.02-18.06-39.89-18.06-39.89l21.01.49,12.64,25.61s5.58,7.22,11.98,4.27,5.25-11.16,5.25-11.16l-23.21-38.17Z"/><polygon points="102.28 29.05 68.28 40.62 68.37 40.88 68.28 40.88 68.28 275.21 85.48 256.83 85.48 51.67 98.04 47.39 98.04 112.81 115.24 105.81 115.24 23.6 102.28 29.05"/>
            </g>
        </svg>
    )
}

const SymbolLogout = () => {
    return (
        <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 28 28">
            <g transform="scale(0.1)">
                <ellipse cx="173.15" cy="72.22" rx="20.42" ry="19.93"/><ellipse cx="227.16" cy="139.29" rx="10.35" ry="10.11"/><polyline points="79.84 35.76 79.84 36.02 79.84 280.83 97.8 261.63 97.8 47.3 110.93 42.83 110.93 91.78 128.9 91.78 128.9 17.97"/><g><path className="cls-1" fill="none" d="m121.02,203.1s-2.81-38.24-1.58-43.9c1.23-5.66,19.32-41.67,19.32-41.67l-22.48.51-11.91,23.55v61.51h16.65Z"/><path d="m195.84,144.62c1.41,2.06,5.45,3.6,8.68,4.79s22.63,0,22.63,0v-19.34s-13.74,1.97-16.57,0c-2.83-1.97-8.89-16.18-13.74-22.49s-15.36-9.87-15.36-9.87h-72.35l-4.77,7.66v36.22l11.91-23.55,22.48-.51s-18.09,36.01-19.32,41.67c-1.23,5.66,1.58,43.9,1.58,43.9h-16.65v22.69c15.83-.04,30.34-.19,31.58-.57,2.81-.86,7.2-4.8,8.26-7.2,1.05-2.4.88-45.62,1.41-46.99.53-1.37,2.11.34,2.11.34l40.22,88.15h25.12l-43.03-106.1,12.82-27.5s11.59,16.64,13,18.69Z"/></g>
            </g>
        </svg>
    )
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
    SymbolStarDiagnalHatch,
    SymbolSignIn,
    SymbolLogout
};