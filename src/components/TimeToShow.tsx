import React from "react";
import { T_Timezone } from "../data/data";
import moment from "moment-timezone";
interface TimeToShowProps {
  timeFromDb: string;
  userTimezone: T_Timezone;
  companyTimezone: T_Timezone;
}

function TimeToShow(props: TimeToShowProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="p-2 border-2 border-red-500">
        <div>
          Time Received from Backend
          <br />
          <span className="text-xl text-red-500">{props.timeFromDb}</span>
        </div>
      </div>
      <div className="p-2 border-2 border-red-500">
        Company Timezone:
        <br />
        <span className="text-xl text-red-500">{props.companyTimezone}</span>
      </div>
      <div className="p-2 border-2 border-red-500">
        User timezone
        <br />
        <span className="text-xl text-red-500">{props.userTimezone}</span>
      </div>
      <div className="p-2 border-2 border-red-500">
        Time converted back by ui
        <br />
        <span className="text-xl text-red-500">
          {moment(props.timeFromDb)
            .tz(props.companyTimezone)
            .format("YYYY-MM-DD HH:mm:ss")}
        </span>
      </div>
      <div className="p-2 border-2 border-red-500">
        Time after formatting in ui
        <br />
        <span className="text-xl text-red-500">
          {moment(props.timeFromDb)
            .tz(props.companyTimezone)
            .format("MMMM DD YYYY - hh:mm a")}
        </span>
      </div>
    </div>
  );
}

export default TimeToShow;
