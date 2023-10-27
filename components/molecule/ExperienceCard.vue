<template>
  <GenericCard
    class="grid p-4 sm:grid-cols-8 sm:gap-8 md:gap-4 group-hover:opacity-50"
  >
    <header
      class="z-50 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
      aria-label="2018 to Present"
    >
      2018 — Present
    </header>

    <div class="z-50 sm:col-span-6">
      <h3 class="font-medium leading-snug text-slate-200">
        <div>
          <a
            class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
            href="https://upstatement.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Lead Engineer at Upstatement"
          >
            <span
              class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
            ></span>
            <span
              >Lead Engineer ·<!-- -->
              <span class="inline-block">Upstatement test</span></span
            >
          </a>
        </div>
        <div>
          <div class="text-slate-500" aria-hidden="true">Senior Engineer</div>
        </div>
        <div><div class="text-slate-500" aria-hidden="true">Engineer</div></div>
      </h3>
      <p class="mt-2 text-sm leading-normal">
        Deliver high-quality, robust production code for a diverse array of
        projects for clients including Harvard Business School, Everytown for
        Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The
        19th News, and more. Provide leadership within engineering department
        through close collaboration, knowledge shares, and mentorship.
      </p>
      <ul class="mt-2 flex flex-wrap gap-2" aria-label="Technologies used">
        <GenericBadge>Vue 3.0</GenericBadge>
        <GenericBadge>Vue 3.0</GenericBadge>
        <GenericBadge>Vue 3.0</GenericBadge>
      </ul>
    </div>
  </GenericCard>
</template>

<script>
export default defineComponent({
  name: "ExperienceCard",
});
</script>

<script setup></script>
