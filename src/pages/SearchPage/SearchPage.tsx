import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import styles from "./SearchPage.module.css";

const SearchPage = () => {
  const [cityStart, setCityStart] = React.useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityStart(e.target.value);
  };

  return (
    <div>
      <div className={styles.topSide}>
        <Input
          value={cityStart}
          onChange={onChange}
          label="Откуда"
          type="text"
          placeholder="Город вылета"
        />
        <Input
          value={cityStart}
          onChange={onChange}
          label="Куда"
          type="text"
          placeholder="Город прилёта"
        />
        <Input
          value={cityStart}
          onChange={onChange}
          label="Туда"
          type="date"
          placeholder="Город прилёта"
        />
        <Input
          value={cityStart}
          onChange={onChange}
          label="Обратно"
          type="date"
          placeholder="Город прилёта"
        />
      </div>
      <div className={styles.bottomSide}>
        <Button title="Найти билеты" />
      </div>
    </div>
  );
};

export default SearchPage;
