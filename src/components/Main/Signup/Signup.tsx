import React from 'react';
import { useInput } from '../../../hooks';
import { Input } from '../../common';

export default function Signup({ changeMode }: { changeMode: () => void }) {
  const [email, pw, checkPw] = [
    useInput({ initVal: undefined, validation: v => v.indexOf('@') > -1 }),
    useInput({ initVal: undefined, validation: v => v.length >= 8 }),
    useInput({ initVal: undefined, validation: v => v === pw.value }),
  ];

  return (
    <div className="form-container">
      <form className="form">
        <div className="form-content">
          <h3 className="form-title">회원가입</h3>
          <div className="text-center">
            이미 가입했던 적이 있다면{' '}
            <span className="link-primary" onClick={changeMode}>
              로그인
            </span>
          </div>

          <Input
            label="이메일"
            placeholder="이메일을 입력해주세요"
            param={email}
            errMsg="이메일 형식이 아닙니다"
          />

          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            param={pw}
            errMsg="비밀번호는 8자 이상 입력해주세요"
          />

          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 한번 더 입력해주세요"
            param={checkPw}
            errMsg="입력하신 비밀번호와 다릅니다"
          />

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              회원가입
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
