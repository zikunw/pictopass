import { UserIDInput } from "@/components/UserID"
import { LockClosedIcon, CheckCircledIcon } from "@radix-ui/react-icons"

import { RequireWrite } from "@/components/accessibility"

import { useState } from "react"

import PatternLock from "@/components/PatternLock"

const shapes = [ 
    "Square",
    "Circle",
    "Triangle",
    "Heart",
    "Star",
    "StripedSquare",
    "StripedCircle",
    "StripedTriangle",
    "StripedHeart",
    "StripedStar",
    "HollowSquare",
    "HollowCircle",
    "HollowTriangle",
    "HollowHeart",
    "HollowStar",
];

const RegisterationPage = () => {
    const [userID, setUserID] = useState<number[]>([])
    const [pattern1, setPattern1] = useState<number[]>([]);
    const [pattern2, setPattern2] = useState<number[]>([]);
    const [pattern3, setPattern3] = useState<number[]>([]);
    const combinedPattern = pattern1.concat(pattern2, pattern3);

    async function postRegisteration(userID: number[], passphrase: number[]): Promise<boolean> {
        
        const userIDInShapes = userID.map((n) => shapes[n]);
        const result = await fetch("http://localhost:3000/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: userIDInShapes,
                passphrase: passphrase,
            }),
        })
    
        if (result.status === 201) {
            console.log("Registered")
            return true
        }
        // @ts-ignore
        console.log(result.json.error);
        return false
    }

    return (
        <div className="flex flex-col w-full h-full gap-5">
            <div className="mt-10 mx-auto flex flex-row gap-4">
                <LockClosedIcon className="w-16 h-16" />
                <h1 className="text-5xl font-bold">Registration</h1>
            </div>

            <div className="mx-auto w-5/6">
                <RequireWrite hasWrite={userID.length >= 3}>
                    <UserIDInput userID={userID} setUserID={setUserID}/>
                </RequireWrite>
            </div>

            <div className="mx-auto w-5/6">
                <RequireWrite hasWrite={combinedPattern.length > 10 }>
                    <div className="flex flex-row justify-center space-x-4 items-center">
                        <PatternLock onPatternChange={setPattern1} />
                        <PatternLock onPatternChange={setPattern2} />
                        <PatternLock onPatternChange={setPattern3} />
                    </div>
                </RequireWrite>
            </div>

            <button className="mx-auto w-5/6 h-20 flex flex-row items-center p-2 border-2 border-black mb-20" onClick={() => postRegisteration(userID, combinedPattern)}>
                <CheckCircledIcon className="w-16 h-16" />
            </button>
        </div>
    )
}

export default RegisterationPage