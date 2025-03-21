import { create } from "zustand";

const useAuthStore = create((set) => ({
  email: "",
  updateEmail: (email) => set(() => ({ email: email })),
}));

export default useAuthStore;
