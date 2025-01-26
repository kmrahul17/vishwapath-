// Type Guards
export const isLocation = (value) => {
    return ['Earth', 'Mars', 'Moon', 'ISS', 'Space Hotel'].includes(value);
};
export const isBookingStatus = (value) => {
    return ['upcoming', 'completed', 'cancelled'].includes(value);
};
export const isSafety = (value) => {
    return ['Good', 'Moderate', 'Caution', 'Warning'].includes(value);
};
// Constants
export const LOCATIONS = [
    'Earth',
    'Mars',
    'Moon',
    'ISS',
    'Space Hotel'
];
export const BOOKING_STATUSES = [
    'upcoming',
    'completed',
    'cancelled'
];
export const SAFETY_LEVELS = [
    'Good',
    'Moderate',
    'Caution',
    'Warning'
];
// Utility Functions
export const createApiResponse = (data, success = true, error) => ({
    data,
    success,
    error
});
export const createValidationResult = (isValid, errors) => ({
    isValid,
    errors
});
