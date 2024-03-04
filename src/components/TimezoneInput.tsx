import { AVAILABLE_TIMEZOMES, T_Timezone } from "../data/data";
interface UserTimezoneProps {
  type: "User" | "Company";
  timezone: T_Timezone;
  setTimezone: (timezone: T_Timezone) => void;
}
function TimezoneInput(props: UserTimezoneProps) {
  return (
    <div>
      <div>
        <label htmlFor="">{props.type} timezone</label>
      </div>
      <select
        name=""
        id=""
        className="text-black"
        value={props.timezone}
        onChange={(e) => props.setTimezone(e.target.value as T_Timezone)}
      >
        {AVAILABLE_TIMEZOMES.map((timezone) => (
          <option key={timezone} value={timezone}>
            {timezone}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TimezoneInput;
