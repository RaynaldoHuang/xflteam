'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Calendar, Trophy, Flag } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Beranda', icon: Home },
  { href: '/ranking', label: 'Ranking', icon: Trophy},
  { href: '/result', label: 'Result', icon: Flag },
  { href: '/jadwal', label: 'Jadwal', icon: Calendar },
];

export default function BottomNavbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full mx-auto bg-white border-t border-gray-300 z-50">
      <ul className="flex justify-between items-center px-4 py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <li key={item.href} className="flex-1 text-center">
              <Link href={item.href}>
                <div className={`flex flex-col items-center text-xs ${isActive ? 'text-red-900' : 'text-gray-500'}`}>
                  <Icon size={20} className='mb-1'/>
                  <span>{item.label}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
