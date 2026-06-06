export default function TicketIncludes() {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/webinar-presenter-cape-town.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        minHeight: '480px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '60px clamp(15px, 4vw, 60px)',
      }}
    >
      {/* White card — right-aligned, Zirk visible on left through background */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.93)',
          borderRadius: '4px',
          padding: 'clamp(24px, 3vw, 40px) clamp(20px, 3vw, 40px)',
          maxWidth: '520px',
          width: '100%',
        }}
      >
        <p style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '13px', fontWeight: 600, color: '#C89116', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 6px' }}>
          MEET YOUR PRESENTER
        </p>
        <h2 style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '28px', fontWeight: 700, color: '#1D2B42', margin: '0 0 20px', lineHeight: 1.2 }}>
          Zirk Coetzee
        </h2>
        <p style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '15px', fontWeight: 400, color: '#1D2B42', lineHeight: 1.7, margin: '0 0 16px' }}>
          Zirk Coetzee is part of the Wealth Masters Club Strategy Team, focused on helping investors understand how wealth is actually built through property.
        </p>
        <p style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '15px', fontWeight: 400, color: '#1D2B42', lineHeight: 1.7, margin: '0 0 16px' }}>
          His work centres on one principle: <strong>Strategy before acquisition.</strong>
        </p>
        <p style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '15px', fontWeight: 400, color: '#1D2B42', lineHeight: 1.7, margin: 0 }}>
          Rather than focusing on deals or trends, Zirk guides investors to think in terms of structure, positioning, and long-term portfolio growth, the foundations behind sustainable wealth creation.
        </p>
      </div>
    </div>
  )
}
