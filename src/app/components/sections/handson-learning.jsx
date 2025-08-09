import Marquee from "react-fast-marquee";
import Image from "next/image"; // Import the Next.js Image component

const logos = [
  "/css3.svg",
  "/github.svg",
  "/graphql.svg",
  "/pinia.svg",
  "/psql.svg",
  "/react.svg",
  "/sequelize.svg",
  "/svelte.svg",
  "/psql.svg",
  "/react.svg",
  "/css3.svg",
  "/github.svg",
  "/graphql.svg",
  "/pinia.svg",
  "/psql.svg",
  "/react.svg",
  "/sequelize.svg",
  "/svelte.svg",
  "/psql.svg",
  "/react.svg",
  "/css3.svg",
  "/github.svg",
  "/graphql.svg",
  "/pinia.svg",
  "/psql.svg",
  "/react.svg",
  "/sequelize.svg",
  "/svelte.svg",
  "/psql.svg",
  "/react.svg",
];

const HandsOnLearning = () => {
  return (
    <section className="bg-lightBlue py-16">
      <div className="text-center text-white mb-8 px-4">
        <h2 className="text-4xl font-bold">No Lectures</h2>
        <p className="text-lg mt-4 max-w-xl mx-auto">
          Get your hands dirty and start building from day 1
        </p>
      </div>

      <div className="overflow-hidden">
        <Marquee gradient={false} speed={40} pauseOnHover={false}>
          <div className="flex space-x-8 px-8">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white rounded-lg p-4 shadow-lg"
                style={{ width: "100px", height: "100px" }}
              >
                <Image
                  src={logo}
                  alt={`Logo ${index}`}
                  className="h-full w-full object-contain"
                  width={100} // Specify width and height for optimization
                  height={100}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default HandsOnLearning;
