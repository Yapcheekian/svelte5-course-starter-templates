import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
    projectId: "th8s90hb",
    dataset: "production",
    apiVersion: "2024-09-29",
    useCdn: true,
};

export const client = createClient(config);

const sanityClient = createClient(config);
export default sanityClient;

export function processProjectEntry(rawProject: SanityProject) {
    const builder = imageUrlBuilder(client);
    const projectImageUrl = builder.image(rawProject.image).url();

    const processedProject: ProcessedProject = {
        name: rawProject.name,
        company: rawProject.company,
        dateAccomplished: rawProject.dateAccomplished,
        stack: rawProject.stack,
        slug: rawProject.slug,
        projectImageUrl,
        content: rawProject.contect.map(processProjectContent),
    };

    return processedProject;
}

function processProjectContent(content: RawTextContent | RawImageContent) {
    if (content._type === 'block') {
        const processedTextContent: ProcessedTextContent = {
            type: 'text',
            style: content.style,
            textToRender: content.children.map((child) => child.text).join('\n') || '',
        };
        return processedTextContent;
    } else {
        const builder = imageUrlBuilder(client);
        const url = builder.image(content).url();
        return {
            type: 'image',
            url,
        } as ProcessedImageContent;
    }
}
