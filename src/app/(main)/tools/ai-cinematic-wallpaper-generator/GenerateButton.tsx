'use client';

interface GenerateButtonProps {
  ctaUrl: string;
}

export default function GenerateButton({ ctaUrl }: GenerateButtonProps) {
  return (
    <button
      className="cinematic-generate-btn"
      onClick={() => {
        const promptInput = document.getElementById('cinematicPromptInput') as HTMLTextAreaElement;
        const prompt = promptInput?.value || '';
        if (prompt) {
          sessionStorage.setItem('microToolPrompt', prompt);
        }
        window.location.href = ctaUrl;
      }}
    >
      <span className="cinematic-btn-icon">🎬</span>
      Generate Cinematic Wallpaper →
    </button>
  );
}