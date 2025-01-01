import { auth } from '@/auth';
import { Header } from '@/components/header';

const DashboardPage = async () => {
  const session = await auth();

  return (
    <div>
      <Header />
      <div className='px-4 py-10 space-y-4'>
        <h1 className='text-2xl font-semibold'>Dashboard</h1>
        <p>User session:</p>
        <p className='text-sm'>{JSON.stringify(session?.user)}</p>
      </div>
    </div>
  );
};

export default DashboardPage;