import { Trophy, Flag, Zap, MapPin, Calendar, Clock, Crown, Award, User, Target, Briefcase, Star, TrendingUp } from 'lucide-react'

export const BIO_DATA = {
    fullName: "Charles Marc Hervé Perceval Leclerc",
    dob: "16 October 1997",
    birthplace: "Monte Carlo, Monaco",
    height: "1.80m",
    weight: "69kg",
    team: "Scuderia Ferrari",
    number: "16",
    role: "Driver",
    chomic: "Il Predestinado",
    philosophy: "I will never give up. I will give everything until the last corner of the last lap."
}

export const CAREER_STATS = [
    { label: "Grand Prix Entered", value: "148", icon: Flag },
    { label: "Race Wins", value: "08", icon: Trophy },
    { label: "Podiums", value: "43", icon: Award },
    { label: "Pole Positions", value: "26", icon: Zap },
    { label: "Fastest Laps", value: "10", icon: Clock },
    { label: "Points", value: "1381", icon: TrendingUp },
]

export const TIMELINE = [
    {
        year: "2018",
        team: "Alfa Romeo Sauber",
        title: "The Debut",
        description: "Made Formula 1 debut. Scored points in Baku (P6), showing immediate potential.",
        icon: User
    },
    {
        year: "2019",
        team: "Scuderia Ferrari",
        title: "The Dream",
        description: "Promoted to Ferrari. Youngest ever Ferrari race winner (Spa). Won Monza in front of the Tifosi.",
        icon: Crown
    },
    {
        year: "2022",
        team: "Scuderia Ferrari",
        title: "The Title Fight",
        description: "Defined by the F1-75. 3 Wins, 9 Poles. Finished P2 in the Championship.",
        icon: Target
    },
    {
        year: "2024",
        team: "Scuderia Ferrari",
        title: "The Prince of Monaco",
        description: "Finally conquered the curse. Won the Monaco Grand Prix from Pole Position.",
        icon: Flag
    },
    {
        year: "2026",
        team: "Scuderia Ferrari HP",
        title: "The Future",
        description: "Driving the SF-26 Layout. Focusing on the World Championship title.",
        icon: Zap
    }
]

export const PARTNERS = [
    { name: "RICHARD MILLE", role: "Timepiece Partner" },
    { name: "GIORGIO ARMANI", role: "Fashion Partner" },
    { name: "RAY-BAN", role: "Eyewear Partner" },
    { name: "PUMA", role: "Technical Gear" },
    { name: "BANG & OLUFSEN", role: "Audio Partner" },
    { name: "VISTAJET", role: "Private Aviation" }
]

export const CONTACT_INFO = {
    management: "All Road Management",
    press: "Scuderia Ferrari Press Office",
    email: "press@charlesleclerc.com",
    socials: [
        { platform: "Instagram", handle: "@charles_leclerc" },
        { platform: "X", handle: "@Charles_Leclerc" },
        { platform: "YouTube", handle: "Charles Leclerc" }
    ]
}

export const NEXT_RACE = {
    gp: "FORMULA 1 GRAND PRIX DE MONACO 2026",
    circuit: "Circuit de Monaco",
    date: "24 MAY 2026",
    days: "14",
    hours: "08",
    mins: "42"
}

export const SHOP_ITEMS = [
    { name: "CL16 CAP", edition: "MONACO SPECIAL", price: "€45.00", material: "100% COTTON", status: "AVAILABLE", icon: "Crown" },
    { name: "SCUDERIA TEE", edition: "ROSSO CORSA", price: "€60.00", material: "PERFORMANCE MESH", status: "AVAILABLE", icon: "Shirt" },
    { name: "GRANDSTAND HOODIE", edition: "TIFOSI EDITION", price: "€120.00", material: "HEAVYWEIGHT FLEECE", status: "SOLD OUT", icon: "Tag" }
]

export const SEASON_2025 = [
    { gp: "BAHRAIN", pos: "P3", pts: 15 },
    { gp: "SAUDI ARABIA", pos: "P2", pts: 18 },
    { gp: "AUSTRALIA", pos: "P1", pts: 26 },
    { gp: "JAPAN", pos: "P4", pts: 12 },
    { gp: "CHINA", pos: "P2", pts: 18 },
    { gp: "MIAMI", pos: "P2", pts: 18 },
    { gp: "EMILIA ROMAGNA", pos: "P1", pts: 25 },
    { gp: "MONACO", pos: "P1", pts: 25 }
]

export const LATEST_NEWS = [
    { id: 1, headline: "POLE POSITION IN MONZA - TIFOSI ERUPT", date: "2 HRS AGO" },
    { id: 2, headline: "CONTRACT EXTENSION: 2029 SIGNED", date: "1 DAY AGO" },
    { id: 3, headline: "NEW FERRARI HYPERCAR UNVEILED", date: "3 DAYS AGO" },
    { id: 4, headline: "CHARLES LECLERC X ARMANI CAMPAIGN", date: "1 WEEK AGO" }
]

export const BEGINNINGS = [
    { year: "2005", title: "KARTING DEBUT", desc: "Started karting at Brignoles, France. The passion begins." },
    { year: "2011", title: "WORLD CUP", desc: "CIK-FIA KArtin Academy Trophy winner. Destined for greatness." },
    { year: "2016", title: "GP3 CHAMPION", desc: "Rookie season domination. Art Grand Prix." },
    { year: "2017", title: "F2 CHAMPION", desc: "Pretma Racing. 7 Wins, 8 Poles. F1 ready." }
]
