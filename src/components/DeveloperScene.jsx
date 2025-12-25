import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// Floating particles
function FloatingParticle({ position, color, delay = 0 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + delay) * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.08, 0]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
    </mesh>
  )
}

// Desk
function Desk() {
  return (
    <group position={[0, -1.5, 0]}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.5, 0.1, 1.8]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      {[-1.5, 1.5].map((x) => (
        <group key={x}>
          <mesh position={[x, -0.35, -0.8]}>
            <boxGeometry args={[0.12, 0.7, 0.12]} />
            <meshStandardMaterial color="#0f0f1a" />
          </mesh>
          <mesh position={[x, -0.35, 0.8]}>
            <boxGeometry args={[0.12, 0.7, 0.12]} />
            <meshStandardMaterial color="#0f0f1a" />
          </mesh>
        </group>
      ))}
    </group>
  )
}

// Monitor
function Monitor() {
  const screenRef = useRef()
  
  useFrame((state) => {
    if (screenRef.current) {
      screenRef.current.material.emissiveIntensity = 0.4 + Math.sin(state.clock.elapsedTime * 2.5) * 0.2
    }
  })

  return (
    <group position={[0, 0.2, 0.4]}>
      <mesh position={[0, -0.45, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.25, 16]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[1.4, 0.12, 0.7]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      <mesh ref={screenRef} position={[0, 0.15, 0]}>
        <boxGeometry args={[1.2, 0.85, 0.06]} />
        <meshStandardMaterial 
          color="#0a0a1a" 
          emissive="#6366f1"
          emissiveIntensity={0.4}
        />
      </mesh>
      <mesh position={[0, 0.15, 0.03]}>
        <boxGeometry args={[1.25, 0.9, 0.1]} />
        <meshStandardMaterial color="#2a2a3e" />
      </mesh>
      {/* Code lines on screen */}
      <group position={[0, 0.15, 0.04]}>
        {[0.25, 0.05, -0.15, -0.35].map((y, i) => (
          <mesh key={i} position={[-0.35, y, 0]}>
            <boxGeometry args={[0.5, 0.025, 0.01]} />
            <meshStandardMaterial 
              color="#8b5cf6" 
              emissive="#8b5cf6" 
              emissiveIntensity={0.9} 
            />
          </mesh>
        ))}
        {/* Cursor */}
        <mesh position={[0.2, -0.35, 0]}>
          <boxGeometry args={[0.03, 0.04, 0.01]} />
          <meshStandardMaterial 
            color="#ec4899" 
            emissive="#ec4899" 
            emissiveIntensity={1}
          />
        </mesh>
      </group>
    </group>
  )
}

// Keyboard
function Keyboard() {
  return (
    <group position={[0, -1.3, 0.15]}>
      <mesh>
        <boxGeometry args={[1, 0.06, 0.35]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      {Array.from({ length: 15 }).map((_, i) => {
        const row = Math.floor(i / 5)
        const col = i % 5
        return (
          <mesh 
            key={i} 
            position={[-0.4 + col * 0.2, 0.04, -0.15 + row * 0.15]}
          >
            <boxGeometry args={[0.12, 0.02, 0.12]} />
            <meshStandardMaterial 
              color={i % 3 === 0 ? "#6366f1" : "#2a2a3e"}
              emissive={i % 3 === 0 ? "#6366f1" : "#000000"}
              emissiveIntensity={i % 3 === 0 ? 0.3 : 0}
            />
          </mesh>
        )
      })}
    </group>
  )
}

// Developer Character
function Developer() {
  const headRef = useRef()
  const bodyRef = useRef()
  
  useFrame((state) => {
    if (headRef.current && bodyRef.current) {
      const breath = Math.sin(state.clock.elapsedTime * 1.2) * 0.02
      headRef.current.position.y = 0.8 + breath
      bodyRef.current.scale.y = 1 + breath * 0.1
    }
  })

  return (
    <group position={[0, -1.2, -0.3]}>
      {/* Head */}
      <mesh ref={headRef} position={[0, 0.8, 0]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#d4a574" />
      </mesh>
      {/* Body */}
      <mesh ref={bodyRef} position={[0, 0.4, 0]}>
        <boxGeometry args={[0.35, 0.45, 0.25]} />
        <meshStandardMaterial 
          color="#6366f1" 
          emissive="#6366f1"
          emissiveIntensity={0.2}
        />
      </mesh>
      {/* Left arm */}
      <group position={[-0.3, 0.35, 0]}>
        <mesh position={[0, -0.2, 0.12]} rotation={[0, 0, -0.3]}>
          <boxGeometry args={[0.1, 0.3, 0.1]} />
          <meshStandardMaterial color="#8b5cf6" />
        </mesh>
        <mesh position={[-0.08, -0.5, 0.18]} rotation={[0, 0, 0.6]}>
          <boxGeometry args={[0.1, 0.25, 0.1]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
      </group>
      {/* Right arm */}
      <group position={[0.3, 0.35, 0]}>
        <mesh position={[0, -0.2, 0.12]} rotation={[0, 0, 0.3]}>
          <boxGeometry args={[0.1, 0.3, 0.1]} />
          <meshStandardMaterial color="#8b5cf6" />
        </mesh>
        <mesh position={[0.08, -0.5, 0.18]} rotation={[0, 0, -0.6]}>
          <boxGeometry args={[0.1, 0.25, 0.1]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
      </group>
      {/* Chair back */}
      <mesh position={[0, 0.2, -0.35]}>
        <boxGeometry args={[0.45, 0.55, 0.08]} />
        <meshStandardMaterial 
          color="#2a2a3e" 
          emissive="#6366f1"
          emissiveIntensity={0.1}
        />
      </mesh>
    </group>
  )
}

// Main Scene
export default function DeveloperScene() {
  const particles = [
    { pos: [-2, 1.5, -1], color: '#8b5cf6', delay: 0 },
    { pos: [2, 1.8, -1.2], color: '#ec4899', delay: 1 },
    { pos: [-1.8, 1, 1.2], color: '#6366f1', delay: 2 },
    { pos: [1.8, 1.3, 1], color: '#8b5cf6', delay: 0.5 },
    { pos: [-1.5, 2, -0.5], color: '#ec4899', delay: 1.5 },
    { pos: [1.5, 2.2, -0.8], color: '#6366f1', delay: 2.5 },
  ]

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 3, -5]} intensity={0.8} color="#8b5cf6" />
      <pointLight position={[5, 3, 5]} intensity={0.8} color="#ec4899" />
      <pointLight position={[0, 4, 0]} intensity={0.6} color="#6366f1" />
      
      <Desk />
      <Monitor />
      <Keyboard />
      <Developer />
      
      {particles.map((particle, i) => (
        <FloatingParticle 
          key={i} 
          position={particle.pos} 
          color={particle.color} 
          delay={particle.delay}
        />
      ))}
      
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.6}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI / 1.4}
        enablePan={false}
      />
    </>
  )
}
