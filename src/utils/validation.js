// YOFS Enterprise Platform - Validation Helpers

export const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

export const validateContactForm = (data) => {
  const errors = {};

  if (!data.name || data.name.trim() === '') {
    errors.name = 'Full name is required.';
  }

  if (!data.email) {
    errors.email = 'Email address is required.';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.subject || data.subject.trim() === '') {
    errors.subject = 'Subject is required.';
  }

  if (!data.message || data.message.trim() === '') {
    errors.message = 'Message is required.';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateLoginForm = (data) => {
  const errors = {};

  if (!data.email) {
    errors.email = 'Email is required.';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.password) {
    errors.password = 'Password is required.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateRegisterForm = (data) => {
  const errors = {};

  if (!data.name || data.name.trim() === '') {
    errors.name = 'Full name is required.';
  }

  if (!data.email) {
    errors.email = 'Email is required.';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.password) {
    errors.password = 'Password is required.';
  } else if (data.password.length < 6) {
    errors.password = 'Password must be at least 6 characters.';
  }

  if (data.confirmPassword !== data.password) {
    errors.confirmPassword = 'Passwords do not match.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
