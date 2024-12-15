<template>
  <div class="mt-nav">
    <main
      class="max-content-centered-md min-h-screen-height flex flex-col py-16"
    >
      <div class="flex flex-col gap-6 text-sm md:flex-row md:gap-8">
        <h1 class="font-foglihten text-4xl sm:text-6xl uppercase">
          Impressum
        </h1>
        <div class="flex flex-col gap-6">
          <NuxtLink
            to="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit us on Google Maps"
            title="Visit us on Google Maps"
            class="hover:text-text-secondary transition-all"
          >
            <strong> Iconic Modeling Agency </strong>
            <br />
            Main Street 123 12345
            <br />
            Berlin, Germany
          </NuxtLink>

          <div>
            <p class="font-bold">
              Contact Details
            </p>
            <NuxtLink
              to="mailto:info@iconic.com"
              aria-label="Send us an email"
              title="Send us an email"
              class="hover:text-text-secondary transition-all flex"
            >
              <strong>Email:</strong>
              info@iconic.com
            </NuxtLink>
            <NuxtLink
              to="tel:+49123456789"
              aria-label="Call us"
              title="Call us"
              class="hover:text-text-secondary transition-all flex"
            >
              <strong>Tel:</strong>
              +49 123 456 789
            </NuxtLink>
          </div>

          <div>
            <p class="font-bold">
              Legal Information
            </p>
            <p>
              <strong>Owner/Managing Director:</strong> John Doe
            </p>
            <p>
              <strong>VAT ID:</strong> DE123456789
            </p>
            <p>
              <strong>Commercial Register:</strong> HRB 123456
            </p>
            <p>
              <strong>Registry Court:</strong> Berlin-Charlottenburg
            </p>
          </div>

          <div>
            <p class="font-bold">
              Disclaimer
            </p>
            <p>
              Despite careful monitoring of content, Iconic Modeling Agency
              assumes no liability for the content of external links. The
              responsibility for the content of linked pages lies solely with
              their operators.
            </p>
          </div>

          <div>
            <p class="font-bold">
              Copyright
            </p>
            <p>
              All content, images, and designs on this website are protected by
              copyright. Use without prior written consent from Iconic Modeling
              Agency is strictly prohibited.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
