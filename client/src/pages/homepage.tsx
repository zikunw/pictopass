import { useState, useEffect } from "react";
import logo from "../../public/logo.png";

const Homepage = () => {
    const [username, setUsername] = useState<string>("")

    const userJwt = window.sessionStorage.getItem("jwt");

    const getUserName = async (jwt: string) => {
        const result = await fetch("http://localhost:3000/users/fetch", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                jwt
            }),
        })

        if (result.status === 200) {
            const resJSON = await result.json()
            const username = resJSON.username;
            return username
        }

        return "JWT invalid."
    }

    useEffect(() => {
        if (userJwt) {
            getUserName(userJwt).then((username) => setUsername(username))
        }
    }, [userJwt])

    return (
        <div className="flex flex-col w-full h-full gap-5">
            <div className="flex flex-col w-full gap-5 my-20">
                <img src={logo} className="w-1/2 h-1/2 mx-auto" />
            </div>
            {!userJwt && <h1 className="text-5xl text-center">Not logged in.</h1>}
            {userJwt && <h1 className="text-5xl text-center">Logged in, welcome {username}.</h1>}
        </div>
    )
}

export default Homepage