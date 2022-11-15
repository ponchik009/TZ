import React from "react";

import styles from "./TicketItem.module.css";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { ReactComponent as Bag } from "../../assets/img/bag.svg";
import { ReactComponent as Baggage } from "../../assets/img/baggage.svg";
import { ITime } from "../../pages/FlightsPage/FlightsPage";
import classNames from "classnames";

interface ITicketItemProps {
  from: string;
  to: string;
  date: Date;
  times?: Array<ITime>;
}

const TicketItem: React.FC<ITicketItemProps> = ({ from, to, date, times }) => {
  const [currentTime, setCurrentTime] = React.useState(0);

  const onTimeClick = (index: number) => {
    setCurrentTime(index);
  };

  return (
    <div className={styles["ticket-item"]}>
      <div className={styles["ticket-item__top"]}>
        <div className={styles["ticket-item__status"]}>Невозвратный</div>
        <div className={styles["ticket-item__delimeter"]}></div>
      </div>
      <div className={styles["ticket-item__body"]}>
        <div className={styles["ticket-item__company"]}>
          <Logo />
          <span>S7 Airlines</span>
        </div>
        <div>
          <div className={styles["ticket-item__from-to"]}>
            <div className={styles["ticket-item__point"]}>
              <span className={styles["ticket-item__time"]}>
                {times ? times[currentTime].start : "09:20"}
              </span>
              <div>
                <span className={styles["ticket-item__city"]}>{from}</span>
                <span className={styles["ticket-item__date"]}>
                  {date.toLocaleString().split(",")[0]}
                </span>
              </div>
            </div>
            <div className={styles["ticket-item__point"]}>
              <span className={styles["ticket-item__time"]}>
                {times ? times[currentTime].end : "11:05"}
              </span>
              <div>
                <span className={styles["ticket-item__city"]}>{to}</span>
                <span className={styles["ticket-item__date"]}>
                  {date.toLocaleString().split(",")[0]}
                </span>
              </div>
            </div>
          </div>
          {times && (
            <div className={styles["ticket-item__times"]}>
              {times.map((time, index) => (
                <div
                  key={index}
                  className={classNames(
                    styles["ticket-item__time-to-choose"],
                    currentTime === index &&
                      styles["ticket-item__time-to-choose-active"]
                  )}
                  onClick={() => onTimeClick(index)}
                >
                  <span>{time.start}</span> - <span>{time.end}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles["ticket-item__icons"]}>
          <Bag />
          <Baggage />
        </div>
        <div className={styles.timeline}>
          <div className={styles.timeline__top}>
            <span>SVO</span>
            <span>ROV</span>
          </div>
          <div className={styles.timeline__body}>
            <div></div>
          </div>
          <div className={styles.timeline__time}>В пути 1 ч 55 мин</div>
        </div>
      </div>
    </div>
  );
};

export default TicketItem;
