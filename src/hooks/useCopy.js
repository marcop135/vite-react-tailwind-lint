import { useCallback, useEffect, useRef, useState } from 'react';

const RESET_DELAY = 2500;
export const COPIED = 'Copied to clipboard';

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

/**
 * Copy text with three fallbacks: Clipboard API, execCommand over a selection,
 * then leave the node selected with a keyboard hint.
 *
 * @returns {{ message: string, copiedKey: string | null, copy: Function }}
 */
export function useCopy() {
  const [state, setState] = useState({ message: '', key: null });
  const timerRef = useRef(null);

  // The transient message must not outlive the component.
  useEffect(() => () => clearTimeout(timerRef.current), []);

  const copy = useCallback(async (text, node, key = text) => {
    let copied = await writeToClipboard(text);

    // Leaving the text selected means the user is one keystroke away even when
    // every programmatic path is denied.
    if (!copied && node) {
      selectNode(node);
      copied = copySelection();
      if (copied) window.getSelection().removeAllRanges();
    }

    setState({ message: copied ? COPIED : manualCopyHint(), key });
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(
      () => setState({ message: '', key: null }),
      RESET_DELAY
    );
  }, []);

  return {
    message: state.message,
    copiedKey: state.message === COPIED ? state.key : null,
    copy,
  };
}
