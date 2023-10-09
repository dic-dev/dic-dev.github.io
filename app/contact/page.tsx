'use client'

import { useEffect, useState } from 'react';

export default function Page() {
  useEffect(() => {
    const iframe = (document?.getElementById('iframe') as HTMLIFrameElement);
    console.log(iframe)
    if (iframe !== null && iframe.contentWindow !== null) {
      iframe.style.width = iframe.contentWindow.document.body.scrollWidth + "px";
      iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
    }
  })

  const test = () => {
    console.log((document?.getElementById('iframe') as HTMLIFrameElement))
  }

  return (
    <div className="iframe-wrapper w-full h-full">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScQNxpnhmSRCpM9lqWs_IPHYZZU9MctiDcErb5pINHs6vLjWQ/viewform?embedded=true"
        id="iframe"
        scrolling="no"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        style={{ width: "100%" }}
      >
        読み込んでいます…
      </iframe>
      <button onClick={test}>
        test
      </button>
    </div>
  )
}
