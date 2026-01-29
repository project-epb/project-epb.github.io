<template lang="pug">
.floating-shapes.fixed.inset-0.overflow-hidden.pointer-events-none.z-0
  //- 大型装饰圆
  .shape.circle.large.absolute(
    v-for='(circle, index) in circles',
    :key='`circle-${index}`',
    :style='circleStyle(circle)',
    ref='circleRefs'
  )

  //- 三角形装饰
  .shape.triangle.absolute(
    v-for='(triangle, index) in triangles',
    :key='`triangle-${index}`',
    :style='triangleStyle(triangle)',
    ref='triangleRefs'
  )

  //- 方形装饰
  .shape.square.absolute(
    v-for='(square, index) in squares',
    :key='`square-${index}`',
    :style='squareStyle(square)',
    ref='squareRefs'
  )

  //- 线条装饰
  svg.absolute.inset-0.w-full.h-full
    defs
      linearGradient#lineGradient1(x1='0%', y1='0%', x2='100%', y2='100%')
        stop(offset='0%', stop-color='rgba(138, 110, 255, 0.6)')
        stop(offset='100%', stop-color='rgba(255, 107, 181, 0.6)')
      linearGradient#lineGradient2(x1='0%', y1='0%', x2='100%', y2='100%')
        stop(offset='0%', stop-color='rgba(107, 203, 255, 0.6)')
        stop(offset='100%', stop-color='rgba(144, 238, 144, 0.6)')

    line(
      v-for='(line, index) in lines',
      :key='`line-${index}`',
      :x1='line.x1',
      :y1='line.y1',
      :x2='line.x2',
      :y2='line.y2',
      :stroke='`url(#lineGradient${(index % 2) + 1})`',
      stroke-width='2',
      stroke-linecap='round',
      ref='lineRefs'
    )
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

interface Circle {
  left: number
  top: number
  size: number
  color: string
  duration: number
}

interface Triangle {
  left: number
  top: number
  size: number
  color: string
  rotation: number
  duration: number
}

interface Square {
  left: number
  top: number
  size: number
  color: string
  rotation: number
  duration: number
}

interface Line {
  x1: number
  y1: number
  x2: number
  y2: number
}

const circles = ref<Circle[]>([])
const triangles = ref<Triangle[]>([])
const squares = ref<Square[]>([])
const lines = ref<Line[]>([])

const circleRefs = ref<HTMLElement[]>([])
const triangleRefs = ref<HTMLElement[]>([])
const squareRefs = ref<HTMLElement[]>([])
const lineRefs = ref<SVGLineElement[]>([])

const colors = [
  'rgba(138, 110, 255, 0.15)',
  'rgba(255, 107, 181, 0.15)',
  'rgba(107, 203, 255, 0.15)',
  'rgba(255, 200, 107, 0.15)',
  'rgba(144, 238, 144, 0.15)',
]

function circleStyle(circle: Circle) {
  return {
    left: `${circle.left}%`,
    top: `${circle.top}%`,
    width: `${circle.size}px`,
    height: `${circle.size}px`,
    background: `radial-gradient(circle, ${circle.color} 0%, transparent 70%)`,
  }
}

function triangleStyle(triangle: Triangle) {
  return {
    left: `${triangle.left}%`,
    top: `${triangle.top}%`,
    width: '0',
    height: '0',
    borderLeft: `${triangle.size / 2}px solid transparent`,
    borderRight: `${triangle.size / 2}px solid transparent`,
    borderBottom: `${triangle.size}px solid ${triangle.color}`,
    transform: `rotate(${triangle.rotation}deg)`,
  }
}

function squareStyle(square: Square) {
  return {
    left: `${square.left}%`,
    top: `${square.top}%`,
    width: `${square.size}px`,
    height: `${square.size}px`,
    background: square.color,
    transform: `rotate(${square.rotation}deg)`,
  }
}

function generateShapes() {
  // 生成圆形
  circles.value = Array.from({ length: 8 }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 300 + 200,
    color: colors[Math.floor(Math.random() * colors.length)],
    duration: Math.random() * 10 + 15,
  }))

  // 生成三角形
  triangles.value = Array.from({ length: 12 }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 80 + 40,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * 360,
    duration: Math.random() * 8 + 12,
  }))

  // 生成方形
  squares.value = Array.from({ length: 10 }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 60 + 30,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * 45,
    duration: Math.random() * 10 + 15,
  }))

  // 生成线条
  const lineCount = 6
  lines.value = Array.from({ length: lineCount }, () => ({
    x1: Math.random() * window.innerWidth,
    y1: Math.random() * window.innerHeight,
    x2: Math.random() * window.innerWidth,
    y2: Math.random() * window.innerHeight,
  }))
}

function animateShapes() {
  // 动画圆形
  circleRefs.value.forEach((el, index) => {
    if (!el) return
    const circle = circles.value[index]
    gsap.to(el, {
      y: '+=50',
      x: '+=30',
      duration: circle.duration,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
    gsap.to(el, {
      scale: 1.2,
      duration: circle.duration * 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  })

  // 动画三角形
  triangleRefs.value.forEach((el, index) => {
    if (!el) return
    const triangle = triangles.value[index]
    gsap.to(el, {
      rotation: `+=${Math.random() * 360}`,
      y: '+=80',
      x: `+=${Math.random() * 60 - 30}`,
      duration: triangle.duration,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })
  })

  // 动画方形
  squareRefs.value.forEach((el, index) => {
    if (!el) return
    const square = squares.value[index]
    gsap.to(el, {
      rotation: `+=${Math.random() * 180}`,
      y: `+=${Math.random() * 100 - 50}`,
      x: `+=${Math.random() * 100 - 50}`,
      duration: square.duration,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    })
  })

  // 动画线条
  lineRefs.value.forEach((el, index) => {
    if (!el) return
    const line = lines.value[index]
    gsap.to(el, {
      attr: {
        x2: line.x2 + (Math.random() * 200 - 100),
        y2: line.y2 + (Math.random() * 200 - 100),
      },
      duration: Math.random() * 5 + 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  })
}

onMounted(() => {
  generateShapes()
  setTimeout(() => {
    animateShapes()
  }, 100)
})

onUnmounted(() => {
  gsap.killTweensOf('*')
})
</script>

<style scoped lang="sass">
.floating-shapes
  filter: blur(1px)
  opacity: 0.6

.shape
  will-change: transform
  transition: all 0.3s ease

.circle
  border-radius: 50%
  filter: blur(40px)

.triangle
  filter: drop-shadow(0 0 20px rgba(138, 110, 255, 0.3))

.square
  border-radius: 8px
  filter: blur(2px)
</style>
