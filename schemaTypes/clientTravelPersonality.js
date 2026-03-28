export default {
    name: 'clientTravelPersonality',
    title: 'Client Travel Personality',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'clientName',
        title: 'Client Name',
        type: 'string',
      },
      {
        name: 'tripType',
        title: 'Trip Type',
        type: 'string',
      },
      {
        name: 'originCity',
        title: 'Origin City',
        type: 'string',
      },
      {
        name: 'tripLengthDays',
        title: 'Trip Length Days',
        type: 'number',
      },
      {
        name: 'travellerCount',
        title: 'Traveller Count',
        type: 'number',
      },
      {
        name: 'budgetBand',
        title: 'Budget Band',
        type: 'string',
      },
      {
        name: 'notes',
        title: 'Planner Notes',
        type: 'text',
      },
      {
        name: 'autoSummary',
        title: 'Auto Summary',
        type: 'text',
      },
      {
        name: 'clientProfileSnapshot',
        title: 'Client Profile Snapshot',
        type: 'text',
        description: 'JSON snapshot of the full questionnaire response',
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: ['new', 'in_progress', 'recommended', 'itinerary_sent'],
        },
      },
      {
        name: 'submittedAt',
        title: 'Submitted At',
        type: 'datetime',
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'clientName',
      },
      prepare(selection) {
        const { title, subtitle } = selection
        return {
          title: title || 'Untitled Travel Personality',
          subtitle: subtitle || 'No client name',
        }
      },
    },
  }