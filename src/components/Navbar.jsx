export default function Navbar() {
    return (
        <ul className="flex text-2xl justify-end gap-4 pr-8">
            <li>
                <a href={'/'}>🐐</a>
            </li>
            <li>
                <a href={'/clubs'}>Clubs</a>
            </li>
            <li>
                <a href={'/players'}>Players</a>
            </li>
        </ul>
    );
}