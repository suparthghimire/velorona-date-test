import { useState } from "react";
import TimeToSend from "./components/TimeToSend";
import TimeCalculation from "./components/TimeCalculation";
import { T_Timezone } from "./data/data";
import TimezoneInput from "./components/TimezoneInput";
import TimeToShow from "./components/TimeToShow";

function App() {
  const [timeToSend, setTimeToSend] = useState("00:00");

  const [fullDateTimeToSend, setFullDateTimeToSend] = useState("");

  const [calculatedTime, setCalculatedTime] = useState("00:00");

  const [userTimezone, setUserTimezone] =
    useState<T_Timezone>("America/New_York");
  const [companyTimezone, setCompanyTimezone] =
    useState<T_Timezone>("America/New_York");

  return (
    <div className="w-screen h-screen bg-neutral-800 text-white grid grid-cols-4 gap-5 divide-x-8 divide-neutral-950 justify-center">
      <div className="p-5">
        <TimezoneInput
          type="Company"
          timezone={companyTimezone}
          setTimezone={setCompanyTimezone}
        />
        <TimezoneInput
          type="User"
          timezone={userTimezone}
          setTimezone={setUserTimezone}
        />
      </div>
      <div className="p-5">
        <TimeToSend
          timeToSend={timeToSend}
          setTimeToSend={setTimeToSend}
          setFullDate={setFullDateTimeToSend}
        />
      </div>
      <div className="p-5">
        <TimeCalculation
          timeToSend={fullDateTimeToSend}
          companyTimezone={companyTimezone}
          calculatedTime={calculatedTime}
          setCalculatedTime={setCalculatedTime}
        />
      </div>
      <div className="p-5">
        <TimeToShow
          companyTimezone={companyTimezone}
          timeFromDb={calculatedTime}
          userTimezone={userTimezone}
        />
      </div>
    </div>
  );
}

export default App;
