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
          className="w-[400px] hidden md:block"
          src="https://negmar.com/wp-content/uploads/2023/03/girisimin-gucu-1.jpg"
          alt="NegmarHero"
        />
      </div>
      <News />
    </>
  );
}
