import { Link, usePage } from "@inertiajs/react";
import { Inertia } from '@inertiajs/inertia';

export default function Layout({ children }) {
    const { auth } = usePage().props; 
    const user = auth?.user;
    console.log(user)
    return (
        <>
            <header>
                <nav>
                    <Link className="nav-link" href="/home">
                        Home
                    </Link>
                    <Link className="nav-link" href="/posts/create">
                        Create
                    </Link>
                    <div className="flex items-center space-x-4">
                        {user && (
                        <>
                            <img
                            src={user.avatar}
                            alt="User Avatar"
                            width={40}
                            className="rounded-full"
                            />
                            <button
                            onClick={(e) => {
                                e.preventDefault();
                                Inertia.post('/logout');
                            }}
                            className="text-red-500 hover:underline"
                            >
                            Logout
                            </button>
                        </>
                        )}
                    </div>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}