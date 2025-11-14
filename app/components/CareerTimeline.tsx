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
  // Reverse years - dari endYear ke startYear (2025 -> 2021)
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => endYear - i)
  const pixelsPerMonth = 30 // tinggi tiap bulan - dikurangi agar lebih rapat
  const totalHeight = (endYear - startYear + 1) * 12 * pixelsPerMonth

const getOffset = (year: number, month: number) => {
  // 0 = endYear Jan
  return (endYear - year) * 12 * pixelsPerMonth + (month - 1) * pixelsPerMonth
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

  // Fungsi untuk mendapatkan posisi top berdasarkan end date (yang lebih baru)
const getTopPosition = (item: CareerItem) => {
  if (item.endYear && item.endMonth) {
    return getOffset(item.endYear, item.endMonth)
  }
  // still active → position at start date
  return getOffset(item.startYear, item.startMonth)
}


  // Cache posisi yang sudah dihitung
  const positionCache = new Map<number, number>() // Menyimpan column index (0, 1, 2, ...)

  const getItemBounds = (item: CareerItem) => {
    const top = getTopPosition(item)
    const height = getItemHeight(item)
    return { top, bottom: top + height }
  }

  // Fungsi untuk mendeteksi overlap dan menentukan posisi horizontal
  const getHorizontalPosition = (currentIndex: number): number => {
    if (positionCache.has(currentIndex)) return positionCache.get(currentIndex)!

    const current = getItemBounds(data[currentIndex])
    
    // Kumpulkan semua item yang overlap secara vertikal dengan current item
    const overlappingItems: number[] = []
    
    for (let i = 0; i < currentIndex; i++) {
      const prev = getItemBounds(data[i])
      
      // Cek apakah ada overlap vertikal (dengan margin 30px untuk spacing)
      const hasOverlap = !(current.top > prev.bottom + 30 || current.bottom < prev.top - 30)
      
      if (hasOverlap) {
        overlappingItems.push(i)
      }
    }

    // Jika tidak ada overlap, taruh di kolom 0 (paling kiri)
    if (overlappingItems.length === 0) {
      positionCache.set(currentIndex, 0)
      return 0
    }

    // Kumpulkan semua kolom yang sudah dipakai oleh item yang overlap
    const usedColumns = new Set<number>()
    for (const itemIndex of overlappingItems) {
      const col = getHorizontalPosition(itemIndex)
      usedColumns.add(col)
    }

    // Cari kolom pertama yang kosong (tidak dipakai)
    let column = 0
    while (usedColumns.has(column)) {
      column++
    }

    positionCache.set(currentIndex, column)
    return column
  }

  // Konversi column index ke class CSS
  const getColumnClass = (column: number): string => {
    const positions = ['left-40', 'left-[420px]', 'left-[800px]']
    return positions[column] || 'left-[420px]'
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
style={{ top: getOffset(year, 1) - 10 }}
            >
              {year}
            </span>
          </div>
        ))}
      </div>

      {/* Career Items */}
      {data.map((item, i) => {
        const top = getTopPosition(item)
        const height = getItemHeight(item)
        const column = getHorizontalPosition(i)
        const horizontalPos = getColumnClass(column)
        const bgColor = column === 0 ? 'bg-[#0d2b2b]/70' : (column === 1 ? 'bg-[#1a0f35]/70' : 'bg-[#2b1a0d]/70')
        
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
