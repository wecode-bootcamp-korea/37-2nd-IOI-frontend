import React from 'react';
import qs from 'qs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function KakaoLogin() {
  const navigate = useNavigate();

  axios
    .post(
      `https://kauth.kakao.com/oauth/token`,
      qs.stringify({
        grant_type: 'authorization_code',
        client_id: process.env.REACT_APP_API_KEY,
        redirect_uri: process.env.REACT_APP_REDIRECT_URI,
        code: window.location.search.split('=')[1],
      }),
      {
        headers: {
          'Content-Type': `application/x-www-form-urlencoded; charset=utf-8`,
        },
      }
    )
    .then(result => {
      if (result.status === 200) {
        axios({
          method: 'post',
          url: 'http://10.58.52.97:3000/auth/kakao-signin',
          data: {
            Token: result.data.access_token,
          },
        }).then(result => {
          localStorage.setItem('Token', 'result.data.accessToken');
          navigate(`/`);
        });
      }
    })
    .catch(err => {});

  return <div>kakao login</div>;
}

export default KakaoLogin;