import {
  RequireWrite,
  RequireRead,
  AudioAssist,
} from "@/components/accessibility";
import PatternLock from "@/components/PatternLock";
import { useState } from "react";

const TestPage = () => {
  const [pattern1, setPattern1] = useState<number[]>([]);
  const [pattern2, setPattern2] = useState<number[]>([]);
  const [pattern3, setPattern3] = useState<number[]>([]);

  const combinedPattern = pattern1.concat(pattern2, pattern3).join(", ");

  return (
    <>
      <div className="flex-1 flex flex-col px-4 py-10 items-center gap-10">
        <h1>Accessibility overlay</h1>
        <div className="flex flex-row gap-10">
          <RequireWrite hasWrite={false}>
            <h1 className="bg-white p-4 rounded-md">No Write</h1>
          </RequireWrite>

          <RequireWrite hasWrite={true}>
            <h1 className="bg-white p-4 rounded-md">Has Write</h1>
          </RequireWrite>

          <RequireRead>
            <h1 className="bg-white p-4 rounded-md">Read</h1>
          </RequireRead>

          <AudioAssist>
            <h1 className="bg-white p-4 rounded-md">Audio Assist</h1>
          </AudioAssist>
        </div>

        <h1>User ID section</h1>

        <div className="flex justify-center space-x-4">
          <PatternLock onPatternChange={setPattern1} />
          <PatternLock onPatternChange={setPattern2} />
          <PatternLock onPatternChange={setPattern3} />
        </div>
        <p>Combined Pattern: {combinedPattern}</p>
      </div>
    </>
  );
};

export default TestPage;
