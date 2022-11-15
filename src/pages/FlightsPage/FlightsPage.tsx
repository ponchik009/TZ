import React from "react";
import TicketItem from "../../components/TicketItem/TicketItem";
import { useAppSelector } from "../../store/hooks";

import styles from "./FlightsPage.module.css";

export interface ITime {
  start: string;
  end: string;
}

const FlightsPage = () => {
  const { from, to, dateStart, dateEnd } = useAppSelector(
    (state) => state.search
  );

  const times: Array<ITime> | undefined =
    dateEnd === null
      ? [
          { start: "09:20", end: "11:05" },
          { start: "10:20", end: "12:05" },
          { start: "11:20", end: "13:05" },
        ]
      : undefined;

  return (
    <>
      <div className={styles.tickets}>
        <div className={styles.tickets__destinations}>
          {dateStart && (
            <TicketItem from={from} to={to} date={dateStart} times={times} />
          )}
          {dateEnd && <TicketItem from={to} to={from} date={dateEnd} />}
        </div>
        <div className={styles.tickets__delimeter}></div>
        <div className={styles.tickets__price}>8 300 ₽</div>
      </div>
    </>
  );
};

export default FlightsPage;
