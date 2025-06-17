
import { defineField, defineType } from "sanity";

export const skill = defineType({
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        defineField({
            name: 'skillslist',
            title: 'Skills List',
            type: 'array',
            of: [{
                type: 'object', fields: [
                    defineField({
                        name: 'name',
                        title: 'Skill Name',
                        type: 'string',
                        validation: (rule) => rule.required(),
                    }),
                    defineField({
                        name: 'iconClass',
                        title: 'Icon Class',
                        type: 'string',
                        validation: (rule) => rule.required(),
                    }),
                ]
            }],
            options: {
                layout: 'tags',
            },
        }),
    ],
})
