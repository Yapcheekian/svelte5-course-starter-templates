import sanityClient, { processProjectEntry } from "$lib/utils/sanity";
import { error, type Load } from "@sveltejs/kit";

export const load: Load = async ({ params }) => {
    const { slug } = params;

    const rawProject: SanityProject[] = await sanityClient.fetch(`*[_type == "project" && slug == $slug]`, { slug });

    if (rawProject.length !== 1) {
        console.error(`Project with slug ${slug} not found`);
        throw error(404, 'Project not found');
    }

    const project = processProjectEntry(rawProject[0]);

    return {
        project,
    }
}
