export const useIntersectionObserver = () => {
  const target = ref(null);
  const isVisible = ref(false);
  const active = ref(false);

  const setActive = (value) => {
    active.value = value;
  };

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.value = entry.isIntersecting;
        });
      },
      {
        threshold: 0.5,
      },
    );

    if (target) {
      observer.observe(target.value);
    }
  });
  return {
    active,
    target,
    isVisible,
    setActive,
  };
};
