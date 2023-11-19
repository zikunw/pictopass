import { Pencil1Icon, FileTextIcon, SpeakerLoudIcon } from "@radix-ui/react-icons"

type RequireWriteProps = {
    hasWrite: boolean,
    children: string | JSX.Element | JSX.Element[]
}

const RequireWrite = ({ hasWrite, children }: RequireWriteProps) => {
    if (hasWrite) return (
        <div className="flex flex-row items-center gap-2 bg-green-400 p-4 rounded-md">
            {children}
            <Pencil1Icon className="my-2 w-8 h-8"/>
        </div>
    )

    return (
        <div className="flex flex-row items-center gap-2 bg-orange-400 p-4 rounded-md">
            {children}
            <Pencil1Icon className="my-2 w-8 h-8"/>
        </div>
    )
}

type RequireReadProps = {
    children: string | JSX.Element | JSX.Element[]
}
const RequireRead = ({ children }: RequireReadProps) => {
    return (
        <div className="flex flex-row items-center gap-2 bg-purple-400 p-4 rounded-md">
            {children}
            <FileTextIcon className="my-2 w-8 h-8"/>
        </div>
    )
}

type AudioAssistProps = {
    children: string | JSX.Element | JSX.Element[]
}
const AudioAssist = ({ children }: AudioAssistProps) => {
    return (
        <div className="flex flex-row items-center gap-2 bg-teal-400 p-4 rounded-md">
            {children}
            <SpeakerLoudIcon className="my-2 w-8 h-8"/>
        </div>
    )
}

export { RequireWrite, RequireRead, AudioAssist }