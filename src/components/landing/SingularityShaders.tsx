"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

export interface SingularityShadersProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number;
  intensity?: number;
  size?: number;
  waveStrength?: number;
  colorShift?: number;
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
uniform float u_speed;
uniform float u_intensity;
uniform float u_size;
uniform float u_waveStrength;
uniform float u_colorShift;

void mainImage(out vec4 O, vec2 F)
{
    float i = .2 * u_speed, a;
    vec2 r = iResolution.xy,
         p = ( F+F - r ) / r.y / (.7 * u_size),
         d = vec2(-1,1),
         b = p - i*d,
         c = p * mat2(1, 1, d/(.1 + i/dot(b,b))),
         v = c * mat2(cos(.5*log(a=dot(c,c)) + iTime*i*u_speed + vec4(0,33,11,0)))/i,
         w = vec2(0.0);

    for(float j = 0.0; j < 9.0; j++) {
        i++;
        w += 1.0 + sin(v * u_waveStrength);
        v += .7 * sin(v.yx * i + iTime * u_speed) / i + .5;
    }

    i = length( sin(v/.3)*.4 + c*(3.+d) );

    vec4 colorGrad = vec4(.6,-.4,-1,0) * u_colorShift;

    O = 1. - exp( -exp( c.x * colorGrad )
                   / w.xyyx
                   / ( 2. + i*i/4. - i )
                   / ( .5 + 1. / a )
                   / ( .03 + abs( length(p)-.7 ) )
                   * u_intensity
             );
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

export const SingularityShaders = ({
  className,
  speed = 1.0,
  intensity = 1.0,
  size = 1.0,
  waveStrength = 1.0,
  colorShift = 1.0,
  ...props
}: SingularityShadersProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Setup scene
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    // Setup geometry & material
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      u_speed: { value: speed },
      u_intensity: { value: intensity },
      u_size: { value: size },
      u_waveStrength: { value: waveStrength },
      u_colorShift: { value: colorShift },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
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

    // Prop sync
    const updateUniforms = () => {
      uniforms.u_speed.value = speed;
      uniforms.u_intensity.value = intensity;
      uniforms.u_size.value = size;
      uniforms.u_waveStrength.value = waveStrength;
      uniforms.u_colorShift.value = colorShift;
    };

    window.addEventListener("resize", resize);
    resize();
    updateUniforms();
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
  }, [speed, intensity, size, waveStrength, colorShift]);

  return (
    <div
      ref={containerRef}
      className={cn("w-full h-full relative", className)}
      {...props}
    >
      {/* Bottom fade for transition to next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent z-10 pointer-events-none" />
    </div>
  );
};
