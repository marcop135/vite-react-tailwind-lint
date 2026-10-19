import React from 'react';
import { VERSIONS } from '../constants';
import { ReactLogo, TailwindLogo, ViteLogo } from './Logos';

// Top to bottom, as the layers sit in the drawing: styling on rendering on build.
const LAYERS = [
  {
    name: 'Tailwind CSS',
    version: VERSIONS.tailwindcss,
    Logo: TailwindLogo,
    plane: 'border-[#38bdf8]/60 bg-[#38bdf8]/12 text-[#0ea5e9]',
    top: 'top-0 z-30',
    label: 'top-[24%]',
  },
  {
    name: 'React',
    version: VERSIONS.react,
    Logo: ReactLogo,
    plane: 'border-[#58c4dc]/60 bg-[#58c4dc]/12 text-[#58c4dc]',
    top: 'top-[22%] z-20',
    label: 'top-[46%]',
  },
  {
    name: 'Vite',
    version: VERSIONS.vite,
    Logo: ViteLogo,
    plane: 'border-[#a78bfa]/70 bg-[#bd34fe]/10',
    top: 'top-[44%] z-10',
    label: 'top-[68%]',
  },
];

function StackIllustration() {
  return (
    <figure className='relative isolate mx-auto aspect-square w-full max-w-[24rem]'>
      <div
        aria-hidden='true'
        className='absolute inset-[8%] -z-10 rounded-full bg-[radial-gradient(closest-side,rgb(189_52_254/0.22),rgb(88_196_220/0.14)_60%,transparent)] blur-2xl'
      />
      <div aria-hidden='true'>
        {LAYERS.map(({ name, Logo, plane, top }) => (
          <div
            key={name}
            className={`absolute left-[10%] aspect-square w-[48%] ${top}`}
          >
            <div
              className={`iso-plane grid size-full place-items-center rounded-2xl border-2 backdrop-blur-[2px] ${plane}`}
            >
              <Logo className='w-2/5' />
            </div>
          </div>
        ))}
      </div>
      <figcaption>
        <ul className='font-mono text-xs sm:text-sm' role='list'>
          {LAYERS.map(({ name, version, label }) => (
            <li
              key={name}
              className={`absolute right-0 -translate-y-1/2 text-right ${label}`}
            >
              <span className='text-ink block font-sans font-semibold'>
                {name}
              </span>
              <span className='text-muted'>{version}</span>
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}

export default React.memo(StackIllustration);
