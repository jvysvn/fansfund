/**
 * @license Apache-2.0
 * @copyright 2024 Jayson Bull
 */

'use strict';

const decrementBtn = document.querySelector('[data-decrement-btn]');
const incrementBtn = document.querySelector('[data-increment-btn]');
const counterField = document.querySelector('[data-counter-field]');
const total = document.querySelector('[data-total]');
const minValue = 1;
const maxValue = 999;

incrementBtn.addEventListener('click', function () {
  const currentValue = counterField.value;
  if (currentValue < maxValue) counterField.value = Number(currentValue) + 1;
  updateTotal.call(counterField);
});

decrementBtn.addEventListener('click', function () {
  const currentValue = counterField.value;
  if (currentValue > minValue) counterField.value = Number(currentValue) - 1;
  updateTotal.call(counterField);
});

const updateTotal = () => {
  total.textContent = counterField.value;
};

counterField.addEventListener('input', updateTotal.bind(counterField));

/** Submit contribute form */
const contributeForm = document.querySelector('[data-contribute-form]');
const submitBtn = document.querySelector('[data-submit-btn]');

contributeForm.addEventListener('submit', async function (event) {
  event.preventDefault();
  try {
    submitBtn.setAttribute('disabled', '');

    const formFields = document.querySelectorAll('[data-form-field]');

    const formData = {};

    formFields.forEach((item) => {
      formData[item.getAttribute('name')] = item.value.trim();
    });

    const response = await fetch('/checkout', {
      method: 'POST',
      body: new URLSearchParams(formData).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
    } else {
      console.error('Form submission failed: ', response.statusText);
    }
  } catch (err) {
    console.err(err);
    throw err;
  } finally {
    submitBtn.removeAttribute('disabled', '');
  }
});
