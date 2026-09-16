import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  MessageSquare, 
  Sparkles, 
  PenTool, 
  Headphones, 
  FileText, 
  GraduationCap, 
  Clock, 
  ShieldCheck, 
  Lock, 
  LogOut, 
  MessageCircle, 
  Menu, 
  X,
  Calendar,
  AlertTriangle
} from 'lucide-react';
import { StudentActivation } from './types';
import { 
  getStoredActivation, 
  clearStoredActivation, 
  getDaysRemaining, 
  TEACHER_NAME, 
  TEACHER_NAME_EN, 
  ADMIN_PIN, 
  createStudentRequestWhatsAppUrl 
} from './utils/security';
import { LockScreen } from './components/LockScreen';
import { TeacherDashboard } from './components/TeacherDashboard';
import { SpeakingSection } from './components/SpeakingSection';
import { ReadingSection } from './components/ReadingSection';
import { VocabularySection } from './components/VocabularySection';
import { GrammarSection } from './components/GrammarSection';
import { ListeningSection } from './components/ListeningSection';
import { WritingSection } from './components/WritingSection';
import { WorksheetsSection } from './components/WorksheetsSection';
import { SocialFooter } from './components/SocialFooter';
import { SOCIAL_LINKS } from './data/curriculumData';

type ViewMode = 'lock' | 'teacher' | 'curriculum';
type CurriculumSection = 'speaking' | 'reading' | 'vocabulary' | 'grammar' | 'listening' | 'writing' | 'worksheets';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('lock');
  const [activeSection, setActiveSection] = useState<CurriculumSection>('speaking');
  const [activation, setActivation] = useState<StudentActivation | null>(null);
  const [isExpired, setIsExpired] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(180);

  // Check stored credentials on mount
  useEffect(() => {
    const stored = getStoredActivation();
    if (stored && stored.activation) {
      if (stored.isExpired || stored.daysRemaining <= 0) {
        setIsExpired(true);
        setViewMode('lock');
      } else {
        setActivation(stored.activation);
        setDaysRemaining(stored.daysRemaining);
        setViewMode('curriculum');
      }
    } else {
      setViewMode('lock');
    }
  }, []);

  const handleActivationSuccess = (newActivation: StudentActivation) => {
    setActivation(newActivation);
    setDaysRemaining(getDaysRemaining(newActivation.activatedAt));
    setIsExpired(false);
    setViewMode('curriculum');
  };

  const handleStudentLogout = () => {
    if (window.confirm('هل تريد تسجيل الخروج وإعادة قفل التطبيق؟')) {
      clearStoredActivation();
      setActivation(null);
      setViewMode('lock');
    }
  };

  // If in Lock Screen Mode
  if (viewMode === 'lock') {
    return (
      <LockScreen
        onSuccessfulActivation={handleActivationSuccess}
        onOpenTeacherPortal={() => setViewMode('teacher')}
        isExpiredSession={isExpired}
      />
    );
  }

  // If in Teacher Dashboard Mode
  if (viewMode === 'teacher') {
    return (
      <TeacherDashboard
        onBackToCurriculum={() => setViewMode('curriculum')}
        onLogoutTeacher={() => {
          // If student was logged in, return to curriculum; otherwise return to lock screen
          if (activation) {
            setViewMode('curriculum');
          } else {
            setViewMode('lock');
          }
        }}
      />
    );
  }

  // Calculate percentage of 180 days remaining
  const progressPercent = Math.min(100, Math.max(0, Math.round((daysRemaining / 180) * 100)));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-white">
      
      {/* Top Subscription Status Banner */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs no-print">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>الطالب:</span>
              <span className="text-white">{activation?.studentName || 'المعلمة'}</span>
            </div>

            <span className="text-slate-600 hidden sm:inline">•</span>

            <div className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>متبقي:</span>
              <strong className="text-amber-400 font-bold font-english">{daysRemaining}</strong>
              <span>يوماً (من 180 يوماً)</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Direct WhatsApp help button */}
            <a
              id="btn-header-wa-support"
              href={`https://wa.me/${SOCIAL_LINKS.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>واتساب المعلمة (+963933036079)</span>
            </a>

            <span className="text-slate-600">•</span>

            {/* Teacher Dashboard Access */}
            <button
              id="btn-nav-teacher-portal"
              type="button"
              onClick={() => setViewMode('teacher')}
              className="text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer"
            >
              بوابة المعلمة
            </button>

            <span className="text-slate-600">•</span>

            {/* Lock / Sign out */}
            <button
              id="btn-header-logout"
              type="button"
              onClick={handleStudentLogout}
              className="flex items-center gap-1 text-slate-400 hover:text-rose-400 cursor-pointer"
              title="قفل التطبيق"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>قفل</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 shadow-xl no-print">
        <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between">
          
          {/* Logo & Teacher Title */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-cyan-600/20 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-extrabold font-english text-white tracking-wide">
                  MORE ENGLISH MORE LOVE
                </h1>
                <span className="hidden md:inline-block px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[10px] font-bold">
                  Unit 1: Future Plans
                </span>
              </div>
              <p className="text-xs text-amber-300/90 font-bold">
                إشراف وتدريس: {TEACHER_NAME} ({TEACHER_NAME_EN})
              </p>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="btn-mobile-nav-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1.5">
            {[
              { id: 'speaking', label: 'المحادثة', labelEn: 'Speaking', icon: MessageSquare },
              { id: 'reading', label: 'القراءة', labelEn: 'Reading', icon: BookOpen },
              { id: 'vocabulary', label: 'المفردات', labelEn: 'Vocabulary', icon: Sparkles },
              { id: 'grammar', label: 'القواعد', labelEn: 'Grammar', icon: ShieldCheck },
              { id: 'listening', label: 'الاستماع', labelEn: 'Listening', icon: Headphones },
              { id: 'writing', label: 'الكتابة', labelEn: 'Writing', icon: PenTool },
              { id: 'worksheets', label: 'أوراق العمل (7)', labelEn: 'Worksheets', icon: FileText, highlight: true },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSection === tab.id;

              return (
                <button
                  key={tab.id}
                  id={`nav-tab-${tab.id}`}
                  type="button"
                  onClick={() => setActiveSection(tab.id as CurriculumSection)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    isActive
                      ? (tab.highlight 
                          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-600/25 ring-1 ring-cyan-400' 
                          : 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20')
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 p-4 space-y-2">
            {[
              { id: 'speaking', label: '1. Speaking • المحادثة والتحدث', icon: MessageSquare },
              { id: 'reading', label: '2. Reading • القراءة والفهم', icon: BookOpen },
              { id: 'vocabulary', label: '3. Vocabulary • المفردات والكلمات', icon: Sparkles },
              { id: 'grammar', label: '4. Grammar • القواعد ومراجعة الأزمنة', icon: ShieldCheck },
              { id: 'listening', label: '5. Listening • الاستماع والحوارات', icon: Headphones },
              { id: 'writing', label: '6. Writing • الكتابة والإنشاء', icon: PenTool },
              { id: 'worksheets', label: '7. Worksheets • أوراق عمل المنهاج والحلول', icon: FileText },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSection === tab.id;

              return (
                <button
                  key={tab.id}
                  id={`mobile-nav-tab-${tab.id}`}
                  type="button"
                  onClick={() => {
                    setActiveSection(tab.id as CurriculumSection);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl text-xs font-bold text-right transition cursor-pointer ${
                    isActive
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Interactive Stage Container */}
      <main className="max-w-7xl w-full mx-auto px-4 py-8 flex-1">
        {activeSection === 'speaking' && <SpeakingSection />}
        {activeSection === 'reading' && <ReadingSection />}
        {activeSection === 'vocabulary' && <VocabularySection />}
        {activeSection === 'grammar' && <GrammarSection />}
        {activeSection === 'listening' && <ListeningSection />}
        {activeSection === 'writing' && <WritingSection />}
        {activeSection === 'worksheets' && <WorksheetsSection />}
      </main>

      {/* Social Footer */}
      <SocialFooter />

    </div>
  );
}
