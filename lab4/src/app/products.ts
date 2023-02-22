export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;


}

export const products = [
  {
    id: 1,
    name: 'IPhone 14pro max',
    price: '780000₸',
    description: 'технология NFC: Да цвет: фиолетовый тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы диагональ: 6.7 дюйм размер оперативной памяти: 6 ГБ процессор: 6-ядерный Apple A16 Bionic объем встроенной памяти: 256 ГБ емкость аккумулятора: 3095 мАч',
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=710000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
    rating:5
  },
  {
    id: 2,
    name: 'Xiaomi 12 Pro',
    price: '443 950 ₸',
    description: 'Топ за свои деньги',
    url: 'https://kaspi.kz/shop/p/xiaomi-12-pro-nfc-12-gb-256-gb-seryi-104688742/?c=710000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h37/h95/52369623580702/xiaomi-12-pro-12-gb-256-gb-seryj-104688742-1.jpg",
    rating:5

  },
  {
    id: 3,
    name: 'Apple TV',
    price: "122 900 ₸",
    description: 'поддержка HD: 4K UHDоперационная система: tvOSинтерфейсы: Wi-Fi, ,Bluetooth, ,Ethernetвстроенная память: 131072 Мб',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf8/hd3/66933839134750/apple-tv-128gb-4k-2022-wi-fi-ethernet-108062591-1.jpg',
    url:'https://kaspi.kz/shop/p/apple-tv-128gb-4k-2022-wi-fi-ethernet-108062591/?c=710000000#!/item'
  
  },
  {
    id: 4,
    name: 'Наушники Apple AirPods Pro 2nd generation белый',
    price: "119 535 ₸",
    description: 'тип: наушникивид: внутриканальныеподключение: беспроводноетип акустического оформления: закрытыетип крепления: без креплениясистема активного шумоподавления: Дамикрофон: Да',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/hf8/62281477259294/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg',
    url:'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=710000000#!/item'
  
  },
  {
    id: 5,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: "480 450 ₸",
    description: 'диагональ экрана: 13.3 дюймпроцессор: Apple M1видеокарта: Apple M1 7 coreразмер оперативной памяти: 8 ГБтип жесткого диска: SSDобщий объем накопителей: 256 ГБ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    url:'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=710000000#!/item'
  
  },
  {
    id: 6,
    name: 'Ноутбук ASUS TUF Dash F15 FX517ZM-HN093 90NR09Q3-M007B0 черный',
    price: "659 990 ₸",
    description: 'процессор: Intel Core i7 12650Hвидеокарта: NVIDIA GeForce RTX 3060,размер оперативной памяти: 16 ГБ,тип жесткого диска: SSD,общий объем накопителей: 512 ГБ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd8/hd8/62167755620382/asus-tuf-dashf15-fx517zm-hn093-90nr09q3-m007b0-chernyi-106299715-1.jpg',
    url:'https://kaspi.kz/shop/p/asus-tuf-dash-f15-fx517zm-hn093-90nr09q3-m007b0-chernyi-106299715/?c=710000000#!/item'
  
  },
  {
    id: 7,
    name: 'Ноутбук Acer AN515-57 NH.QELER.00C черный',
    price: "468 990 ₸",
    description: 'диагональ экрана: 15.6 дюйм,процессор: Intel 11400H,видеокарта: NVIDIA GeForce RTX 3050,размер оперативной памяти: 16 ГБ,тип жесткого диска: SSD,общий объем накопителей: 512 ГБ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3a/hf0/65745360355358/acer-an515-57-nh-qeler-00c-chernyi-107574471-1.jpg',
    url:'https://kaspi.kz/shop/p/acer-an515-57-nh-qeler-00c-chernyi-107574471/?c=710000000#!/item'
  
  },
  {
    id: 8,
    name: 'Ноутбук Acer Nitro 5 AN515-58-74XD NH.QFMER.00D черный',
    price: "658 474 ₸",
    description: 'диагональ экрана: 15.6 дюйм,процессор: Intel 11400H,видеокарта: NVIDIA GeForce RTX 3050,размер оперативной памяти: 16 ГБ,тип жесткого диска: SSD,общий объем накопителей: 512 ГБ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/h3d/62755167404062/acer-nitro-5-an515-58-74xd-nh-qfmer-00d-cernyj-106607259-1.jpg',
    url:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/h3d/62755167404062/acer-nitro-5-an515-58-74xd-nh-qfmer-00d-cernyj-106607259-1.jpg'
  
  },
  {
    id: 9,
    name: 'Ноутбук Chuwi CoreBook X Pro 4C8T 16G/512G серый',
    price: "369 990 ₸",
    description: 'диагональ экрана: 15.6 дюйм,процессор: Intel Core i5 10210U,видеокарта: Intel 10th UHD Graphics,размер оперативной памяти: 16 ГБ,тип жесткого диска: SSD,общий объем накопителей: 512 ГБ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h03/h98/62067399229470/noutbuk-chuwi-corebook-x-pro-16gb-512gb-4c8t-106242138-5.jpg',
    url:'https://kaspi.kz/shop/p/chuwi-corebook-x-pro-4c8t-16g-512g-seryi-106242138/?c=710000000#!/item'
  
  },
  {
    id: 10,
    name: 'Смарт-часы Apple Watch Ultra Ocean серый-синий',
    price: "447 748 ₸",
    description: 'поддержка платформ: iOS,материал корпуса: титан,цвет корпуса: светло-серый,технология экрана: OLED,объем встроенной памяти: 32 Гб,интерфейсы: Bluetooth, ,Wi-Fi, ,NFC,время работы: в обычном режиме: 36 часов,режиме энергосбережения: 60 часов',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/hf5/62855861043230/apple-watch-ultra-midnight-ocean-seryj-sinij-106667098-1.jpg',
    url:'https://kaspi.kz/shop/p/apple-watch-ultra-ocean-seryi-sinii-106667098/?c=710000000#!/item'
  
  }







];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/