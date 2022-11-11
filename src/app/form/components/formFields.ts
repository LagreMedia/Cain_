
export const FORM_FIELDS = {
    graduationYear: () => {
        const years = [];
        const currentYear = new Date().getFullYear();
        for (let i = currentYear; i >= 1990; i--) {
            years.push(i);
        }
        return years;
    },
    age: () => {
        const age = [];
        const maxAge = 40;
        for (let i = 17; i <= maxAge; i++) {
            age.push(i);
        }
        return age;
    },
    motivationLevel: [
        { value: '1', title: '1 - Not very motivated' },
        { value: '2', title: '2' },
        { value: '3', title: '3' },
        { value: '4', title: '4' },
        { value: '5', title: '5' },
        { value: '6', title: '6' },
        { value: '7', title: '7' },
        { value: '8', title: '8' },
        { value: '9', title: '9' },
        { value: '10', title: '10 - Very motivated' },
    ],
    militaryAffiliation: [
        'No Military Affiliation',
        'Army (Active)',
        'Air Force (Active)',
        'Navy (Active)',
        'Marine Corp (Active)',
        'Coast Guard (Active)',
        'Reserve Components',
        'National Guard',
        'Veteran (Not Active)',
        'Spouse/Dependent'
    ],
    levelOfEducation: [
        'HS Senior',
        'GED',
        'High School',
        'Some college 0-23 credits',
        'Some college 24-34 credits',
        'Some college 35-59 credits',
        'Some college 60-120 credits',
        'Associates',
        'Bachelors',
        'Masters'
    ],
    programOfInterest: [
        { value: '108982', title: 'Certificate - Certificate in Practical Nurse' },
        { value: '108976', title: 'Certificate - Medical Assistant' },
        { value: '108977', title: 'Certificate - Medical Insurance, Billing, and Coding' },
        { value: '108978', title: 'Certificate - Patient Care Technician' },
        { value: '129730', title: 'Diploma - Certificate in Interior Design' },
        { value: '108947', title: 'A.A.S. - Bus Admin-Accounting' },
        { value: '108948', title: 'A.A.S. - Bus Admin-Management' },
        { value: '108950', title: 'A.A.S. - Financial Services' },
        { value: '108953', title: 'A.A.S. - Health Services Administration - Medical Insurance, Billing, and Coding' },
        { value: '108954', title: 'A.A.S. - Information Technology Management' },
        { value: '108955', title: 'A.A.S. - Interior Design' },
        { value: '127783', title: 'A.A.S. - International Business' },
        { value: '108957', title: 'A.A.S. - Justice Studies - Criminal Justice' },
        { value: '108958', title: 'A.A.S. - Legal Studies' },
        { value: '108959', title: 'A.A.S. - Marketing Communications' },
        { value: '108960', title: 'A.A.S. - Medical Assistant' },
        { value: '108961', title: 'A.A.S. - Surgical Technology' },
        { value: '108962', title: 'A.S. - International Business' },
        { value: '108963', title: 'B.B.A. - Accounting' },
        { value: '108964', title: 'B.B.A. - Bus Admin-Management' },
        { value: '108965', title: 'B.B.A. - Fashion Merchandising & Management' },
        { value: '108967', title: 'B.B.A. - General Business' },
        { value: '108968', title: 'B.B.A. - Health Services Management' },
        { value: '108969', title: 'B.B.A. - International Business' },
        { value: '108970', title: 'B.B.A. - Marketing Communications' },
        { value: '127785', title: 'B.F.A. - 3D Visualization' },
        { value: '108984', title: 'B.F.A. - BFA, Graphic Design' },
        { value: '108972', title: 'B.F.A. - Interior Design' },
        { value: '108973', title: 'B.S. - Information Technology Management' },
        { value: '108974', title: 'B.S. - Justice Studies - Criminal Justice' },
        { value: '108975', title: 'B.S. - Legal Studies' },
    ],
    campusPreference: [
        { value: '10580', title: 'Newark, NJ' },
        { value: '10578', title: 'New York City, NY' },
        { value: '10577', title: 'Woodland Par, NJ' },
        { value: '10579', title: 'Online' },
    ],
    startDate: [
        'Immediately',
        '1-3 Months',
        '4-6 Months',
        '7-12 Months',
        'More than 1 Year',
        'Not Sure'
    ],
    states: [
        { value: 'AL', title: 'Alabama' },
        { value: 'AK', title: 'Alaska' },
        { value: 'AZ', title: 'Arizona' },
        { value: 'AR', title: 'Arkansas' },
        { value: 'CA', title: 'California' },
        { value: 'CO', title: 'Colorado' },
        { value: 'CT', title: 'Connecticut' },
        { value: 'DE', title: 'Delaware' },
        { value: 'FL', title: 'Florida' },
        { value: 'GA', title: 'Georgia' },
        { value: 'HI', title: 'Hawaii' },
        { value: 'ID', title: 'Idaho' },
        { value: 'IL', title: 'Illinois' },
        { value: 'IN', title: 'Indiana' },
        { value: 'IA', title: 'Iowa' },
        { value: 'KS', title: 'Kansas' },
        { value: 'KY', title: 'Kentucky' },
        { value: 'LA', title: 'Louisiana' },
        { value: 'ME', title: 'Maine' },
        { value: 'MD', title: 'Maryland' },
        { value: 'MA', title: 'Massachusetts' },
        { value: 'MI', title: 'Michigan' },
        { value: 'MN', title: 'Minnesota' },
        { value: 'MS', title: 'Mississippi' },
        { value: 'MO', title: 'Missouri' },
        { value: 'MT', title: 'Montana' },
        { value: 'NE', title: 'Nebraska' },
        { value: 'NV', title: 'Nevada' },
        { value: 'NH', title: 'New Hampshire' },
        { value: 'NJ', title: 'New Jersey' },
        { value: 'NM', title: 'New Mexico' },
        { value: 'NY', title: 'New York' },
        { value: 'NC', title: 'North Carolina' },
        { value: 'ND', title: 'North Dakota' },
        { value: 'OH', title: 'Ohio' },
        { value: 'OK', title: 'Oklahoma' },
        { value: 'OR', title: 'Oregon' },
        { value: 'PA', title: 'Pennsylvania' },
        { value: 'PR', title: 'Puerto Rico' },
        { value: 'RI', title: 'Rhode Island' },
        { value: 'SC', title: 'South Carolina' },
        { value: 'SD', title: 'South Dakota' },
        { value: 'TN', title: 'Tennessee' },
        { value: 'TX', title: 'Texas' },
        { value: 'AA', title: 'U.S. Armed Forces - Americas' },
        { value: 'AE', title: 'U.S. Armed Forces - Europe' },
        { value: 'AP', title: 'U.S. Armed Forces - Pacific' },
        { value: 'UT', title: 'Utah' },
        { value: 'VT', title: 'Vermont' },
        { value: 'VA', title: 'Virginia' },
        { value: 'WA', title: 'Washington' },
        { value: 'DC', title: 'Washington DC' },
        { value: 'WV', title: 'West Virginia' },
        { value: 'WI', title: 'Wisconsin' },
        { value: 'WY', title: 'Wyoming' },
    ]
};