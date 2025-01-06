import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: 'service',
      title: 'Service',
      type: 'document',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'name',
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'duration',
          title: 'Duration (minutes)',
          type: 'number',
          validation: (Rule) => Rule.required().min(0),
        },
        {
          name: 'price',
          title: 'Price',
          type: 'number',
          validation: (Rule) => Rule.required().min(0),
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'staff',
      title: 'Staff',
      type: 'document',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'role',
          title: 'Role',
          type: 'string',
        },
        {
          name: 'bio',
          title: 'Bio',
          type: 'text',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'services',
          title: 'Services',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'service' }],
            },
          ],
        },
        {
          name: 'schedule',
          title: 'Working Schedule',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'day',
                  title: 'Day',
                  type: 'string',
                  options: {
                    list: [
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                      'Saturday',
                      'Sunday',
                    ],
                  },
                },
                {
                  name: 'startTime',
                  title: 'Start Time',
                  type: 'string',
                },
                {
                  name: 'endTime',
                  title: 'End Time',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'appointment',
      title: 'Appointment',
      type: 'document',
      fields: [
        {
          name: 'service',
          title: 'Service',
          type: 'reference',
          to: [{ type: 'service' }],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'staff',
          title: 'Staff Member',
          type: 'reference',
          to: [{ type: 'staff' }],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'date',
          title: 'Date',
          type: 'date',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'time',
          title: 'Time',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'customerName',
          title: 'Customer Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'customerEmail',
          title: 'Customer Email',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'customerPhone',
          title: 'Customer Phone',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'status',
          title: 'Status',
          type: 'string',
          options: {
            list: ['pending', 'confirmed', 'cancelled'],
          },
          initialValue: 'pending',
        },
      ],
    },
  ],
}