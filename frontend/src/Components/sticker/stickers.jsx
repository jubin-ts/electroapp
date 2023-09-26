// StickerSelector.js
import React, { useState } from 'react';
import { Picker } from 'emoji-mart';



function ChatWithStickers() {
  const [selectedSticker, setSelectedSticker] = useState('');

  // Handle sticker selection
  const handleStickerSelect = (sticker) => {
    setSelectedSticker(sticker.native);
  };

  return (
    <div>
      {/* Display the selected sticker */}
      {selectedSticker && (
        <div>
          <h3>Selected Sticker:</h3>
          <span>{selectedSticker}</span>
        </div>
      )}

      {/* Render the sticker picker */}
      <Picker
        onSelect={handleStickerSelect} // Callback function for sticker selection
        set="apple" // Emoji set (you can change it to 'google' or other sets)
        style={{ width: '100%', position: 'absolute', bottom: 0 }}
      />
    </div>
  );
}

export default ChatWithStickers;

