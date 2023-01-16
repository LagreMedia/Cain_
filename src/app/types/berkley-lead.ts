
export const firstname = 'lead[firstname]'; // min 2 characters
export const lastname = 'lead[lastname]'; // min 2 characters
export const address = 'lead_address[address]';
export const address2 = 'lead_address[address2]';  // apt/suite/floor can't be same as address
export const city = 'lead_address[city]';
export const state = 'lead_address[state]'; // Please send the states abbreviation, AA, AE, AP, PR all rejected
export const zip = 'lead_address[zip]'; // 5 digits
export const email = 'lead[email]'; // validate email domain
export const phone1 = 'lead[phone1]';
export const age = 'lead[age]'; // max age 40
export const gender = 'lead[gender]';
export const grad_year = 'lead_education[grad_year]'; // 1990 - 2022, 2000 min for Campus ONlY and Online ONLY
export const military_type = 'lead_background[military_type]';
export const education_level_id = 'lead_education[education_level_id]'; // min education rules
export const program_id = 'lead_education[program_id]';
export const campus_id = 'lead_education[campus_id]';
export const start_date = 'lead_education[start_date]';
export const level_interest = 'lead_education[level_interest]';
export const tcpa_consent = 'lead_consent[tcpa_consent]';
export const service_leadid = 'lead[service_leadid]';
export const ip = 'lead[ip]';
export const signup_url = 'lead[signup_url]';
export const consent_url = 'lead[consent_url]';
export const leadTest = 'lead[test]';
export const media_type = 'lead[media_type]';

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
    [leadTest]: boolean
    [media_type]: string
    ping_id?: string
}
