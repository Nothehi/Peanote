import Header from '@/app/components/header'
import Streak from '@/app/components/streak';

const user = {
  name: "حسین",
  level: 4,
  avatar: 'https://i.pravatar.cc/300'
}

export default function Home() {
  return (
    <>
      <Header {...user}>
        <Streak current={14} target={50} />
      </Header>
    </>
  );
}
