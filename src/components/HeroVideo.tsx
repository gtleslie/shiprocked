"use client";

import { useEffect, useRef, useState } from "react";
import { YouTubeIcon } from "@/components/SocialIcons";
import { siteContent } from "@content/site-content";

type HeroVideoProps = {
  videoId: string;
};

type YouTubePlayer = {
  destroy: () => void;
  mute: () => void;
  unMute: () => void;
  playVideo: () => void;
  setVolume: (volume: number) => void;
  unloadModule: (module: string) => void;
};

type YouTubeNamespace = {
  Player: new (
    element: HTMLElement,
    options: {
      videoId: string;
      host?: string;
      playerVars?: Record<string, string | number>;
      events?: {
        onReady?: (event: { target: YouTubePlayer }) => void;
        onStateChange?: (event: { data: number; target: YouTubePlayer }) => void;
      };
    },
  ) => YouTubePlayer;
  PlayerState: { ENDED: number };
};

declare global {
  interface Window {
    YT?: YouTubeNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

function MicOnIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
      aria-hidden
    >
      <path d="M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z" />
      <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
      <path d="M12 18v3" />
    </svg>
  );
}

function MicOffIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
      aria-hidden
    >
      <path d="M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z" />
      <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
      <path d="M12 18v3" />
      <path d="M4 4l16 16" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
      aria-hidden
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.6 13.5l6.8 4" />
      <path d="M15.4 6.5l-6.8 4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
      aria-hidden
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function loadYouTubeApi(): Promise<YouTubeNamespace> {
  if (window.YT?.Player) {
    return Promise.resolve(window.YT);
  }

  return new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      if (window.YT) resolve(window.YT);
    };

    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.head.appendChild(script);
    }
  });
}

export function HeroVideo({ videoId }: HeroVideoProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const copiedTimeout = useRef<number | null>(null);
  const [muted, setMuted] = useState(true);
  const [copied, setCopied] = useState(false);
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let cancelled = false;

    loadYouTubeApi().then((YT) => {
      if (cancelled || !mountRef.current) return;

      const hideCaptions = (player: YouTubePlayer) => {
        try {
          player.unloadModule("captions");
          player.unloadModule("cc");
        } catch {
          // YouTube may not expose caption modules in every embed.
        }
      };

      playerRef.current = new YT.Player(mountRef.current, {
        videoId,
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 1,
          disablekb: 0,
          fs: 1,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          loop: 1,
          playlist: videoId,
          iv_load_policy: 3,
          cc_load_policy: 0,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            hideCaptions(event.target);
            event.target.mute();
            event.target.playVideo();
          },
          onStateChange: (event) => {
            hideCaptions(event.target);
            if (event.data === YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      playerRef.current?.destroy();
      playerRef.current = null;
      if (copiedTimeout.current) {
        window.clearTimeout(copiedTimeout.current);
      }
    };
  }, [videoId]);

  const toggleAudio = () => {
    const player = playerRef.current;
    if (!player) return;

    if (muted) {
      player.unMute();
      player.setVolume(100);
      player.playVideo();
      setMuted(false);
      return;
    }

    player.mute();
    setMuted(true);
  };

  const markCopied = () => {
    setCopied(true);
    if (copiedTimeout.current) {
      window.clearTimeout(copiedTimeout.current);
    }
    copiedTimeout.current = window.setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  const copyWatchUrl = async () => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(watchUrl);
      return;
    }

    const input = document.createElement("textarea");
    input.value = watchUrl;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.left = "-9999px";
    document.body.appendChild(input);
    input.select();
    const copiedText = document.execCommand("copy");
    document.body.removeChild(input);
    if (!copiedText) {
      throw new Error("Copy command failed");
    }
  };

  const shareTrailer = async () => {
    const shareData = {
      title: siteContent.site.title,
      text: siteContent.site.description,
      url: watchUrl,
    };

    try {
      if (typeof navigator.share === "function") {
        await navigator.share(shareData);
        return;
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }
    }

    try {
      await copyWatchUrl();
      markCopied();
    } catch {
      // Keep the user on the page if sharing/copying is blocked.
    }
  };

  return (
    <div className="hero-video-wrap">
      <div className="hero-visual-frame relative aspect-video w-full">
        <div className="hero-video relative h-full w-full overflow-hidden">
          <div className="hero-video-slot">
            <div className="hero-video-frame">
              <div ref={mountRef} />
            </div>
          </div>
          <div className="hero-visual-sheen pointer-events-none absolute inset-0" aria-hidden />
        </div>
      </div>
      <div className="hero-video-controls">
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-video-btn"
          aria-label="Watch this trailer on YouTube, opens in a new tab"
        >
          <YouTubeIcon className="h-[18px] w-[18px]" />
        </a>
        <button
          type="button"
          onClick={shareTrailer}
          className="hero-video-btn"
          aria-label={copied ? "Trailer link copied" : "Share trailer"}
        >
          {copied ? <CheckIcon /> : <ShareIcon />}
        </button>
        <button
          type="button"
          onClick={toggleAudio}
          className={`hero-video-btn ${muted ? "is-muted" : ""}`}
          aria-pressed={!muted}
          aria-label={muted ? "Turn trailer sound on" : "Mute trailer sound"}
        >
          {muted ? <MicOffIcon /> : <MicOnIcon />}
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {copied ? "Trailer link copied to clipboard" : ""}
      </p>
    </div>
  );
}
