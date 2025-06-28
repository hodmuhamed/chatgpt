import {useState} from 'react';
export default function Admin(){
  const [t,setT]=useState('');
  const login=async()=>{const r=await fetch('/api/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:'admin',password:'password'})});if(r.ok)setT((await r.json()).token);};
  return <div><button onClick={login}>Login</button>{t&&<p>Token:{t}</p>}</div>;
}
