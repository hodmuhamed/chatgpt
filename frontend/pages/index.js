import useSWR from 'swr'; const f=u=>fetch(u).then(r=>r.json());
export default function Home(){
  const {data=[]}=useSWR('/api/posts',f);
  return <ul>{data.map(p=><li key={p.slug}>{p.title}</li>)}</ul>;
}
