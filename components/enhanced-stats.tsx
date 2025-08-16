"use client"

import { useState, useEffect } from "react"

interface StatProps {
  number: number
  label: string
  suffix?: string
  prefix?: string
}

function AnimatedStat({ number, label, suffix = "", prefix = "" }: StatProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < number) {
        setCount(count + Math.ceil(number / 50))
      }
    }, 50)

    return () => clearTimeout(timer)
  }, [count, number])

  return (
    <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-900/30 to-green-800/20 backdrop-blur-sm border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
      <div className="text-4xl font-bold text-green-400 mb-2">
        {prefix}
        {Math.min(count, number)}
        {suffix}
      </div>
      <div className="text-gray-300 text-sm uppercase tracking-wider">{label}</div>
    </div>
  )
}

export default function EnhancedStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
      <AnimatedStat number={50} label="Projetos" suffix="+" />
      <AnimatedStat number={6} label="Anos Exp." suffix="+" />
      <AnimatedStat number={15} label="Clientes" suffix="+" />
      <AnimatedStat number={98} label="Satisfação" suffix="%" />
    </div>
  )
}
