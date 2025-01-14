// import { create } from "zustand";

// const initialUser = {};

// const useAuthStore = create((get, set) => ({
//     user: initialUser,
//     login: (userData) => {
//         set({ user: userData });
//     },
//     logout: () => {
//         set({ user: null });
//     },
//     updateUser: (updatedData) => {
//         set((state) => ({
//             user: state.user ? { ...state.user, ...updatedData } : null,
//         }));
//     },
//     getUser: () => {
//         return get().user;
//     }
// }));

// export default useAuthStore;

import { create } from "zustand";

const initialUser = null;

const useAuthStore = create((set, get) => ({
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