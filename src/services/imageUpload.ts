import { supabase } from "../lib/supaBaseClient";

// @ts-ignore
export const uploadImg = async (profileImage) => {
    const req = await supabase.storage
    .from('profile-pictures')
    .getPublicUrl(`uploads/${profileImage.name}`);

    // console.log(req);
    return req;
}

