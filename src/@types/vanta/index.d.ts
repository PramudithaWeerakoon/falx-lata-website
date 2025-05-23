declare module "vanta/dist/vanta.net.min" {
  const NET: any;
  export default { NET };
}

declare module "vanta/dist/vanta.globe.min" {
  const GLOBE: any;
  export default { GLOBE };
}

// Add global VANTA declaration for direct script loading
interface Window {
  VANTA: {
    NET: (options: {
      el: HTMLElement | null;
      mouseControls: boolean;
      touchControls: boolean;
      gyroControls: boolean;
      minHeight: number;
      minWidth: number;
      scale: number;
      scaleMobile: number;
      color: number;
      backgroundColor: number;
      points: number;
      maxDistance: number;
      [key: string]: any;
    }) => any;
    GLOBE: (options: {
      el: HTMLElement | null;
      mouseControls: boolean;
      touchControls: boolean;
      gyroControls: boolean;
      minHeight: number;
      minWidth: number;
      scale: number;
      scaleMobile: number;
      color: number;
      color2: number;
      backgroundColor: number;
      [key: string]: any;
    }) => any;
    [key: string]: any;
  };
  THREE: any;
}
