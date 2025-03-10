import Header from '@/app/components/header'

const user = {
  name: "حسین",
  level: 4,
  avatar: 'https://i.pravatar.cc/300'
}

export default function Home() {
  return (
    <>
      <Header {...user} />
    </>
  );
}
