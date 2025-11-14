'use client'
import React from 'react'

interface CareerItem {
  title: string
  company?: string
  location?: string
  startYear: number
  startMonth: number // 1-12
  endYear?: number
  endMonth?: number
}

interface CareerTimelineProps {
  data: CareerItem[]
  startYear: number
  endYear: number
}

const months = Array.from({ length: 12 }, (_, i) => i + 1)

export default function CareerTimeline({ data, startYear, endYear }: CareerTimelineProps) {
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i)
  const pixelsPerMonth = 30 // tinggi tiap bulan - dikurangi agar lebih rapat
  const totalHeight = years.length * 12 * pixelsPerMonth

  const getOffset = (year: number, month: number) => {
    return (year - startYear) * 12 * pixelsPerMonth + (month - 1) * pixelsPerMonth
  }

  const getItemHeight = (item: CareerItem) => {
    // Hitung durasi dalam bulan
    const startMonths = (item.startYear - startYear) * 12 + item.startMonth - 1
    const endMonths = item.endYear && item.endMonth
      ? (item.endYear - startYear) * 12 + item.endMonth - 1
      : (endYear - startYear) * 12 + 11 // Jika masih berlangsung, sampai akhir tahun
    
    const durationInMonths = endMonths - startMonths + 1
    return durationInMonths * pixelsPerMonth - 20 // Kurangi sedikit untuk spacing
  }

  // Fungsi untuk mendeteksi overlap dan menentukan posisi horizontal
  const getHorizontalPosition = (currentIndex: number): string => {
    const current = data[currentIndex]
    const currentTop = getOffset(current.startYear, current.startMonth)
    const currentBottom = currentTop + getItemHeight(current)

    // Cek overlap dengan item sebelumnya
    for (let i = 0; i < currentIndex; i++) {
      const prev = data[i]
      const prevTop = getOffset(prev.startYear, prev.startMonth)
      const prevBottom = prevTop + getItemHeight(prev)

      // Jika ada overlap vertikal
      if (currentTop < prevBottom && currentBottom > prevTop) {
        // Jika item sebelumnya di kiri, taruh yang sekarang di kanan
        const prevPosition: string = getHorizontalPosition(i)
        return prevPosition === 'left-40' ? 'left-[420px]' : 'left-40'
      }
    }

    // Default ke kiri jika tidak ada overlap
    return 'left-40'
  }

  return (
    <div className="relative mx-auto w-full max-w-5xl px-8 py-20 text-white"
         style={{ height: totalHeight }}>
      {/* Title */}
      <div className="absolute top-0 left-0">
        <h1 className="text-5xl font-extrabold">Career</h1>
        <p className="text-gray-400">My professional path</p>
      </div>

      {/* Timeline line */}
      <div className="absolute left-20 top-32 h-full w-0.5 bg-linear-to-b from-cyan-400/70 to-purple-700/70">
        {/* Dots for months */}
        {years.map((year) => (
          <div key={year}>
            {months.map((month) => (
              <div
                key={month}
                className="absolute left-0 h-1.5 w-1.5 -translate-x-0.5 rounded-full bg-gray-500/60"
                style={{ top: getOffset(year, month) }}
              />
            ))}
            {/* Year Label */}
            <span
              className="absolute -left-16 text-sm font-semibold text-gray-300"
              style={{ top: getOffset(year, 1) - 5 }}
            >
              {year}
            </span>
          </div>
        ))}
      </div>

      {/* Career Items */}
      {data.map((item, i) => {
        const top = getOffset(item.startYear, item.startMonth)
        const height = getItemHeight(item)
        const horizontalPos = getHorizontalPosition(i)
        const bgColor = horizontalPos === 'left-40' ? 'bg-[#0d2b2b]/70' : 'bg-[#1a0f35]/70'
        
        return (
          <div
            key={i}
            className={`absolute w-[320px] rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-[1.02] ${horizontalPos} ${bgColor}`}
            style={{ top, minHeight: height }}
          >
            <p className="text-sm text-teal-400">
              {item.endYear && item.endMonth
                ? `${getMonthName(item.startMonth)} ${item.startYear} - ${getMonthName(item.endMonth)} ${item.endYear}`
                : `${getMonthName(item.startMonth)} ${item.startYear} - Now`}
            </p>
            <h3 className="mt-1 font-mono text-lg font-bold">{item.title}</h3>
            {item.company && <p className="text-gray-300">{item.company}</p>}
            {item.location && <p className="text-gray-400 text-sm">{item.location}</p>}
            
            {/* Indicator bar untuk durasi */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-cyan-400/40 to-purple-600/40 rounded-l-xl" />
          </div>
        )
      })}
    </div>
  )
}

function getMonthName(month: number) {
  return [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ][month - 1]
}
