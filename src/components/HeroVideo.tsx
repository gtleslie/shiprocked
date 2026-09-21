"use client";

import { useEffect, useRef, useState } from "react";
import { YouTubeIcon } from "@/components/SocialIcons";
import { siteContent } from "@content/site-content";

type HeroVideoProps = {
  videoId: string;
  autoSound?: boolean;
  label?: string;
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
  PlayerState: {
    ENDED: number;
    PAUSED: number;
    PLAYING: number;
    UNSTARTED: number;
    CUED: number;
  };
};

declare global {
  interface Window {
    YT?: YouTubeNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

function VolumeOnIcon() {
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
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.08" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function VolumeOffIcon() {
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
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <path d="m22 9-6 6" />
      <path d="m16 9 6 6" />
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
      <path d="M4 19a9 9 0 0 1 9-9h5" />
      <path d="M14 6l5 4-5 4" />
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

export function HeroVideo({
  videoId,
  autoSound = false,
  label = "trailer",
}: HeroVideoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const copiedTimeout = useRef<number | null>(null);
  const fadeToken = useRef(0);
  const inViewRef = useRef(false);
  const audioInViewRef = useRef(false);
  const userMutedRef = useRef(false);
  const [muted, setMuted] = useState(true);
  const [copied, setCopied] = useState(false);
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const fadeVolume = (player: YouTubePlayer, from: number, to: number, ms: number) => {
    const token = ++fadeToken.current;
    const start = performance.now();

    const step = (now: number) => {
      if (token !== fadeToken.current) return;
      const t = Math.min((now - start) / ms, 1);
      player.setVolume(Math.round(from + (to - from) * t));
      if (t < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const ensurePlaying = (player: YouTubePlayer) => {
    try {
      player.playVideo();
    } catch {
      // Autoplay may be blocked until the player is fully ready.
    }
  };

  const applyInViewPlayback = (visible: boolean, audioEligible: boolean) => {
    const player = playerRef.current;
    if (!player) return;

    if (visible) {
      ensurePlaying(player);
    }

    if (!autoSound) {
      if (visible) {
        player.mute();
        setMuted(true);
      }
      return;
    }

    if (audioEligible && !userMutedRef.current) {
      try {
        player.unMute();
        fadeVolume(player, 0, 100, 420);
        setMuted(false);
      } catch {
        player.mute();
        setMuted(true);
      }
      return;
    }

    fadeVolume(player, 100, 0, 380);
    window.setTimeout(() => {
      if (!audioInViewRef.current) {
        player.mute();
        setMuted(true);
      }
    }, 400);
  };

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
          enablejsapi: 1,
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
            ensurePlaying(event.target);
            applyInViewPlayback(inViewRef.current, audioInViewRef.current);
          },
          onStateChange: (event) => {
            hideCaptions(event.target);
            const { ENDED, PAUSED, UNSTARTED, CUED } = YT.PlayerState;
            if (event.data === ENDED) {
              ensurePlaying(event.target);
              return;
            }
            if (
              inViewRef.current &&
              (event.data === PAUSED || event.data === UNSTARTED || event.data === CUED)
            ) {
              ensurePlaying(event.target);
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      fadeToken.current += 1;
      playerRef.current?.destroy();
      playerRef.current = null;
      if (copiedTimeout.current) {
        window.clearTimeout(copiedTimeout.current);
      }
    };
  }, [videoId, autoSound]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
        audioInViewRef.current =
          entry.isIntersecting && entry.intersectionRatio >= 0.35;
        applyInViewPlayback(inViewRef.current, audioInViewRef.current);
      },
      { threshold: [0, 0.01, 0.35, 0.6], rootMargin: "64px 0px" },
    );

    observer.observe(wrap);
    return () => observer.disconnect();
  }, [autoSound, videoId]);

  useEffect(() => {
    const resumeIfVisible = () => {
      if (document.visibilityState !== "visible") return;
      const player = playerRef.current;
      if (!player || !inViewRef.current) return;
      ensurePlaying(player);
    };

    document.addEventListener("visibilitychange", resumeIfVisible);
    return () => document.removeEventListener("visibilitychange", resumeIfVisible);
  }, [videoId]);

  const toggleAudio = () => {
    const player = playerRef.current;
    if (!player) return;

    if (muted) {
      userMutedRef.current = false;
      player.unMute();
      player.setVolume(100);
      player.playVideo();
      setMuted(false);
      return;
    }

    userMutedRef.current = true;
    fadeToken.current += 1;
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
    <div ref={wrapRef} className="hero-video-wrap">
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
      <div className="hero-video-controls max-sm:relative max-sm:z-30">
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-video-btn"
          aria-label={`Watch this ${label} on YouTube, opens in a new tab`}
        >
          <YouTubeIcon className="h-[18px] w-[18px]" />
        </a>
        <button
          type="button"
          onClick={shareTrailer}
          className="hero-video-btn"
          aria-label={copied ? `${label} link copied` : `Share ${label}`}
        >
          {copied ? <CheckIcon /> : <ShareIcon />}
        </button>
        <button
          type="button"
          onClick={toggleAudio}
          className={`hero-video-btn ${muted ? "is-muted" : ""}`}
          aria-pressed={!muted}
          aria-label={muted ? `Turn ${label} sound on` : `Mute ${label} sound`}
        >
          {muted ? <VolumeOffIcon /> : <VolumeOnIcon />}
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {copied ? "Trailer link copied to clipboard" : ""}
      </p>
    </div>
  );
}
