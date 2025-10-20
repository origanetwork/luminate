import Image from "next/image";

export default function CertificationsGrid() {
  const items = [
    // Removed msme.png as it's not present in the repo snapshot
    { src: "/assets/certification/vidyadan.jpg", alt: "Vidyadan" },
    { src: "/assets/certification/gog1.png", alt: "Google Certification" },
    { src: "/assets/certification/eiaci.jpg", alt: "EIACI" },
    { src: "/assets/certification/mesc.jpg", alt: "MESC" },
    { src: "/assets/certification/ias.jpg", alt: "IAS" },
    { src: "/assets/certification/telecom.png", alt: "Telecom" },
    { src: "/assets/certification/iaf.webp", alt: "IAF" },
    { src: "/assets/certification/nielit.jpg", alt: "NIELIT" },
    { src: "/assets/certification/googleads.jpg", alt: "Google Ads" },
    { src:  "/assets/certification/kab.jpg", alt: "KAB" }

  ];
  return (
    <section id="certifications" className="section container-px mx-auto">
      <h2 className="text-center text-3xl md:text-4xl font-semibold">Certifications</h2>
      <p className="mt-4 text-center text-foreground/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
        Issued by council for technical development continuing academic educational & scientific studies
      </p>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
        {items.map(({ src, alt }) => (
          <div key={src} className="relative h-24 sm:h-28 md:h-32 flex items-center justify-center w-full surface p-3 rounded-xl">
            <Image
              src={src}
              alt={alt}
              width={1000}
              height={1000}
              className=" h-full w-full  opacity-90"
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}



