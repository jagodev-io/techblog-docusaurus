"use client"

import { useState, useEffect } from "react"

const terms = [
  { term: "API", definition: "Application Programming Interface" },
  { term: "CSS", definition: "Cascading Style Sheets" },
  { term: "HTML", definition: "Hypertext Markup Language" },
  { term: "JS", definition: "JavaScript" },
  { term: "React", definition: "A JavaScript library for building user interfaces" },
]

export default function TechTermOfTheDay() {
  const [term, setTerm] = useState(terms[0])

  useEffect(() => {
    const randomTerm = terms[Math.floor(Math.random() * terms.length)]
    setTerm(randomTerm)
  }, [])

  return (
    <div className="tech-term-of-the-day">
      <h3>Tech Term of the Day</h3>
      <p>
        <strong>{term.term}:</strong> {term.definition}
      </p>
      <style jsx>{`
        .tech-term-of-the-day {
          background-color: var(--ifm-color-emphasis-100);
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 2rem;
          text-align: center;
        }
        h3 {
          color: var(--ifm-color-primary);
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  )
}

