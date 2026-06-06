const items = [
  'Full access to the live Property Investment Masterclass',
  'Practical property investment strategies you can apply immediately',
  'Guidance on structure, trusts, tax efficiency, and long-term wealth planning',
  'Direct insight from Wealth Masters Club advisors',
  'Networking with like-minded investors, professionals, and business owners',
  'Tea, coffee, and refreshments',
  'Digital copy of Rich Mind Rich Man',
  'Special Destinata contribution price: only R400pp for the first 20 tickets',
]

export default function TicketIncludes() {
  return (
    <div style={{ backgroundColor: '#C89116', padding: '60px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ color: '#FFFFFF', fontFamily: '"Montserrat", Sans-serif', fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', margin: '0 0 24px' }}>
          Your Ticket Includes
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {items.map((item, i) => (
            <li key={i} style={{ color: '#FFFFFF', fontFamily: '"Poppins", Sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: 1.6, marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
