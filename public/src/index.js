import React, { useState } from 'react';
import { BookOpen, Play, CheckCircle, Award, ChevronRight, Menu, X, Star } from 'lucide-react';

const AzizaAcademy = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    { id: 1, title: "O'zbek adabiyoti", lessons: 12, level: "11-sinf", icon: <BookOpen className="text-blue-500" />, color: "bg-blue-50" },
    { id: 2, title: "Ingliz tili (Grammar)", lessons: 15, level: "B1-B2", icon: <Star className="text-yellow-500" />, color: "bg-yellow-50" },
    { id: 3, title: "Matematika (Integrallar)", lessons: 10, level: "Oliy", icon: <Award className="text-purple-500" />, color: "bg-purple-50" },
  ];

  const Navigation = () => (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <BookOpen className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Aziza Academy
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8 font-medium">
          {['Bosh sahifa', 'Kurslar', 'Mening darslarim'].map((item, idx) => (
            <button 
              key={idx}
              className="text-gray-600 hover:text-indigo-600 transition"
              onClick={() => setActiveTab(item === 'Bosh sahifa' ? 'home' : 'courses')}
            >
              {item}
            </button>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );

  const Hero = () => (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Muradova Aziza bilan <br/> 
          <span className="text-indigo-600">Bilimlar cho'qqisini</span> zabt eting!
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Zamonaviy interaktiv platforma orqali darslarni oson va qiziqarli tarzda o'rganing.
        </p>
        <button 
          onClick={() => setActiveTab('courses')}
          className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-700 transition transform hover:scale-105"
        >
          O'rganishni boshlash
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navigation />
      
      {activeTab === 'home' && (
        <>
          <Hero />
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Ommabop kurslar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div 
                  key={course.id} 
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer"
                  onClick={() => {setSelectedCourse(course); setActiveTab('details');}}
                >
                  <div className={`${course.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span className="flex items-center"><Play className="w-4 h-4 mr-1" /> {course.lessons} dars</span>
                    <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1" /> {course.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {activeTab === 'courses' && (
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Barcha kurslar ro'yxati</h2>
          <p className="text-gray-600">Tez kunda yangi darslar qo'shiladi...</p>
        </div>
      )}

      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">© 2026 Aziza Academy. Barcha huquqlar himoyalangan.</p>
          <p className="font-semibold text-indigo-400 italic">Muradova Aziza sizga rahmat aytadi</p>
        </div>
      </footer>
    </div>
  );
};

// Vercel/React uchun eksport
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AzizaAcademy />);
