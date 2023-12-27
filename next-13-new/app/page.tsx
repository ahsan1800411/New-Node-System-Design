'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { status, data } = useSession();
  return (
    <>
      <h1>Ahsan Mumtaz</h1>
      {status === 'unauthenticated' && (
        <Link href='/api/auth/signin' className='mt-6'>
          Login
        </Link>
      )}
      {status === 'loading' && <div>Loading</div>}
      {status === 'authenticated' && (
        <div>
          {' '}
          User :{data.user?.name}
          <Link href={'/api/auth/signout'} style={{ marginLeft: '4px' }}>
            Sign out
          </Link>
        </div>
      )}
      <Image
        src='https://picsum.photos/200/300'
        alt='Coffee'
        width={400}
        height={300}
        priority
        quality={100}
      />
    </>
  );
}
