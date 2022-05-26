export const getPageViews = async () => {
  try {
    const views = await fetch(
      'https://naprednasku.goatcounter.com/counter//.json?start=week'
    );
    const { count_unique } = await views.json();
    return count_unique;
  } catch (_) {
    return 0;
  }
};
