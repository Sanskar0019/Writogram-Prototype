'use client';

import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { ArrowRight, Loader2 } from 'lucide-react';

export default function LoginPage() {
    const [errorMessage, dispatch] = useActionState(authenticate, undefined);

    return (
        <div className="flex h-screen w-full items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-center mb-8">
                    <h1 className="font-serif text-3xl font-bold mb-2">Narrative Artists</h1>
                    <p className="text-gray-500 text-sm">Secure Admin Access</p>
                </div>

                <form action={dispatch} className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold uppercase text-gray-500 mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full p-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-black transition-colors"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="admin@narrativeartists.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold uppercase text-gray-500 mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full p-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-black transition-colors"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            required
                            minLength={6}
                        />
                    </div>

                    <div className="h-4 flex items-center justify-center">
                        {errorMessage && (
                            <p className="text-red-500 text-xs text-center">{errorMessage}</p>
                        )}
                    </div>

                    <LoginButton />
                </form>
            </div>
        </div>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <button
            className="w-full bg-black text-white p-3 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-[#dcff0d] hover:text-black transition-colors flex items-center justify-center gap-2"
            aria-disabled={pending}
        >
            {pending ? <Loader2 className="animate-spin w-4 h-4" /> : <>Log in <ArrowRight className="w-4 h-4" /></>}
        </button>
    );
}
