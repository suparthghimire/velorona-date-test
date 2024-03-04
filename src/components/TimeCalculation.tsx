import moment from "moment-timezone";

interface TimeCalculationProps {
  timeToSend: string;
  calculatedTime: string;
  companyTimezone: string;
  setCalculatedTime: (time: string) => void;
}

function TimeCalculation(props: TimeCalculationProps) {
  function CalculateTime() {
    const date = props.timeToSend;
    const timezone = props.companyTimezone;

    const timeoffset = moment(date).tz(timezone).utcOffset();

    const timeToStoreInDb = moment(date)
      .subtract(timeoffset, "minutes")
      .toISOString();

    console.log(timeToStoreInDb);

    props.setCalculatedTime(timeToStoreInDb);
  }
  return (
    <div className="flex flex-col gap-5">
      <div className="p-2 border-2 border-red-500">
        <div>
          Time Received by Backend
          <br />
          <span className="text-xl text-red-500">{props.timeToSend}</span>
        </div>
      </div>
      <div className="p-2 border-2 border-red-500">
        Company Timezone:
        <br />
        <span className="text-xl text-red-500">{props.companyTimezone}</span>
      </div>
      <div className="p-2 border-2 border-red-500">
        Time to store in database:
        <br />
        <span className="text-xl text-red-500">{props.calculatedTime}</span>
      </div>
      <button
        onClick={CalculateTime}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Calculate Time
      </button>
    </div>
  );
}

export default TimeCalculation;
