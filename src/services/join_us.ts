import { supabase } from "../lib/supaBaseClient";



export const joinUs = {

// @ts-ignore// Function to upload an image to Supabase storage
    uploadImg: async (profileImage) => {
        if (!profileImage) return null;

        const fileName = `${Date.now()}-${profileImage.name}`;
        const filePath = `uploads/${fileName}`;

        const {data: uploadData, error: uploadError} = await supabase.storage
        .from('profile-pictures')
        .upload(filePath, profileImage);

        if (uploadError) {
            console.log("upload failed", uploadError.message)
            return null
        }


        const {data: urlData} = supabase.storage
        .from('profile-pictures')
        .getPublicUrl(filePath)
        console.log('url:', urlData.publicUrl)

        return urlData.publicUrl;
    },

// @ts-ignore// Function to upload join_us form to Supabase table
    joinUsForm: async (formData) => {
        console.log("Form data:", formData);
        return supabase.from('join_team')
        .insert([{
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            role: formData.role,
            location: formData.location,
            linkedin: formData.linkedin,
            twitter: formData.twitter,
            github: formData.github,
            instagram: formData.instagram,
            shortBio: formData.shortBio,
            education1: formData.education1,
            education2: formData.education2,
            profileImage: formData.profileImage,
            created_at: new Date(),
        }])
    },
    
}
