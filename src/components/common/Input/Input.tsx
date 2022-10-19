import './Input.scss';

type InputParam = {
  label: string;
  placeholder: string;
  param: {
    value: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    name: string;
  };
  valid: boolean;
  errMsg: string;
};

export default function Input({
  label,
  placeholder,
  param,
  valid,
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
      {!valid ? <p className="errMsg">{errMsg}</p> : <></>}
    </div>
  );
}
