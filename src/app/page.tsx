import {requireAuth} from '@/lib/auth-utils';
import { LogoutButton } from './logout';

const Page = async () => {
  // await requireAuth();
  return (
    <div className='min-h-screen min-w-screen flex items-center justify-center'>
      Protected server component
      <LogoutButton/>
    </div>
  );
};

export default Page;
