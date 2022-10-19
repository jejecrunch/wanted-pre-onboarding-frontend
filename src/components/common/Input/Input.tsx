import './Input.scss';

type InputParam = {
  label: string;
  placeholder: string;
  param: {
    value: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    check: boolean;
  };
  errMsg: string;
};

export default function Input({
  label,
  placeholder,
  param,
  errMsg,
}: InputParam) {
  return (
    <div className="form-group mt-3">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        className="form-control mt-1"
        {...param}
      />
      {!param.check ? <p className="errMsg">{errMsg}</p> : <></>}
    </div>
  );
}
