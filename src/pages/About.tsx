
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import MemberCard from "@/components/ui/MemberCard";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { Users } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import members from "@/data/members";

const About = () => {
  const t = useTranslation();
  
  // Filter leadership members
  const leadershipMembers = members.filter(member => member.isLeadership);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-diagonal-stripes py-16 px-6">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">{t('about.title')}</h1>
            <p className="text-lg max-w-3xl">{t('about.description')}</p>
          </div>
        </section>
        
        {/* About Content */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">{t('about.mission')}</h2>
                <p className="mb-8">{t('about.missionDesc')}</p>
                
                <h2 className="text-2xl font-bold mb-4">{t('about.vision')}</h2>
                <p>{t('about.visionDesc')}</p>
              </div>
              
              <div className="border border-black/20 p-8">
                <h2 className="text-2xl font-bold mb-4">हमारा इतिहास</h2>
                <p className="mb-4">तत्सम की स्थापना 2010 में एनएसयूटी (तब NSIT) के छात्रों के एक समूह द्वारा की गई थी, जिनका उद्देश्य कैंपस में हिंदी भाषा और संस्कृति को बढ़ावा देना था। पिछले दशक में, तत्सम ने कई छात्रों को हिंदी साहित्य, कला और संस्कृति से जोड़ा है।</p>
                <p className="mb-4">हमने विभिन्न कार्यक्रमों जैसे कवि सम्मेलन, नाटक, वाद-विवाद प्रतियोगिताएं, फिल्म महोत्सव और सांस्कृतिक उत्सव का आयोजन किया है। हमारे कार्यक्रमों में प्रसिद्ध लेखकों, कवियों और कलाकारों ने भाग लिया है।</p>
                <p>हम अपने सदस्यों को हिंदी भाषा में लिखने, बोलने और अभिव्यक्त करने के अवसर प्रदान करते हैं। हमारा लक्ष्य एक ऐसा समुदाय बनाना है जो हिंदी भाषा और साहित्य के प्रति जुनून साझा करता है।</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section className="py-12 px-6 bg-secondary">
          <div className="container mx-auto">
            <SectionHeading 
              title={t('members.team')} 
              icon={<Users size={20} />} 
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {leadershipMembers.map(member => (
                <MemberCard
                  key={member.id}
                  name={member.name}
                  position={member.position}
                  image={member.image}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Achievements */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <SectionHeading title="उपलब्धियां" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-black/20 p-6">
                <h3 className="text-xl font-bold mb-4">राष्ट्रीय स्तर पर मान्यता</h3>
                <p>2018 में, तत्सम को राष्ट्रीय युवा हिंदी संस्थान द्वारा 'उत्कृष्ट युवा हिंदी सोसायटी' का पुरस्कार मिला।</p>
              </div>
              
              <div className="border border-black/20 p-6">
                <h3 className="text-xl font-bold mb-4">प्रतिष्ठित कार्यक्रम</h3>
                <p>हमारा वार्षिक 'हिंदी उत्सव' दिल्ली के सबसे बड़े विश्वविद्यालय-स्तरीय हिंदी कार्यक्रमों में से एक है, जिसमें हर साल 1000 से अधिक प्रतिभागी भाग लेते हैं।</p>
              </div>
              
              <div className="border border-black/20 p-6">
                <h3 className="text-xl font-bold mb-4">प्रकाशन</h3>
                <p>हमारी वार्षिक पत्रिका 'अक्षर' में छात्रों की रचनाएँ प्रकाशित होती हैं और इसे राष्ट्रीय स्तर पर सराहा गया है।</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Join Us */}
        <section className="py-12 px-6 bg-diagonal-stripes">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('members.join')}</h2>
            <p className="max-w-2xl mx-auto mb-8">तत्सम से जुड़कर हिंदी भाषा, साहित्य और संस्कृति को बढ़ावा देने में हमारी मदद करें। हम सभी रुचियों और कौशल स्तरों वाले सदस्यों का स्वागत करते हैं।</p>
            <button className="bg-black text-white px-8 py-3 hover:bg-black/80 transition-colors">
              सदस्यता के लिए आवेदन करें
            </button>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-3xl">
            <NewsletterForm />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
