import {
  RequireWrite,
  RequireRead,
  AudioAssist,
} from "@/components/accessibility";
import { UserIDInput } from "@/components/UserID";
import PatternLock from "@/components/PatternLock";

const TestPage = () => {
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
        <UserIDInput />
        
      </div>
      <PatternLock />
    </>
  );
};

export default TestPage;
