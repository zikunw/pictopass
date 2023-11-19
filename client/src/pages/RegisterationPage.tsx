import { UserIDInput } from "@/components/UserID"
import { LockClosedIcon } from "@radix-ui/react-icons"

import { RequireWrite } from "@/components/accessibility"

import { useState } from "react"

import PatternLock from "@/components/PatternLock"

const RegisterationPage = () => {
    const [userID, setUserID] = useState<number[]>([])
    const [pattern1, setPattern1] = useState<number[]>([]);
    const [pattern2, setPattern2] = useState<number[]>([]);
    const [pattern3, setPattern3] = useState<number[]>([]);
    const combinedPattern = pattern1.concat(pattern2, pattern3).join(", ");
    return (
        <div className="flex flex-col w-full h-full gap-5">
            <div className="mt-10 mx-auto flex flex-row gap-4">
                <LockClosedIcon className="w-16 h-16" />
                <h1 className="text-5xl font-bold">Registeration</h1>
            </div>

            <div className="mx-auto w-5/6">
                <RequireWrite hasWrite={userID.length !== 0}>
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
        </div>
    )
}

export default RegisterationPage