import sanityClient, { processProjectEntry } from "$lib/utils/sanity";
import type { Load } from "@sveltejs/kit";

export const load: Load = async () => {
    const workExperiences: SanityWorkExperience[] = await sanityClient.fetch(`*[_type == "devExperience"] | order(startDate desc)`);

    const rawProjects: SanityProject[] = await sanityClient.fetch(`*[_type == "project"] | order(dateAccomplished desc)`);

    const projects = rawProjects.map(processProjectEntry);

    const skills: Skill[] = await sanityClient.fetch(`*[_type == "skills"][0].skillslist`);

    return {
        workExperiences,
        projects,
        skills,
    }
};
