import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import { useAppDispatch } from "../../store/hooks";
import { setSearchState } from "../../store/searchSlice/searchSlice";

import styles from "./SearchPage.module.css";

export interface IFormData {
  from: string;
  to: string;
  dateStart: string;
  dateEnd: string;
}

const SearchPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<IFormData>({});

  const fromValue = watch("from");
  const toValue = watch("to");
  const dateStart = watch("dateStart");

  const isDisabled = !fromValue || !toValue || !dateStart;

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    // посылаем action в redux
    dispatch(setSearchState(data));

    reset({ dateEnd: "", dateStart: "", from: "", to: "" });
    navigate("/avia/info");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.topSide}>
        <FormInput
          control={control}
          errors={errors}
          type="text"
          name="from"
          label="Откуда"
          placeholder="Город вылета"
        />
        <FormInput
          control={control}
          errors={errors}
          type="text"
          name="to"
          label="Куда"
          placeholder="Город прилёта"
        />
        <FormInput
          control={control}
          errors={errors}
          type="date"
          name="dateStart"
          label="Туда"
          placeholder="Дата вылета"
        />
        <FormInput
          control={control}
          errors={errors}
          type="date"
          name="dateEnd"
          label="Обратно"
          placeholder="Дата обратного вылета"
          rules={{
            validate: (value: string) => {
              if (value < dateStart) return "Некоректная дата";
            },
          }}
        />
      </div>
      <div className={styles.bottomSide}>
        <Button title="Найти билеты" type="submit" disabled={isDisabled} />
      </div>
    </form>
  );
};

export default SearchPage;
