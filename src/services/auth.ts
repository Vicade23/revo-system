import { supabase } from "../lib/supaBaseClient";
import { loginType, signUpProfile, signUpType } from "../model/authModel/authModel";

export const Auth = {
    
    signUp: async (formData: signUpProfile) => {
            
        return supabase.auth.signUp({
            email: formData?.email,
            password: formData?.password,
        })
    },

    // @ts-ignore
    authProfile: async (profile) => {

        console.log(profile)
        return supabase.from('signup_profile')
        .insert([profile,])

    },

    // @ts-ignore
    login: async (data) => {
        return await supabase.auth.signInWithPassword({
            email: data?.email,
            password: data?.password,
        })
    },
    
    getUser: async () => {
        const userResponse = await supabase.auth.getUser();
        console.log(userResponse.data.user?.id)
        console.log(userResponse)
        const req = await supabase
        .from('signup_profile')
        .select('*')
        .eq('id', `${userResponse.data.user?.id}`)
        .single()
        return req;
    }
}

function authProfile(arg0: { firstName: string; lastName: string; email: string; company: string; agreeToTerms: boolean; subscribeNewsletter: boolean; created_at: Date; }) {
    throw new Error("Function not implemented.");
}
