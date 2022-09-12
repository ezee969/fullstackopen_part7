import React, { useState } from 'react';

//ui/components
import userLogo from 'utils/images/user.png';
import { ConfigPanel } from './components';

export default function ConfigButton() {
  const [showPanel, setShowPanel] = useState(false);

  const handleConfigButton = () => {
    setShowPanel(!showPanel);
  };

  return (
    <div className="flex flex-col items-end gap-1">
      <div className="w-7">
        <img
          className="h-auto rounded-full cursor-pointer bg-white"
          src={userLogo}
          alt="settings"
          onClick={handleConfigButton}
        />
      </div>
      <ConfigPanel isVisible={showPanel} />
    </div>
  );
}
