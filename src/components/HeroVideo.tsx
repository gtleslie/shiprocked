"use client";

import Image from "next/image";
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
  pauseVideo: () => void;
  getPlayerState?: () => number;
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
        onError?: (event: { data: number }) => void;
      };
    },
  ) => YouTubePlayer;
  PlayerState: {
    ENDED: number;
    PAUSED: number;
    PLAYING: number;
    BUFFERING: number;
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

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[18px] w-[18px]"
      aria-hidden
    >
      <path d="M8 5.14v13.72L19 12 8 5.14Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[18px] w-[18px]"
      aria-hidden
    >
      <path d="M6 5h4v14H6V5Zm8 0h4v14h-4V5Z" />
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
  const inViewRef = useRef(false);
  const wasInViewRef = useRef(false);
  const audioInViewRef = useRef(false);
  const userMutedRef = useRef(false);
  const userPausedRef = useRef(false);
  const everPlayedRef = useRef(false);
  const embedFailedRef = useRef(false);
  const resumeAttemptRef = useRef(0);
  const unmuteTimerRef = useRef<number | null>(null);
  // Always start muted in UI until playback is running and unmute succeeds.
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [everPlayed, setEverPlayed] = useState(false);
  const [embedFailed, setEmbedFailed] = useState(false);
  const [copied, setCopied] = useState(false);
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const posterThumbUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const showPoster = embedFailed || !everPlayed;

  const syncViewport = () => {
    const wrap = wrapRef.current;
    if (!wrap) {
      return { visible: false, audioEligible: false };
    }

    const rect = wrap.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const visible = rect.bottom > 0 && rect.top < viewportHeight;
    if (!visible || rect.height <= 0) {
      return { visible: false, audioEligible: false };
    }

    const visibleHeight =
      Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
    const ratio = visibleHeight / rect.height;
    return { visible: true, audioEligible: ratio >= 0.35 };
  };

  const isPlayerActive = (player: YouTubePlayer) => {
    try {
      const state = player.getPlayerState?.();
      const YT = window.YT;
      if (state === undefined || !YT?.PlayerState) return false;
      const { PLAYING, BUFFERING } = YT.PlayerState;
      return state === PLAYING || state === BUFFERING;
    } catch {
      return false;
    }
  };

  const isPlayerPlaying = (player: YouTubePlayer) => {
    try {
      const state = player.getPlayerState?.();
      const YT = window.YT;
      if (state === undefined || !YT?.PlayerState) return false;
      return state === YT.PlayerState.PLAYING;
    } catch {
      return false;
    }
  };

  const enableAutoplaySound = (player: YouTubePlayer) => {
    if (!autoSound || userMutedRef.current || userPausedRef.current) return;
    if (!audioInViewRef.current) return;
    if (!isPlayerPlaying(player)) return;
    try {
      player.unMute();
      player.setVolume(100);
      setMuted(false);
    } catch {
      player.mute();
      setMuted(true);
    }
  };

  const scheduleAutoplaySound = (player: YouTubePlayer) => {
    if (!autoSound || userMutedRef.current) return;
    for (const delay of [400, 900, 1600, 2800, 4500]) {
      window.setTimeout(() => enableAutoplaySound(player), delay);
    }
  };

  const queueAutoplaySound = (player: YouTubePlayer) => {
    if (!autoSound || userMutedRef.current) return;
    clearUnmuteTimer();
    unmuteTimerRef.current = window.setTimeout(() => {
      unmuteTimerRef.current = null;
      enableAutoplaySound(player);
      scheduleAutoplaySound(player);
    }, 450);
  };

  const ensureAutoplay = (player: YouTubePlayer) => {
    if (userPausedRef.current) return;
    if (isPlayerActive(player)) {
      return;
    }
    try {
      // Browsers allow muted autoplay; unmute only after PLAYING (see onStateChange).
      player.mute();
      setMuted(true);
      player.playVideo();
    } catch {
      // Autoplay may be blocked until the player is fully ready.
    }
  };

  const resumeIfStuck = (player: YouTubePlayer) => {
    if (userPausedRef.current || !inViewRef.current) return;
    if (isPlayerActive(player)) return;
    const now = performance.now();
    if (now - resumeAttemptRef.current < 900) return;
    resumeAttemptRef.current = now;
    ensureAutoplay(player);
  };

  const schedulePlayRetries = (player: YouTubePlayer) => {
    for (const delay of [0, 120, 350, 700, 1500, 2800, 4500, 7000, 10_000]) {
      window.setTimeout(() => {
        if (userPausedRef.current) return;
        ensureAutoplay(player);
      }, delay);
    }
  };

  const startAutoplayWatchdog = (player: YouTubePlayer) => {
    const startedAt = performance.now();
    const tick = () => {
      if (userPausedRef.current || everPlayedRef.current) return;
      if (performance.now() - startedAt > 12_000) return;
      ensureAutoplay(player);
      window.setTimeout(tick, 600);
    };
    window.setTimeout(tick, 600);
  };

  const clearUnmuteTimer = () => {
    if (unmuteTimerRef.current !== null) {
      window.clearTimeout(unmuteTimerRef.current);
      unmuteTimerRef.current = null;
    }
  };

  const applyInViewPlayback = (visible: boolean, audioEligible: boolean) => {
    const player = playerRef.current;
    if (!player) return;

    const enteredView = visible && !wasInViewRef.current;
    wasInViewRef.current = visible;

    if (!visible) {
      clearUnmuteTimer();
      return;
    }

    if (
      audioEligible &&
      autoSound &&
      !userMutedRef.current &&
      everPlayedRef.current
    ) {
      enableAutoplaySound(player);
    }

    if (userPausedRef.current) {
      return;
    }

    const shouldKickPlayback = enteredView || !everPlayedRef.current;
    if (!shouldKickPlayback) {
      return;
    }

    ensureAutoplay(player);
    schedulePlayRetries(player);
  };

  const updateViewportPlayback = () => {
    const { visible, audioEligible } = syncViewport();
    inViewRef.current = visible;
    audioInViewRef.current = audioEligible;
    applyInViewPlayback(visible, audioEligible);
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
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          fs: 0,
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
            userPausedRef.current = false;
            inViewRef.current = syncViewport().visible;
            updateViewportPlayback();
            ensureAutoplay(event.target);
            schedulePlayRetries(event.target);
            startAutoplayWatchdog(event.target);
          },
          onStateChange: (event) => {
            hideCaptions(event.target);
            const { ENDED, PAUSED, PLAYING, BUFFERING, UNSTARTED, CUED } =
              YT.PlayerState;
            if (event.data === PLAYING) {
              everPlayedRef.current = true;
              setEverPlayed(true);
              setPlaying(true);
              queueAutoplaySound(event.target);
            } else if (event.data === BUFFERING) {
              setPlaying(true);
            } else if (event.data === PAUSED) {
              setPlaying(false);
            }
            if (
              event.data === PAUSED ||
              event.data === UNSTARTED ||
              event.data === CUED
            ) {
              resumeIfStuck(event.target);
            }
            if (event.data === ENDED && !userPausedRef.current && inViewRef.current) {
              ensureAutoplay(event.target);
            }
          },
          onError: () => {
            embedFailedRef.current = true;
            setEmbedFailed(true);
            setPlaying(false);
          },
        },
      });
    });

    return () => {
      cancelled = true;
      everPlayedRef.current = false;
      embedFailedRef.current = false;
      wasInViewRef.current = false;
      setEverPlayed(false);
      setEmbedFailed(false);
      playerRef.current?.destroy();
      playerRef.current = null;
      clearUnmuteTimer();
      if (copiedTimeout.current) {
        window.clearTimeout(copiedTimeout.current);
      }
    };
  }, [videoId, autoSound]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    updateViewportPlayback();
    requestAnimationFrame(() => updateViewportPlayback());

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
        audioInViewRef.current =
          entry.isIntersecting && entry.intersectionRatio >= 0.35;
        applyInViewPlayback(inViewRef.current, audioInViewRef.current);
      },
      { threshold: [0, 0.1, 0.25, 0.5], rootMargin: "80px 0px" },
    );

    observer.observe(wrap);

    const kickAfterInteraction = () => {
      const player = playerRef.current;
      if (player && !userPausedRef.current && inViewRef.current) {
        ensureAutoplay(player);
        schedulePlayRetries(player);
      }
    };
    document.addEventListener("pointerdown", kickAfterInteraction, {
      once: true,
      passive: true,
    });
    document.addEventListener("keydown", kickAfterInteraction, { once: true });

    return () => {
      observer.disconnect();
      clearUnmuteTimer();
      document.removeEventListener("pointerdown", kickAfterInteraction);
      document.removeEventListener("keydown", kickAfterInteraction);
    };
  }, [autoSound, videoId]);

  useEffect(() => {
    const resumeIfVisible = () => {
      if (document.visibilityState !== "visible") return;
      const player = playerRef.current;
      if (!player || !inViewRef.current || userPausedRef.current) return;
      resumeIfStuck(player);
    };

    const resumeFromCache = () => {
      window.setTimeout(resumeIfVisible, 0);
    };

    document.addEventListener("visibilitychange", resumeIfVisible);
    window.addEventListener("pageshow", resumeFromCache);
    return () => {
      document.removeEventListener("visibilitychange", resumeIfVisible);
      window.removeEventListener("pageshow", resumeFromCache);
    };
  }, [videoId]);

  const togglePlayback = () => {
    const player = playerRef.current;
    if (!player) return;

    if (playing) {
      userPausedRef.current = true;
      clearUnmuteTimer();
      try {
        player.pauseVideo();
      } catch {
        // ignore
      }
      setPlaying(false);
      return;
    }

    userPausedRef.current = false;
    try {
      player.mute();
      player.playVideo();
      everPlayedRef.current = true;
      setEverPlayed(true);
      setPlaying(true);
    } catch {
      // ignore
    }
    if (autoSound && audioInViewRef.current && !userMutedRef.current) {
      window.setTimeout(() => {
        if (userPausedRef.current || userMutedRef.current) return;
        try {
          player.unMute();
          player.setVolume(100);
          setMuted(false);
        } catch {
          // ignore
        }
      }, 400);
    }
  };

  const toggleAudio = () => {
    const player = playerRef.current;
    if (!player) return;

    if (muted) {
      userMutedRef.current = false;
      if (userPausedRef.current) {
        userPausedRef.current = false;
      }
      player.unMute();
      player.setVolume(100);
      player.playVideo();
      everPlayedRef.current = true;
      setEverPlayed(true);
      setMuted(false);
      setPlaying(true);
      return;
    }

    userMutedRef.current = true;
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
            <div
              className={`hero-video-frame${everPlayed && !embedFailed ? " is-revealed" : ""}`}
            >
              <div ref={mountRef} className="hero-video-mount" />
            </div>
            <div
              className={`hero-video-poster${showPoster ? " is-visible" : ""}`}
              aria-hidden={!showPoster}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={posterThumbUrl}
                alt=""
                className="hero-video-poster-thumb"
                decoding="async"
              />
              <div className="hero-video-poster-scrim" aria-hidden />
              <Image
                src={siteContent.assets.heroLogo}
                alt=""
                width={1020}
                height={660}
                className="hero-video-poster-logo"
                priority
              />
            </div>
          </div>
          <div className="hero-visual-sheen pointer-events-none absolute inset-0" aria-hidden />
        </div>
      </div>
      <div className="hero-video-controls max-sm:relative max-sm:z-30">
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
