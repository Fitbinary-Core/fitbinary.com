"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

export interface SparksDriftingShadersProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number;
  sparkSize?: number;
  fireIntensity?: number;
  smokeIntensity?: number;
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
uniform float iTime;
uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float u_speed;
uniform float u_sparkSize;
uniform float u_fireIntensity;
uniform float u_smokeIntensity;

// Simplex 3D Noise - MIT License
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = inversesqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

float prng(in vec2 seed) {
    seed = fract(seed * vec2(5.3983, 5.4427));
    seed += dot(seed.yx, seed.xy + vec2(21.5351, 14.3137));
    return fract(seed.x * seed.y * 95.4337);
}

const float PI = 3.1415926535897932384626433832795;

float noiseStack(vec3 pos, int octaves, float falloff) {
    float noise = snoise(vec3(pos));
    float off = 1.0;
    if (octaves > 1) { pos *= 2.0; off *= falloff; noise = (1.0 - off) * noise + off * snoise(vec3(pos)); }
    if (octaves > 2) { pos *= 2.0; off *= falloff; noise = (1.0 - off) * noise + off * snoise(vec3(pos)); }
    if (octaves > 3) { pos *= 2.0; off *= falloff; noise = (1.0 - off) * noise + off * snoise(vec3(pos)); }
    return (1.0 + noise) / 2.0;
}

vec2 noiseStackUV(vec3 pos, int octaves, float falloff, float diff) {
    float displaceA = noiseStack(pos, octaves, falloff);
    float displaceB = noiseStack(pos + vec3(3984.293, 423.21, 5235.19), octaves, falloff);
    return vec2(displaceA, displaceB);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    float time = iTime;
    vec2 resolution = iResolution.xy;
    
    // Normalized coordinates [0, 1]
    vec2 uv = fragCoord / resolution;
    // Centered coordinates [-aspect, aspect] or similar
    float minRes = min(resolution.x, resolution.y);
    vec2 p = (fragCoord * 2.0 - resolution) / minRes;

    float xpart = uv.x;
    float ypart = uv.y;

    float clip = 0.4; // Normalized clip relative to height
    float ypartClip = ypart / clip;
    float ypartClippedFalloff = clamp(2.0 - ypartClip, 0.0, 1.0);
    float ypartClipped = min(ypartClip, 1.0);
    float ypartClippedn = 1.0 - ypartClipped;

    // Center-focused intensity
    float xfuel = 1.0 - abs(2.0 * xpart - 1.0);
    // Broaden slightly on narrow screens
    if (resolution.x < 768.0) {
        xfuel = 1.0 - abs(1.4 * xpart - 0.7);
    }
    xfuel = clamp(xfuel, 0.0, 1.0);

    float timeSpeed = 0.5 * u_speed;
    float realTime = timeSpeed * time;

    // Use a fixed scale for position noise, independent of pixel resolution
    vec3 position = vec3(p * 8.0, 0.0) + vec3(1223.0, 6434.0, 8425.0);
    vec3 flow = vec3(4.1 * (0.5 - xpart) * pow(ypartClippedn, 4.0), -2.0 * xfuel * pow(ypartClippedn, 64.0), 0.0);
    vec3 timing = realTime * vec3(0.0, -1.7, 1.1) + flow;

    vec3 displacePos = vec3(1.0, 0.5, 1.0) * 2.4 * position + realTime * vec3(0.01, -0.7, 1.3);
    vec3 displace3 = vec3(noiseStackUV(displacePos, 2, 0.4, 0.1), 0.0);

    vec3 noiseCoord = (vec3(2.0, 1.0, 1.0) * position + timing + 0.4 * displace3);
    float noise = noiseStack(noiseCoord, 3, 0.4);

    float flames = pow(ypartClipped, 0.3 * xfuel) * pow(noise, 0.3 * xfuel);
    float f = ypartClippedFalloff * pow(1.0 - flames * flames * flames, 8.0);
    float fff = f * f * f;
    vec3 fire = 1.5 * vec3(f, fff, fff * fff) * u_fireIntensity;

    float smokeNoise = 0.5 + snoise(0.4 * position + timing * vec3(1.0, 1.0, 0.2)) / 2.0;
    vec3 smoke = vec3(0.3 * pow(xfuel, 3.0) * pow(ypart, 2.0) * (smokeNoise + 0.4 * (1.0 - noise))) * u_smokeIntensity;

    // Sparks - normalized grid
    float sparkGridSize = 0.1; // Proportional to minRes
    vec2 sparkUV = p - vec2(0.0, 0.8 * realTime);
    sparkUV -= 0.1 * noiseStackUV(0.5 * vec3(sparkUV, 1.0 * time), 1, 0.4, 0.1);
    
    if (mod(sparkUV.y / sparkGridSize, 2.0) < 1.0) sparkUV.x += 0.5 * sparkGridSize;
    vec2 sparkGridIndex = vec2(floor(sparkUV / sparkGridSize));
    float sparkRandom = prng(sparkGridIndex);
    float sparkLife = min(10.0 * (1.0 - min((sparkGridIndex.y + (0.8 * realTime / sparkGridSize)) / (24.0 - 20.0 * sparkRandom), 1.0)), 1.0);
    
    vec3 sparks = vec3(0.0);
    if (sparkLife > 0.0) {
        float sparkSizeVal = xfuel * xfuel * sparkRandom * 0.003 * u_sparkSize;
        float sparkRadians = 999.0 * sparkRandom * 2.0 * PI + 2.0 * time;
        vec2 sparkCircular = vec2(sin(sparkRadians), cos(sparkRadians));
        vec2 sparkOffset = (0.5 - sparkSizeVal/sparkGridSize) * sparkGridSize * sparkCircular;
        vec2 sparkModulus = mod(sparkUV + sparkOffset, sparkGridSize) - 0.5 * vec2(sparkGridSize);
        float sparkLength = length(sparkModulus);
        float sparksGray = max(0.0, 1.0 - sparkLength / sparkSizeVal);
        sparks = sparkLife * sparksGray * vec3(1.0, 0.3, 0.0);
    }

    fragColor = vec4(max(fire, sparks) + smoke, 1.0);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

export const SparksDriftingShaders = ({
  className,
  speed = 1.0,
  sparkSize = 1.0,
  fireIntensity = 1.0,
  smokeIntensity = 1.0,
  ...props
}: SparksDriftingShadersProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const pixelRatio =
      window.devicePixelRatio > 1.5
        ? window.innerWidth < 768
          ? 1.0
          : 1.5
        : window.devicePixelRatio;
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setPixelRatio(pixelRatio);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const geometry = new THREE.PlaneGeometry(2, 2);

    // Performance tiering
    const isMobile = window.innerWidth < 768;
    const mobileFragmentShader = fragmentShader
      .replace("octaves > 2", "octaves > 99") // Disable 3rd octave
      .replace("octaves > 3", "octaves > 99"); // Disable 4th octave

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      u_speed: { value: speed },
      u_sparkSize: { value: sparkSize },
      u_fireIntensity: { value: fireIntensity },
      u_smokeIntensity: { value: smokeIntensity },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: isMobile ? mobileFragmentShader : fragmentShader,
      uniforms,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      uniforms.iResolution.value.set(clientWidth, clientHeight);
    };

    let animationFrameId: number;
    const animate = (time: number) => {
      uniforms.iTime.value = time * 0.001;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate(0);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [speed, sparkSize, fireIntensity, smokeIntensity]);

  return (
    <div
      ref={containerRef}
      className={cn("w-full h-full relative", className)}
      {...props}
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-950 to-transparent z-10 pointer-events-none" />
    </div>
  );
};
