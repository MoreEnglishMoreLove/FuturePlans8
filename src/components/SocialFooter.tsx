import React from 'react';
import { MessageCircle, Youtube, Instagram, Send, Facebook, GraduationCap, Award } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/curriculumData';

export const SocialFooter: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  return (
    <footer className="w-full mt-12 bg-slate-900/90 border-t border-slate-800/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl no-print">
      {/* Top Banner Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500" />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Teacher Identity Badge */}
          <div className="md:col-span-4 flex items-center gap-4 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center text-white shadow-lg shrink-0">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                English Teacher's Name
              </div>
              <h4 className="text-lg font-bold text-white font-english">T. Jaidaa Saqer</h4>
              <p className="text-sm font-bold text-cyan-200">المعلمة جيداء صقر</p>
            </div>
          </div>

          {/* Social Channels Matrix */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {/* Facebook */}
            <a
              id="footer-link-facebook"
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/40 hover:bg-blue-600/20 border border-slate-700/50 hover:border-blue-500/50 transition text-slate-300 hover:text-white group"
            >
              <div className="w-7 h-7 rounded-md bg-blue-600/30 group-hover:bg-blue-600 text-blue-400 group-hover:text-white flex items-center justify-center transition shrink-0">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="text-xs truncate text-right">
                <div className="font-semibold">Facebook</div>
                <div className="text-[10px] text-slate-400 truncate">MoreEnglishMoreLove</div>
              </div>
            </a>

            {/* YouTube */}
            <a
              id="footer-link-youtube"
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/40 hover:bg-red-600/20 border border-slate-700/50 hover:border-red-500/50 transition text-slate-300 hover:text-white group"
            >
              <div className="w-7 h-7 rounded-md bg-red-600/30 group-hover:bg-red-600 text-red-400 group-hover:text-white flex items-center justify-center transition shrink-0">
                <Youtube className="w-4 h-4" />
              </div>
              <div className="text-xs truncate text-right">
                <div className="font-semibold">YouTube</div>
                <div className="text-[10px] text-slate-400 truncate">@MoreEnglishMoreLove</div>
              </div>
            </a>

            {/* Instagram */}
            <a
              id="footer-link-instagram"
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/40 hover:bg-pink-600/20 border border-slate-700/50 hover:border-pink-500/50 transition text-slate-300 hover:text-white group"
            >
              <div className="w-7 h-7 rounded-md bg-pink-600/30 group-hover:bg-pink-600 text-pink-400 group-hover:text-white flex items-center justify-center transition shrink-0">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="text-xs truncate text-right">
                <div className="font-semibold">Instagram</div>
                <div className="text-[10px] text-slate-400 truncate">moreenglishmorelove</div>
              </div>
            </a>

            {/* Telegram */}
            <a
              id="footer-link-telegram"
              href={SOCIAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/40 hover:bg-sky-600/20 border border-slate-700/50 hover:border-sky-500/50 transition text-slate-300 hover:text-white group"
            >
              <div className="w-7 h-7 rounded-md bg-sky-600/30 group-hover:bg-sky-600 text-sky-400 group-hover:text-white flex items-center justify-center transition shrink-0">
                <Send className="w-4 h-4" />
              </div>
              <div className="text-xs truncate text-right">
                <div className="font-semibold">Telegram</div>
                <div className="text-[10px] text-slate-400 truncate">moreenglishmorelove</div>
              </div>
            </a>
          </div>

        </div>

        {/* Direct WhatsApp Pill & Rights */}
        <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>جميع الحقوق محفوظة للمنهاج التعليمي</span>
            <span className="text-slate-600">•</span>
            <span className="font-english font-semibold text-cyan-400">MORE ENGLISH MORE LOVE</span>
          </div>

          <a
            id="footer-link-whatsapp"
            href={`https://wa.me/${SOCIAL_LINKS.whatsappClean}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 px-3.5 py-1.5 rounded-full text-emerald-400 hover:text-emerald-300 transition font-english font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp: {SOCIAL_LINKS.whatsapp}</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
