/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {
  // Insert values here
  countries: {
    A: [
      { name: 'Afghanistan', synonyms: false },
      { name: 'Albania', synonyms: false },
      { name: 'Algeria', synonyms: ['Sahel'] },
      { name: 'Andorra', synonyms: false },
      { name: 'Angola', synonyms: false },
      { name: 'Anguilla', synonyms: false },
      { name: 'Antarctica/British Antarctic Territory', synonyms: false },
      { name: 'Antigua and Barbuda', synonyms: false },
      { name: 'Argentina', synonyms: false },
      { name: 'Armenia', synonyms: false },
      { name: 'Aruba', synonyms: false },
      { name: 'Australia', synonyms: false },
      { name: 'Austria', synonyms: false },
      { name: 'Azerbaijan', synonyms: false },
    ],
    B: [
      { name: 'Bahamas', synonyms: false },
      { name: 'Bahrain', synonyms: false },
      { name: 'Bangladesh', synonyms: false },
      { name: 'Barbados', synonyms: false },
      { name: 'Belarus', synonyms: false },
      { name: 'Belgium', synonyms: false },
      { name: 'Belize', synonyms: false },
      { name: 'Benin', synonyms: false },
      { name: 'Bermuda', synonyms: false },
      { name: 'Bhutan', synonyms: false },
      { name: 'Bolivia', synonyms: false },
      { name: 'Bonaire/St Eustatius/Saba', synonyms: false },
      { name: 'Bosnia and Herzegovina', synonyms: false },
      { name: 'Botswana', synonyms: false },
      { name: 'Brazil', synonyms: false },
      { name: 'British Indian Ocean Territory', synonyms: false },
      { name: 'British Virgin Islands', synonyms: false },
      { name: 'Brunei', synonyms: ['Borneo'] },
      { name: 'Bulgaria', synonyms: false },
      { name: 'Burkina Faso', synonyms: ['Sahel'] },
      { name: 'Burundi', synonyms: false },
    ],
    C: [
      { name: 'Cambodia', synonyms: false },
      { name: 'Cameroon', synonyms: ['Sahel'] },
      { name: 'Canada', synonyms: ['arctic'] },
      { name: 'Cape Verde', synonyms: false },
      { name: 'Cayman Islands', synonyms: false },
      { name: 'Central African Republic', synonyms: false },
      { name: 'Chad', synonyms: ['Sahel'] },
      { name: 'Chile', synonyms: false },
      { name: 'China', synonyms: false },
      { name: 'Colombia', synonyms: false },
      { name: 'Comoros', synonyms: false },
      { name: 'Congo', synonyms: false },
      { name: 'Cook Islands, Tokelau and Niue', synonyms: false },
      { name: 'Costa Rica', synonyms: false },
      {
        name: "Côte d'Ivoire",
        synonyms: ['Ivory Coast', "Cote d'Ivoire", 'Cote dIvoire'],
      },
      { name: 'Croatia', synonyms: false },
      { name: 'Cuba', synonyms: false },
      { name: 'Curaçao', synonyms: ['Curacao'] },
      { name: 'Cyprus', synonyms: false },
      { name: 'Czech Republic', synonyms: false },
    ],
    D: [
      { name: 'Democratic Republic of the Congo', synonyms: false },
      {
        name: 'Denmark',
        synonyms: ['arctic', 'Faroe Islands', 'Faroes', 'Copenhagen'],
      },
      { name: 'Djibouti', synonyms: false },
      { name: 'Dominica', synonyms: false },
      { name: 'Dominican Republic', synonyms: false },
    ],
    E: [
      { name: 'Ecuador', synonyms: false },
      { name: 'Egypt', synonyms: false },
      { name: 'El Salvador', synonyms: false },
      { name: 'Equatorial Guinea', synonyms: false },
      { name: 'Eritrea', synonyms: ['Sahel'] },
      { name: 'Estonia', synonyms: false },
      { name: 'Eswatini', synonyms: ['Swaziland'] },
      { name: 'Ethiopia', synonyms: false },
    ],
    F: [
      { name: 'Falkland Islands', synonyms: false },
      { name: 'Fiji', synonyms: false },
      { name: 'Finland', synonyms: ['arctic'] },
      { name: 'France', synonyms: ['Paris', 'Corsica'] },
      { name: 'French Guiana', synonyms: false },
      { name: 'French Polynesia', synonyms: false },
    ],
    G: [
      { name: 'Gabon', synonyms: false },
      { name: 'The Gambia', synonyms: ['Sahel'] },
      { name: 'Georgia', synonyms: false },
      { name: 'Germany', synonyms: false },
      { name: 'Ghana', synonyms: false },
      { name: 'Gibraltar', synonyms: false },
      {
        name: 'Greece',
        synonyms: [
          'Crete',
          'Heraklion',
          'Skiathos',
          'Lesbos',
          'Mykonos',
          'Santorini',
          'Rhodes',
          'Kos',
        ],
      },
      { name: 'Grenada', synonyms: false },
      { name: 'Guadeloupe', synonyms: false },
      { name: 'Guatemala', synonyms: false },
      { name: 'Guinea', synonyms: false },
      { name: 'Guinea-Bissau', synonyms: false },
      { name: 'Guyana', synonyms: false },
    ],
    H: [
      { name: 'Haiti', synonyms: false },
      { name: 'Honduras', synonyms: false },
      { name: 'Hong Kong', synonyms: false },
      { name: 'Hungary', synonyms: false },
    ],
    I: [
      { name: 'Iceland', synonyms: ['arctic'] },
      { name: 'India', synonyms: false },
      { name: 'Indonesia', synonyms: ['Borneo', 'Bali'] },
      { name: 'Iran', synonyms: false },
      { name: 'Iraq', synonyms: false },
      { name: 'Ireland', synonyms: false },
      { name: 'Israel', synonyms: false },
      {
        name: 'Italy',
        synonyms: ['Rome', 'Venice', 'Milan', 'Sicily', 'Sardinia'],
      },
    ],
    J: [
      { name: 'Jamaica', synonyms: false },
      { name: 'Japan', synonyms: false },
      { name: 'Jordan', synonyms: false },
    ],
    K: [
      { name: 'Kazakhstan', synonyms: false },
      { name: 'Kenya', synonyms: false },
      { name: 'Kiribati', synonyms: false },
      { name: 'Kosovo', synonyms: false },
      { name: 'Kuwait', synonyms: false },
      { name: 'Kyrgyzstan', synonyms: false },
    ],
    L: [
      { name: 'Laos', synonyms: false },
      { name: 'Latvia', synonyms: false },
      { name: 'Lebanon', synonyms: false },
      { name: 'Lesotho', synonyms: false },
      { name: 'Liberia', synonyms: false },
      { name: 'Libya', synonyms: ['Sahel'] },
      { name: 'Liechtenstein', synonyms: false },
      { name: 'Lithuania', synonyms: false },
      { name: 'Luxembourg', synonyms: false },
    ],
    M: [
      { name: 'Macao', synonyms: false },
      { name: 'Madagascar', synonyms: false },
      { name: 'Malawi', synonyms: false },
      { name: 'Malaysia', synonyms: ['Borneo'] },
      { name: 'Maldives', synonyms: false },
      { name: 'Mali', synonyms: ['Sahel'] },
      { name: 'Malta', synonyms: false },
      { name: 'Marshall Islands', synonyms: false },
      { name: 'Martinique', synonyms: false },
      { name: 'Mauritania', synonyms: ['Sahel'] },
      { name: 'Mauritius', synonyms: false },
      { name: 'Mayotte', synonyms: false },
      { name: 'Mexico', synonyms: false },
      { name: 'Micronesia', synonyms: false },
      { name: 'Moldova', synonyms: false },
      { name: 'Monaco', synonyms: false },
      { name: 'Mongolia', synonyms: false },
      { name: 'Montenegro', synonyms: false },
      { name: 'Montserrat', synonyms: false },
      { name: 'Morocco', synonyms: ['Sahel'] },
      { name: 'Mozambique', synonyms: false },
      { name: 'Myanmar (Burma)', synonyms: ['Burma'] },
    ],
    N: [
      { name: 'Namibia', synonyms: false },
      { name: 'Nauru', synonyms: false },
      { name: 'Nepal', synonyms: false },
      { name: 'Netherlands', synonyms: ['Holland', 'Amsterdam'] },
      { name: 'New Caledonia', synonyms: false },
      { name: 'New Zealand', synonyms: ['Cook Islands'] },
      { name: 'Nicaragua', synonyms: false },
      { name: 'Niger', synonyms: ['Sahel'] },
      { name: 'Nigeria', synonyms: ['Sahel'] },
      { name: 'North Korea', synonyms: false },
      { name: 'North Macedonia', synonyms: false },
      { name: 'Norway', synonyms: ['arctic'] },
    ],
    O: [{ name: 'Oman', synonyms: false }],
    P: [
      { name: 'Pakistan', synonyms: false },
      { name: 'Palau', synonyms: false },
      { name: 'The Occupied Palestinian Territories', synonyms: false },
      { name: 'Panama', synonyms: false },
      { name: 'Papua New Guinea', synonyms: ['PNG'] },
      { name: 'Paraguay', synonyms: false },
      { name: 'Peru', synonyms: false },
      { name: 'Philippines', synonyms: false },
      { name: 'Pitcairn Island', synonyms: false },
      { name: 'Poland', synonyms: false },
      { name: 'Portugal', synonyms: ['Madeira', 'Azores'] },
    ],
    Q: [{ name: 'Qatar', synonyms: false }],
    R: [
      { name: 'Réunion', synonyms: ['Reunion'] },
      { name: 'Romania', synonyms: false },
      { name: 'Russia', synonyms: ['arctic'] },
      { name: 'Rwanda', synonyms: false },
    ],
    S: [
      { name: 'Samoa', synonyms: false },
      { name: 'San Marino', synonyms: false },
      {
        name: 'São Tomé and Principe',
        synonyms: ['Sao Tome and Principe', 'Sao Tome & Principe'],
      },
      { name: 'Saudi Arabia', synonyms: false },
      { name: 'Senegal', synonyms: ['Sahel'] },
      { name: 'Serbia', synonyms: false },
      { name: 'Seychelles', synonyms: false },
      { name: 'Sierra Leone', synonyms: false },
      { name: 'Singapore', synonyms: false },
      { name: 'Slovakia', synonyms: false },
      { name: 'Slovenia', synonyms: false },
      { name: 'Solomon Islands', synonyms: false },
      { name: 'Somalia', synonyms: false },
      { name: 'South Africa', synonyms: false },
      { name: 'South Georgia and the South Sandwich Islands', synonyms: false },
      { name: 'South Korea', synonyms: false },
      { name: 'South Sudan', synonyms: ['Sahel'] },
      {
        name: 'Spain',
        synonyms: [
          'Ibiza',
          'Majorca',
          'Mallorca',
          'Menorca',
          'Minorca',
          'Lanzarote',
          'Barcelona',
          'Benidorm',
          'Tenerife',
          'Canary Islands',
          'Canaries',
          'Gran Canaria',
          'Fuerteventura',
        ],
      },
      { name: 'Sri Lanka', synonyms: false },
      { name: 'St Helena, Ascension and Tristan da Cunha', synonyms: false },
      { name: 'St Kitts and Nevis', synonyms: false },
      { name: 'St Lucia', synonyms: false },
      { name: 'St Maarten', synonyms: ['Sint Maarten', 'Saint Maarten'] },
      {
        name: 'St Martin and St Barthélemy',
        synonyms: ['St Barts', 'St Barthelemy', 'Saint Martin', 'Saint Barts'],
      },
      { name: 'St Pierre & Miquelon', synonyms: false },
      { name: 'St Vincent and the Grenadines', synonyms: false },
      { name: 'Sudan', synonyms: ['Sahel'] },
      { name: 'Suriname', synonyms: false },
      { name: 'Sweden', synonyms: ['Arctic', 'Stockholm', 'Gothenburg'] },
      { name: 'Switzerland', synonyms: false },
      { name: 'Syria', synonyms: false },
    ],
    T: [
      { name: 'Taiwan', synonyms: false },
      { name: 'Tajikistan', synonyms: false },
      { name: 'Tanzania', synonyms: false },
      { name: 'Thailand', synonyms: false },
      { name: 'Timor-Leste', synonyms: ['East Timor'] },
      { name: 'Togo', synonyms: false },
      { name: 'Tonga', synonyms: false },
      { name: 'Trinidad and Tobago', synonyms: false },
      { name: 'Tunisia', synonyms: false },
      { name: 'Turkey', synonyms: false },
      { name: 'Turkmenistan', synonyms: false },
      { name: 'Turks and Caicos Islands', synonyms: false },
      { name: 'Tuvalu', synonyms: false },
    ],
    U: [
      {
        name: 'United Kingdom',
        synonyms: [
          'England',
          'Britain',
          'Scotland',
          'Wales',
          'UK',
          'Northern Ireland',
        ],
      },
      {
        name: 'USA',
        synonyms: [
          'United States',
          'America',
          'Arctic',
          'Puerto Rico',
          'US Virgin Islands',
          'Florida',
          'Orlando',
          'American Samoa',
          'Guam',
          'Hawaii',
        ],
      },
      { name: 'Uganda', synonyms: false },
      { name: 'Ukraine', synonyms: false },
      { name: 'United Arab Emirates', synonyms: ['UAE', 'Dubai', 'Abu Dhabi'] },
      { name: 'Uruguay', synonyms: false },
      { name: 'Uzbekistan', synonyms: false },
    ],
    V: [
      { name: 'Vanuatu', synonyms: false },
      { name: 'Venezuela', synonyms: false },
      { name: 'Vietnam', synonyms: false },
    ],
    W: [
      { name: 'Wallis and Futuna', synonyms: false },
      { name: 'Western Sahara', synonyms: ['Sahel'] },
    ],
    Y: [{ name: 'Yemen', synonyms: false }],
    Z: [
      { name: 'Zambia', synonyms: false },
      { name: 'Zimbabwe', synonyms: false },
    ],
  },
}
