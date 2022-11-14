import React from "react";
import { useAppSelector } from "../../store/hooks";

const FlightsPage = () => {
  const { from, to, dateStart, dateEnd } = useAppSelector(
    (state) => state.search
  );

  return (
    <div>
      <div>{from}</div>
      <div>{to}</div>
      <div>{String(dateStart)}</div>
      <div>{String(dateEnd)}</div>
    </div>
  );
};

export default FlightsPage;
