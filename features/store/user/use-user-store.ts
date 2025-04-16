import { User } from "@/generated/prisma";
import { create } from "zustand"

interface UserStoreType {
    user: User | null,
    setUser: (user: User) => void;
    resetUser: () => void,
}



export const useUserStore = create<UserStoreType>((set, get) => ({
    user: null,
    setUser: (user) => {
        set({ user })
    },
    resetUser: () => {
        set({ user: null })
    }
}))