# TaiAvatarLogin

这是 TaiAvatarLogin 的 demo

```jsx
import { TaiAvatarLogin } from 'taic';
import React, { useState } from 'react';
import userIcon from './user.svg'

export default () => { 
    const [authCode, setAuthCode] = useState('1');
    const logout = ()=> setAuthCode('') 
    const login = ()=> setAuthCode('去登录页') 

    return <TaiAvatarLogin login={login} logout={logout} authCode={authCode} userIcon={userIcon}/>;
}
```
