'use client';

export default function ScriptPromptBox() {
  const handleGenerate = () => {
    const prompt = (document.getElementById('scriptPrompt') as HTMLTextAreaElement)?.value;
    if (prompt?.trim()) {
      sessionStorage.setItem('cac_script_prompt', prompt);
      window.location.href = "/create-ai-content?tab=voice&utm_source=faceless-youtube-script-generator&utm_medium=prompt_box&utm_campaign=seo";
    } else {
      window.location.href = "/create-ai-content?tab=voice&utm_source=faceless-youtube-script-generator&utm_medium=cta&utm_campaign=seo";
    }
  };

  return (
    <div className="fysg-prompt-box">
      <label htmlFor="scriptPrompt" className="fysg-prompt-label">🎯 What's your video about?</label>
      <textarea
        id="scriptPrompt"
        className="fysg-prompt-textarea"
        placeholder="E.g., 'The mysterious disappearance of a billionaire in 1998' or 'How a teenager built a $1M business with Canva'"
        rows={3}
      ></textarea>
      <button className="fysg-btn-generate" onClick={handleGenerate}>
        ✨ Generate Script & Voice →
      </button>
      <p className="fysg-prompt-note">No signup needed to try. Paid plans start at $9/mo.</p>
    </div>
  );
}