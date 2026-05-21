'use client';

export default function PromptForm({ slug }: { slug: string }) {
  return (
    <div className="grok-prompt-box">
      <label className="grok-prompt-label">Describe your video (include sound!):</label>
      <textarea
        className="grok-prompt-textarea"
        placeholder="Example: A peaceful beach at sunset with gentle waves, seagulls in distance, soft acoustic guitar playing, 9:16 for Reels"
        rows={3}
        id="grokPromptInput"
      />
      <form
        action="/create-ai-content"
        method="GET"
        className="grok-form-redirect"
      >
        <input type="hidden" name="tab" value="video" />
        <input type="hidden" name="model" value="GROK_IMAGINE" />
        <input type="hidden" name="utm_source" value={slug} />
        <input type="hidden" name="utm_medium" value="prompt" />
        <input type="hidden" name="utm_campaign" value="seo" />
        <input type="hidden" id="grokPromptField" name="text" value="" />
        <button
          type="submit"
          className="grok-btn-primary grok-btn-block"
          onClick={() => {
            const promptTextarea = document.getElementById('grokPromptInput') as HTMLTextAreaElement;
            const hiddenField = document.getElementById('grokPromptField') as HTMLInputElement;
            if (promptTextarea && hiddenField) {
              hiddenField.value = promptTextarea.value;
            }
          }}
        >
          🎵 Generate Video with Audio →
        </button>
      </form>
      <p className="grok-prompt-hint">Your video will open in our AI Content Creator with Grok Imagine pre-selected — audio automatically included!</p>
    </div>
  );
}