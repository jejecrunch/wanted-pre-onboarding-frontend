import React from 'react';
import { useInput } from '../../../hooks';
import { Input } from '../../common';

type LoginParam = { changeMode: () => void };

export default function Login({ changeMode }: LoginParam) {
  const [email, pw] = [
    useInput({ initVal: undefined, validation: v => v.indexOf('@') > -1 }),
    useInput({ initVal: undefined, validation: v => v.length >= 8 }),
  ];

  return (
    <div className="form-container">
      <form className="form">
        <div className="form-content">
          <h3 className="form-title">로그인</h3>
          <div className="text-center">
            아직 가입하지 않으셨다면{' '}
            <span className="link-primary" onClick={changeMode}>
              회원가입
            </span>
          </div>
          <Input
            label="이메일"
            placeholder="이메일을 입력해주세요"
            param={email}
            errMsg="@ 포함해서 입력해주세요"
          />

          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            param={pw}
            errMsg="8자 이상 입력해주세요"
          />

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              로그인
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
