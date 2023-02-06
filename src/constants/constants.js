export const CONST = {
  TIMELINE: [
    { 
      key: '202302',
      value: '2023-02',
      srcImages: require.context("@/assets/u/202302/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/),
    }, 
    { 
      key: '202301',
      value: '2023-01',
      srcImages: require.context("@/assets/u/202301/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/),
    }, 
    { 
      key: '202212',
      value: '2022-12',
      srcImages: require.context("@/assets/u/202212/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/),
    }, 
    { 
      key: '202211',
      value: '2022-11',
      srcImages: require.context("@/assets/u/202211/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/),
    }, 
    { 
      key: '202210',
      value: '2022-10',
      srcImages: require.context("@/assets/u/202210/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/),
    }, 
    { 
      key: '202209',
      value: '2022-09',
      srcImages: require.context("@/assets/u/202209/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/),
    }, 
    { 
      key: '202208',
      value: '2022-08',
      srcImages: require.context("@/assets/u/202208/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/),
    }, 
    { 
      key: '202207',
      value: '2022-07',
      srcImages: require.context("@/assets/u/202207/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/),
    }, 
    { 
      key: '202206',
      value: '2022-06',
      srcImages: require.context("@/assets/u/202206/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/),
    }, 
    { 
      key: '202205',
      value: '2022-05',
      srcImages: require.context("@/assets/u/202205/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/),
    }
  ],
  PAGES: {
    poster: 0,
    details: 1,
    end: 2,
  }
}