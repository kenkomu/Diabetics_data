import Image from 'next/image';
import { Inter } from 'next/font/google';
import Registration_page from '@/pages/registration';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <><Navbar />
    <Registration_page />
    </>
    
  );
}
