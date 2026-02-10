import {create} from "zustand"
import { getUserById } from "@/actions/user"

type UserState = {
  user: any
  loading: boolean
  error: string | null
  fetchUser: () => Promise<void>
  clearUser: () => void
}

export const useUserStore = create<UserState>((set) => ({

    user: null,
    loading: false,
    error : null,

    fetchUser: async () => {
        try{
            set({loading:true , error:null})
            const res = await getUserById()
            set({ user: res.data, loading: false })
        }catch(err: any){
            set({ error: err.message, loading: false })
        }
    },
    clearUser: () => set({ user: null }),
}))