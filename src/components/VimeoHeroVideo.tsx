"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteContent } from "@content/site-content";

type VimeoHeroVideoProps = {
  videoId: string;
  label?: string;
  posterUrl: string;
};

type VimeoPlayer = {
  play: () => Promise<void>;
  pause: () => Promise<void>;
  setMuted: (muted: boolean) => Promise<void>;
  setVolume: (volume: number) => Promise<void>;
  setLoop: (loop: boolean) => Promise<void>;
  destroy: () => Promise<void>;
  ready: () => Promise<void>;
  on: (event: string, callback: () => void) => void;
};

type VimeoNamespace = {
  Player: new (element: HTMLElement, options: Record<string, unknown>) => VimeoPlayer;
};

declare global {
  interface Window {
    Vimeo?: VimeoNamespace;
  }
}

function VolumeOnIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]" aria-hidden>
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.08" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function VolumeOffIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]" aria-hidden>
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <path d="m22 9-6 6" />
      <path d="m16 9 6 6" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]" aria-hidden>
      <path d="M4 19a9 9 0 0 1 9-9h5" />
      <path d="M14 6l5 4-5 4" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden>
      <path d="M8 5.14v13.72L19 12 8 5.14Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden>
      <path d="M6 5h4v14H6V5Zm8 0h4v14h-4V5Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function VimeoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden>
      <path d="M22 7.4c-.1 2.2-1.6 5.2-4.6 9-3.1 4-5.7 6-7.8 6-1.3 0-2.4-1.2-3.3-3.6L5 14.2C4.4 12 3.8 11 3.2 11c-.2 0-.8.4-1.8 1.1L0 10.6c1.1-1 2.2-2 3.3-2.9C5 6.4 6.1 6 6.8 6c1.5 0 2.4 1.7 2.8 5 .4 3.4.7 5.1 1 5.1.5 0 1.4-1.7 2.6-5.1 1.1-3.2 1.7-4.6 2.5-4.3.8.3 1.2 2.1 1.1 5.5.1 1.4.5 2.1 1.2 2.1.6 0 1.5-.7 2.6-2.2 1.1-1.4 1.7-2.5 1.8-3.2.3-1.2-.3-1.8-1.8-1.8Z" />
    </svg>
  );
}

function loadVimeoApi(): Promise<VimeoNamespace> {
  if (window.Vimeo?.Player) {
    return Promise.resolve(window.Vimeo);
  }

  return new Promise((resolve, reject) => {
    const existing = document.querySelector('script[src="https://player.vimeo.com/api/player.js"]');
    const script = existing ?? document.createElement("script");

    const finish = () => {
      if (window.Vimeo?.Player) resolve(window.Vimeo);
      else reject(new Error("Vimeo player failed to load"));
    };

    script.addEventListener("load", finish, { once: true });
    script.addEventListener("error", () => reject(new Error("Vimeo player failed to load")), { once: true });

    if (!existing) {
      script.src = "https://player.vimeo.com/api/player.js";
      script.async = true;
      document.head.appendChild(script);
    }
  });
}

export function VimeoHeroVideo({ videoId, label = "trailer", posterUrl }: VimeoHeroVideoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<VimeoPlayer | null>(null);
  const copiedTimeout = useRef<number | null>(null);
  const userMutedRef = useRef(false);
  const userPausedRef = useRef(false);
  const playingRef = useRef(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [everPlayed, setEverPlayed] = useState(false);
  const [embedFailed, setEmbedFailed] = useState(false);
  const [copied, setCopied] = useState(false);
  const watchUrl = `https://vimeo.com/${videoId}`;
  const showPoster = embedFailed || !everPlayed;

  const markPlaying = () => {
    playingRef.current = true;
    setPlaying(true);
    setEverPlayed(true);
  };

  const playMuted = (player: VimeoPlayer) => {
    if (userPausedRef.current) return;
    player.setMuted(true).catch(() => undefined);
    player.setVolume(0).catch(() => undefined);
    player.play().then(markPlaying).catch(() => undefined);
  };

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let cancelled = false;
    const retryIds: number[] = [];

    loadVimeoApi()
      .then((Vimeo) => {
        if (cancelled || !mountRef.current) return;

        const player = new Vimeo.Player(mountRef.current, {
          id: Number(videoId),
          autoplay: true,
          muted: true,
          loop: true,
          controls: false,
          title: false,
          byline: false,
          portrait: false,
          autopause: false,
          playsinline: true,
          dnt: true,
        });
        playerRef.current = player;

        player.on("play", markPlaying);
        player.on("pause", () => {
          playingRef.current = false;
          setPlaying(false);
        });
        player.on("ended", () => {
          if (userPausedRef.current) return;
          playMuted(player);
        });
        player.on("error", () => {
          setEmbedFailed(true);
          setPlaying(false);
        });

        player.ready().then(() => {
          if (cancelled) return;
          player.setLoop(true).catch(() => undefined);
          playMuted(player);
          for (const delay of [400, 1200, 2500, 5000]) {
            retryIds.push(window.setTimeout(() => {
              if (!playingRef.current) playMuted(player);
            }, delay));
          }
        }).catch(() => {
          setEmbedFailed(true);
        });
      })
      .catch(() => {
        if (!cancelled) setEmbedFailed(true);
      });

    return () => {
      cancelled = true;
      for (const id of retryIds) window.clearTimeout(id);
      playerRef.current?.destroy().catch(() => undefined);
      playerRef.current = null;
      playingRef.current = false;
      setEverPlayed(false);
      setEmbedFailed(false);
      if (copiedTimeout.current) window.clearTimeout(copiedTimeout.current);
    };
  }, [videoId]);

  const togglePlayback = () => {
    const player = playerRef.current;
    if (!player) return;

    if (playingRef.current) {
      userPausedRef.current = true;
      player.pause().catch(() => undefined);
      playingRef.current = false;
      setPlaying(false);
      return;
    }

    userPausedRef.current = false;
    playMuted(player);
  };

  const toggleAudio = () => {
    const player = playerRef.current;
    if (!player) return;

    if (muted) {
      userMutedRef.current = false;
      userPausedRef.current = false;
      player.setMuted(false).catch(() => undefined);
      player.setVolume(1).catch(() => undefined);
      player.play().then(markPlaying).catch(() => undefined);
      setMuted(false);
      return;
    }

    userMutedRef.current = true;
    player.setMuted(true).catch(() => undefined);
    setMuted(true);
  };

  const markCopied = () => {
    setCopied(true);
    if (copiedTimeout.current) window.clearTimeout(copiedTimeout.current);
    copiedTimeout.current = window.setTimeout(() => setCopied(false), 1800);
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
      if (error instanceof DOMException && error.name === "AbortError") return;
    }

    try {
      await navigator.clipboard.writeText(watchUrl);
      markCopied();
    } catch {
      // Keep the user on the page if sharing is blocked.
    }
  };

  return (
    <div ref={wrapRef} className="hero-video-wrap">
      <div className="hero-visual-frame relative aspect-video w-full">
        <div className="hero-video relative h-full w-full overflow-hidden">
          <div className="hero-video-slot">
            <div className="hero-video-frame">
              <div ref={mountRef} className="hero-video-mount" />
            </div>
            <div className={`hero-video-poster${showPoster ? " is-visible" : ""}`} aria-hidden={!showPoster}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={posterUrl} alt="" className="hero-video-poster-thumb" decoding="async" />
              <div className="hero-video-poster-scrim" aria-hidden />
              <Image
                src={siteContent.assets.heroLogo}
                alt=""
                width={1020}
                height={660}
                className="hero-video-poster-logo"
                priority
              />
              {!embedFailed ? (
                <button type="button" className="hero-video-poster-play" onClick={togglePlayback} aria-label={`Play ${label}`}>
                  <span className="hero-video-poster-play-icon" aria-hidden>
                    <PlayIcon />
                  </span>
                </button>
              ) : null}
            </div>
          </div>
          <div className="hero-visual-sheen pointer-events-none absolute inset-0" aria-hidden />
        </div>
      </div>
      <div className="hero-video-controls max-sm:relative max-sm:z-30">
        <button
          type="button"
          onClick={toggleAudio}
          className={`hero-video-btn ${muted ? "is-muted" : ""}`}
          aria-pressed={!muted}
          aria-label={muted ? `Turn ${label} sound on` : `Mute ${label} sound`}
        >
          {muted ? <VolumeOffIcon /> : <VolumeOnIcon />}
        </button>
        <button
          type="button"
          onClick={togglePlayback}
          className="hero-video-btn"
          aria-pressed={playing}
          aria-label={playing ? `Pause ${label}` : `Play ${label}`}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-video-btn"
          aria-label={`Watch this ${label} on Vimeo, opens in a new tab`}
        >
          <VimeoIcon />
        </a>
        <button
          type="button"
          onClick={shareTrailer}
          className="hero-video-btn hero-video-share"
          aria-label={copied ? `${label} link copied` : `Share ${label}`}
        >
          {copied ? <CheckIcon /> : <ShareIcon />}
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {copied ? "Trailer link copied to clipboard" : ""}
      </p>
    </div>
  );
}
