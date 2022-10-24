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
    <div
      className={
        param.name === 'newTodo'
          ? 'form-outline flex-fill justify-content-center'
          : 'form-group mt-3'
      }
    >
      {param.name === 'newTodo' ? <></> : <label>{label}</label>}
      <input
        id={param.name === 'newTodo' ? 'todo' : ''}
        placeholder={placeholder}
        className="form-control"
        {...param}
      />
      {param.name === 'newTodo' ? <label>{label}</label> : <></>}
      {!valid ? <p className="errMsg">{errMsg}</p> : <></>}
    </div>
  );
}
