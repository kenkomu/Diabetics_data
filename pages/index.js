import Image from 'next/image'
import { Inter } from 'next/font/google'
import Registration_page from '@/components/registration';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Registration_page/>
    
  );
}
