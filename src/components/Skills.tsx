import { useEffect, useRef } from 'react';
import { Code, Database, TrendingUp, Wrench, BarChart3 } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let scrollY = 0;

    const handleScroll = () => {
      scrollY = window.scrollY;
      const rect = section.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));

      section.style.setProperty('--scroll-progress', progress.toString());
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = [
    {
      title: 'Programming & Data Analysis',
      icon: Code,
      color: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'NumPy', level: 85 },
        { name: 'Pandas', level: 88 },
        { name: 'SQL', level: 82 },
        { name: 'JavaScript', level: 75 },
        { name: 'HTML', level: 80 },
      ],
    },
    {
      title: 'Data Science & ML',
      icon: TrendingUp,
      color: 'from-fuchsia-400 to-pink-500',
      skills: [
        { name: 'EDA', level: 87 },
        { name: 'Feature Engineering', level: 83 },
        { name: 'Statistics', level: 85 },
        { name: 'ML Basics', level: 80 },
        { name: 'Validation', level: 82 },
      ],
    },
    {
      title: 'Tools & Practices',
      icon: Wrench,
      color: 'from-cyan-400 to-fuchsia-500',
      skills: [
        { name: 'Git', level: 88 },
        { name: 'GitHub', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'API Integration', level: 80 },
        { name: 'Documentation', level: 90 },
        { name: 'QA / QC', level: 85 },
      ],
    },
    {
      title: 'Data Engineering',
      icon: Database,
      color: 'from-blue-400 to-cyan-500',
      skills: [
        { name: 'ETL Pipelines', level: 82 },
        { name: 'Structured Data', level: 88 },
        { name: 'Data Validation', level: 85 },
      ],
    },
    {
      title: 'Visualization & Reporting',
      icon: BarChart3,
      color: 'from-pink-400 to-fuchsia-500',
      skills: [
        { name: 'Power BI', level: 85 },
        { name: 'Streamlit', level: 88 },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen py-32 overflow-hidden"
      style={{
        background: `
          linear-gradient(
            180deg,
            rgba(0, 157, 255, calc(0.1 * var(--scroll-progress, 0))) 0%,
            rgba(10, 10, 10, 1) 30%,
            rgba(10, 10, 10, 1) 70%,
            rgba(255, 0, 255, calc(0.1 * var(--scroll-progress, 0))) 100%
          )
        `,
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent top-1/4 animate-pulse" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent bottom-1/4 animate-pulse delay-1000" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{
                  animation: `fade-in-scale 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white/80 font-medium text-sm">
                            {skill.name}
                          </span>
                          <span className="text-cyan-400 font-semibold text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: '0%',
                              animation: `fill-bar 1.5s ease-out ${index * 0.1 + i * 0.05}s forwards`,
                              '--target-width': `${skill.level}%`,
                            } as React.CSSProperties}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fill-bar {
          to {
            width: var(--target-width);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
          }
        }

        .animate-float {
          animation: float 10s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
