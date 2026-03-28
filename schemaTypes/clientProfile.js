export default {
  name: 'clientProfile',
  title: 'Client Profile',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'fullName',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'nationality',
      title: 'Nationality',
      type: 'string',
    },
    {
      name: 'cityOfResidence',
      title: 'City of Residence',
      type: 'string',
    },
    {
      name: 'clientType',
      title: 'Client Type',
      type: 'string',
      options: {
        list: [
          { title: 'Individual', value: 'individual' },
          { title: 'Couple', value: 'couple' },
          { title: 'Family', value: 'family' },
          { title: 'Group', value: 'group' },
          { title: 'Corporate', value: 'corporate' },
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'travellerComposition',
      title: 'Traveller Composition',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'traveller',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Adult', value: 'adult' },
                  { title: 'Child', value: 'child' },
                  { title: 'Infant', value: 'infant' },
                ],
              },
            },
            { name: 'age', title: 'Age', type: 'number' },
          ],
        },
      ],
    },
    {
      name: 'relationshipManagerNotes',
      title: 'Relationship Manager Notes',
      type: 'text',
      rows: 5,
    },
    {
      name: 'preferenceProfile',
      title: 'Preference Profile',
      type: 'reference',
      to: [{ type: 'clientPreferenceProfile' }],
    },
    {
      name: 'constraintsProfile',
      title: 'Constraints Profile',
      type: 'reference',
      to: [{ type: 'clientConstraints' }],
    },
    {
      name: 'travelHistory',
      title: 'Travel History',
      type: 'reference',
      to: [{ type: 'clientTravelHistory' }],
    },
    {
      name: 'wishlist',
      title: 'Wishlist',
      type: 'reference',
      to: [{ type: 'clientWishlist' }],
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'active',
      options: {
        list: [
          { title: 'Lead', value: 'lead' },
          { title: 'Active', value: 'active' },
          { title: 'Repeat', value: 'repeat' },
          { title: 'Dormant', value: 'dormant' },
        ],
      },
    },

    /* ---------- Added for LOQE app flow ---------- */

    {
      name: 'tripType',
      title: 'Trip Type',
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
      name: 'originCity',
      title: 'Origin City',
      type: 'string',
    },
    {
      name: 'autoSummary',
      title: 'Auto Summary',
      type: 'text',
      rows: 4,
    },
    {
      name: 'travelSignalTags',
      title: 'Travel Signal Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'profilePayload',
      title: 'Profile Payload',
      type: 'object',
      fields: [
        { name: 'greetName', title: 'Greet Name', type: 'string' },
        { name: 'preferredPronouns', title: 'Preferred Pronouns', type: 'string' },
        { name: 'currentLocation', title: 'Current Location', type: 'string' },
        { name: 'bestWayToReach', title: 'Best Way To Reach', type: 'string' },
        { name: 'nextEscapeWindow', title: 'Next Escape Window', type: 'text' },
        { name: 'tinyHumansOrPets', title: 'Tiny Humans Or Pets', type: 'text' },

        { name: 'liveNow', title: 'Live Now', type: 'string' },
        { name: 'livingSituation', title: 'Living Situation', type: 'string' },
        { name: 'careerCurrentFocus', title: 'Career / Current Focus', type: 'text' },
        { name: 'typicalEscapeWindows', title: 'Typical Escape Windows', type: 'string' },
        { name: 'averageTripLengthPreference', title: 'Average Trip Length Preference', type: 'string' },
        { name: 'recentMajorLifeChanges', title: 'Recent Major Life Changes', type: 'text' },

        { name: 'travelEnergyDrink', title: 'Travel Energy Drink', type: 'string' },
        { name: 'wouldYouRatherOceanOrMountain', title: 'Ocean Or Mountain', type: 'string' },
        { name: 'wouldYouRatherExploreOrLounge', title: 'Explore Or Lounge', type: 'string' },
        { name: 'wouldYouRatherStreetFoodOrMichelin', title: 'Street Food Or Michelin', type: 'string' },
        { name: 'wouldYouRatherPlanOrFlow', title: 'Plan Or Flow', type: 'string' },
        { name: 'preferredClimate', title: 'Preferred Climate', type: 'string' },
        { name: 'idealTravelSoundtrack', title: 'Ideal Travel Soundtrack', type: 'text' },
        { name: 'holidayMovie', title: 'Holiday Movie', type: 'string' },
        { name: 'holidayMovieOther', title: 'Holiday Movie Other', type: 'string' },
        {
          name: 'travelExcitement',
          title: 'Travel Excitement',
          type: 'array',
          of: [{ type: 'string' }],
        },
        { name: 'tripVibeWords', title: 'Trip Vibe Words', type: 'text' },
        { name: 'travelSpiritAnimal', title: 'Travel Spirit Animal', type: 'string' },

        { name: 'accommodationMustHaves', title: 'Accommodation Must Haves', type: 'text' },
        { name: 'absoluteDealBreakers', title: 'Absolute Deal Breakers', type: 'text' },
        { name: 'preferredAirlinesLoyaltyPrograms', title: 'Preferred Airlines / Loyalty Programs', type: 'text' },
        { name: 'dietaryPreferencesRestrictions', title: 'Dietary Preferences Restrictions', type: 'text' },
        { name: 'healthMobilityConsiderations', title: 'Health Mobility Considerations', type: 'text' },

        { name: 'favoritePastDestinationsWhy', title: 'Favorite Past Destinations Why', type: 'text' },
        { name: 'wontReturnDestinationsWhy', title: 'Wont Return Destinations Why', type: 'text' },
        { name: 'mostMemorableExperiencesEver', title: 'Most Memorable Experiences Ever', type: 'text' },
        { name: 'repeatDestinationComfortZones', title: 'Repeat Destination Comfort Zones', type: 'text' },

        { name: 'top5BucketListDestinations', title: 'Top 5 Bucket List Destinations', type: 'text' },
        { name: 'dreamExperiences', title: 'Dream Experiences', type: 'text' },
        { name: 'specialEventsTravelFor', title: 'Special Events Travel For', type: 'text' },
        { name: 'surpriseTolerance', title: 'Surprise Tolerance', type: 'string' },

        { name: 'favoriteCuisinesDishes', title: 'Favorite Cuisines Dishes', type: 'text' },
        { name: 'preferredWineDrinkChoices', title: 'Preferred Wine Drink Choices', type: 'string' },
        { name: 'favoriteColourPaletteInInteriors', title: 'Favorite Colour Palette In Interiors', type: 'string' },
        { name: 'fashionStyleReference', title: 'Fashion Style Reference', type: 'text' },
        { name: 'hobbiesPassions', title: 'Hobbies Passions', type: 'text' },
        { name: 'musicPlaylistForTravels', title: 'Music Playlist For Travels', type: 'text' },

        {
          name: 'annualReviewLog',
          title: 'Annual Review Log',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'year', title: 'Year', type: 'string' },
                { name: 'majorLifeChanges', title: 'Major Life Changes', type: 'text' },
                { name: 'updatedTravelPreferences', title: 'Updated Travel Preferences', type: 'text' },
                { name: 'upcomingImportantDates', title: 'Upcoming Important Dates', type: 'text' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'clientType',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `Client Type: ${subtitle}` : 'Client Profile',
      }
    },
  },
}