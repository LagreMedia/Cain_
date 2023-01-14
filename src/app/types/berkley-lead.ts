
const firstname = 'lead[firstname]'; // min 2 characters
const lastname = 'lead[lastname]'; // min 2 characters
const address = 'lead_address[address]';
const address2 = 'lead_address[address2]';  // apt/suite/floor can't be same as address
const city = 'lead_address[city]';
const state = 'lead_address[state]'; // Please send the states abbreviation, AA, AE, AP, PR all rejected
const zip = 'lead_address[zip]'; // 5 digits
const email = 'lead[email]'; // validate email domain
const phone1 = 'lead[phone1]';
const age = 'lead[age]'; // max age 40
const gender = 'lead[gender]';
const grad_year = 'lead_education[grad_year]'; // 1990 - 2022, 2000 min for Campus ONlY and Online ONLY
const military_type = 'lead_background[military_type]';
const education_level_id = 'lead_education[education_level_id]'; // min education rules
const program_id = 'lead_education[program_id]';
const campus_id = 'lead_education[campus_id]';
const start_date = 'lead_education[start_date]';
const level_interest = 'lead_education[level_interest]';
const tcpa_consent = 'lead_consent[tcpa_consent]';
const service_leadid = 'lead[service_leadid]';
const ip = 'lead[ip]';
const signup_url = 'lead[signup_url]';
const consent_url = 'lead[consent_url]';
const test = 'lead[test]';
const media_type = 'lead[media_type]';

export const CAMPAIGN_CODE = 'eWFFId4NL_S8ApMgfp1dUw';

enum GenderList {
    Male = 'M',
    Female = 'F'
}

export type EducationValues = '1211' | '1212' | '1213' | '1214' | '1216' | '1217' | '1218' | '1219' | '1220' | '1221';

export interface BerkleyLead {
    campaign_code: 'eWFFId4NL_S8ApMgfp1dUw'
    [firstname]: string
    [lastname]: string
    [address]: string
    [address2]?: string
    [city]: string
    [state]: string
    [zip]: string
    [email]: string
    [phone1]: string
    [age]: number
    [gender]: GenderList
    [grad_year]: number
    [military_type]: string
    [education_level_id]: EducationValues
    [program_id]: number
    [campus_id]: number
    [start_date]: string
    [level_interest]?: number
    [tcpa_consent]: boolean
    [service_leadid]: string
    [ip]: string
    subid?: string
    subid2?: string
    subid3?: string
    subid4?: string
    agentid?: string
    [signup_url]: string
    [consent_url]?: string
    [test]: boolean
    [media_type]: string
    ping_id?: string
}
