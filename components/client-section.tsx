import Image from "next/image"
import "../styles/all.css"

export default function ClientSection() {
  const clients = [
    { src: "/img/client/11.png", alt: "Client 1" },
    { src: "/img/client/22.png", alt: "Client 2" },
    { src: "/img/client/55.png", alt: "Client 3" },
    { src: "/img/client/zambet_newlogo.png", alt: "Zambet", style: { width: "120px" } },
    { src: "/img/client/66.png", alt: "Client 4" },
    { src: "/img/client/33.png", alt: "Client 5" },
  ]

  return (
    <div className="client-area">
      <div className="container">
        <div className="row d-flex align-items-center">
          {clients.map((client, index) => (
            <div key={index} className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div className="single-client-img">
                <Image
                  src={client.src || "/placeholder.svg"}
                  alt={client.alt}
                  width={client.style?.width ? Number.parseInt(client.style.width) : 120}
                  height={80}
                  style={client.style}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
