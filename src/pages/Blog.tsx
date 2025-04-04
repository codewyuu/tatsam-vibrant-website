
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import ArticleCard from "@/components/ui/ArticleCard";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { BookOpen, Filter, Search } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import blogs from "@/data/blogs";

const Blog = () => {
  const t = useTranslation();
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Get all categories
  const allCategories = Array.from(new Set(blogs.map(blog => blog.category)));
  
  // Filter blogs by category and search query
  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = !categoryFilter || blog.category === categoryFilter;
    const matchesSearch = !searchQuery || 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-diagonal-stripes py-16 px-6">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">{t('blog.title')}</h1>
            <p className="text-lg max-w-3xl">हिंदी भाषा, साहित्य, संस्कृति और समसामयिक विषयों पर लेख और विचार पढ़ें।</p>
          </div>
        </section>
        
        {/* Search and Filters */}
        <section className="py-6 px-6 border-b border-black/20">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex items-center space-x-2">
                <Filter size={20} />
                <span className="font-medium">Filter:</span>
                
                <div className="flex flex-wrap gap-2">
                  <button 
                    className={`px-3 py-1 text-sm border border-black/20 ${!categoryFilter ? 'bg-black text-white' : 'hover:bg-black/5'}`}
                    onClick={() => setCategoryFilter(null)}
                  >
                    All
                  </button>
                  
                  {allCategories.map(category => (
                    <button 
                      key={category}
                      className={`px-3 py-1 text-sm border border-black/20 ${categoryFilter === category ? 'bg-black text-white' : 'hover:bg-black/5'}`}
                      onClick={() => setCategoryFilter(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="relative max-w-xs">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full border border-black/20 pl-10 pr-4 py-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Articles */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <SectionHeading 
              title={t('blog.latest')} 
              icon={<BookOpen size={20} />} 
            />
            
            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredBlogs.map(blog => (
                  <ArticleCard
                    key={blog.id}
                    id={blog.id}
                    title={blog.title}
                    excerpt={blog.excerpt}
                    date={blog.date}
                    image={blog.image}
                    category={blog.category}
                  />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p>No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Featured Posts */}
        <section className="py-12 px-6 bg-secondary">
          <div className="container mx-auto">
            <SectionHeading title="विशेष लेख" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-black/20 bg-white">
                <div className="placeholder-box aspect-video">
                  Featured Image
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">हिंदी दिवस विशेष: हिंदी का महत्व और भविष्य</h3>
                  <p className="text-gray-600 mb-2">सितंबर 14, 2024</p>
                  <p className="mb-4">हिंदी दिवस के अवसर पर हिंदी भाषा के महत्व, वर्तमान स्थिति और भविष्य पर विशेष लेख।</p>
                  <a href="#" className="text-sm font-medium hover:underline">
                    पूरा लेख पढ़ें →
                  </a>
                </div>
              </div>
              
              <div className="border border-black/20 bg-white">
                <div className="placeholder-box aspect-video">
                  Featured Image
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">तकनीकी युग में हिंदी भाषा का विकास</h3>
                  <p className="text-gray-600 mb-2">अगस्त 25, 2024</p>
                  <p className="mb-4">डिजिटल युग में हिंदी भाषा के विकास, चुनौतियों और संभावनाओं पर विशेष लेख।</p>
                  <a href="#" className="text-sm font-medium hover:underline">
                    पूरा लेख पढ़ें →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Write for Us */}
        <section className="py-12 px-6 bg-diagonal-stripes">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">हमारे लिए लिखें</h2>
            <p className="max-w-2xl mx-auto mb-8">क्या आप हिंदी में लिखने के शौकीन हैं? हम आपके लेख, कविताएँ, कहानियाँ और विचार प्रकाशित करने के लिए आमंत्रित करते हैं।</p>
            <button className="bg-black text-white px-8 py-3 hover:bg-black/80 transition-colors">
              लेख जमा करें
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

export default Blog;
