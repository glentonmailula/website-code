/** @jsxRuntime classic */
import * as React from 'react'
const { useState } = React
import { ALL_COURSES, SIX_MONTH_COURSES, SIX_WEEK_COURSES, TESTIMONIALS, FAQS, formatZAR, getDiscount } from './data'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elementName: string]: any
    }
  }
}

// ─── Types ───────────────────────────────────────────────────
type Page =
  | 'home' | 'about' | 'why-us'
  | 'courses-overview' | 'professional-development' | 'practical-skills'
  | 'course-detail'
  | 'fees' | 'testimonials' | 'contact'
  | 'enrol' | 'faq'

// ─── Shared UI atoms ─────────────────────────────────────────
const Label = ({ children, light }: { children: string; light?: boolean }) => (
  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: light ? '#F5A940' : '#C97D1A', margin: '0 0 0.6rem' }}>{children}</p>
)

const SectionHead = ({ label, title, sub, light, center }: { label: string; title: string; sub?: string; light?: boolean; center?: boolean }) => (
  <div style={{ textAlign: center ? 'center' : 'left', marginBottom: '2.5rem' }}>
    <Label light={light}>{label}</Label>
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)', fontWeight: 700, color: light ? '#FBF8F1' : '#1E4D3A', lineHeight: 1.15, margin: 0 }}>{title}</h2>
    {sub && <p style={{ fontSize: '0.95rem', color: light ? 'rgba(251,248,241,0.65)' : '#5a7a5e', maxWidth: '520px', lineHeight: 1.65, margin: center ? '0.65rem auto 0' : '0.65rem 0 0' }}>{sub}</p>}
  </div>
)

// ─── Page: 1 — Home ──────────────────────────────────────────
function HomePage({ go }: { go: (p: Page, courseId?: string) => void }) {
  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1596278852720-141ba859bbbf?w=1600&h=900&fit=crop&auto=format" alt="Dog trainer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, rgba(20,46,35,0.92) 40%, rgba(20,46,35,0.5))' }} />
        </div>
        <div style={{ position: 'relative', maxWidth: '1152px', margin: '0 auto', padding: '6rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <Label light>Durban, South Africa · Est. 2023</Label>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', fontWeight: 900, color: '#FBF8F1', lineHeight: 1.02, margin: '0 0 1.25rem' }}>
              Where every pet<br /><em style={{ color: '#F5A940' }}>thrives</em> with care.
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(251,248,241,0.82)', lineHeight: 1.7, maxWidth: '440px', margin: '0 0 2rem' }}>
              Pawsitive Pet Academy equips pet owners, professionals, and aspiring entrepreneurs with the practical skills to improve animal wellbeing — one paw at a time.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => go('courses-overview')} style={{ padding: '0.9rem 2rem', borderRadius: '99px', background: '#C97D1A', color: '#FBF8F1', border: 'none', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Explore Courses</button>
              <button onClick={() => go('fees')} style={{ padding: '0.9rem 2rem', borderRadius: '99px', border: '2px solid rgba(251,248,241,0.4)', color: '#FBF8F1', background: 'transparent', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Calculate Fees</button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[{ n: '500+', l: 'Graduates' }, { n: '7', l: 'Courses' }, { n: '2023', l: 'Established' }, { n: '15%', l: 'Max Discount' }].map(s => (
              <div key={s.l} style={{ background: 'rgba(251,248,241,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(251,248,241,0.15)', borderRadius: '1rem', padding: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 900, color: '#F5A940', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(251,248,241,0.65)', marginTop: '0.3rem' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick nav cards */}
      <section style={{ background: '#FBF8F1', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <SectionHead label="Navigate" title="Everything you need in one place." center />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {[
              { page: 'about' as Page, title: 'About Us', sub: 'Learn about our founder Sarah Smith and the academy’s story since 2023.', bg: '#D6E8D5', color: '#1E4D3A', icon: '🏫', border: false },
              { page: 'why-us' as Page, title: 'Why Choose Us', sub: 'Discover what sets Pawsitive Pet Academy apart from other pet training providers.', bg: '#1E4D3A', color: '#FBF8F1', icon: '⭐', border: false },
              { page: 'courses-overview' as Page, title: 'Courses Overview', sub: 'All 7 programmes at a glance — 6-month and 6-week options available.', bg: '#FBF8F1', color: '#1E4D3A', icon: '📚', border: true },
              { page: 'fees' as Page, title: 'Calculate Fees', sub: 'Bundle courses and unlock automatic discounts up to 15% off.', bg: '#C97D1A', color: '#FBF8F1', icon: '💰', border: false },
              { page: 'testimonials' as Page, title: 'Testimonials', sub: 'Hear from 500+ graduates whose lives were changed by our programmes.', bg: '#142e23', color: '#FBF8F1', icon: '💬', border: false },
              { page: 'contact' as Page, title: 'Contact Us', sub: 'Get in touch to enrol, ask questions, or request a personalised quote.', bg: '#FBF8F1', color: '#1E4D3A', icon: '✉️', border: true },
            ].map(c => (
              <button key={c.page} onClick={() => go(c.page)}
                style={{ padding: '1.75rem', borderRadius: '1.25rem', background: c.bg, border: c.border ? '1.5px solid rgba(30,77,58,0.15)' : 'none', textAlign: 'left', cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'transform 0.15s, box-shadow 0.15s' }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)' }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{c.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: c.color, marginBottom: '0.4rem' }}>{c.title}</div>
                <div style={{ fontSize: '0.8rem', color: c.color, opacity: 0.72, lineHeight: 1.55 }}>{c.sub}</div>
                <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 600, color: c.color, opacity: 0.8 }}>Learn more →</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured courses teaser */}
      <section style={{ background: '#1E4D3A', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <SectionHead label="Programmes" title="Courses designed for real results." light />
            <button onClick={() => go('courses-overview')} style={{ padding: '0.6rem 1.5rem', borderRadius: '99px', border: '1.5px solid rgba(251,248,241,0.3)', color: '#FBF8F1', background: 'transparent', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)', whiteSpace: 'nowrap' }}>View all 7 courses →</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {[SIX_MONTH_COURSES[0], SIX_MONTH_COURSES[1], SIX_WEEK_COURSES[1]].map(c => (
              <button key={c.id} onClick={() => go('course-detail', c.id)}
                style={{ borderRadius: '1.25rem', overflow: 'hidden', background: 'rgba(251,248,241,0.07)', border: '1.5px solid rgba(251,248,241,0.12)', cursor: 'pointer', textAlign: 'left', padding: 0, fontFamily: 'var(--font-body)', transition: 'all 0.15s' }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.background = 'rgba(251,248,241,0.12)')}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.background = 'rgba(251,248,241,0.07)')}>
                <div style={{ height: '160px', overflow: 'hidden', background: '#2d7a5c' }}>
                  <img src={c.image} alt={c.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                </div>
                <div style={{ padding: '1.1rem' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: c.tag === 'Practical Skills' ? '#F5A940' : 'rgba(251,248,241,0.55)', display: 'block', marginBottom: '0.3rem' }}>{c.tag} · {c.duration}</span>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#FBF8F1' }}>{c.title}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: '#F5A940', marginTop: '0.3rem' }}>{formatZAR(c.fee)}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Page: 2 — About Us ──────────────────────────────────────
function AboutPage({ go }: { go: (p: Page) => void }) {
  return (
    <div>
      <section style={{ background: '#FBF8F1', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <SectionHead label="About Us" title="Founded on the belief that educated owners create happier animals." />
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#3d5240', marginBottom: '1rem' }}>
              <strong style={{ color: '#1E4D3A' }}>Sarah Smith</strong> founded Pawsitive Pet Academy in 2023 after noticing a significant gap in accessible, practical pet education across Durban. Many people own pets but lack the knowledge to care for them properly.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#3d5240', marginBottom: '1rem' }}>
              Her academy bridges this gap by delivering structured, hands-on programmes that improve the wellbeing of pets while creating meaningful employment and entrepreneurship opportunities in the pet care industry.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#3d5240', marginBottom: '2rem' }}>
              Since 2023, hundreds of graduates have completed both the six-month Professional Development Programmes and the six-week Practical Skills Courses — leaving equipped with real, applicable skills.
            </p>
            <button onClick={() => go('why-us')} style={{ padding: '0.8rem 1.75rem', borderRadius: '99px', background: '#1E4D3A', color: '#FBF8F1', border: 'none', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Why Choose Us →</button>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', aspectRatio: '4/5' }}>
              <img src="https://images.unsplash.com/photo-1640652663796-764e4eb5bc59?w=700&h=900&fit=crop&auto=format" alt="Person training a puppy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '-1.5rem', right: '-1.5rem', background: '#C97D1A', borderRadius: '1rem', padding: '1.25rem 1.5rem', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900, color: '#FBF8F1', lineHeight: 1 }}>500+</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(251,248,241,0.85)', marginTop: '0.25rem' }}>Graduates since 2023</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & values */}
      <section style={{ background: '#1E4D3A', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <SectionHead label="Mission & Values" title="What drives everything we do." light center />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {[
              { icon: '🐾', title: 'Animal Wellbeing First', body: 'Every course, every lesson, every skill we teach ultimately serves one goal: healthier, happier animals across South Africa.' },
              { icon: '🎓', title: 'Practical Education', body: 'We believe in learning by doing. Our programmes are hands-on, applied, and grounded in real-world pet care situations.' },
              { icon: '💼', title: 'Creating Opportunity', body: 'We’re not just teaching pet care — we’re building careers and businesses for aspiring professionals across Durban and beyond.' },
            ].map(v => (
              <div key={v.title} style={{ background: 'rgba(251,248,241,0.08)', border: '1px solid rgba(251,248,241,0.12)', borderRadius: '1.25rem', padding: '1.75rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{v.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#FBF8F1', marginBottom: '0.5rem' }}>{v.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(251,248,241,0.68)', lineHeight: 1.65 }}>{v.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who should enrol */}
      <section style={{ background: '#FBF8F1', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <SectionHead label="Our Students" title="Who should enrol at Pawsitive Pet Academy?" center />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              { icon: '🏠', who: 'Pet Owners & Families', desc: 'Learn to care for and train your own pets properly and confidently.' },
              { icon: '🐕', who: 'Pet Sitters & Walkers', desc: 'Gain skills and credentials to offer professional pet services.' },
              { icon: '🏥', who: 'Vet Assistants', desc: 'Build foundational animal behaviour and first aid knowledge.' },
              { icon: '🏢', who: 'Kennel Staff', desc: 'Upskill in grooming, behaviour management, and emergency care.' },
              { icon: '📋', who: 'Aspiring Entrepreneurs', desc: 'Launch a pet-related business with the management skills to succeed.' },
              { icon: '❤️', who: 'Animal Lovers', desc: 'Turn your passion for animals into a rewarding career path.' },
            ].map(w => (
              <div key={w.who} style={{ background: '#D6E8D5', borderRadius: '1rem', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{w.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#1E4D3A', marginBottom: '0.35rem' }}>{w.who}</div>
                <div style={{ fontSize: '0.8rem', color: '#3d5240', lineHeight: 1.55 }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Page: 3 — Why Choose Us ─────────────────────────────────
function WhyUsPage({ go }: { go: (p: Page) => void }) {
  return (
    <div>
      <section style={{ background: '#1E4D3A', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <SectionHead label="Why Choose Us" title="What makes Pawsitive Pet Academy different." light center />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
            {[
              { num: '01', title: 'Practical, hands-on learning', body: 'We don’t just teach theory. Every programme is built around real animals, real scenarios, and real skills you can apply from day one.' },
              { num: '02', title: 'Expert, passionate instructors', body: 'All our courses are led by experienced professionals who are genuinely passionate about animal welfare and student success.' },
              { num: '03', title: 'Flexible bundling with discounts', body: 'Select multiple courses and save up to 15%. Build a complete skill set while keeping costs manageable.' },
              { num: '04', title: 'Career and business outcomes', body: 'Our graduates go on to employment, freelance work, and business ownership in the pet care industry — we track and celebrate their success.' },
              { num: '05', title: 'Small class sizes', body: 'We keep our groups intimate so every student receives personalised attention and guidance from their instructor.' },
              { num: '06', title: 'Based in Durban, accessible to all', body: 'Centrally located in KwaZulu-Natal, serving the broader community of pet owners and aspiring professionals across the region.' },
            ].map(f => (
              <div key={f.num} style={{ background: 'rgba(251,248,241,0.07)', border: '1px solid rgba(251,248,241,0.12)', borderRadius: '1.25rem', padding: '1.75rem', display: 'flex', gap: '1.25rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 900, color: 'rgba(245,169,64,0.4)', lineHeight: 1, flexShrink: 0 }}>{f.num}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#FBF8F1', marginBottom: '0.4rem' }}>{f.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(251,248,241,0.65)', lineHeight: 1.65 }}>{f.body}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button onClick={() => go('courses-overview')} style={{ padding: '0.9rem 2.5rem', borderRadius: '99px', background: '#C97D1A', color: '#FBF8F1', border: 'none', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Browse All Courses →</button>
          </div>
        </div>
      </section>

      {/* Outcomes stats */}
      <section style={{ background: '#FBF8F1', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', textAlign: 'center' }}>
          {[{ n: '500+', l: 'Graduates' }, { n: '7', l: 'Courses Offered' }, { n: '3', l: 'Years Running' }, { n: '95%', l: 'Student Satisfaction' }].map(s => (
            <div key={s.l} style={{ background: '#D6E8D5', borderRadius: '1.25rem', padding: '2rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900, color: '#C97D1A', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: '0.85rem', color: '#1E4D3A', marginTop: '0.5rem', fontWeight: 600 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

// ─── Page: 4 — Courses Overview ──────────────────────────────
function CoursesOverviewPage({ go }: { go: (p: Page, courseId?: string) => void }) {
  return (
    <div>
      <section style={{ background: '#FBF8F1', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <SectionHead label="Courses Overview" title="7 courses across two programme levels." sub="Click any course to view full details, or add multiple to your fee quote for a bundled discount." center />

          {/* 6-month */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem', padding: '0.75rem 1.25rem', background: '#1E4D3A', borderRadius: '0.875rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#FBF8F1', fontSize: '1rem' }}>Professional Development Programmes</span>
              <span style={{ fontSize: '0.75rem', color: 'rgba(251,248,241,0.6)' }}>6 months · 12 weeks · R1 500 each</span>
              <button onClick={() => go('professional-development')} style={{ marginLeft: 'auto', fontSize: '0.75rem', color: '#F5A940', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 600 }}>View all →</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              {SIX_MONTH_COURSES.map(c => (
                <button key={c.id} onClick={() => go('course-detail', c.id)}
                  style={{ borderRadius: '1rem', overflow: 'hidden', background: '#fff', border: '1.5px solid rgba(30,77,58,0.1)', cursor: 'pointer', textAlign: 'left', padding: 0, fontFamily: 'var(--font-body)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', transition: 'all 0.15s' }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(30,77,58,0.1)' }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)' }}>
                  <div style={{ height: '130px', overflow: 'hidden', background: '#2d7a5c' }}>
                    <img src={c.image} alt={c.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
                  </div>
                  <div style={{ padding: '1rem' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#1E4D3A', marginBottom: '0.3rem', lineHeight: 1.3 }}>{c.title}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 800, color: '#C97D1A' }}>{formatZAR(c.fee)}</div>
                    <div style={{ fontSize: '0.7rem', color: '#8BAF8A', marginTop: '0.25rem' }}>View details →</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 6-week */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem', padding: '0.75rem 1.25rem', background: '#C97D1A', borderRadius: '0.875rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#FBF8F1', fontSize: '1rem' }}>Practical Skills Short Courses</span>
              <span style={{ fontSize: '0.75rem', color: 'rgba(251,248,241,0.7)' }}>6 weeks · R750 each</span>
              <button onClick={() => go('practical-skills')} style={{ marginLeft: 'auto', fontSize: '0.75rem', color: '#FBF8F1', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 600 }}>View all →</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {SIX_WEEK_COURSES.map(c => (
                <button key={c.id} onClick={() => go('course-detail', c.id)}
                  style={{ borderRadius: '1rem', overflow: 'hidden', background: '#fff', border: '1.5px solid rgba(201,125,26,0.2)', cursor: 'pointer', textAlign: 'left', padding: 0, fontFamily: 'var(--font-body)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', transition: 'all 0.15s' }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(201,125,26,0.12)' }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)' }}>
                  <div style={{ height: '130px', overflow: 'hidden', background: '#2d7a5c' }}>
                    <img src={c.image} alt={c.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
                  </div>
                  <div style={{ padding: '1rem' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#1E4D3A', marginBottom: '0.3rem', lineHeight: 1.3 }}>{c.title}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 800, color: '#C97D1A' }}>{formatZAR(c.fee)}</div>
                    <div style={{ fontSize: '0.7rem', color: '#8BAF8A', marginTop: '0.25rem' }}>View details →</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Discount reminder */}
          <div style={{ marginTop: '2.5rem', background: '#D6E8D5', borderRadius: '1.25rem', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: '#1E4D3A' }}>Bundle courses and save!</div>
              <div style={{ fontSize: '0.85rem', color: '#3d5240', marginTop: '0.25rem' }}>2 courses = 5% · 3 courses = 10% · 4+ courses = 15% off</div>
            </div>
            <button onClick={() => go('fees')} style={{ padding: '0.75rem 1.75rem', borderRadius: '99px', background: '#1E4D3A', color: '#FBF8F1', border: 'none', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Calculate My Fees →</button>
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Page: 5 — Professional Development ─────────────────────
function ProfessionalPage({ go }: { go: (p: Page, courseId?: string) => void }) {
  return (
    <div>
      <section style={{ background: '#FBF8F1', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <SectionHead label="6-Month Programmes" title="Professional Development Programmes." sub="In-depth 12-week courses that build professional-level competence. Certificate of completion awarded. Each course: R1 500." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {SIX_MONTH_COURSES.map(c => (
              <div key={c.id} style={{ borderRadius: '1.25rem', overflow: 'hidden', background: '#fff', border: '1.5px solid rgba(30,77,58,0.1)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ height: '200px', overflow: 'hidden', background: '#2d7a5c', position: 'relative' }}>
                  <img src={c.image} alt={c.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,46,35,0.55) 30%, transparent)' }} />
                  <div style={{ position: 'absolute', bottom: '0.875rem', left: '1rem' }}>
                    <span style={{ fontSize: '0.7rem', color: 'rgba(251,248,241,0.85)', fontWeight: 600 }}>{c.duration}</span>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: '#1E4D3A', margin: 0, lineHeight: 1.3 }}>{c.title}</h3>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#C97D1A', whiteSpace: 'nowrap', marginLeft: '1rem' }}>{formatZAR(c.fee)}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#5a7a5e', lineHeight: 1.6, margin: '0 0 1rem' }}>{c.purpose}</p>
                  <div style={{ background: '#D6E8D5', borderRadius: '0.75rem', padding: '0.875rem', marginBottom: '1rem' }}>
                    <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1E4D3A', margin: '0 0 0.5rem' }}>Course Content</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {c.topics.map(t => (
                        <span key={t} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '99px', background: '#FBF8F1', color: '#1E4D3A' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <button onClick={() => go('course-detail', c.id)} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.75rem', background: '#1E4D3A', color: '#FBF8F1', border: 'none', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Full Course Details →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Page: 6 — Practical Skills ─────────────────────────────
function PracticalPage({ go }: { go: (p: Page, courseId?: string) => void }) {
  return (
    <div>
      <section style={{ background: '#FBF8F1', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <SectionHead label="6-Week Short Courses" title="Practical Skills Courses." sub="Focused, hands-on programmes that deliver applicable skills quickly. Certificate of completion awarded. Each course: R750." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {SIX_WEEK_COURSES.map(c => (
              <div key={c.id} style={{ borderRadius: '1.25rem', overflow: 'hidden', background: '#fff', border: '1.5px solid rgba(201,125,26,0.15)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ height: '180px', overflow: 'hidden', background: '#2d7a5c', position: 'relative' }}>
                  <img src={c.image} alt={c.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,46,35,0.55) 30%, transparent)' }} />
                  <span style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', padding: '0.2rem 0.65rem', borderRadius: '99px', fontSize: '0.65rem', fontWeight: 700, background: '#C97D1A', color: '#FBF8F1' }}>Practical Skills</span>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#1E4D3A', margin: 0, lineHeight: 1.3 }}>{c.title}</h3>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: '#C97D1A', whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>{formatZAR(c.fee)}</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#5a7a5e', lineHeight: 1.6, margin: '0 0 0.875rem' }}>{c.purpose}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {c.topics.map(t => (
                      <li key={t} style={{ display: 'flex', gap: '0.4rem', fontSize: '0.78rem', color: '#3d5240', alignItems: 'center' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#8BAF8A', flexShrink: 0 }} />{t}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => go('course-detail', c.id)} style={{ width: '100%', padding: '0.7rem', borderRadius: '0.75rem', background: '#C97D1A', color: '#FBF8F1', border: 'none', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>View Course →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Page: 7 — Individual Course Detail ─────────────────────
function CourseDetailPage({ courseId, selectedIds, onToggle, go }: {
  courseId: string; selectedIds: string[]; onToggle: (id: string) => void; go: (p: Page, courseId?: string) => void
}) {
  const course = ALL_COURSES.find(c => c.id === courseId) ?? ALL_COURSES[0]
  const sel = selectedIds.includes(course.id)
  const related = ALL_COURSES.filter(c => c.tag === course.tag && c.id !== course.id).slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', height: '420px', background: '#2d7a5c', overflow: 'hidden' }}>
        <img src={course.image} alt={course.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,46,35,0.92) 40%, rgba(20,46,35,0.3))' }} />
        <div style={{ position: 'absolute', bottom: '3rem', left: 0, right: 0 }}>
          <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 2rem' }}>
            <span style={{ padding: '0.3rem 0.875rem', borderRadius: '99px', fontSize: '0.72rem', fontWeight: 700, background: course.tag === 'Practical Skills' ? '#C97D1A' : '#1E4D3A', color: '#FBF8F1', border: '1px solid rgba(251,248,241,0.2)' }}>{course.tag}</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#FBF8F1', margin: '0.75rem 0 0.5rem', lineHeight: 1.1 }}>{course.title}</h1>
            <p style={{ fontSize: '0.9rem', color: 'rgba(251,248,241,0.75)' }}>{course.duration}</p>
          </div>
        </div>
      </section>

      <section style={{ background: '#FBF8F1', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
          {/* Main content */}
          <div>
            <div style={{ background: '#fff', borderRadius: '1.25rem', padding: '2rem', marginBottom: '1.5rem', border: '1px solid rgba(30,77,58,0.1)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: '#1E4D3A', margin: '0 0 0.75rem' }}>Course Purpose</h2>
              <p style={{ fontSize: '0.95rem', color: '#3d5240', lineHeight: 1.7, margin: 0 }}>{course.purpose}</p>
            </div>
            <div style={{ background: '#D6E8D5', borderRadius: '1.25rem', padding: '2rem', marginBottom: '1.5rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: '#1E4D3A', margin: '0 0 1rem' }}>Course Content</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                {course.topics.map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#1E4D3A', color: '#FBF8F1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '0.875rem', color: '#1C2B1E' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            {related.length > 0 && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#1E4D3A', marginBottom: '0.875rem' }}>Related Courses</h3>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${related.length}, 1fr)`, gap: '0.875rem' }}>
                  {related.map(r => (
                    <button key={r.id} onClick={() => go('course-detail', r.id)}
                      style={{ background: '#fff', border: '1px solid rgba(30,77,58,0.12)', borderRadius: '0.875rem', padding: '1rem', textAlign: 'left', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: '#1E4D3A', marginBottom: '0.25rem' }}>{r.title}</div>
                      <div style={{ fontSize: '0.75rem', color: '#C97D1A', fontWeight: 700 }}>{formatZAR(r.fee)}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div style={{ background: '#1E4D3A', borderRadius: '1.25rem', padding: '1.75rem', position: 'sticky', top: '90px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900, color: '#F5A940', marginBottom: '0.25rem' }}>{formatZAR(course.fee)}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(251,248,241,0.65)', marginBottom: '1.5rem' }}>{course.duration}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {[['Certificate', 'Awarded on completion'], ['Class size', 'Small, personalised groups'], ['Location', 'Durban, KwaZulu-Natal'], ['Start dates', 'Quarterly intakes']].map(([k, v]) => (
                  <div key={k} style={{ paddingBottom: '0.75rem', borderBottom: '1px solid rgba(251,248,241,0.08)' }}>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(251,248,241,0.5)', marginBottom: '0.15rem' }}>{k}</div>
                    <div style={{ fontSize: '0.82rem', color: 'rgba(251,248,241,0.85)' }}>{v}</div>
                  </div>
                ))}
              </div>
              <button onClick={() => onToggle(course.id)}
                style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: 'none', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer', fontFamily: 'var(--font-body)', background: sel ? '#D6E8D5' : '#C97D1A', color: sel ? '#1E4D3A' : '#FBF8F1', marginBottom: '0.75rem' }}>
                {sel ? '✓ Added to Quote' : '+ Add to Fee Quote'}
              </button>
              <button onClick={() => go('contact')}
                style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1.5px solid rgba(251,248,241,0.25)', background: 'transparent', color: '#FBF8F1', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Page: 8 — Calculate Fees ────────────────────────────────
function FeesPage({ selectedIds, onToggle }: { selectedIds: string[]; onToggle: (id: string) => void }) {
  const selected = ALL_COURSES.filter(c => selectedIds.includes(c.id))
  const subtotal = selected.reduce((s, c) => s + c.fee, 0)
  const disc = getDiscount(selected.length)
  const saved = subtotal * disc
  const total = subtotal - saved

  return (
    <div>
      <section style={{ background: '#FBF8F1', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <SectionHead label="Calculate Fees" title="The more you learn, the more you save." sub="Select courses below to build your personalised quote. Bundle discounts are applied automatically." center />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.875rem', marginBottom: '3rem' }}>
            {[{ r: '1 Course', l: 'No discount', a: selected.length === 1 }, { r: '2 Courses', l: '5% off', a: selected.length === 2 }, { r: '3 Courses', l: '10% off', a: selected.length === 3 }, { r: '4+ Courses', l: '15% off', a: selected.length >= 4 }].map(t => (
              <div key={t.r} style={{ borderRadius: '0.875rem', padding: '1.25rem', textAlign: 'center', background: t.a ? '#1E4D3A' : '#D6E8D5', border: t.a ? '2px solid #1E4D3A' : '2px solid transparent', transition: 'all 0.15s' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: t.a ? 'rgba(251,248,241,0.7)' : '#5a7a5e', marginBottom: '0.3rem' }}>{t.r}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 900, color: t.a ? '#F5A940' : '#1E4D3A' }}>{t.l}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '2rem' }}>
            {/* Course selector */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#1E4D3A', marginBottom: '1rem' }}>Select Courses</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {ALL_COURSES.map(c => {
                  const s = selectedIds.includes(c.id)
                  return (
                    <button key={c.id} onClick={() => onToggle(c.id)}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '0.875rem 1rem', borderRadius: '0.75rem', background: s ? '#D6E8D5' : '#fff', border: s ? '1.5px solid #1E4D3A' : '1.5px solid rgba(30,77,58,0.12)', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-body)', transition: 'all 0.15s' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid', borderColor: s ? '#1E4D3A' : 'rgba(30,77,58,0.3)', background: s ? '#1E4D3A' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: '#FBF8F1', flexShrink: 0 }}>{s && '✓'}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1C2B1E' }}>{c.title}</div>
                        <div style={{ fontSize: '0.7rem', color: '#8BAF8A' }}>{c.tag} · {c.duration}</div>
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#C97D1A', whiteSpace: 'nowrap' }}>{formatZAR(c.fee)}</div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Quote summary */}
            <div>
              <div style={{ background: '#1E4D3A', borderRadius: '1.25rem', overflow: 'hidden', position: 'sticky', top: '90px' }}>
                <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(251,248,241,0.08)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: '#FBF8F1' }}>Your Quote {selected.length > 0 && `(${selected.length})`}</div>
                </div>
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  {selected.length === 0 ? (
                    <p style={{ fontSize: '0.82rem', color: 'rgba(251,248,241,0.45)', textAlign: 'center', padding: '1.5rem 0', margin: 0 }}>Select courses to see your quote.</p>
                  ) : (
                    <>
                      {selected.map(c => (
                        <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid rgba(251,248,241,0.07)', fontSize: '0.8rem' }}>
                          <span style={{ color: 'rgba(251,248,241,0.8)', maxWidth: '140px' }}>{c.title}</span>
                          <span style={{ color: '#F5A940', fontWeight: 600, whiteSpace: 'nowrap' }}>{formatZAR(c.fee)}</span>
                        </div>
                      ))}
                      <div style={{ paddingTop: '0.875rem', marginTop: '0.25rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'rgba(251,248,241,0.55)', marginBottom: '0.3rem' }}><span>Subtotal</span><span>{formatZAR(subtotal)}</span></div>
                        {disc > 0 && <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#8BAF8A', marginBottom: '0.3rem' }}><span>Discount ({(disc * 100).toFixed(0)}%)</span><span>−{formatZAR(saved)}</span></div>}
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 900, color: '#FBF8F1', borderTop: '1px solid rgba(251,248,241,0.12)', paddingTop: '0.75rem', marginTop: '0.25rem' }}><span>Total</span><span>{formatZAR(total)}</span></div>
                        {disc > 0 && <p style={{ fontSize: '0.72rem', color: '#8BAF8A', textAlign: 'center', margin: '0.5rem 0 0' }}>You save {formatZAR(saved)}! 🎉</p>}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Page: 9 — Testimonials ──────────────────────────────────
function TestimonialsPage() {
  return (
    <div>
      <section style={{ background: '#1E4D3A', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <SectionHead label="Student Stories" title="What our graduates say." sub="Over 500 graduates have completed our programmes. Here are some of their stories." light center />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {TESTIMONIALS.map(t => (
              <div key={t.name} style={{ background: 'rgba(251,248,241,0.07)', border: '1px solid rgba(251,248,241,0.12)', borderRadius: '1.25rem', padding: '1.75rem' }}>
                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                  {Array(t.stars).fill(0).map((_, i) => <span key={i} style={{ color: '#F5A940', fontSize: '0.85rem' }}>★</span>)}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(251,248,241,0.82)', lineHeight: 1.7, margin: '0 0 1.25rem', fontStyle: 'italic' }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(251,248,241,0.08)' }}>
                  <span style={{ fontSize: '1.75rem' }}>{t.avatar}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#FBF8F1' }}>{t.name}</div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(251,248,241,0.5)' }}>{t.role}</div>
                    <div style={{ fontSize: '0.68rem', color: '#F5A940', fontWeight: 600, marginTop: '0.1rem' }}>{t.course}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Page: 10 — FAQ ──────────────────────────────────────────
function FAQPage({ go }: { go: (p: Page) => void }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div>
      <section style={{ background: '#FBF8F1', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <SectionHead label="FAQ" title="Frequently Asked Questions." sub="Can't find your answer? Contact us directly and we'll respond within one business day." center />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {FAQS.map((f, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '0.875rem', border: '1.5px solid', borderColor: open === i ? '#1E4D3A' : 'rgba(30,77,58,0.12)', overflow: 'hidden', transition: 'border-color 0.15s' }}>
                <button onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 1.25rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-body)' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1E4D3A', paddingRight: '1rem' }}>{f.q}</span>
                  <span style={{ fontSize: '1.1rem', color: '#1E4D3A', flexShrink: 0, transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.15s' }}>+</span>
                </button>
                {open === i && (
                  <div style={{ padding: '0 1.25rem 1.1rem', fontSize: '0.875rem', color: '#5a7a5e', lineHeight: 1.7 }}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button onClick={() => go('contact')} style={{ padding: '0.875rem 2.5rem', borderRadius: '99px', background: '#1E4D3A', color: '#FBF8F1', border: 'none', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Contact Us →</button>
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Page: 11 — Contact Us ───────────────────────────────────
function ContactPage({ selectedIds }: { selectedIds: string[] }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [done, setDone] = useState(false)
  const selected = ALL_COURSES.filter(c => selectedIds.includes(c.id))
  const disc = getDiscount(selected.length)
  const total = selected.reduce((s, c) => s + c.fee, 0) * (1 - disc)

  return (
    <div>
      <section style={{ background: '#142e23', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
          <SectionHead label="Contact Us" title="Ready to begin your journey?" sub="Fill in the form and we'll respond within one business day with enrolment details and your personalised quote." light center />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'start' }}>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                {[{ icon: '📍', l: 'Location', v: 'Durban, KwaZulu-Natal, South Africa' }, { icon: '📧', l: 'Email', v: 'info@pawsitivepetacademy.co.za' }, { icon: '📞', l: 'Phone', v: '+27 31 000 0000' }, { icon: '🕐', l: 'Office Hours', v: 'Mon – Fri, 08:00 – 17:00' }].map(i => (
                  <div key={i.l} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.625rem', background: 'rgba(251,248,241,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>{i.icon}</div>
                    <div>
                      <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8BAF8A', marginBottom: '0.2rem' }}>{i.l}</div>
                      <div style={{ fontSize: '0.875rem', color: 'rgba(251,248,241,0.8)' }}>{i.v}</div>
                    </div>
                  </div>
                ))}
              </div>
              {selected.length > 0 && (
                <div style={{ background: 'rgba(251,248,241,0.06)', borderRadius: '0.875rem', padding: '1.1rem', border: '1px solid rgba(251,248,241,0.1)' }}>
                  <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8BAF8A', margin: '0 0 0.5rem' }}>Courses in your quote</p>
                  {selected.map(c => (
                    <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'rgba(251,248,241,0.75)', padding: '0.2rem 0' }}>
                      <span>{c.title}</span><span style={{ color: '#F5A940' }}>{formatZAR(c.fee)}</span>
                    </div>
                  ))}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', fontWeight: 700, color: '#FBF8F1', paddingTop: '0.5rem', borderTop: '1px solid rgba(251,248,241,0.1)', marginTop: '0.5rem' }}>
                    <span>Estimated total</span><span style={{ color: '#F5A940' }}>{formatZAR(total)}</span>
                  </div>
                </div>
              )}
            </div>

            <div style={{ background: '#FBF8F1', borderRadius: '1.25rem', padding: '2rem' }}>
              {done ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <img src="/src/imports/image.png" alt="logo" style={{ width: '80px', objectFit: 'contain', margin: '0 auto 1rem', display: 'block' }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: '#1E4D3A', margin: '0 0 0.75rem' }}>Thank you, {form.name}!</h3>
                  <p style={{ fontSize: '0.875rem', color: '#5a7a5e', lineHeight: 1.65 }}>We'll be in touch within one business day with enrolment details and your personalised quote.</p>
                  <button onClick={() => { setDone(false); setForm({ name: '', email: '', phone: '', message: '' }) }} style={{ marginTop: '1.5rem', fontSize: '0.85rem', fontWeight: 600, color: '#C97D1A', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Submit another →</button>
                </div>
              ) : (
                <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); setDone(true) }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[{ l: 'Full Name ', k: 'name', t: 'text', p: 'Sarah Dlamini', r: true }, { l: 'Email Address ', k: 'email', t: 'email', p: 'sarah@email.com', r: true }, { l: 'Phone Number', k: 'phone', t: 'tel', p: '+27 82 000 0000', r: false }].map(f => (
                    <div key={f.k}>
                      <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E4D3A', marginBottom: '0.4rem' }}>{f.l}</label>
                      <input required={f.r} type={f.t} placeholder={f.p} value={form[f.k as keyof typeof form]} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm((p: typeof form) => ({ ...p, [f.k]: e.target.value }))}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.625rem', border: '1.5px solid rgba(30,77,58,0.18)', background: '#fff', color: '#1C2B1E', fontSize: '0.875rem', fontFamily: 'var(--font-body)', boxSizing: 'border-box' }} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E4D3A', marginBottom: '0.4rem' }}>Message</label>
                    <textarea rows={3} placeholder="Tell us about yourself and any questions..." value={form.message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setForm((p: typeof form) => ({ ...p, message: e.target.value }))}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.625rem', border: '1.5px solid rgba(30,77,58,0.18)', background: '#fff', color: '#1C2B1E', fontSize: '0.875rem', fontFamily: 'var(--font-body)', resize: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <button type="submit" style={{ padding: '0.9rem', borderRadius: '0.75rem', background: '#1E4D3A', color: '#FBF8F1', border: 'none', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Send Enquiry →</button>
                  <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#8BAF8A', margin: 0 }}>We respond within one business day.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Page: 12 — Enrol Now ────────────────────────────────────
function EnrolPage({ go }: { go: (p: Page) => void }) {
  const [step, setStep] = useState(1)
  const [chosen, setChosen] = useState<string[]>([])
  const [form, setForm] = useState({ name: '', email: '', phone: '', experience: '', startDate: '' })
  const [done, setDone] = useState(false)
  const chosenCourses = ALL_COURSES.filter(c => chosen.includes(c.id))
  const subtotal = chosenCourses.reduce((s, c) => s + c.fee, 0)
  const disc = getDiscount(chosen.length)
  const total = subtotal * (1 - disc)

  return (
    <div>
      <section style={{ background: '#FBF8F1', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <SectionHead label="Enrol Now" title="Start your journey today." sub="Complete your enrolment in three quick steps." center />

          {/* Step indicator */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', marginBottom: '3rem' }}>
            {[1, 2, 3].map((s, i) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem', fontFamily: 'var(--font-body)', background: step >= s ? '#1E4D3A' : '#D6E8D5', color: step >= s ? '#FBF8F1' : '#5a7a5e', transition: 'all 0.2s' }}>{s}</div>
                {i < 2 && <div style={{ width: '80px', height: '2px', background: step > s ? '#1E4D3A' : '#D6E8D5', transition: 'background 0.2s' }} />}
              </div>
            ))}
          </div>

          {done ? (
            <div style={{ textAlign: 'center', padding: '3rem', background: '#fff', borderRadius: '1.25rem', border: '1px solid rgba(30,77,58,0.1)' }}>
              <img src="/src/imports/image.png" alt="logo" style={{ width: '90px', objectFit: 'contain', margin: '0 auto 1.25rem', display: 'block' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: '#1E4D3A', margin: '0 0 0.75rem' }}>Enrolment Submitted!</h3>
              <p style={{ fontSize: '0.9rem', color: '#5a7a5e', lineHeight: 1.65, maxWidth: '380px', margin: '0 auto 1.5rem' }}>
                Thank you {form.name}! We've received your enrolment application and will confirm your place and invoice within one business day.
              </p>
              <button onClick={() => go('home')} style={{ padding: '0.875rem 2.5rem', borderRadius: '99px', background: '#1E4D3A', color: '#FBF8F1', border: 'none', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Back to Home</button>
            </div>
          ) : step === 1 ? (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: '#1E4D3A', marginBottom: '1rem' }}>Step 1: Choose your courses</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2rem' }}>
                {ALL_COURSES.map(c => {
                  const s = chosen.includes(c.id)
                  return (
                    <button key={c.id} onClick={() => setChosen((prev: string[]) => prev.includes(c.id) ? prev.filter((x: string) => x !== c.id) : [...prev, c.id])}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '0.875rem 1rem', borderRadius: '0.75rem', background: s ? '#D6E8D5' : '#fff', border: s ? '1.5px solid #1E4D3A' : '1.5px solid rgba(30,77,58,0.12)', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-body)' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid', borderColor: s ? '#1E4D3A' : 'rgba(30,77,58,0.3)', background: s ? '#1E4D3A' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: '#FBF8F1', flexShrink: 0 }}>{s && '✓'}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1C2B1E' }}>{c.title}</div>
                        <div style={{ fontSize: '0.7rem', color: '#8BAF8A' }}>{c.tag} · {c.duration}</div>
                      </div>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#C97D1A' }}>{formatZAR(c.fee)}</span>
                    </button>
                  )
                })}
              </div>
              {chosen.length > 0 && (
                <div style={{ background: '#D6E8D5', borderRadius: '0.875rem', padding: '1rem 1.25rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.875rem', color: '#1E4D3A' }}>{chosen.length} course{chosen.length > 1 ? 's' : ''} selected {disc > 0 && `· ${(disc * 100).toFixed(0)}% discount`}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: '#1E4D3A' }}>{formatZAR(total)}</span>
                </div>
              )}
              <button onClick={() => setStep(2)} disabled={chosen.length === 0}
                style={{ width: '100%', padding: '0.9rem', borderRadius: '0.875rem', background: chosen.length > 0 ? '#1E4D3A' : '#D6E8D5', color: chosen.length > 0 ? '#FBF8F1' : '#8BAF8A', border: 'none', fontWeight: 600, fontSize: '0.9rem', cursor: chosen.length > 0 ? 'pointer' : 'default', fontFamily: 'var(--font-body)' }}>
                Continue to Your Details →
              </button>
            </div>
          ) : step === 2 ? (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: '#1E4D3A', marginBottom: '1rem' }}>Step 2: Your details</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                {[{ l: 'Full Name ', k: 'name', t: 'text', p: 'Sarah Dlamini' }, { l: 'Email Address ', k: 'email', t: 'email', p: 'sarah@email.com' }, { l: 'Phone Number ', k: 'phone', t: 'tel', p: '+27 82 000 0000' }].map(f => (
                  <div key={f.k}>
                    <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E4D3A', marginBottom: '0.4rem' }}>{f.l}</label>
                    <input required type={f.t} placeholder={f.p} value={form[f.k as keyof typeof form]} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm((p: typeof form) => ({ ...p, [f.k]: e.target.value }))}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.625rem', border: '1.5px solid rgba(30,77,58,0.18)', background: '#fff', color: '#1C2B1E', fontSize: '0.875rem', fontFamily: 'var(--font-body)', boxSizing: 'border-box' }} />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E4D3A', marginBottom: '0.4rem' }}>Preferred Start Date</label>
                  <select value={form.startDate} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setForm((p: typeof form) => ({ ...p, startDate: e.target.value }))}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.625rem', border: '1.5px solid rgba(30,77,58,0.18)', background: '#fff', color: '#1C2B1E', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>
                    <option value="">Select a date</option>
                    <option>January 2027</option>
                    <option>April 2027</option>
                    <option>July 2027</option>
                    <option>October 2027</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.875rem' }}>
                <button onClick={() => setStep(1)} style={{ flex: 1, padding: '0.9rem', borderRadius: '0.875rem', background: '#D6E8D5', color: '#1E4D3A', border: 'none', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>← Back</button>
                <button onClick={() => { if (form.name && form.email && form.phone) setStep(3) }} style={{ flex: 2, padding: '0.9rem', borderRadius: '0.875rem', background: '#1E4D3A', color: '#FBF8F1', border: 'none', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Review & Confirm →</button>
              </div>
            </div>
          ) : (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: '#1E4D3A', marginBottom: '1rem' }}>Step 3: Review & confirm</h3>
              <div style={{ background: '#fff', borderRadius: '1rem', padding: '1.5rem', border: '1px solid rgba(30,77,58,0.1)', marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8BAF8A', margin: '0 0 0.75rem' }}>Your Details</p>
                {[['Name', form.name], ['Email', form.email], ['Phone', form.phone], ['Start Date', form.startDate || 'To be confirmed']].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', borderBottom: '1px solid rgba(30,77,58,0.07)', padding: '0.45rem 0' }}>
                    <span style={{ color: '#8BAF8A' }}>{k}</span><span style={{ color: '#1C2B1E', fontWeight: 600 }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: '#D6E8D5', borderRadius: '1rem', padding: '1.25rem', marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1E4D3A', margin: '0 0 0.75rem' }}>Courses & Fees</p>
                {chosenCourses.map(c => (
                  <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', padding: '0.3rem 0' }}>
                    <span style={{ color: '#3d5240' }}>{c.title}</span><span style={{ color: '#1E4D3A', fontWeight: 600 }}>{formatZAR(c.fee)}</span>
                  </div>
                ))}
                {disc > 0 && <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#5a7a5e', borderTop: '1px solid rgba(30,77,58,0.15)', marginTop: '0.5rem', paddingTop: '0.5rem' }}><span>Discount ({(disc * 100).toFixed(0)}%)</span><span>−{formatZAR(subtotal * disc)}</span></div>}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: '#1E4D3A', borderTop: '1px solid rgba(30,77,58,0.15)', marginTop: '0.5rem', paddingTop: '0.5rem' }}><span>Total</span><span>{formatZAR(total)}</span></div>
              </div>
              <div style={{ display: 'flex', gap: '0.875rem' }}>
                <button onClick={() => setStep(2)} style={{ flex: 1, padding: '0.9rem', borderRadius: '0.875rem', background: '#D6E8D5', color: '#1E4D3A', border: 'none', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>← Back</button>
                <button onClick={() => setDone(true)} style={{ flex: 2, padding: '0.9rem', borderRadius: '0.875rem', background: '#C97D1A', color: '#FBF8F1', border: 'none', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Confirm Enrolment ✓</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

// ─── Nav ─────────────────────────────────────────────────────
const NAV_PAGES: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About Us', page: 'about' },
  { label: 'Why Choose Us', page: 'why-us' },
  { label: 'Courses Overview', page: 'courses-overview' },
  { label: 'Professional Development', page: 'professional-development' },
  { label: 'Practical Skills', page: 'practical-skills' },
  { label: 'Calculate Fees', page: 'fees' },
  { label: 'Testimonials', page: 'testimonials' },
  { label: 'FAQ', page: 'faq' },
  { label: 'Contact Us', page: 'contact' },
  { label: 'Enrol Now', page: 'enrol' },
]

const PAGE_TITLES: Record<Page, string> = {
  'home': 'Home', 'about': 'About Us', 'why-us': 'Why Choose Us',
  'courses-overview': 'Courses Overview', 'professional-development': 'Professional Development',
  'practical-skills': 'Practical Skills', 'course-detail': 'Course Details',
  'fees': 'Calculate Fees', 'testimonials': 'Testimonials', 'faq': 'FAQ',
  'contact': 'Contact Us', 'enrol': 'Enrol Now',
}

const PAGE_ORDER: Page[] = ['home', 'about', 'why-us', 'courses-overview', 'professional-development', 'practical-skills', 'course-detail', 'fees', 'testimonials', 'faq', 'contact', 'enrol']

// ─── Main App ─────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [courseId, setCourseId] = useState<string>(ALL_COURSES[0].id)
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [aboutOpen, setAboutOpen] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)

  const toggleId = (id: string) => setSelectedIds((prev: string[]) => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])

  const go = (p: Page, cId?: string) => {
    if (cId) setCourseId(cId)
    setPage(p)
    setAboutOpen(false)
    setCoursesOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const pageNum = PAGE_ORDER.indexOf(page) + 1

  const navBtn = (active: boolean): React.CSSProperties => ({
    padding: '0.4rem 0.75rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600,
    fontFamily: 'var(--font-body)', background: active ? '#D6E8D5' : 'transparent', color: active ? '#1E4D3A' : '#3d5240', transition: 'all 0.15s',
  })

  const dropdownStyle = (minWidth: string): React.CSSProperties => ({
    position: 'absolute', top: '100%', left: 0, background: '#fff', borderRadius: '0.75rem', boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
    padding: '0.4rem', minWidth, zIndex: 200, marginTop: '0.25rem', border: '1px solid rgba(30,77,58,0.1)',
  })

  const dropdownItem = (active: boolean): React.CSSProperties => ({
    display: 'block', width: '100%', padding: '0.6rem 0.875rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer',
    fontSize: '0.82rem', fontWeight: 500, fontFamily: 'var(--font-body)', textAlign: 'left', background: active ? '#D6E8D5' : 'transparent', color: '#1E4D3A',
  })

  const coursePages: Page[] = ['courses-overview', 'professional-development', 'practical-skills', 'course-detail']

  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#FBF8F1', color: '#1C2B1E', minHeight: '100vh' }}>

      {/* ── NAV ── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(251,248,241,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(30,77,58,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <button onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }}>
            <img src="/src/imports/image.png" alt="Pawsitive Pet Academy" style={{ width: '44px', height: '44px', objectFit: 'contain' }} />
          </button>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', flex: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => go('home')} style={navBtn(page === 'home')}>Home</button>

            {/* About dropdown */}
            <div style={{ position: 'relative' }}>
              <button onClick={() => { setAboutOpen(!aboutOpen); setCoursesOpen(false) }} style={navBtn(['about', 'why-us'].includes(page))}>About ▾</button>
              {aboutOpen && (
                <div style={dropdownStyle('180px')}>
                  {[{ l: 'About Us', p: 'about' as Page }, { l: 'Why Choose Us', p: 'why-us' as Page }].map(i => (
                    <button key={i.l} onClick={() => go(i.p)} style={dropdownItem(page === i.p)}>{i.l}</button>
                  ))}
                </div>
              )}
            </div>

            {/* Courses dropdown */}
            <div style={{ position: 'relative' }}>
              <button onClick={() => { setCoursesOpen(!coursesOpen); setAboutOpen(false) }} style={navBtn(coursePages.includes(page))}>Courses ▾</button>
              {coursesOpen && (
                <div style={dropdownStyle('220px')}>
                  {[{ l: 'Courses Overview', p: 'courses-overview' as Page }, { l: 'Professional Development', p: 'professional-development' as Page }, { l: 'Practical Skills', p: 'practical-skills' as Page }].map(i => (
                    <button key={i.l} onClick={() => go(i.p)} style={dropdownItem(page === i.p)}>{i.l}</button>
                  ))}
                </div>
              )}
            </div>

            {[
              { label: 'Fees', page: 'fees' as Page },
              { label: 'Testimonials', page: 'testimonials' as Page },
              { label: 'FAQ', page: 'faq' as Page },
              { label: 'Contact', page: 'contact' as Page },
            ].map(n => (
              <button key={n.label} onClick={() => go(n.page)} style={navBtn(page === n.page)}>{n.label}</button>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <button onClick={() => go('enrol')} style={{ padding: '0.5rem 1.25rem', borderRadius: '99px', background: '#1E4D3A', color: '#FBF8F1', border: 'none', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)', whiteSpace: 'nowrap' }}>Enrol Now</button>
          </div>
        </div>

        {/* Page progress bar */}
        <div style={{ height: '2px', background: '#D6E8D5' }}>
          <div style={{ height: '100%', background: '#1E4D3A', width: `${(pageNum / 12) * 100}%`, transition: 'width 0.3s ease' }} />
        </div>
      </nav>

      {/* ── PAGE CONTENT ── */}
      <div style={{ paddingTop: '66px' }}>
        {/* Breadcrumb */}
        {page !== 'home' && (
          <div style={{ background: '#D6E8D5', padding: '0.6rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem' }}>
            <button onClick={() => go('home')} style={{ color: '#1E4D3A', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 600 }}>Home</button>
            <span style={{ color: '#8BAF8A' }}>›</span>
            <span style={{ color: '#1E4D3A', fontWeight: 500 }}>{PAGE_TITLES[page as Page]}</span>
            <span style={{ marginLeft: 'auto', fontSize: '0.68rem', color: '#5a7a5e' }}>Page {pageNum} of 12</span>
          </div>
        )}

        {page === 'home' && <HomePage go={go} />}
        {page === 'about' && <AboutPage go={go} />}
        {page === 'why-us' && <WhyUsPage go={go} />}
        {page === 'courses-overview' && <CoursesOverviewPage go={go} />}
        {page === 'professional-development' && <ProfessionalPage go={go} />}
        {page === 'practical-skills' && <PracticalPage go={go} />}
        {page === 'course-detail' && <CourseDetailPage courseId={courseId} selectedIds={selectedIds} onToggle={toggleId} go={go} />}
        {page === 'fees' && <FeesPage selectedIds={selectedIds} onToggle={toggleId} />}
        {page === 'testimonials' && <TestimonialsPage />}
        {page === 'faq' && <FAQPage go={go} />}
        {page === 'contact' && <ContactPage selectedIds={selectedIds} />}
        {page === 'enrol' && <EnrolPage go={go} />}
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#0e1f17', padding: '2.5rem 2rem', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', alignItems: 'start' }}>
          <div>
            <img src="/src/imports/image.png" alt="logo" style={{ width: '48px', height: '48px', objectFit: 'contain', marginBottom: '0.75rem' }} />
            <div style={{ fontSize: '0.78rem', color: 'rgba(251,248,241,0.4)', lineHeight: 1.6 }}>Pawsitive Pet Academy<br />Durban, KwaZulu-Natal<br />Est. 2023</div>
          </div>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8BAF8A', margin: '0 0 0.75rem' }}>Pages</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {NAV_PAGES.map(n => (
                <button key={n.page} onClick={() => go(n.page)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.78rem', color: 'rgba(251,248,241,0.4)', textAlign: 'left', padding: 0, fontFamily: 'var(--font-body)', transition: 'color 0.15s' }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.color = 'rgba(251,248,241,0.8)')}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.color = 'rgba(251,248,241,0.4)')}>
                  {n.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8BAF8A', margin: '0 0 0.75rem' }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.78rem', color: 'rgba(251,248,241,0.45)' }}>
              <span>info@pawsitivepetacademy.co.za</span>
              <span>+27 31 000 0000</span>
              <span>Mon–Fri 08:00–17:00</span>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '1280px', margin: '1.5rem auto 0', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.04)', fontSize: '0.72rem', color: 'rgba(251,248,241,0.25)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span>© 2026 Pawsitive Pet Academy. All rights reserved.</span>
          <span>12 pages</span>
        </div>
      </footer>
    </div>
  )
}