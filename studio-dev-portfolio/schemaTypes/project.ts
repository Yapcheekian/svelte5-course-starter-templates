import { defineField, defineType } from "sanity";

export const project = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Project Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug - Ending of URL to see the project work',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Project Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'dateAccomplished',
            title: 'When did you do this project?',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM',
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'contect',
            title: 'Project Content',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'stack',
            title: 'Tech Stack',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        }),
    ]
});
