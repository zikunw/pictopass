import { PersonIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { 
    SymbolCircle, 
    SymbolHeart, 
    SymbolSquare, 
    SymbolTriangle, 
    SymbolStar, 
    SymbolSquareOutline, 
    SymbolCircleOutline, 
    SymbolTriangleOutline, 
    SymbolHeartOutline, 
    SymbolStarOutline,
    SymbolSquareDiagnalHatch,
    SymbolCircleDiagnalHatch,
    SymbolTriangleDiagnalHatch,
    SymbolHeartDiagnalHatch,
    SymbolStarDiagnalHatch,
} from "./Symbols";
import { FaDeleteLeft } from "react-icons/fa6";

// Unicode shapes: https://unicode-table.com/en/blocks/geometric-shapes/
// Square: ■
// Circle: ●
// Triangle: ▲
// Heart: ❤
// Star: ★

enum Symbol {
    Square = 0,
    Circle = 1,
    Triangle = 2,
    Heart = 3,
    Star = 4,
    SquareOutline = 5,
    CircleOutline = 6,
    TriangleOutline = 7,
    HeartOutline = 8,
    StarOutline = 9,
    SquareDiagnalHatch = 10,
    CircleDiagnalHatch = 11,
    TriangleDiagnalHatch = 12,
    HeartDiagnalHatch = 13,
    StarDiagnalHatch = 14,
}

// Map numbers to symbols
const numberToSymbol = (n : number) => {
    switch (n) {
        case Symbol.Square:
            return SymbolSquare;
        case Symbol.Circle:
            return SymbolCircle;
        case Symbol.Triangle:
            return SymbolTriangle;
        case Symbol.Heart:
            return SymbolHeart;
        case Symbol.Star:
            return SymbolStar;
        case Symbol.SquareOutline:
            return SymbolSquareOutline;
        case Symbol.CircleOutline:
            return SymbolCircleOutline;
        case Symbol.TriangleOutline:
            return SymbolTriangleOutline;
        case Symbol.HeartOutline:
            return SymbolHeartOutline;
        case Symbol.StarOutline:
            return SymbolStarOutline;
        case Symbol.SquareDiagnalHatch:
            return SymbolSquareDiagnalHatch;
        case Symbol.CircleDiagnalHatch:
            return SymbolCircleDiagnalHatch;
        case Symbol.TriangleDiagnalHatch:
            return SymbolTriangleDiagnalHatch;
        case Symbol.HeartDiagnalHatch:
            return SymbolHeartDiagnalHatch;
        case Symbol.StarDiagnalHatch:
            return SymbolStarDiagnalHatch;
        default:
            return SymbolCircle;
    }
}

const exampleUsername = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

type UserIDInputProps = {
    userID: number[];
    setUserID: (userID: number[]) => void;
};

const UserIDInput = ({userID, setUserID}: UserIDInputProps) => {

    const checkAndSetUserID = (userID: number[]) => {
        // if user id is longer than 13 characters, do not set
        if (userID.length > 13) {
            return;
        }
        setUserID(userID);
    };

    return (
        <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row items-center">
                <PersonIcon className="w-12 h-12 mx-8" />
                <UserIDInputField value={userID} />
            </div>
            <UserIDKeyboard userID={userID} setUserID={checkAndSetUserID}/>
        </div>
    );
};

type UserIDInputFieldProps = {
    value: number[];
};
const UserIDInputField = ({value}: UserIDInputFieldProps) => {
    return (
        <div className="flex flex-row bg-white border-2 border-black w-full h-16 p-2 rounded">
            {value.map((n, index) => {
                const ThisSymbol = numberToSymbol(n);
                return (
                    <div className="flex flex-row">
                        <ThisSymbol />
                        {index !== value.length - 1 && <div className="w-2 h-2" />}
                    </div>
                );
            })}
            <div className="ml-2 w-2 h-full bg-black animate-blink"/>
        </div>
    );
}

type UserIDKeyboardProps = {
    userID: number[];
    setUserID: (userID: number[]) => void;
};

const UserIDKeyboard = ({userID, setUserID}: UserIDKeyboardProps) => {
    return (
        <div className="bg-white border-2 border-black rounded-md p-4 grid grid-cols-6 grid-rows-3 justify-evenly">

            <div onClick={()=>setUserID([...userID, 0])}><SymbolButton symbol={SymbolSquare} /></div>
            <div onClick={()=>setUserID([...userID, 1])}><SymbolButton symbol={SymbolCircle} /></div>
            <div onClick={()=>setUserID([...userID, 2])}><SymbolButton symbol={SymbolTriangle} /></div>
            <div onClick={()=>setUserID([...userID, 3])}><SymbolButton symbol={SymbolHeart} /></div>
            <div onClick={()=>setUserID([...userID, 4])}><SymbolButton symbol={SymbolStar} /></div>

            <button
                className="row-span-3 col-start-6 flex flex-row justify-self-center items-center ml-2 w-full  h-full hover:bg-gray-200 font-bold transition duration-100 ease-in-out border-2 border-black rounded-md"
                onClick={() => setUserID(userID.slice(0, -1))}
            >
                <FaDeleteLeft className="w-10 h-10 m-auto"/>
            </button>

            <div onClick={()=>setUserID([...userID, 5])}><SymbolButton symbol={SymbolSquareOutline} /></div>
            <div onClick={()=>setUserID([...userID, 6])}><SymbolButton symbol={SymbolCircleOutline} /></div>
            <div onClick={()=>setUserID([...userID, 7])}><SymbolButton symbol={SymbolTriangleOutline} /></div>
            <div onClick={()=>setUserID([...userID, 8])}><SymbolButton symbol={SymbolHeartOutline} /></div>
            <div onClick={()=>setUserID([...userID, 9])}><SymbolButton symbol={SymbolStarOutline} /></div>
            <div onClick={()=>setUserID([...userID, 10])}><SymbolButton symbol={SymbolSquareDiagnalHatch} /></div>
            <div onClick={()=>setUserID([...userID, 11])}><SymbolButton symbol={SymbolCircleDiagnalHatch} /></div>
            <div onClick={()=>setUserID([...userID, 12])}><SymbolButton symbol={SymbolTriangleDiagnalHatch} /></div>
            <div onClick={()=>setUserID([...userID, 13])}><SymbolButton symbol={SymbolHeartDiagnalHatch} /></div>
            <div onClick={()=>setUserID([...userID, 14])}><SymbolButton symbol={SymbolStarDiagnalHatch} /></div>
            

        </div>
    );
};

const SymbolButton = ({ symbol }: { symbol: () => JSX.Element }) => {
    const ThisSymbl = symbol();
    return (
        <button
            className="bg-none hover:bg-gray-200 font-bold py-2 px-4 transition duration-100 ease-in-out"
        >
            {ThisSymbl}
        </button>
    );
};

export { UserIDInput };