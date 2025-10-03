"use client";

import { useState, useEffect } from 'react';

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = ['about', 'experience', 'education', 'projects'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Get all visible sections
        const visibleSections = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => ({
            id: entry.target.id,
            ratio: entry.intersectionRatio,
            boundingRect: entry.boundingClientRect
          }))
          .sort((a, b) => b.ratio - a.ratio);

        if (visibleSections.length > 0) {
          const newActiveSection = visibleSections[0].id;
          setActiveSection(newActiveSection);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: '-20% 0px -50% 0px'
      }
    );

    // Add a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return activeSection;
}
