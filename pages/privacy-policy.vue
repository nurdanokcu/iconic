<script setup lang="ts">
import { seoData } from '~/data/seoData';

useSeoHead(seoData.privacyPolicy.title, seoData.privacyPolicy.description);
</script>

<template>
  <div class="mt-nav">
    <main class="max-content-centered-md min-h-screen-height flex flex-col py-16">
      <div class="flex flex-col gap-6 text-sm">
        <h1 class="font-foglihten text-4xl sm:text-6xl uppercase">
          Privacy Policy
        </h1>
        <div class="flex flex-col gap-6">
          <p>
            At Iconic Modeling Agency, your privacy is critically important to
            us. This policy explains how we collect, use, and protect your
            personal data. By using our website (www.iconicagency.com), you
            agree to the terms outlined in this Privacy Policy.
          </p>

          <div>
            <p class="font-bold">
              1. Information We Collect
            </p>
            <ul class="list-disc pl-5">
              <li>
                <strong>Non-Personal Information:</strong> We may collect data
                such as browser type, language preference, referring site, and
                usage statistics to understand how users interact with our
                website.
              </li>
              <li>
                <strong>Personal Information:</strong> We collect personally
                identifiable information such as your name, email address, and
                phone number when voluntarily provided through contact forms or
                account registration.
              </li>
            </ul>
          </div>

          <div>
            <p class="font-bold">
              2. How We Use Your Information
            </p>
            <ul class="list-disc pl-5">
              <li>To provide and improve our services.</li>
              <li>To respond to inquiries or requests.</li>
              <li>For marketing communications, with your consent.</li>
            </ul>
          </div>

          <div>
            <p class="font-bold">
              3. Cookies and Tracking Technologies
            </p>
            <ul class="list-disc pl-5">
              <li>
                <strong>Cookies:</strong> We use cookies to enhance your
                experience, remember your preferences, and analyze website
                usage. You can disable cookies in your browser settings, but
                some features may not function properly without them.
              </li>
              <li>
                <strong>Tracking Technologies:</strong> We use tools like Google
                Analytics to analyze user behavior and improve our services.
                Your IP address is anonymized where required by law.
              </li>
            </ul>
          </div>

          <div>
            <p class="font-bold">
              4. Sharing Your Information
            </p>
            <p>
              We do not sell or rent your personal information. Your data may be
              shared only in these cases:
            </p>
            <ul class="list-disc pl-5">
              <li>With trusted partners to provide services on our behalf.</li>
              <li>
                To comply with legal obligations or protect rights, property, or
                safety.
              </li>
            </ul>
          </div>

          <div>
            <p class="font-bold">
              5. Data Security
            </p>
            <p>
              We take appropriate measures to protect your personal data from
              unauthorized access or disclosure. However, no method of data
              transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <p class="font-bold">
              6. Third-Party Links
            </p>
            <p>
              Our website may link to external sites. We are not responsible for
              the privacy practices or content of these third-party websites.
            </p>
          </div>

          <div>
            <p class="font-bold">
              7. Your Rights
            </p>
            <p>Under applicable laws, you have the right to:</p>
            <ul class="list-disc pl-5">
              <li>Access, correct, or delete your personal data.</li>
              <li>Withdraw your consent for data processing.</li>
              <li>Opt-out of marketing communications.</li>
            </ul>
            <p>
              To exercise these rights, contact us at
              <NuxtLink
                to="mailto:info@iconic.com"
                aria-label="Send us an email"
                title="Send us an email"
                class="hover:text-text-secondary transition-all"
              >
                info@iconic.com
              </NuxtLink>.
            </p>
          </div>

          <div>
            <p class="font-bold">
              8. Updates to This Policy
            </p>
            <p>
              We may update this Privacy Policy periodically. Continued use of
              our website after changes are posted constitutes acceptance of the
              updated policy.
            </p>
          </div>

          <div>
            <p class="font-bold">
              9. Contact Information
            </p>
            <p>
              <strong>Iconic Modeling Agency</strong><br />
              Main Street 123, Berlin, Germany<br />
              Email:
              <NuxtLink
                to="mailto:info@iconic.com"
                class="hover:text-text-secondary transition-all"
              >
                info@iconic.com
              </NuxtLink><br />
              Phone:
              <NuxtLink
                to="tel:+49123456789"
                class="hover:text-text-secondary transition-all"
              >
                +49 123 456 789
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
