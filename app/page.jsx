import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Link href='/recipe' className='text-2xl font-bold underline'>Recipe App</Link>
    </div>
  );
}
