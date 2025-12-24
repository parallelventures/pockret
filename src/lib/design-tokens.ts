/**
 * Pockret Design System
 * "Jony Ive Core" - Prismatic Intelligence Palette
 * 
 * TypeScript constants for use in components
 */

export const colors = {
    // Base "Graphite Studio"
    ink: '#0B0D12',
    graphite: '#121621',
    slate: '#1A2232',
    fog: '#2A3448',
    paper: '#F4F6FA',
    mist: '#B8C0D0',

    // Spectrum "Prismatic Intelligence"
    violetIris: '#7B61FF',
    indigoDeep: '#4F7CFF',
    azure: '#12BFFF',
    aqua: '#00E0C6',
    limeSoft: '#A6FF4D',
    amber: '#FFC24A',
    roseMagenta: '#FF4FD8',

    // Luxury Highlights
    pearlGlow: '#F7FAFF',
    electricLilac: '#CBB7FF',
} as const

export const gradients = {
    // Prism Core - Main icon/halo (radial)
    prismCore: 'radial-gradient(circle at center, #F7FAFF 0%, #7B61FF 15%, #12BFFF 35%, #00E0C6 50%, #A6FF4D 65%, #FFC24A 80%, #FF4FD8 100%)',

    // Refund Wave - "Money back" state
    refundWave: 'linear-gradient(90deg, #4F7CFF 0%, #12BFFF 33%, #00E0C6 66%, #A6FF4D 100%)',

    // Alert Luxury - Elegant danger
    alertLuxury: 'linear-gradient(90deg, #FF4FD8 0%, #FFC24A 100%)',

    // Pockret Signature - Indigo → Aqua (brand identity)
    pockretSignature: 'linear-gradient(135deg, #4F7CFF 0%, #12BFFF 50%, #00E0C6 100%)',

    // Glow Effect - For background glows
    glow: 'radial-gradient(ellipse at center, rgba(79, 124, 255, 0.4) 0%, rgba(18, 191, 255, 0.2) 40%, transparent 70%)',
} as const

export const shadows = {
    glowSignature: '0 0 60px rgba(79, 124, 255, 0.3), 0 0 120px rgba(18, 191, 255, 0.2)',
    glowSubtle: '0 0 40px rgba(79, 124, 255, 0.15)',
} as const

// Spectrum stops for animations / custom gradients
export const spectrumStops = [
    '#7B61FF', // Violet Iris
    '#4F7CFF', // Indigo Deep
    '#12BFFF', // Azure
    '#00E0C6', // Aqua
    '#A6FF4D', // Lime Soft
    '#FFC24A', // Amber
    '#FF4FD8', // Rose Magenta
] as const

// Pockret signature colors (Indigo → Aqua dominant)
export const signatureStops = [
    '#4F7CFF', // Indigo Deep
    '#12BFFF', // Azure
    '#00E0C6', // Aqua
] as const
