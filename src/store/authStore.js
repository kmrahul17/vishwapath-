import { create } from 'zustand';
import { supabase } from '../lib/supabase';
export const useAuthStore = create((set) => ({
    user: null,
    loading: true,
    setUser: (user) => set({ user }),
    signIn: async (email, password) => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error)
            throw error;
    },
    signUp: async (email, password) => {
        const { error } = await supabase.auth.signUp({
            email,
            password,
        });
        if (error)
            throw error;
    },
    signOut: async () => {
        const { error } = await supabase.auth.signOut();
        if (error)
            throw error;
        set({ user: null });
    },
}));
