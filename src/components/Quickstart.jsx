import React, { useRef } from 'react';
import { QUICKSTART } from '../constants';
import { useCopy } from '../hooks/useCopy';

const ALL = QUICKSTART.join('\n');

function CopyButton({ label, done, onClick }) {
  return (
    <button
      type='button'
      onClick={onClick}
      aria-label={done ? `Copied: ${label}` : `Copy: ${label}`}
      className='border-term-line text-term-ink hover:border-term-muted focus-visible:outline-bolt inline-flex min-h-9 min-w-16 shrink-0 cursor-pointer items-center justify-center rounded border px-2.5 font-sans text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2'
    >
      {done ? 'Copied' : 'Copy'}
    </button>
  );
}

function Quickstart() {
  const { message, copiedKey, copy } = useCopy();
  const lineRefs = useRef([]);
  const allRef = useRef(null);

  return (
    <div className='w-full max-w-3xl'>
      <div className='border-term-line bg-term text-term-ink overflow-hidden rounded-lg border shadow-[0_1.5rem_3rem_-1.5rem_rgb(0_0_0/0.45)]'>
        <div className='border-term-line flex items-center justify-between gap-3 border-b px-4 py-2'>
          <span className='flex items-center gap-1.5' aria-hidden='true'>
            <span className='size-2.5 rounded-full bg-[#ff5f57]' />
            <span className='bg-bolt size-2.5 rounded-full' />
            <span className='size-2.5 rounded-full bg-[#58c4dc]' />
          </span>
          <h2 className='text-term-muted font-mono text-xs'>Quick start</h2>
          <button
            type='button'
            onClick={() => copy(ALL, allRef.current, 'all')}
            className='text-bolt focus-visible:outline-bolt inline-flex min-h-9 cursor-pointer items-center rounded px-2 font-sans text-xs font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2'
          >
            {copiedKey === 'all' ? 'Copied all' : 'Copy all'}
          </button>
        </div>
        <ol className='space-y-1 p-2 font-mono text-[0.8125rem] sm:p-3'>
          {QUICKSTART.map((line, index) => (
            <li
              key={line}
              className='flex items-center gap-3 rounded px-2 py-1.5 hover:bg-white/5'
            >
              <span aria-hidden='true' className='text-[#58c4dc] select-none'>
                $
              </span>
              <code
                ref={(node) => {
                  lineRefs.current[index] = node;
                }}
                className='min-w-0 flex-1 [overflow-wrap:anywhere] whitespace-pre-wrap'
              >
                {line}
              </code>
              <CopyButton
                label={line}
                done={copiedKey === line}
                onClick={() => copy(line, lineRefs.current[index])}
              />
            </li>
          ))}
        </ol>
        {/* Selection target for the copy-all fallback; never shown. */}
        <pre ref={allRef} className='sr-only' aria-hidden='true'>
          {ALL}
        </pre>
      </div>
      {/* Height is reserved so the message cannot shift the layout. */}
      <p role='status' className='text-muted mt-2 min-h-5 text-sm'>
        {message}
      </p>
    </div>
  );
}

export default React.memo(Quickstart);
