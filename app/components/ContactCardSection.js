import Image from "next/image";

const ContactCardSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#A8C8FF] to-[#FFDEFF] py-16 px-8 font-sans">
      <h2 className="text-center text-4xl font-semibold text-[#1E1E36] mb-10">Why We're Different</h2>
      
      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {/* Card 1 */}
        <div className="bg-[#bff9fd] rounded-2xl p-8 text-center flex flex-col items-center h-[300px] shadow-md">
          <Image src="/img/card1.png" alt="Network of Doctors" width={70} height={70} className="mb-6" />
          <p className="text-md font-semibold text-[#3A3A5A] leading-snug font-mono">
            CareValue Health has an integrated network of <strong>highly qualified</strong> and <strong>experienced</strong> American and Nigerian doctors.
          </p>
        </div>
        
        {/* Card 2 */}
        <div className="bg-[#b6e1fc] rounded-2xl p-8 text-center flex flex-col items-center h-[300px] shadow-md">
          <Image src="/img/card2.png" alt="Secure Appointments" width={70} height={70} className="mb-6" />
          <p className="text-md font-semibold text-[#3A3A5A] leading-snug font-mono">
            CareValue Health provides <strong>secure</strong> in-clinic and online appointment scheduling.
          </p>
        </div>
        
        {/* Card 3 */}
        <div className="bg-[#AFAFEF] rounded-2xl p-8 text-center flex flex-col items-center h-[300px] shadow-md">
          <Image src="/img/card3.png" alt="Patient Privacy" width={70} height={70} className="mb-6" />
          <p className="text-md font-semibold text-[#3A3A5A] leading-snug font-mono">
            CareValue Health prioritizes <strong>patient privacy</strong> and ensures the security of medical records.
          </p>
        </div>
        
        {/* Card 4 */}
        <div className="bg-[#AA90F1] rounded-2xl p-8 text-center flex flex-col items-center h-[300px] shadow-md">
          <Image src="/img/card4.png" alt="Affordable Payment Plans" width={70} height={70} className="mb-6" />
          <p className="text-md font-semibold text-[#3A3A5A] leading-snug font-mono">
            CareValue Health offers <strong>affordable payment plans</strong> to make healthcare accessible to everyone.
          </p>
        </div>
      </div>
      
      {/* Button */}
      <div className="text-center mt-10">
        <button className="bg-[#12104A] text-blue-400 px-10 py-3 rounded-full text-md font-semibold hover:bg-[#2f2f84] transition duration-300">
          Schedule a Consultation
        </button>
      </div>
    </section>
  );
};

export default ContactCardSection;
