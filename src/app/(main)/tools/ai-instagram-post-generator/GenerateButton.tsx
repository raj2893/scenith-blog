'use client';

interface GenerateButtonProps {
  ctaUrl: string;
}

export default function GenerateButton({ ctaUrl }: GenerateButtonProps) {
  return (
    <button
      className="igp-prompt-btn"
      onClick={() => {
        const prompt = (document.getElementById('igp-prompt-input') as HTMLTextAreaElement).value;
        if (prompt.trim()) {
          sessionStorage.setItem('microToolPrompt', prompt);
        }
        window.location.href = ctaUrl;
      }}
    >
      Generate Post for Free →
    </button>
  );
}