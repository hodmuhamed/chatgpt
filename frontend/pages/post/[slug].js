import {useRouter} from 'next/router';
import useSWR from 'swr'; const f=u=>fetch(u).then(r=>r.json());
export default function Post(){
  const {query}=useRouter();
  const {data}=useSWR(()=>query.slug&&`/api/posts/${query.slug}`,f);
  if(!data) return <div>Loading...</div>;
  return <div><h1>{data.title}</h1><p>{data.content}</p></div>;
}
