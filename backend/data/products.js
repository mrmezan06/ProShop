const products = [
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 89.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Electronics',
    price: 599.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 929.99,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 399.99,
    countInStock: 11,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 49.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 29.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'K2 SATA Data Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/k2-sata-11570537511.webp',
    description: '*Type - Data *Length. - 0.5 Meter',
    brand: 'K2',
    category: 'Accessories',
    price: 0.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'K2 SATA Power Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/k2-sata-power-11620714852.webp',
    description: '*Type - SATA Power Cable',
    brand: 'K2',
    category: 'Accessories',
    price: 0.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'UGREEN 19 x 12cm Storage Pouch Bag',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/ugreen-19-x-12cm-storage-pouch-bag-11646653816.webp',
    description: '*Size - 7.4 Inch *Type - Carrying Bag *Color - Gray',
    brand: 'Ugreen',
    category: 'Accessories',
    price: 1.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Ugreen Micro USB Male to USB Female OTG Converter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/ugreen-micro-usb-male-to-usb-female-otg-converter-11636193666.webp',
    description:
      '*Type - Data *Length. - 0.1 Meter *Interface(s) - Micro USB Male, USB Type-A Female',
    brand: 'Ugreen',
    category: 'Accessories',
    price: 1.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention Micro USB Male to USB Female 0.25 Meter Black OTG Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-micro-usb-male-to-usb-female-black-025-11622109084.webp',
    description:
      '*Type - Data *Length. - 0.25 Meter *Interface(s) - Micro USB Male, USB Female',
    brand: 'Vention',
    category: 'Accessories',
    price: 1.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention USB Male to Micro USB Black 1 Meter Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-usb-male-to-micro-b-male-black-1-meter-11622981854.webp',
    description:
      '*Type - Data *Length. - 1 Meter *Interface(s) - USB Type-A Male, Micro USB Male',
    brand: 'Vention',
    category: 'Accessories',
    price: 1.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Maxell LR6 (GD) 2B AA Alkaline/Alcaline Batteries (1-Pair)',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/maxell-lr6-gd-2b-aa-alkalinealcaline-batteries-11653452811.webp',
    description: '*Type - Alkaline/Alcaline *Size - AA *Quantity - 2',
    brand: 'Maxell',
    category: 'Accessories',
    price: 1.74,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'ORICO Micro USB Male to USB Female Black Converter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/orico-micro-usb-male-to-usb-female-black-11641732233.webp',
    description:
      '*Type - Data *Length. - 0 Meter *Interface(s) - Micro USB Male, USB Type-A Female',
    brand: 'ORICO',
    category: 'Accessories',
    price: 1.74,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention HDMI Female to Female Black Converter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-hdmi-female-to-female-black-11623129048.webp',
    description:
      '*Type - Video *Length. - 0 *Resolution - 4K (3840 x 2160) *Interface(s) - HDMI Female',
    brand: 'Vention',
    category: 'Accessories',
    price: 1.74,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention HDMI Male to Female Black Converter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-hdmi-male-to-female-black-converter-11660736817.webp',
    description:
      '*Type - Video *Length. - 0 *Resolution - 4K (3840 x 2160) *Interface(s) - HDMI Male, HDMI Female',
    brand: 'Vention',
    category: 'Accessories',
    price: 1.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'K2 USB Male to Mini USB, Black 1.5 Meter Camera Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/k2-usb-male-to-mini-usb-black-15-meter-camera-11663416094.webp',
    description: '*Type - Data *Length. - 1.5 Meter',
    brand: 'K2',
    category: 'Accessories',
    price: 1.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Ugreen USB Male to Micro USB, 1 Meter, Black USB Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/ugreen-usb-male-to-micro-usb-1-meter-black-usb-11646209306.webp',
    description: '*Type - Data *Length. - 1 Meter',
    brand: 'K2',
    category: 'Accessories',
    price: 1.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'K2 Back To Back Power Cable For Monitor Desktop PC CPU',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/k2-back-to-back-power-cable-for-monitor-desktop-11638165464.webp',
    description: '*Type - Power Cable *Length. - 1.5 Meter',
    brand: 'K2',
    category: 'Accessories',
    price: 1.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention HDMI Male to Female Black Converter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-hdmi-male-to-female-black-11623127792.webp',
    description:
      '*Type - Video *Length. - 0 *Resolution - 4K (3840 x 2160) *Interface(s) - HDMI Male & Female',
    brand: 'Vention',
    category: 'Accessories',
    price: 1.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Yuanxin USB Male to Male 1.5 Meter Grey Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/yuanxin-usb-male-to-male-15-meter-grey-cable-11668843572.webp',
    description: '*Type - Data *Length. - 1.5 Meter',
    brand: 'Yuanxin',
    category: 'Accessories',
    price: 2.19,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Yuanxin USB Type-A Male to Type-B Male, 1.5 Meter, Black Printer Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/yuanxin-usb-type-a-male-to-type-b-male-15-11668947682.webp',
    description: '*Type - Data *Length. - 1.5 Meter',
    brand: 'Yuanxin',
    category: 'Accessories',
    price: 2.19,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention 3.5mm Male to 3.5mm Female, Brown Audio Converter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-35mm-male-to-35mm-female-brown-audio-11650791094.webp',
    description: '*Type - Audio *Length. - 0 Meter',
    brand: 'Vention',
    category: 'Accessories',
    price: 2.19,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention HDMI Male to Male Black 1 Meter HDMI Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-hdmi-male-to-male-black-1-meter-hdmi-11620023802.webp',
    description:
      '*Type - Video *Length. - 1 Meter *Resolution - 4K (3840 x 2160) *Interface(s) - HDMI Male',
    brand: 'Vention',
    category: 'Accessories',
    price: 2.19,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'K2 1.5 Meter Black Power Cable For Laptop',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/k2-15-meter-black-power-cable-for-11637394206.webp',
    description: '*Type - Power Cable *Length. - 1.5 Meter',
    brand: 'K2',
    category: 'Accessories',
    price: 2.19,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Havit VGA Male to Male, 1.5 Meter, Black Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/havit-vga-male-to-male-15-meter-black-11607432685.webp',
    description:
      '*Type - Video *Length. - 1.5 Meter *Resolution(Pixels) - Supports FHD (1920 x 1080)',
    brand: 'Havit',
    category: 'Accessories',
    price: 2.19,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Yuanxin USB Male to Micro USB 0.8 Meter Black Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/yuanxin-usb-male-to-micro-usb-08-meter-black-11668327931.webp',
    description: '*Type - Data *Length. - 0.8 Meter',
    brand: 'Yuanxin',
    category: 'Accessories',
    price: 2.24,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Ugreen Type-C Male to Micro USB Female White Converter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/ugreen-type-c-male-to-micro-usb-female-white-21603173099.webp',
    description:
      '*Type - Data *Length. - 0 Meter *Interface(s) - USB Type-C Male, Micro USB Female',
    brand: 'Ugreen',
    category: 'Accessories',
    price: 2.29,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Remax USB Male to Lightning Black 1 Meter Data Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/remax-tassels-ring-series-rc-053i-usb-to-11553674126.webp',
    description:
      '*Type - Data *Length. - 1 Meter *Interface(s) - USB Type-A Male, Lightning Male',
    brand: 'Remax',
    category: 'Accessories',
    price: 2.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Remax USB Male to Lightning White 1 Meter Data Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/remax-tassels-ring-series-rc-053i-usb-to-11553674404.webp',
    description:
      '*Type - Data *Length. - 1 Meter *Interface(s) - USB Type-A Male, Lightning Male',
    brand: 'Remax',
    category: 'Accessories',
    price: 2.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Remax USB Male to Lightning Pink 1 Meter Data Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/remax-tassels-ring-series-rc-053i-usb-to-11553674633.webp',
    description:
      '*Type - Data *Length. - 1 Meter *Interface(s) - USB Type-A Male, Lightning Male',
    brand: 'Remax',
    category: 'Accessories',
    price: 2.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention HDMI Male to DVI Female Black Converter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-hdmi-male-to-dvi-female-black-converter-11650879469.webp',
    description:
      '*Type - Video *Length. - 0 *Resolution - FHD (1920 x 1080) *Interface(s) - HDMI Male, DVI Female',
    brand: 'Vention',
    category: 'Accessories',
    price: 2.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Ugreen Type-C Male to 3.5mm Audio Converter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/ugreen-type-c-male-to-35mm-audio-converter-11646478295.webp',
    description:
      '*Type - Audio *Length. - 0 *Interface(s) - USB Type-C Male, 3.5mm Female',
    brand: 'Ugreen',
    category: 'Accessories',
    price: 2.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'K2 3.5mm Male to 2 RCA Male, 1.5 Meter, Black AV Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/k2-rca-audio-cable-15-11561637026.webp',
    description: '*Type - Audio *Length. - 1.5 Meter',
    brand: 'K2',
    category: 'Accessories',
    price: 2.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention 6.5mm Male to 3.5mm Female Audio Splitter Blue Audio Splitter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-65mm-male-to-35mm-female-audio-splitter-11638450604.webp',
    description: '*Type - Audio *Length. - 0 Meter',
    brand: 'Vention',
    category: 'Accessories',
    price: 2.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'K2 SATA Power Y Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/k2-sata-power-y-11639472521.webp',
    description: '*Type - SATA Power Y Cable',
    brand: 'K2',
    category: 'Accessories',
    price: 2.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'K2 HDMI Male to VGA Female White Converter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/k2-hdmi-to-vga-11544601969.webp',
    description: '*Type - Video *Length. - 0 *Resolution - FHD (1920 x 1080)',
    brand: 'K2',
    category: 'Accessories',
    price: 2.74,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Silicon Power USB Male to Micro USB Male, 1 Meter, Black Charging & Data Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/silicon-power-usb-male-to-micro-usb-male-1-11659847128.webp',
    description:
      '*Type - Data *Length. - 1 Meter *Interface(s) - USB Type-A Male, Micro USB Male',
    brand: 'Silicon',
    category: 'Accessories',
    price: 2.74,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Remax USB Male to Lightning Blue 1 Meter Data Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/remax-rings-rc-024i-lightning-blue-11553920150.webp',
    description:
      '*Type - Data *Length. - 1 Meter *Interface(s) - USB Type-A Male, Lightning Male',
    brand: 'Remax',
    category: 'Accessories',
    price: 2.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Ugreen Portable Mini Shockproof Carrying Poutch Bag Headphone Case for Earphone',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/ugreen-portable-mini-shockprrof-carrying-poutch-11544680718.webp',
    description: '*Type - Carrying Bag',
    brand: 'Ugreen',
    category: 'Accessories',
    price: 2.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Ugreen 6.35mm Male to 2 RCA Female Converter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/ugreen-635mm-male-to-2-rca-female-converter-11652086905.webp',
    description: '*Type - Audio *Length. - 0 Meter',
    brand: 'Ugreen',
    category: 'Accessories',
    price: 2.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Havit USB Male to Quad USB Female White Hub',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/havit-wf32-300mbps-wifi-usb-11571823703.webp',
    description:
      '*Type - Multiport Converter *Length. - 0 Meter *Interface(s) - USB *Item Category - Converter',
    brand: 'Havit',
    category: 'Accessories',
    price: 2.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention 3.5mm Male to Female, 1.5 Meter, Black Audio Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-35mm-male-to-female-15-meter-black-11650782200.webp',
    description: '*Type - Audio *Length. - 1.5 Meter',
    brand: 'Havit',
    category: 'Accessories',
    price: 3.19,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Havit VGA Male to Male, 3 Meter, Black Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/havit-vga-male-to-male-3-meter-black-11571832333.webp',
    description:
      '*Type - Video *Length. - 3 Meter *Resolution (Pixels) - Supports FHD (1920 x 1080)',
    brand: 'Havit',
    category: 'Accessories',
    price: 3.19,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'K2 3.5mm Male to Dual Female Black Audio Splitter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/k2-35mm-male-to-dual-female-black-audio-11636365148.webp',
    description:
      '*Type - Audio *Length. - 0 Meter *Interface(s) - 3.5mm male/female',
    brand: 'K2',
    category: 'Accessories',
    price: 3.19,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Yuanxin USB Male to Female 3 Meter Black extension Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/yuanxin-usb-male-to-female-3-meter-black-11668250059.webp',
    description: '*Type - Data *Length. - 3 Meter',
    brand: 'Yuanxin',
    category: 'Accessories',
    price: 3.24,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention 3.5mm Male to Dual 3.5mm Female, 0.3 Meter, Black Audio Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-35mm-male-to-dual-35mm-female-03-11650781810.webp',
    description: '*Type - Audio *Length. - 0.3 Meter',
    brand: 'Vention',
    category: 'Accessories',
    price: 3.24,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'K2 6.35mm Male to 3.5mm Female Audio Converter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/k2-635mm-male-to-35mm-female-audio-11661925125.webp',
    description: '*Type - Audio *Length. - 0 Meter',
    brand: 'K2',
    category: 'Accessories',
    price: 3.24,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention Toslink Male to Male, 1.5 Meter, Black Optical Audio Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-toslink-male-to-male-15-meter-black-11638526292.webp',
    description: '*Type - Audio *Length. - 1.5 Meter',
    brand: 'Vention',
    category: 'Accessories',
    price: 3.24,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Remax USB Male to Micro USB Black 1 Meter Data Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/remax-usb-male-to-micro-usb-1-meter-black-data-11562740550.webp',
    description: '*Type - Data *Length. - 1 Meter',
    brand: 'Remax',
    category: 'Accessories',
    price: 3.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Remax USB Male to Micro USB White 1 Meter Data Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/remax-tassels-ring-series-rc-053m-usb-to-micro-11553673705.webp',
    description: '*Type - Data *Length. - 1 Meter',
    brand: 'Remax',
    category: 'Accessories',
    price: 3.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Remax USB Male to Micro USB Gold 1 Meter Data Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/remax-tassels-ring-series-rc-053i-usb-to-11553675364.webp',
    description:
      '*Type - Data *Length. - 1 Meter *Interface(s) - USB Type-A Male, Lightning Male',
    brand: 'Remax',
    category: 'Accessories',
    price: 3.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Remax USB Male to Micro USB Blue 1 Meter Data Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/remax-tassels-ring-series-rc-053i-usb-to-11553681978.webp',
    description:
      '*Type - Data *Length. - 1 Meter *Interface(s) - USB Type-A Male, Lightning Male',
    brand: 'Remax',
    category: 'Accessories',
    price: 3.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Remax USB Male to Type-C Black 1 Meter Data Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/remax-cutebaby-retractable-rc-099a-1m-usb-c-black-21553765710.webp',
    description:
      '*Type - Data *Length. - 1 Meter *Interface(s) - USB Type-A Male, USB Type-C Male',
    brand: 'Remax',
    category: 'Accessories',
    price: 3.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Remax USB Male to Type-C White 1 Meter Data Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/remax-cutebaby-retractable-rc-099a-1m-usb-c-white-21553765961.webp',
    description:
      '*Type - Data *Length. - 1 Meter *Interface(s) - USB Type-A Male, USB Type-C Male',
    brand: 'Remax',
    category: 'Accessories',
    price: 3.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Remax USB Male to Lightning Gold 1 Meter Data Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/remax-usb-male-to-lightning-gold-1-meter-data-11658638367.webp',
    description:
      '*Type - Data *Length. - 1 Meter *Interface(s) - USB Type-A Male, Lightning Male',
    brand: 'Remax',
    category: 'Accessories',
    price: 3.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention Type-C Male to 3.5mm Female, Gray Audio Converter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-type-c-male-to-35mm-female-gray-audio-11650791394.webp',
    description: '*Type - Audio *Length. - 0 Meter',
    brand: 'Vention',
    category: 'Accessories',
    price: 3.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Ugreen Type-C Male to 3.5mm Female Silver Converter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/ugreen-type-c-to-35mm-female-cable-10cm-21544358138.webp',
    description:
      '*Type - Audio *Length. - 0.1 Meter *Interface(s) - USB Type-C',
    brand: 'Ugreen',
    category: 'Accessories',
    price: 3.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Ugreen USB Type-C Male to Male Black 1.5 Meter Data Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/ugreen-usb-type-c-male-to-male-black-15-meter-11636193877.webp',
    description: '*Type - Data *Length. - 1.5 Meter *Interface(s) - USB Type-C',
    brand: 'Ugreen',
    category: 'Accessories',
    price: 3.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention USB Male to Micro B Male Black 1.5 Meter HDD USB Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-usb-male-to-micro-b-male-black-15-meter-11620190197.webp',
    description:
      '*Type - Data *Length. - 1.5 Meter *Interface(s) - USB Type-A Male, Micro B Male',
    brand: 'Ugreen',
    category: 'Accessories',
    price: 3.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Digital X GS 5V 0.6A IP Phone Adapter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/digital-x-gs-5v-06a-ip-phone-11655981632.webp',
    description: '*Type - IP Phone Adapter',
    brand: 'No Brand',
    category: 'Accessories',
    price: 3.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention 3.5mm Male to Dual Female Silver Audio Converter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-35mm-male-to-dual-female-silver-audio-11620286887.webp',
    description:
      '*Type - Audio *Length. - 0 Meter *Interface(s) - 3.5mm male/female',
    brand: 'Vention',
    category: 'Accessories',
    price: 3.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention Toslink Male to Male Black 2 Mete Audio Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-toslink-male-to-male-black-2-mete-audio-11642509118.webp',
    description:
      '*Type - Audio *Length. - 2 Meter *Interface(s) - Fiber square to square',
    brand: 'Vention',
    category: 'Accessories',
    price: 3.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention 3.5mm Male to Male Black 3 Meter Audio Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-35mm-male-to-male-black-3-meter-audio-11621498357.webp',
    description: '*Type - Audio *Length. - 3 Meter *Interface(s) - 3.5mm male',
    brand: 'Vention',
    category: 'Accessories',
    price: 3.49,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Ugreen Micro USB Male to Type-C Female Gray OTG Converter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/ugreen-micro-usb-male-to-type-c-female-gray-otg-11667213997.webp',
    description:
      '*Type - Data *Length. - 0 Meter *Interface(s) - Micro USB Male, Type-C Female',
    brand: 'Ugreen',
    category: 'Accessories',
    price: 3.74,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Qgeem HDMI Male to Male 1.5 Meter Black HDMI Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/qgeem-hdmi-male-to-male-15-meter-black-hdmi-11638008309.webp',
    description: '*Type - Video *Length. - 1.5 Meter',
    brand: 'Qgeem',
    category: 'Accessories',
    price: 3.74,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Energizer AAAA/E96 1.5V Alkaline Batteries (1-Pair)',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/energizer-aaaae96-15v-alkaline-batteries-11661858948.webp',
    description: '*Type - Batteries',
    brand: 'Energizer',
    category: 'Accessories',
    price: 3.74,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention USB Type-A Male to Type-B Male, 3 Meter, Black Printer Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-usb-male-to-type-b-male-black-3-meter-11620191108.webp',
    description: '*Type - Data *Length. - 3 Meter *Interface(s) - USB 2.0',
    brand: 'Vention',
    category: 'Accessories',
    price: 3.74,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention BDBW0 3.5mm Male to Dual Female Silver Audio Converter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-bdbw0-35mm-male-to-dual-female-silver-11621497108.webp',
    description:
      '*Type - Audio *Length. - 0 Meter *Interface(s) - 3.5mm male/female',
    brand: 'Vention',
    category: 'Accessories',
    price: 3.74,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Qgeem USB Male to Micro USB, 1 Meter, Black Charging & Data Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/qgeem-usb-male-to-micro-usb-1-meter-black-11638267126.webp',
    description:
      '*Type - Data *Length. - 1 Meter *Interface(s) - USB Type-A Male, Micro USB Male',
    brand: 'Qgeem',
    category: 'Accessories',
    price: 3.74,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention USB Male to Female 1.5 Meter Black Extension Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-usb-male-to-female-black-15-meter-11622454809.webp',
    description: '*Type - Data *Length. - 1.5 Meter *Interface(s) - USB 3.0',
    brand: 'Vention',
    category: 'Accessories',
    price: 3.74,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention USB Type-C Male to Male 1.5 Meter, Black Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-usb-type-c-male-to-male-15-meter-black-11623472167.webp',
    description:
      '*Type - Data *Length. - 1.5 Meter *Interface(s) - USB Type-C Male',
    brand: 'Vention',
    category: 'Accessories',
    price: 3.74,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vention USB Type-C & Micro USB Male to USB Female Black Converter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/vention-usb-type-c-micro-usb-male-to-usb-female-11623328405.webp',
    description:
      '*Type - Data *Length. - 0.1 Meter *Interface(s) - USB Type-C Male, Micro USB Male, USB Type-A Female',
    brand: 'Vention',
    category: 'Accessories',
    price: 3.74,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'K2 Male to Male S-Video Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/k2-male-to-male-s-video-11544602942.webp',
    description: '*Type - Audio',
    brand: 'K2',
    category: 'Accessories',
    price: 3.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Ugreen 3.5mm Male to Dual Female Black Converter',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/ugreen-35mm-male-to-dual-female-black-converter-11633340775.webp',
    description: '*Type - Audio *Length. - 0',
    brand: 'Ugreen',
    category: 'Accessories',
    price: 3.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Havit ST821 2.1A Dual USB Ports Power Adapter with USB to Micro Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/havit-st821-21a-dual-usb-ports-power-adapter-11655192178.webp',
    description: '*Type - Power Adapter',
    brand: 'Havit',
    category: 'Accessories',
    price: 3.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Ugreen USB Type-C Male to Male, 1 Meter, White Data Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/ugreen-usb-type-c-male-to-male-1-meter-white-11608035115.webp',
    description:
      '*Type - Data *Length. - 0.1 Meter *Interface(s) - USB Type-C Male',
    brand: 'Ugreen',
    category: 'Accessories',
    price: 3.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Ugreen USB Male to Micro USB Black 1.5 Meter Data Cable',
    image:
      'https://cloud.ryanscomputers.com/cdn/products/small/ugreen-usb-male-to-micro-usb-black-15-meter-data-21632662249.webp',
    description:
      '*Type - Data *Length. - 0.1 Meter *Interface(s) - USB Type-A Male, Micro USB Male',
    brand: 'Ugreen',
    category: 'Accessories',
    price: 3.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
];

module.exports = products;

/* 
Sample product object:

{
    name: '',
    image: '',
    description: '',
    brand: '',
    category: '',
    price: 0,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },

*/

/* When we use ES6 modules, we can use export default instead of module.exports.
 *  This is because ES6 modules are not supported in Node.js yet.
 *  So, we use module.exports instead.
 *  If we want to use ES6 modules, we need to add type: "module" in package.json
 *  or change the file extension to .mjs (for module javascript)
 *  and use import instead of require.
 *  When we import something, then in filename importing end with .js and export default
 */
// export default products;
