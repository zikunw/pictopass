import { SymbolSignIn } from "@/components/Symbols"

const LoginPage = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="mt-10 mx-auto container flex flex-row h-32">
                <div className="w-12 h-12"><SymbolSignIn /></div>
                <h1 className="text-4xl font-bold">Login Page</h1>
            </div>
        </div>
    )
}

export default LoginPage