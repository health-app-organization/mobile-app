import { create } from "zustand";

const initialUser = null;

interface AuthState {
    user: UserProps | null;
    session: SessionProps | null;
    mounting: boolean;
    login: (userData: UserProps, sessionData: SessionProps) => void;
    logout: () => void;
    updateUser: (updatedData: Partial<UserProps>) => void;
    getUser: () => UserProps | null;
    setMounting: (mounting: boolean) => void;
}

const useAuthStore = create<AuthState>((set, get) => ({
    user: initialUser,
    session: null,
    mounting: true,
    login: (userData, sessionData) => {
        set({ user: userData, session: sessionData });
    },
    logout: () => {
        set({ user: null, session: null });
    },
    updateUser: (updatedData) => {
        set((state) => ({
            user: state.user ? { ...state.user, ...updatedData } : null,
        }));
    },
    getUser: () => {
        return get().user;
    },
    setMounting: (mounting) => {
        set({ mounting });
    },
}));

export default useAuthStore;
