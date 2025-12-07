export interface WishRequest {
  name: string;
  relationship: string;
  tone: 'heartwarming' | 'funny' | 'poetic';
}

export interface SnowParticle {
  x: number;
  y: number;
  radius: number;
  speed: number;
  wind: number;
  opacity: number;
}