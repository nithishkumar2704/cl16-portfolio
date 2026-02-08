import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Trophy, Flag, Zap, MapPin, Calendar, User, Timer, Gauge, Award, Crown, TrendingUp, Clock, Target, Briefcase, Star, ArrowRight, Instagram, Youtube, Twitter, ShoppingBag, ChevronRight } from 'lucide-react'
import { BIO_DATA, CAREER_STATS, TIMELINE, PARTNERS, CONTACT_INFO, BEGINNINGS, SHOP_ITEMS as STATIC_SHOP, NEXT_RACE as STATIC_RACE, SEASON_2025, LATEST_NEWS } from '../data/portfolioData'

const UI = () => {
    const containerRef = useRef()
    const [raceData, setRaceData] = useState(STATIC_RACE)
    const [shopItems, setShopItems] = useState(STATIC_SHOP)
    const [news, setNews] = useState(LATEST_NEWS)
    const [stats, setStats] = useState(SEASON_2025)

    // Fetch Backend Data
    useEffect(() => {
        const fetchData = async () => {
            // In Production (Vercel), we need the full URL of the Backend (Render)
            // In Development (Localhost), we use the proxy (empty string)
            const API_BASE = import.meta.env.VITE_API_URL || '';

            try {
                // Fetch Race Data
                const raceRes = await fetch(`${API_BASE}/api/race-data`)
                if (raceRes.ok) setRaceData(await raceRes.json())

                // Fetch Shop Data
                const shopRes = await fetch(`${API_BASE}/api/shop`)
                if (shopRes.ok) setShopItems(await shopRes.json())

                // Fetch News
                const newsRes = await fetch(`${API_BASE}/api/news`)
                if (newsRes.ok) setNews(await newsRes.json())

                // Fetch Stats
                const statsRes = await fetch(`${API_BASE}/api/stats`)
                if (statsRes.ok) setStats(await statsRes.json())

            } catch (error) {
                console.error("API Error (Using Fallback Data):", error)
            }
        }
        fetchData()
    }, [])

    // Parallax
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Typography Motions
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 200])
    const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0])

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="ui-container" ref={containerRef} style={{ width: '100%', overflow: 'hidden' }}>
            {/* Luxury Navbar */}
            <nav style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                padding: '2rem 5%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100,
                color: '#fff',
                background: 'rgba(5,5,5,0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
                <div style={{ fontFamily: 'var(--font-main)', fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.04em', cursor: 'pointer' }} onClick={() => scrollToSection('hero')}>
                    CL<span style={{ color: 'var(--color-primary)' }}>.16</span>
                </div>
                <div style={{ display: 'flex', gap: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', opacity: 0.8, letterSpacing: '0.1em' }}>
                    <span onClick={() => scrollToSection('race-center')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }} className="nav-link">RACE</span>
                    <span onClick={() => scrollToSection('bio')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }} className="nav-link">BIO</span>
                    <span onClick={() => scrollToSection('shop')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }} className="nav-link">SHOP</span>
                    <span onClick={() => scrollToSection('timeline')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }} className="nav-link">JOURNEY</span>
                    <span onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }} className="nav-link">CONTACT</span>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero" style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.div style={{ y: yHero, opacity: opacityHero, zIndex: 10, textAlign: 'center', color: '#fff' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', letterSpacing: '0.4em', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                        <Flag size={14} /> {BIO_DATA.chomic.toUpperCase()} <Flag size={14} />
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(5rem, 15vw, 18rem)',
                        lineHeight: 0.8,
                        fontWeight: 900,
                        letterSpacing: '-0.06em',
                        textTransform: 'uppercase',
                        color: 'rgba(255, 255, 255, 0.5)',
                    }}>
                        Charles<br />
                        Leclerc
                    </h1>
                </motion.div>
            </section>

            {/* LATEST NEWS TICKER (New Feature) */}
            <div style={{ background: 'var(--color-primary)', color: '#fff', overflow: 'hidden', whiteSpace: 'nowrap', padding: '0.5rem 0' }}>
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700 }}
                >
                    {news.length > 0 ? news.map((item, i) => (
                        <span key={i} style={{ marginRight: '4rem' }}>
                            <span style={{ opacity: 0.6 }}>{item.date} //</span> {item.headline}
                        </span>
                    )) : "BREAKING NEWS /// SCUDERIA FERRARI /// CHARLES LECLERC /// MONACO GP PREVIEW"}
                </motion.div>
            </div>

            {/* LIVE RACE CENTER (Dynamic Data) */}
            <section id="race-center" style={{ padding: '6rem 5%', background: '#080808', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                    <div>
                        <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '0.8rem', letterSpacing: '0.2em' }}>/// NEXT GRAND PRIX</div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1, maxWidth: '600px', color: '#fff' }}>{raceData.gp}</h2>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem', opacity: 0.6 }}>
                            <MapPin size={18} /> {raceData.circuit}
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '3rem', textAlign: 'center' }}>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1 }}>{raceData.days}</div>
                            <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>DAYS</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{raceData.hours}</div>
                            <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>HOURS</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{raceData.mins}</div>
                            <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>MINS</div>
                        </div>
                    </div>
                </div>

                {/* SEASON 2025 STATS (Retro-Active) */}
                <div style={{ marginTop: '6rem' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', marginBottom: '2rem', fontSize: '0.8rem', letterSpacing: '0.2em' }}>/// SEASON 2025 ANALYTICS</div>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid #333', color: '#666', fontSize: '0.7rem' }}>
                                    <th style={{ padding: '1rem', fontWeight: 400 }}>GRAND PRIX</th>
                                    <th style={{ padding: '1rem', fontWeight: 400 }}>POSITION</th>
                                    <th style={{ padding: '1rem', fontWeight: 400 }}>POINTS</th>
                                    <th style={{ padding: '1rem', fontWeight: 400 }}>STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats.map((stat, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid #222' }}>
                                        <td style={{ padding: '1.5rem 1rem', fontWeight: 700 }}>{stat.gp}</td>
                                        <td style={{ padding: '1.5rem 1rem', color: stat.pos === 'P1' ? 'var(--color-primary)' : '#fff' }}>{stat.pos}</td>
                                        <td style={{ padding: '1.5rem 1rem', opacity: 0.8 }}>{stat.pts}</td>
                                        <td style={{ padding: '1.5rem 1rem' }}>
                                            {stat.pos === 'P1' && <Trophy size={14} color="var(--color-primary)" />}
                                            {stat.pos === 'DNF' && <span style={{ color: '#333' }}>RETIRED</span>}
                                            {stat.pos !== 'P1' && stat.pos !== 'DNF' && <Flag size={14} style={{ opacity: 0.3 }} />}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>


            {/* BIO & PROFILE */}
            <section id="bio" style={{ padding: '8rem 5%', background: '#050505', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', marginBottom: '4rem', fontSize: '0.8rem', letterSpacing: '0.2em' }}>/// PILOT BIO</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
                    <div>
                        <h2 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1, marginBottom: '2rem' }}>THE MONÉGASQUE<br />PHENOM</h2>
                        <div style={{ fontSize: '1.2rem', lineHeight: 1.6, opacity: 0.8, maxWidth: '500px' }}>
                            "{BIO_DATA.philosophy}"
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        <div className="stat-card" style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '2rem' }}>
                            <User size={24} color="#ff2800" strokeWidth={1.5} style={{ marginBottom: '1rem' }} />
                            <div style={{ fontSize: '0.7rem', opacity: 0.6, marginBottom: '0.5rem' }}>FULL NAME</div>
                            <div style={{ fontSize: '1rem', fontWeight: 700 }}>{BIO_DATA.fullName}</div>
                        </div>
                        <div className="stat-card" style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '2rem' }}>
                            <Crown size={24} color="#ff2800" strokeWidth={1.5} style={{ marginBottom: '1rem' }} />
                            <div style={{ fontSize: '0.7rem', opacity: 0.6, marginBottom: '0.5rem' }}>TEAM</div>
                            <div style={{ fontSize: '1rem', fontWeight: 700 }}>{BIO_DATA.team}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE BEGINNINGS (New Section) */}
            <section style={{ padding: '8rem 5%', background: '#050505' }}>
                <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', marginBottom: '4rem', fontSize: '0.8rem', letterSpacing: '0.2em' }}>/// THE BEGINNINGS</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {BEGINNINGS.map((item, index) => (
                        <div key={index} style={{ borderLeft: '1px solid #333', paddingLeft: '2rem' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff', marginBottom: '0.5rem' }}>{item.year}</div>
                            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '1rem' }}>{item.title}</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.6, lineHeight: 1.6 }}>{item.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CL16 SHOP (Refined Typographic UI - Dynamic Data) */}
            <section id="shop" style={{ padding: '8rem 5%', background: '#080808' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4rem' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontSize: '0.8rem', letterSpacing: '0.2em' }}>/// CL16 OFFICIAL SHOP</div>
                    <div style={{ fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>VIEW ALL <ArrowRight size={14} /></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {shopItems.map((item, index) => (
                        <div key={index} style={{ background: '#050505', padding: '3rem', border: '1px solid #222', position: 'relative', overflow: 'hidden', minHeight: '400px', display: 'flex', flexDirection: 'column' }} className="shop-card">
                            <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
                                    <div style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', border: '1px solid var(--color-primary)', color: 'var(--color-primary)' }}>
                                        {item.status}
                                    </div>
                                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>{item.price}</div>
                                </div>

                                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 0.9, marginBottom: '0.5rem', color: '#fff', textTransform: 'uppercase' }}>{item.name}</h3>
                                <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', marginBottom: '2rem', letterSpacing: '0.1em' }}>// {item.edition}</div>

                                <div style={{ borderTop: '1px solid #222', paddingTop: '1rem', marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.7rem', opacity: 0.6, fontFamily: 'var(--font-mono)', color: '#aaa' }}>
                                    <div>MATERIAL: <br /><span style={{ color: '#fff' }}>{item.material}</span></div>
                                    <div style={{ textAlign: 'right' }}>DESIGNED IN: <br /><span style={{ color: '#fff' }}>MONACO</span></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* TIMELINE (Original Layout) */}
            <section id="timeline" style={{ padding: '8rem 5%', background: '#050505' }}>
                <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', marginBottom: '5rem', fontSize: '0.8rem', letterSpacing: '0.2em', textAlign: 'center' }}>/// F1 CAREER JOURNEY</div>
                <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: 'rgba(255,255,255,0.1)', transform: 'translateX(-50%)' }} />
                    {TIMELINE.map((item, index) => (
                        <div key={index} style={{ display: 'flex', justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start', marginBottom: '4rem', position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '50%', top: '20px', width: '10px', height: '10px', background: 'var(--color-primary)', borderRadius: '50%', transform: 'translateX(-50%)', zIndex: 2, boxShadow: '0 0 10px var(--color-primary)' }} />
                            <div style={{ width: '45%', textAlign: index % 2 === 0 ? 'left' : 'right', order: index % 2 === 0 ? 1 : 0 }}>
                                <div style={{ fontSize: '4rem', fontWeight: 900, color: 'rgba(255,255,255,0.05)', lineHeight: 0.8, marginBottom: '-1rem' }}>{item.year}</div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '2rem' }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                                        <item.icon size={16} /> <span>{item.team}</span>
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h3>
                                    <p style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: 1.5 }}>{item.description}</p>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* PARTNERS */}
            <section id="partners" style={{ padding: '8rem 5%', background: '#050505', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', marginBottom: '5rem', fontSize: '0.8rem', letterSpacing: '0.2em' }}>/// OFFICIAL PARTNERS</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    {PARTNERS.map((partner, index) => (
                        <div key={index}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.02em', color: '#fff', opacity: 0.8 }}>{partner.name}</h3>
                            <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', opacity: 0.4, marginTop: '0.5rem' }}>{partner.role.toUpperCase()}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" style={{ padding: '8rem 5%', background: '#050505', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', borderTop: '1px solid #333' }}>
                <div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1, marginBottom: '2rem' }}>GET IN<br />TOUCH</h2>
                    <div style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '2rem' }}>For press inquiries and commercial partnerships.</div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{ padding: '1rem 2rem', border: '1px solid #fff', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                            CONTACT MANAGEMENT <ArrowRight size={16} />
                        </div>
                    </div>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', opacity: 0.8, lineHeight: 2 }}>
                    <div>MANAGEMENT: {CONTACT_INFO.management}</div>
                    <div>PRESS: {CONTACT_INFO.press}</div>
                    <div style={{ color: 'var(--color-primary)', marginTop: '1rem' }}>{CONTACT_INFO.email}</div>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Instagram size={16} /> INSTAGRAM</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Twitter size={16} /> TWITTER</div>
                    </div>
                </div>
            </section>

            <footer style={{ padding: '4rem 5%', background: '#020202', color: '#fff', borderTop: '1px solid #222' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#333' }}>CL.16</h2>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', textAlign: 'right', opacity: 0.4 }}>
                        <div>© 2026 FERRARI S.P.A</div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default UI
