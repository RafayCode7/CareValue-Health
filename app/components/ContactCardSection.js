import Image from "next/image";

const ContactCardSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-200 to-purple-200 py-16 px-8 font-sans">
      <h2 className="text-center text-3xl font-semibold text-[#12104A] mb-10">Why We're Different</h2>
      
      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {/* Card 1 */}
        <div className="bg-indigo-100 rounded-lg p-8 text-center flex flex-col items-center justify-between h-[320px] shadow-lg">
          <Image src="/img/card1.png" alt="Network of Doctors" width={80} height={80} className="mb-4" />
          <p className="text-md font-medium text-[#12104A] leading-relaxed">
            CareValue Health has an integrated network of highly qualified and experienced American and Nigerian doctors.
          </p>
        </div>
        
        {/* Card 2 */}
        <div className="bg-blue-100 rounded-lg p-8 text-center flex flex-col items-center justify-between h-[320px] shadow-lg">
          <Image src="/img/card2.png" alt="Secure Appointments" width={80} height={80} className="mb-4" />
          <p className="text-md font-medium text-[#12104A] leading-relaxed">
            CareValue Health provides secure in-clinic and online appointment scheduling.
          </p>
        </div>
        
        {/* Card 3 */}
        <div className="bg-purple-100 rounded-lg p-8 text-center flex flex-col items-center justify-between h-[320px] shadow-lg">
          <Image src="/img/card3.png" alt="Patient Privacy" width={80} height={80} className="mb-4" />
          <p className="text-md font-medium text-[#12104A] leading-relaxed">
            CareValue Health prioritizes patient privacy and ensures the security of medical records.
          </p>
        </div>
        
        {/* Card 4 */}
        <div className="bg-indigo-100 rounded-lg p-8 text-center flex flex-col items-center justify-between h-[320px] shadow-lg">
          <Image src="/img/card4.png" alt="Affordable Payment Plans" width={80} height={80} className="mb-4" />
          <p className="text-md font-medium text-[#12104A] leading-relaxed">
            CareValue Health offers affordable payment plans to make healthcare accessible to everyone.
          </p>
        </div>
      </div>
      
      {/* Button */}
      <div className="text-center mt-10">
        <button className="bg-[#12104A] text-white px-8 py-3 rounded-full text-md font-semibold hover:bg-blue-800 transition duration-300">
          Schedule a Consultation
        </button>
      </div>
    </section>
  );
};

export default ContactCardSection;
