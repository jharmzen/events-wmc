interface Speaker {
  roleLabel: string;
  name: string | null;
  subRole: string | null;
  bio: string;
  image: string;
}

const speakers: Speaker[] = [
  {
    roleLabel: 'SPECIAL GUEST SPEAKER',
    name: null,
    subRole: "SOUTH AFRICA'S LEADING BOND ORIGINATOR",
    bio: "Discover how experienced investors access funding and leverage Other People's Money to grow their portfolios.",
    image: '/images/30th-birthday/silhouette-male.png',
  },
  {
    roleLabel: 'HOST AND FOUNDER OF WEALTH MASTERS CLUB',
    name: 'COERT COETZEE',
    subRole: null,
    bio: 'Sharing the principles that have helped thousands of investors build lasting wealth over three decades.',
    image: '/images/30th-birthday/photo-coert-headshot.png',
  },
  {
    roleLabel: 'SPECIAL GUEST SPEAKER',
    name: null,
    subRole: 'LEADING PROPERTY ATTORNEY',
    bio: 'Learn how the right legal structures help protect wealth and create better investment outcomes.',
    image: '/images/30th-birthday/silhouette-female.png',
  },
]


const SpeakerCard = ({ speaker }: { speaker: Speaker }) => (
  <div
    style={{
      flex: '0 0 calc(33.333% - 14px)',
      minWidth: '260px',
      border: '2px solid #c89a4f',
      borderRadius: '6px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {/* Image area */}
    <div style={{ backgroundColor: '#0a1828' }}>
      <img
        src={speaker.image}
        alt={speaker.name ?? speaker.roleLabel}
        style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }}
      />
    </div>

    {/* Text area */}
    <div
      style={{
        backgroundColor: 'rgba(13,32,59,0.85)',
        padding: '20px 16px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Role label */}
      <p
        style={{
          color: '#FFFFFF',
          fontFamily: '"Montserrat", Sans-serif',
          fontSize: '13px',
          fontWeight: 700,
          textTransform: 'uppercase',
          textAlign: 'center',
          margin: '0 0 6px',
        }}
      >
        {speaker.roleLabel}
      </p>

      {/* Speaker name */}
      {speaker.name && (
        <p
          style={{
            color: '#FFFFFF',
            fontFamily: '"Antonio", sans-serif',
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            fontWeight: 900,
            textTransform: 'uppercase',
            textAlign: 'center',
            margin: '0 0 6px',
          }}
        >
          {speaker.name}
        </p>
      )}

      {/* Sub-role tag */}
      {speaker.subRole && (
        <p
          style={{
            color: '#c89a4f',
            fontFamily: '"Montserrat", Sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            textAlign: 'center',
            margin: '0 0 12px',
          }}
        >
          {speaker.subRole}
        </p>
      )}

      {/* Bio */}
      <p
        style={{
          color: 'rgba(255,255,255,0.8)',
          fontFamily: '"Poppins", Sans-serif',
          fontSize: '13px',
          lineHeight: 1.65,
          textAlign: 'center',
          margin: 0,
        }}
      >
        {speaker.bio}
      </p>
    </div>
  </div>
)

export default function Speakers() {
  return (
    <section
      id="speakers"
      style={{
        backgroundColor: '#0D203B',
        padding: 'clamp(50px, 7vw, 80px) clamp(20px, 5vw, 60px)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Heading block */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 56px)' }}>
          <p
            style={{
              color: '#FFFFFF',
              fontFamily: '"Montserrat", Sans-serif',
              fontWeight: 700,
              fontSize: '18px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              margin: '0 0 8px',
            }}
          >
            LEARN FROM
          </p>
          <h2
            style={{
              color: '#c89a4f',
              fontFamily: '"Antonio", sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(28px, 4vw, 46px)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              margin: 0,
            }}
          >
            SOUTH AFRICA'S LEADING EXPERTS
          </h2>
        </div>

        {/* Speaker cards */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {speakers.map((s, i) => (
            <SpeakerCard key={i} speaker={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
