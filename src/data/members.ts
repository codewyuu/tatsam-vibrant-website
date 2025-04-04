
export interface Member {
  id: string;
  name: string;
  position: string;
  image?: string;
  email?: string;
  bio?: string;
  isLeadership?: boolean;
}

const members: Member[] = [
  {
    id: "1",
    name: "अनुराग शर्मा",
    position: "अध्यक्ष",
    email: "anurag.sharma@example.com",
    bio: "अनुराग तत्सम के अध्यक्ष हैं और पिछले तीन वर्षों से सोसायटी से जुड़े हैं। वे हिंदी साहित्य के उत्साही पाठक और लेखक हैं।",
    isLeadership: true
  },
  {
    id: "2",
    name: "शिवानी वर्मा",
    position: "उपाध्यक्ष",
    email: "shivani.verma@example.com",
    bio: "शिवानी हिंदी कविता और नाटक में विशेष रुचि रखती हैं। वे सोसायटी के कई कार्यक्रमों का संचालन करती हैं।",
    isLeadership: true
  },
  {
    id: "3",
    name: "विकास पटेल",
    position: "सचिव",
    email: "vikas.patel@example.com",
    bio: "विकास सोसायटी के प्रशासनिक कार्यों को संभालते हैं और कार्यक्रमों के आयोजन में महत्वपूर्ण भूमिका निभाते हैं।",
    isLeadership: true
  },
  {
    id: "4",
    name: "दीपिका सिंह",
    position: "कोषाध्यक्ष",
    email: "deepika.singh@example.com",
    bio: "दीपिका सोसायटी के वित्तीय मामलों को संभालती हैं और फंडिंग और बजट का प्रबंधन करती हैं।",
    isLeadership: true
  },
  {
    id: "5",
    name: "अमित राय",
    position: "कार्यक्रम समन्वयक",
    email: "amit.rai@example.com",
    bio: "अमित सोसायटी के कार्यक्रमों और गतिविधियों की योजना बनाते और समन्वित करते हैं।",
    isLeadership: false
  },
  {
    id: "6",
    name: "नेहा गुप्ता",
    position: "मीडिया समन्वयक",
    email: "neha.gupta@example.com",
    bio: "नेहा सोसायटी के सोशल मीडिया और प्रचार पर काम करती हैं।",
    isLeadership: false
  },
  {
    id: "7",
    name: "राहुल मिश्रा",
    position: "तकनीकी समन्वयक",
    email: "rahul.mishra@example.com",
    bio: "राहुल सोसायटी की वेबसाइट और तकनीकी जरूरतों का प्रबंधन करते हैं।",
    isLeadership: false
  },
  {
    id: "8",
    name: "प्रिया जैन",
    position: "सदस्य",
    email: "priya.jain@example.com",
    isLeadership: false
  },
  {
    id: "9",
    name: "अरुण कुमार",
    position: "सदस्य",
    email: "arun.kumar@example.com",
    isLeadership: false
  },
  {
    id: "10",
    name: "मेघा शर्मा",
    position: "सदस्य",
    email: "megha.sharma@example.com",
    isLeadership: false
  },
  {
    id: "11",
    name: "सुनील यादव",
    position: "सदस्य",
    email: "sunil.yadav@example.com",
    isLeadership: false
  },
  {
    id: "12",
    name: "रितु वर्मा",
    position: "सदस्य",
    email: "ritu.verma@example.com",
    isLeadership: false
  }
];

export default members;
