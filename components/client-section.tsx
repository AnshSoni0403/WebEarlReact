import Image from "next/image"
import "../styles/all.css"

export default function ClientSection() {
  const clients = [
    { src: "/img/client/SYT.png", alt: "Client 1" },
    { src: "/img/client/MarkMe.png", alt: "Client 2" },
    { src: "/img/saptavidhi-logo.png", alt: "Client 3" },
    { src: "/img/client/wayout.png", alt: "Client 4" },
    { src: "/img/client/icare.png", alt: "Client 5" },
  ]

  return (
    <div className="client-area" style={{
      width: '100vw',
      height: '30vh',
      padding: '4rem 0',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        {clients.map((client, index) => (
          <div key={index} style={{
            flex: '1',
            minWidth: '180px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '80px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                maxWidth: '100%',
                maxHeight: '100%'
              }}>
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  style={{
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index < 2}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}