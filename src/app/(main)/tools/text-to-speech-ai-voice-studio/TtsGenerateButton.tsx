'use client';

export default function TtsGenerateButton({ ctaUrl }: { ctaUrl: string }) {
  const handleClick = () => {
    const input = document.getElementById('ttsScriptInput') as HTMLTextAreaElement;
    const text = input?.value;
    if (text && text.trim()) {
      sessionStorage.setItem('microToolScript', text);
      sessionStorage.setItem('cac_prefill_script', text);
    }
    window.location.href = ctaUrl;
  };

  return (
    <button
      className="tts-generate-btn"
      id="ttsGenerateBtn"
      onClick={handleClick}
    >
      <span className="tts-btn-icon">🎤</span>
      Generate AI Voice →
    </button>
  );
}