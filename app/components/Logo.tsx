import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center no-underline group">
      <Image
        src="/pyronovalogo-removebg-preview.png"
        alt="PyroNova"
        width={900}
        height={300}
        priority
        className="h-16 w-auto mix-blend-screen group-hover:brightness-110 transition-all duration-300"
      />
    </Link>
  );
}