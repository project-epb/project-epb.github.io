<template lang="pug">
.interactive-background.fixed.inset-0.pointer-events-none.z-0
  canvas.w-full.h-full(ref='canvasRef')
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  targetX: number
  targetY: number
  connections: number[]
}

let particles: Particle[] = []
let mouseX = 0
let mouseY = 0
let animationFrame: number
let ctx: CanvasRenderingContext2D | null = null
let canvas: HTMLCanvasElement | null = null

// 二次元配色方案
const colors = [
  'rgba(138, 110, 255, 0.8)', // 紫色
  'rgba(255, 107, 181, 0.8)', // 粉色
  'rgba(107, 203, 255, 0.8)', // 蓝色
  'rgba(255, 200, 107, 0.8)', // 橙色
  'rgba(144, 238, 144, 0.8)', // 绿色
]

function initParticles() {
  if (!canvas) return
  const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
  particles = []

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      targetX: Math.random() * canvas.width,
      targetY: Math.random() * canvas.height,
      connections: [],
    })
  }
}

function drawParticles() {
  if (!ctx || !canvas) return

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // 绘制连接线
  particles.forEach((particle, i) => {
    particles.slice(i + 1).forEach((otherParticle, j) => {
      const dx = particle.x - otherParticle.x
      const dy = particle.y - otherParticle.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      // 连接距离内的粒子
      if (distance < 150) {
        const opacity = (1 - distance / 150) * 0.3
        ctx!.beginPath()
        ctx!.strokeStyle = `rgba(138, 110, 255, ${opacity})`
        ctx!.lineWidth = 0.5
        ctx!.moveTo(particle.x, particle.y)
        ctx!.lineTo(otherParticle.x, otherParticle.y)
        ctx!.stroke()
      }
    })

    // 鼠标互动 - 粒子被鼠标吸引
    const mouseDistance = Math.sqrt(
      Math.pow(particle.x - mouseX, 2) + Math.pow(particle.y - mouseY, 2)
    )
    if (mouseDistance < 200) {
      const force = (200 - mouseDistance) / 200
      const angle = Math.atan2(mouseY - particle.y, mouseX - particle.x)
      particle.vx += Math.cos(angle) * force * 0.05
      particle.vy += Math.sin(angle) * force * 0.05

      // 在鼠标附近绘制高亮连接线
      const opacity = (1 - mouseDistance / 200) * 0.6
      ctx!.beginPath()
      ctx!.strokeStyle = `rgba(255, 107, 181, ${opacity})`
      ctx!.lineWidth = 1
      ctx!.moveTo(particle.x, particle.y)
      ctx!.lineTo(mouseX, mouseY)
      ctx!.stroke()
    }
  })

  // 绘制粒子
  particles.forEach((particle) => {
    // 更新位置
    particle.x += particle.vx
    particle.y += particle.vy

    // 添加阻力
    particle.vx *= 0.98
    particle.vy *= 0.98

    // 边界反弹
    if (particle.x < 0 || particle.x > canvas!.width) particle.vx *= -1
    if (particle.y < 0 || particle.y > canvas!.height) particle.vy *= -1

    // 限制在画布内
    particle.x = Math.max(0, Math.min(canvas!.width, particle.x))
    particle.y = Math.max(0, Math.min(canvas!.height, particle.y))

    // 绘制粒子
    ctx!.beginPath()
    ctx!.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
    ctx!.fillStyle = particle.color
    ctx!.fill()

    // 绘制粒子光晕
    const gradient = ctx!.createRadialGradient(
      particle.x,
      particle.y,
      0,
      particle.x,
      particle.y,
      particle.size * 3
    )
    gradient.addColorStop(0, particle.color)
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
    ctx!.fillStyle = gradient
    ctx!.beginPath()
    ctx!.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
    ctx!.fill()
  })

  animationFrame = requestAnimationFrame(drawParticles)
}

function handleResize() {
  if (!canvas) return
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  initParticles()
}

function handleMouseMove(e: MouseEvent) {
  mouseX = e.clientX
  mouseY = e.clientY
}

function handleTouchMove(e: TouchEvent) {
  if (e.touches.length > 0) {
    mouseX = e.touches[0].clientX
    mouseY = e.touches[0].clientY
  }
}

onMounted(() => {
  canvas = canvasRef.value
  if (!canvas) return

  ctx = canvas.getContext('2d')
  if (!ctx) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  initParticles()
  drawParticles()

  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('touchmove', handleTouchMove, { passive: true })
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('touchmove', handleTouchMove)
})
</script>

<style scoped lang="sass">
.interactive-background
  opacity: 0.4
  mix-blend-mode: screen
  filter: blur(0.5px)
</style>
