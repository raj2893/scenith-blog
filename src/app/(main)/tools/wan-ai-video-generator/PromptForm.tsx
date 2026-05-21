'use client';

export default function PromptForm({ slug }: { slug: string }) {
  return (
    <div className="wan-prompt-box">
      <label className="wan-prompt-label">Enter your video prompt:</label>
      <textarea
        className="wan-prompt-textarea"
        placeholder="Example: Cinematic drone shot of a futuristic city at sunset, golden hour lighting, flying between skyscrapers, 4K quality"
        rows={3}
        id="wanPromptInput"
      />
      <form
        action="/create-ai-content"
        method="GET"
        className="wan-form-redirect"
      >
        <input type="hidden" name="tab" value="video" />
        <input type="hidden" name="model" value="WAN_2_5" />
        <input type="hidden" name="utm_source" value={slug} />
        <input type="hidden" name="utm_medium" value="prompt" />
        <input type="hidden" name="utm_campaign" value="seo" />
        <input type="hidden" id="wanPromptField" name="text" value="" />
        <button
          type="submit"
          className="wan-btn-primary wan-btn-block"
          onClick={() => {
            const promptTextarea = document.getElementById('wanPromptInput') as HTMLTextAreaElement;
            const hiddenField = document.getElementById('wanPromptField') as HTMLInputElement;
            if (promptTextarea && hiddenField) {
              hiddenField.value = promptTextarea.value;
            }
          }}
        >
          🎬 Generate Video Now →
        </button>
      </form>
      <p className="wan-prompt-hint">Your video will open in our free AI Content Creator with Wan 2.5 pre-selected.</p>
    </div>
  );
}