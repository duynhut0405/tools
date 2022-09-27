import React, { useState } from 'react';
import { Form } from '../components/tailwind/Card';

function Home({}) {
  return (
    <>
      <div className="mx-auto max-w-[1036px] py-16 px-4 sm:px-6 lg:px-8 bg-white ">
        <form
          method="post"
          id="usrForm"
          onSubmit={e => {
            e.preventDefault();
            fetch('/api/form', {
              method: 'post',
              body: JSON.stringify({})
            })
              .then(response => response.json())
              .then(data => {});
          }}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input
                name="name"
                id="name"
                autoComplete="name"
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none ring-2 ring-offset-indigo-700 focus:ring-offset-2 focus:ring-offset-indigo-700"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none ring-2 ring-offset-indigo-700 focus:ring-offset-2 focus:ring-offset-indigo-700"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="jobtitle" className="block text-sm font-medium text-gray-700">
              Job
            </label>
            <div className="mt-1">
              <input
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none ring-2 ring-offset-indigo-700 focus:ring-offset-2 focus:ring-offset-indigo-700"
                type="text"
                id="jobtitle"
                name="jobtitle"
                autocomplete="organization-title"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="tel" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <div className="mt-1">
              <input
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none ring-2 ring-offset-indigo-700 focus:ring-offset-2 focus:ring-offset-indigo-700"
                type="text"
                id="tel"
                name="tel"
                autocomplete="home tel"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
              Organization
            </label>
            <div className="mt-1">
              <input
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none ring-2 ring-offset-indigo-700 focus:ring-offset-2 focus:ring-offset-indigo-700"
                type="text"
                id="organization"
                name="organization"
                autocomplete="organization"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#002395]">Address</h2>
          <div className="mb-6">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Street Address
            </label>
            <div className="mt-1">
              <input
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none ring-2 ring-offset-indigo-700 focus:ring-offset-2 focus:ring-offset-indigo-700"
                type="text"
                id="address"
                name="address"
                autocomplete="shipping street-address"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="address-level2" className="block text-sm font-medium text-gray-700">
              City (Address Level 2)
            </label>
            <div className="mt-1">
              <input
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none ring-2 ring-offset-indigo-700 focus:ring-offset-2 focus:ring-offset-indigo-700"
                type="text"
                id="address-level2"
                name="address-level2"
                autocomplete="shipping address-level2"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="address-level1" className="block text-sm font-medium text-gray-700">
              State/Province (Address Level 1)
            </label>
            <div className="mt-1">
              <input
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none ring-2 ring-offset-indigo-700 focus:ring-offset-2 focus:ring-offset-indigo-700"
                type="text"
                id="address-level1"
                name="address-level1"
                autocomplete="shipping address-level1"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="country-name" className="block text-sm font-medium text-gray-700">
              Country Name
            </label>
            <div className="mt-1">
              <input
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none ring-2 ring-offset-indigo-700 focus:ring-offset-2 focus:ring-offset-indigo-700"
                type="text"
                id="country-name"
                name="country-name"
                autocomplete="shipping country-name"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
              Postal Code
            </label>
            <div className="mt-1">
              <input
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none ring-2 ring-offset-indigo-700 focus:ring-offset-2 focus:ring-offset-indigo-700"
                type="text"
                id="postal-code"
                name="postal-code"
                autocomplete="shipping postal-code"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#002395]">Card</h2>
          <div className="mb-6">
            <label htmlFor="nameoncard" className="block text-sm font-medium text-gray-700">
              Name on Card
            </label>
            <div className="mt-1">
              <input
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none ring-2 ring-offset-indigo-700 focus:ring-offset-2 focus:ring-offset-indigo-700"
                type="text"
                id="nameoncard"
                name="nameoncard"
                autocomplete="cc-name"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="cc-number" className="block text-sm font-medium text-gray-700">
              Credit Card Number
            </label>
            <div className="mt-1">
              <input
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none ring-2 ring-offset-indigo-700 focus:ring-offset-2 focus:ring-offset-indigo-700"
                type="text"
                id="cc-number"
                name="cc-number"
                autocomplete="cc-number"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="cc-exp-year" className="block text-sm font-medium text-gray-700">
              Expiration Year
            </label>
            <div className="mt-1">
              <input
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none ring-2 ring-offset-indigo-700 focus:ring-offset-2 focus:ring-offset-indigo-700"
                type="text"
                id="cc-exp-year"
                name="cc-exp-year"
                autocomplete="cc-exp-year"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;
