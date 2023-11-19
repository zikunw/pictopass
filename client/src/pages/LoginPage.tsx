import { SymbolSignIn } from "@/components/Symbols";
import { useState } from "react";
import { RequireWrite } from "@/components/accessibility";
import { UserIDInput } from "@/components/UserID";
import PatternLock from "@/components/PatternLock";
import { CheckCircledIcon } from "@radix-ui/react-icons";

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

type LoginPageProps = {
  setPage: (page: number) => void;
};
const LoginPage = ({ setPage }: LoginPageProps) => {
  const [userID, setUserID] = useState<number[]>([]);
  const [pattern1, setPattern1] = useState<number[]>([]);
  const [pattern2, setPattern2] = useState<number[]>([]);
  const [pattern3, setPattern3] = useState<number[]>([]);
  const combinedPattern = pattern1.concat(pattern2, pattern3);

  async function postLogin(
    userID: number[],
    passphrase: number[]
  ): Promise<boolean> {
    const userIDInShapes = userID.map((n) => shapes[n]);
    const result = await fetch("https://api.pictopass.co/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userIDInShapes,
        passphrase: passphrase,
      }),
    });

    if (result.status === 200) {
      console.log("Logged in");

      // get token
      const resJSON = await result.json();
      const jwt = resJSON.jwt;

      console.log(jwt);

      window.sessionStorage.setItem("jwt", jwt);
      setPage(0);
      window.location.reload();
      return true;
    }
    return false;
  }

  return (
    <div className="flex flex-col w-full h-full gap-5">
      <div className="mt-10 mx-auto flex flex-row gap-4">
        <div className="w-16 h-16">{SymbolSignIn()}</div>
        <h1 className="text-5xl font-bold">Login</h1>
      </div>

      <div className="mx-auto w-5/6">
        <RequireWrite hasWrite={userID.length >= 3}>
          <UserIDInput userID={userID} setUserID={setUserID} />
        </RequireWrite>
      </div>

      <div className="flex justify-center">
        <RequireWrite hasWrite={combinedPattern.length > 10}>
          <div className="flex flex-row justify-center space-x-4 items-center">
            <PatternLock onPatternChange={setPattern1} />
            <PatternLock onPatternChange={setPattern2} />
            <PatternLock onPatternChange={setPattern3} />
          </div>
        </RequireWrite>
      </div>

      <button
        className="mx-auto w-5/6 h-20 flex flex-row items-center p-2 border-2 border-black mb-20"
        onClick={() => postLogin(userID, combinedPattern)}
      >
        <CheckCircledIcon className="mx-auto w-16 h-16" />
      </button>
    </div>
  );
};

export default LoginPage;
