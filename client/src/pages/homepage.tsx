import { useState, useEffect } from "react";

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
            <h1 className="text-xl">Homepage</h1>
            {userJwt && <h1 className="text-xl">Logged in, welcome {username}.</h1>}
        </div>
    )
}

export default Homepage