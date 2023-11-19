import { useState } from "react";
import { default as ReactPatternLock } from "react-pattern-lock";

export default function PatternLockApp() {
  const [path, setPath] = useState<number[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);

  const reset = () => {
    setDisabled(false);
    setPath([]);
  };

  return (
    <div className="font-sans text-center w-400 h-400 min-h-800 bg-gray-300 mx-auto">
      <ReactPatternLock
        path={path}
        width={300}
        size={3}
        disabled={disabled}
        onChange={(newPath: number[]) => setPath(newPath)}
        onFinish={() => setDisabled(true)}
        style={{ margin: "0 auto" }}
      />

      <p className="text-white">Pattern output: {path.join(", ")}</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
