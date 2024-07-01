export const hasNoEmptyValue = (formData) => {
    return Object.values(formData).every(value => value !== '');
};