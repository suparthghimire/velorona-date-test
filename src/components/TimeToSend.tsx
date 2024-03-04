import moment from "moment";
import { useState } from "react";

const STATIC_DATE = moment().format("YYYY-MM-DD");

interface TimeToSendProps {
  timeToSend: string;
  setTimeToSend: (time: string) => void;
  setFullDate: (string: string) => void;
}
function TimeToSend(props: TimeToSendProps) {
  const [constructedTime, setConstructedTime] = useState("");
  function ConstructTime() {
    const constructedTime = `${STATIC_DATE}T${props.timeToSend}:00Z`;
    setConstructedTime(constructedTime);
    props.setFullDate(constructedTime);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="border-2 border-red-500 p-3">
        Todays Date:
        <br />
        <span className="text-xl text-red-500">{STATIC_DATE}</span>
      </div>
      <div className="border-2 border-red-500 p-3">
        <div>
          <label htmlFor="">Time to send</label> &nbsp;
        </div>
        <input
          className="border-2 border-gray-300 text-black"
          value={props.timeToSend}
          onChange={(e) => props.setTimeToSend(e.target.value)}
          type="time"
          name=""
          id=""
        />
      </div>
      <div className="border-2 border-red-500 p-3">
        Selected Time:
        <br />
        <span className="text-red-500 text-xl">{props.timeToSend}</span>
      </div>
      <div className="border-2 border-red-500 p-3">
        Time to send:
        <br />
        <span className="text-red-500 text-xl">{constructedTime}</span>
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
        onClick={ConstructTime}
      >
        Construct Time to send
      </button>
    </div>
  );
}

export default TimeToSend;
