import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SCAFFOLD_COMMAND } from '../constants';

const RESET_DELAY = 2500;

function manualCopyHint() {
  const isApple = /Mac|iPhone|iPad/i.test(navigator.userAgent);
  return `Selected, press ${isApple ? 'Cmd+C' : 'Ctrl+C'}`;
}

function selectNode(node) {
  const range = document.createRange();
  range.selectNodeContents(node);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

async function writeToClipboard(text) {
  if (!navigator.clipboard?.writeText) return false;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

// execCommand is deprecated but remains the only copy path on insecure origins
// and in sandboxed frames, where the Clipboard API is blocked outright.
function copySelection() {
  try {
    return document.execCommand('copy');
  } catch {
    return false;
  }
}

function Hero() {
  const [message, setMessage] = useState('');
  const commandRef = useRef(null);
  const timerRef = useRef(null);

  // The transient message must not outlive the component.
  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleCopy = useCallback(async () => {
    let copied = await writeToClipboard(SCAFFOLD_COMMAND);

    // Leaving the text selected means the user is one keystroke away even when
    // every programmatic path is denied.
    if (!copied && commandRef.current) {
      selectNode(commandRef.current);
      copied = copySelection();
      if (copied) window.getSelection().removeAllRanges();
    }

    setMessage(copied ? 'Copied to clipboard' : manualCopyHint());
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setMessage(''), RESET_DELAY);
  }, []);

  const copied = message === 'Copied to clipboard';

  return (
    <section className='mb-12 text-center'>
      <h2 className='mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl'>
        Vite + React + Tailwind
      </h2>
      <p className='mx-auto max-w-xl'>
        Linting, formatting, tests, and a tagged-release pipeline, already wired
        up.
      </p>

      <div className='mx-auto mt-8 flex max-w-xl flex-col items-stretch gap-2 sm:flex-row'>
        <code
          ref={commandRef}
          className='surface flex-1 overflow-x-auto rounded px-4 py-2 text-left font-mono text-sm whitespace-pre'
        >
          {SCAFFOLD_COMMAND}
        </code>
        <button
          type='button'
          onClick={handleCopy}
          className='cursor-pointer rounded bg-white px-4 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300'
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      {/* Height is reserved so the message cannot shift the layout. */}
      <p role='status' className='mt-2 min-h-5 text-sm'>
        {message}
      </p>
    </section>
  );
}

export default React.memo(Hero);
