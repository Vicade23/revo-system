import { supabase } from "../lib/supaBaseClient";

export const Auth = {
    
    signUp: async () => {
        // return await supabase.auth.signUp({
        //     email: data?.email,
        //     password: data?.password,
        // })
    },

    // @ts-ignore
    authProfile: async (profile) => {

        try {
            // const jsonProfile: any = localStorage.getItem('authProfile')
            // const profile = JSON.parse(jsonProfile)?.access_token;
            console.log(profile)
            return await supabase.from('signup_profile')
            .insert([profile,]).then(() => { 
            // console.log(response)
        })
        
        } catch (error) {
            console.log(error)
        }

    },
    
    login: async () => {
        // return await supabase.auth.signInWithPassword({
        //     email: data?.email,
        //     password: data?.password,
        // })
    },
    
    getUserProfile: async () => {
        const userResponse = await supabase.auth.getUser();
        const req = await supabase
        .from('signup_profile')
        .select('*')
        .eq('id', `${userResponse.data.user?.id}`)
        .single()
        // console.log(req)
        // console.log(userResponse)
        return req
    },
}