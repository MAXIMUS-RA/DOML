import { motion } from "framer-motion";

const companies = [
  { name: "Airtel", logo: "./Clients/airtel.png" },
  { name: "UBA", logo: "./Clients/img-2.png" },
  { name: "PAGA", logo: "./Clients/img-3.png" },
  { name: "MTN", logo: "./Clients/img-4.png" },
  { name: "Dangote", logo: "./Clients/img-5.png" },
  { name: "FirtBank", logo: "./Clients/img-6.png" },
  { name: "Google Cloude", logo: "./Clients/img-7.png" },
  { name: "Ebay", logo: "./Clients/img-8.png" },
  { name: "Linux", logo: "./Clients/img-9.png" },
  { name: "Spotify", logo: "./Clients/img-10.png" },
  { name: "AirBnB", logo: "./Clients/img-11.png" },
  { name: "Facebook", logo: "./Clients/img-12.png" },
  { name: "CocaCola", logo: "./Clients/img-13.png" },
  { name: "Zoom", logo: "./Clients/img-14.png" },
  { name: "Cloude", logo: "./Clients/img-15.png" },
  { name: "Netflix", logo: "./Clients/img-16.png" },
  { name: "Discord", logo: "./Clients/img-17.png" },
  { name: "Figma", logo: "./Clients/img-18.png" },
  { name: "PayPal", logo: "./Clients/img-19.png" },
  { name: "Adobe", logo: "./Clients/img-20.png" },
];

function Clients() {
  const firstRow = companies.slice(0, 7);
  const secondRow = companies.slice(7, 14);
  const thirdRow = companies.slice(14);

  return (
    <section className="py-8 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-4 md:space-y-8 overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-32"
            animate={{ x: [0, -100 * firstRow.length] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...firstRow, ...firstRow, ...firstRow].map((company, index) => (
              <motion.img
                key={index}
                src={company.logo}
                alt={company.name}
                className="h-6 md:h-8 w-auto flex-shrink-0 opacity-70"
                whileHover={{ opacity: 1, scale: 1.1 }}
              />
            ))}
          </motion.div>

          <motion.div
            className="flex gap-8 md:gap-32"
            animate={{ x: [-100 * secondRow.length, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...secondRow, ...secondRow, ...secondRow].map(
              (company, index) => (
                <motion.img
                  key={index}
                  src={company.logo}
                  alt={company.name}
                  className="h-6 md:h-8 w-auto flex-shrink-0 opacity-70"
                  whileHover={{ opacity: 1, scale: 1.1 }}
                />
              )
            )}
          </motion.div>

          <motion.div
            className="flex gap-8 md:gap-32"
            animate={{ x: [0, -100 * thirdRow.length] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {[...thirdRow, ...thirdRow, ...thirdRow].map((company, index) => (
              <motion.img
                key={index}
                src={company.logo}
                alt={company.name}
                className="h-6 md:h-8 w-auto flex-shrink-0 opacity-70"
                whileHover={{ opacity: 1, scale: 1.1 }}
              />
            ))}
          </motion.div>
        </div>
        <h2 className="text-center text-gray-600 md:mt-12 lg:mt-[82px] text-lg md:text-xl font-[Montserrat]">
          Trusted by the world's most ambitious teams.
        </h2>
      </div>
    </section>
  );
}

export default Clients;
