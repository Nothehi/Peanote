import Header from '@/app/components/header'
import Streak from '@/app/components/streak';
import Stats from '@/app/components/stats';

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

      <main className="flex flex-col items-center w-full my-4 space-y-10">
        <Stats
          theory={40}
          rythem={25}
          hearing={65}
          reading={80}
        />
      </main>
    </>
  );
}
