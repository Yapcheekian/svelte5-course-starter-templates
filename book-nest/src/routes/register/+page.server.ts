import { fail, redirect } from "@sveltejs/kit";

interface ReturnObject {
    success: boolean;
    errors: string[];
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

export const actions = {
    default: async ({ request, locals: { supabase } }) => {
        const formData = await request.formData();

        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const passwordConfirmation = formData.get("passwordConfirmation") as string;

        const returnObject: ReturnObject = {
            success: true,
            errors: [],
            name,
            email,
            password,
            passwordConfirmation,
        };

        if (name.length < 3) {
            returnObject.errors.push("The name is too short, it must be at least 3 characters long");
        }

        if (!email.length) {
            returnObject.errors.push("The email is required");
        }

        if (!password.length) {
            returnObject.errors.push("The password is required");
        }

        if (password !== passwordConfirmation) {
            returnObject.errors.push("The passwords do not match");
        }

        if (returnObject.errors.length) {
            returnObject.success = false;
            return returnObject;
        }

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        console.log(data, error);

        if (error || !data.user) {
            returnObject.success = false;
            return fail(400, returnObject as any);
        }


        redirect(303, "/private/dashboard");
    }
}
