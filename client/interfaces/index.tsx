
interface AvatarProps {
 src: string,
 className: string,
 alt: string,
 size: string,
 border: number
}

interface LanguageStruct {
 label: string,
 value: string
};

interface UserDetails {
 citizenship: string,
 name: string,
 dob: string,
 profileSrc: string
 education: string,
 district: string,
 address: string,
 contact: string,
 email: string
}

interface CandidateDetails extends UserDetails {
 party: string,
 votes: number
}

interface VoterDetails extends UserDetails { };

interface LiveCounterCardStruct {
 type: string,
 data: Array<CandidateDetails>
}

interface CandidateCardStruct {
 details: CandidateDetails,
 border: string,
 ishighlighted: boolean
}

interface UserCardStruct {
 details: VoterDetails | CandidateDetails,
 type: string
}

export type {
 AvatarProps,
 LanguageStruct,
 LiveCounterCardStruct,
 CandidateCardStruct,
 UserCardStruct
};