import { useState } from 'react';

type UseInputParam = {
  initVal: string | undefined;
  validation: (v: string) => boolean;
};

export default function useInput({ initVal, validation }: UseInputParam) {
  const [value, setValue] = useState(initVal);
  const [check, setCheck] = useState(true);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {
      target: { value },
    } = e;

    setValue(value);

    if (validation(value)) setCheck(true);
    else setCheck(false);
  }

  return { value, onChange, check };
}
