import Mainpagination from "./components/Mainpagination";
import News from "./components/News";

export default function Home() {
  return (
    <>
      <Mainpagination />
      <div className="flex p-5 py-12 md:px-5 md:py-24 w-full max-w-6xl mx-auto items-center justify-center gap-16">
        <div className="max-w-lg flex flex-col gap-8">
          <div>
            <h1 className="font-bold text-xl md:text-3xl">
              POWER OF ENTREPRENEURSHIP
            </h1>
            <h2 className="font-bold text-base md:text-2xl">
              We use our entrepreneurial energy for a sustainable world.
            </h2>
          </div>
          <p>
            Negmar’s story started with an ethical understanding that considers
            the values it believes in as commercial reference, on a solid
            corporate structure. As an international investment and maritime
            company, it has taken steps to lead the sector since its first year.
            Parallel to its growth in logistics and maritime, it supported its
            investments in technology, agriculture and food with different
            initiatives in construction. Gathering entrepreneurs under the roof
            of a group, Negmar has become an establishment that provides
            corporate support to the start-up tradition in our country. Today,
            Negmar continues to add value to our country with the synergy and
            entrepreneurial energy it has created with its international and
            national partners. We are happy and proud to share this
            entrepreneurial and innovative perspective with all our employees
            and business partners.
          </p>
        </div>
        <img
          className="w-[400px] hidden md:block rounded-lg"
          src="https://negmar.com/wp-content/uploads/2023/03/girisimin-gucu-1.jpg"
          alt="NegmarHero"
        />
      </div>
      <News />
      <div className="flex flex-col-reverse md:flex-row w-full mx-auto items-center justify-center max-w-7xl gap-10 my-24 p-5">
        <div>
          <h1 className="text-3xl md:text-5xl text-blue-900 font-bold mb-5">OUR FOUNDER</h1>
          <p className="max-w-lg">
            “The second rule of entrepreneurship is to be proven reliable. Every
            person is reliable, every businessman is reliable, every
            entrepreneur is expected to be reliable. Be transparent and
            accountable to yourself, your partners, your government, your family
            and everyone around you. This makes you “proven reliable”. Everyone
            can be reliable, but being proven reliable is more important and
            meaningful. Let everyone around you, your company, the people you
            work with, your family and friends know you as proven reliable.”
          </p>
          <div className="flex place-content-between items-center w-full mt-6">
            <div>
              <h1 className="font-bold text-2xl text-blue-900 mb-2">
                Mehmet KOÇ
              </h1>
              <p>Chairman of the Board</p>
            </div>
            <img
              className="max-h-[100px]"
              src="https://negmar.com/wp-content/uploads/elementor/thumbs/ok-q5asb74oi3p9plgj59uc2iawxfb2ekvg7b8k2ni3uc.png"
              alt="Arrow"
            />
          </div>
        </div>
        <img
          className="rounded-lg sm:max-h-[350px] md:max-h-[450px] object-cover"
          src="https://negmar.com/wp-content/uploads/2023/03/mehmet-koc.jpeg"
          alt="Founder"
        />
      </div>
    </>
  );
}
