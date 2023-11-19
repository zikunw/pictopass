import { useState } from "react";
import { default as ReactPatternLock } from "react-pattern-lock";
import { Card } from "@/components/ui/card";

interface PatternLockProps {
  onPatternChange: (pattern: number[]) => void;
}

const PatternLock: React.FC<PatternLockProps> = ({ onPatternChange }) => {
  const [path, setPath] = useState<number[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);

  const reset = () => {
    setDisabled(false);
    setPath([]);
  };

  const handleChange = (newPath: number[]) => {
    setPath(newPath);
    onPatternChange(newPath);
  };

  return (
    <Card className="max-w-sm bg-gray-300 p-4">
      <div className="text-center mx-auto p-2">
        <ReactPatternLock
          path={path}
          width={300}
          size={3}
          pointSize={40}
          connectorThickness={15}
          disabled={disabled}
          onChange={handleChange}
          onFinish={() => setDisabled(true)}
          style={{ margin: "0 auto"}}
        />

        <p className="text-white mt-2">Pattern output: {path.join(", ")}</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </Card>
  );
};

export default PatternLock
