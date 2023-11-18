import { PersonIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { SymbolCircle, SymbolHeart, SymbolSquare, SymbolTriangle, SymbolStar } from "./Symbols";

// Unicode shapes: https://unicode-table.com/en/blocks/geometric-shapes/
// Square: ■
// Circle: ●
// Triangle: ▲
// Heart: ❤
// Star: ★

const exampleUsername = "■■●●▲▲❤❤★★"

const UserIDInput = () => {
    return (
        <div className="flex flex-row">
            <PersonIcon className="w-8 h-8" />
            <input type="text" className="" placeholder="Enter your user ID" />
        </div>
    );
};

const UserIDKeyboard = () => {
    return (
        <div className="border-2 border-black rounded-md p-4 w-80 flex flex-row justify-evenly">
            <SymbolButton symbol={SymbolCircle} />
            <SymbolButton symbol={SymbolSquare} />
            <SymbolButton symbol={SymbolTriangle} />
            <SymbolButton symbol={SymbolHeart} />
            <SymbolButton symbol={SymbolStar} />
        </div>
    );
};

const SymbolButton = ({ symbol }: { symbol: () => JSX.Element }) => {
    const [selected, setSelected] = useState(false);
    return (
        <button
            className="text-2xl w-10 h-10 rounded-md border-black"
        >

        </button>
    );
};

export { UserIDInput, UserIDKeyboard };