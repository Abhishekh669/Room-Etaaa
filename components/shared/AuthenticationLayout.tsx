"use client"
import { useOnboardUser } from '@/features/hooks/tanstacks/mutate-hooks/onboarding/use-onboard-user';
import { useGetUserSession } from '@/features/hooks/tanstacks/query-hooks/users/use-get-session'
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'sonner';
import OnboardingPage from './onboard-user';
import SpinningLoader from './SpinningLoader';
import { useUserStore } from '@/features/store/user/use-user-store';

function AuthenticationLayout({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const { mutate: onboard_user, isPending } = useOnboardUser();
    const { data: user, isLoading: userLoading } = useGetUserSession();
    const { user: u, setUser, resetUser } = useUserStore()

    const handleUpdate = async (phoneNumber: string, role: 'USER' | 'OWNER') => {
        if (isPending) return;
        if (!phoneNumber || !role) {
            toast.error("Invalid payload");
            return;
        }

        try {
            onboard_user(
                { phoneNumber, role },
                {
                    onSuccess: (res) => {
                        if (res.message && res.success) {
                            toast.success(res.message);
                        } else {
                            throw new Error(res.error || "Something went wrong");
                        }
                    },
                    onError: (error) => {
                        toast.error(error.message);
                    }
                }
            );
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Something went wrong");
        }
    };

    useEffect(() => {
        setMounted(true);
    }, []);


       
    
      useEffect(() => {
        if (!mounted || userLoading) return;
    
        if (!user) {
          router.push("/login");
          return;
        }
    
        if (user.isAdmin) {
          setIsOpen(false);
          return;
        }
    
        if (user.isOnboarded && user.isVerified) {
       if (user.role === "USER") {
            router.push("/posts");
          }
        }
    
        setIsOpen(!user.isOnboarded);
      }, [mounted, userLoading, user, router, setIsOpen]);


    useEffect(() => {
        if (!mounted || userLoading) return;
        if (user && user !== u) {
            setUser(user)
        }
    }, [mounted, userLoading, user, setUser])

    if (!mounted || userLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black">
                <SpinningLoader />
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="min-h-screen ">
            <OnboardingPage
                isOpen={isOpen}
                handleUpdate={handleUpdate}

            />

            {user.isVerified || user.isAdmin ? (
                <main>
                    {children}
                </main>
            ) : (
                <div className="flex flex-col items-center justify-center min-h-screen gap-4">
                    <p className="text-[#ff0000]  font-medium">Waiting for verification</p>
                </div>
            )}
        </div>
    );
}

export default AuthenticationLayout;