
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import MemberCard from "@/components/ui/MemberCard";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { Users } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import members from "@/data/members";

const Members = () => {
  const t = useTranslation();
  
  // Filter members
  const leadershipMembers = members.filter(member => member.isLeadership);
  const regularMembers = members.filter(member => !member.isLeadership);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-diagonal-stripes py-16 px-6">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">{t('members.title')}</h1>
            <p className="text-lg max-w-3xl">तत्सम के सदस्यों से मिलें, जो हिंदी भाषा, साहित्य और संस्कृति को बढ़ावा देने के लिए प्रतिबद्ध हैं।</p>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <SectionHeading 
              title="नेतृत्व टीम" 
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
        
        {/* Core Members */}
        <section className="py-12 px-6 bg-secondary">
          <div className="container mx-auto">
            <SectionHeading 
              title="सदस्य" 
              icon={<Users size={20} />} 
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {regularMembers.map(member => (
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
        
        {/* Testimonials */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <SectionHeading title="सदस्यों के अनुभव" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-black/20 p-6">
                <p className="italic mb-4">"तत्सम से जुड़ना मेरे लिए एक अद्भुत अनुभव रहा है। यहां मुझे हिंदी भाषा और साहित्य के प्रति अपने जुनून को विकसित करने का अवसर मिला है। सोसायटी के कार्यक्रमों ने मुझे अपनी सांस्कृतिक जड़ों से जुड़े रहने में मदद की है।"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-black/10 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">अनुष्का पाठक</h4>
                    <p className="text-sm text-gray-600">सदस्य, 2022 से</p>
                  </div>
                </div>
              </div>
              
              <div className="border border-black/20 p-6">
                <p className="italic mb-4">"तत्सम ने मुझे अपनी हिंदी लेखन कौशल को बेहतर बनाने और अपने विचारों को अभिव्यक्त करने का मंच प्रदान किया है। सोसायटी के साथियों और मेंटर्स से मुझे बहुत कुछ सीखने को मिला है, और मैं अपने व्यक्तित्व के विकास के लिए तत्सम का आभारी हूं।"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-black/10 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">राहुल शर्मा</h4>
                    <p className="text-sm text-gray-600">सदस्य, 2021 से</p>
                  </div>
                </div>
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

export default Members;
