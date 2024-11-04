// Assuming extensions.js is in the same directory as App.js
import React, { useEffect } from 'react';
import {
  MultiselectCarousel,
  MultiselectCarouselv2,
  MultiselectCheckbox,
} from './extensions'; // Adjust the path accordingly

function App() {
  useEffect(() => {
    // Import the script and execute the voiceflow code on component load
    const script = document.createElement('script');
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    script.type = 'text/javascript';

    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '670bf9ddb0df138f01cbddc0' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        launch: {
          event: {
            type: "launch",
            payload: {
              user_group: "User",
              Job: "Job1234",
              Vehicle_Registration: "Y624RDL"
            }
          }
        },
        render: {
          mode: 'embedded',
          target: document.getElementById('voiceflow-chat-frame'),
        },
        autostart: true,
        allowDangerousHTML: true,
        assistant: {
          extensions: [
            MultiselectCarousel,
            MultiselectCarouselv2,
            MultiselectCheckbox,
          ],
        },
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <canvas
        id="confetti-canvas"
        style={{
          position: 'fixed',
          zIndex: 999,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
      ></canvas>

      <div
        id="flat-chat"
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      ></div>
      <div id="voiceflow-chat-frame"></div>
    </div>
  );
}

export default App;
