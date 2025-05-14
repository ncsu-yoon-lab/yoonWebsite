import Link from 'next/link';

interface NavElementProps {
    href: string;
    text: string;
}

export function NavRight({ href, text }: NavElementProps) {
    return (
        <Link href={href} className="text-gray-800 font-medium hover:text-red-700 relative group">
            {text}
        </Link>
    );
}

export function NavLeft() {
    return (
        <div className="flex items-center">
            <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-black">YOON'S LAB</span>
            </Link>
        </div>
    );
}
