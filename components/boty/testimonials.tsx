const gallery = ["https://beinghiramani.com/cdn/shop/files/about-hira-2.jpg?v=1759144903", "https://beinghiramani.com/cdn/shop/files/about-hira.jpg?v=1759144805", "https://beinghiramani.com/cdn/shop/files/2_bd28a83e-0510-477c-944b-07e712177cae.png?v=1776984806"]

export function Testimonials() {
  const marqueeGallery = [...gallery, ...gallery]

  return (
    <section className="overflow-hidden bg-card py-20" aria-labelledby="follow-along-heading">
      <div className="mb-10 text-center">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Follow along</span>
        <h2 id="follow-along-heading" className="mt-3 font-serif text-5xl">@hiramanicouture</h2>
      </div>
      <div className="overflow-hidden">
        <div className="flex w-max gap-5 px-6 motion-safe:animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
          {marqueeGallery.map((image, index) => (
            <a href="https://www.instagram.com/hiramanicouture" target="_blank" rel="noreferrer" key={`${image}-${index}`} className="min-w-[72vw] overflow-hidden rounded-3xl sm:min-w-[30vw]">
              <img src={image} alt={`Hira Mani Couture look ${(index % gallery.length) + 1}`} className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
