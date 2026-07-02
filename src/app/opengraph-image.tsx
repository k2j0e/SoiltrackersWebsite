import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'Soiltrackers - Chain of Custody Built In'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'linear-gradient(to bottom, #013528, #051914)',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
          {/* Leaf Icon simplified for OG */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="80" fill="#139c55">
            <path d="M21 3C18.6 1.1 15.1 1 12.4 2.6C10.7 3.6 9.3 5.2 8.5 7C7.3 6.2 5.6 6.2 4.4 7.1C3.1 8 2.3 9.5 2.4 11C2.5 12.5 3.4 13.9 4.7 14.7C6.2 15.5 7.9 15.4 9.2 14.4C10.1 16.3 11.6 17.8 13.4 18.9C15.8 20.3 18.6 20.7 21 19.9C21.8 19.7 22.2 18.8 21.9 18C21.7 17.2 20.8 16.9 20 17.1C18.2 17.7 16.1 17.4 14.2 16.3C11.9 14.9 10.3 12.4 10.1 9.7C10.1 9.5 10.1 9.3 10.1 9.1L13.7 13.3L15.3 11.9L11 7.1C11.9 5.8 13.3 4.7 14.8 4.1C16.5 3.5 18.4 3.6 19.8 4.7C19.9 4.7 20.1 4.8 20.2 4.7C20.3 4.7 20.4 4.6 20.4 4.5C20.4 4.3 20.4 4.2 20.3 4.1L21 3ZM8 13.3C7 14.1 5.5 14.2 4.4 13.4C3.3 12.8 2.7 11.7 2.6 10.6C2.6 9.5 3.1 8.4 4.1 7.7C5.3 6.9 6.8 6.9 7.9 7.8L8 13.3Z" />
          </svg>
          <div style={{ fontSize: '80px', fontWeight: 'bold', letterSpacing: '0.05em' }}>SOILTRACKERS</div>
        </div>
        <div style={{ fontSize: '40px', color: '#aadd66', textAlign: 'center', maxWidth: '800px', lineHeight: 1.4 }}>
          Chain of custody for every load of soil.
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
