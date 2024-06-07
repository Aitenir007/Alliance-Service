import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Items from './Components/Items';
import ShowFullItem from './Components/ShowFullItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: JSON.parse(localStorage.getItem('orders')) || [],
      items: [
        {
          id: 1,
          title: 'POS-Моноблок GS-3061 2-ЭКРАНА + Принтер чеков 80мм  ',
          img: 'princhec.jpeg',
          desc: 'Intel® Core i5-CPU SSD 64GB,DDR3 4GB, HDMI, 6USB, RJ11, 1COM, 1VGA, 15,6"+11,6" LCD touch (1366*768) (1-СЕНСОРНЫЙ ЭКРАН) black',
          category: 'POS-monoblog',
          price: '35.900сом'
        },
        {
          id: 2,
          title: 'POS-Моноблок GS-A4',
          img: 'monoblog.jpeg',
          desc: 'Intel® Core I3-4030 4th CPU SSD 64GB,DDR3 4GB, HDMI, 6USB, 1COM, 1VGA, LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) black',
          category: 'POS-monoblog',
          price: '23.900сом'
        },
        {
          id: 3,
          title: 'POS-Моноблок RS-609',
          img: 'pos-609.jpg',
          desc: ' Intel N2840 (up to 2.6 GHz) SSD 128GB,DDR3 8GB, 6USB, 1COM, 1VGA, 15" LCD touch (1024*768) (СЕНСОРНЫЙ ЭКРАН) black',
          category: 'POS-monoblog',
          price: '21.900сом'
        },
        {
          id: 4,
          title: 'Кнопка вызова официанта',
          img: 'call.webp',
          desc: 'allianceservice',
          category: 'knopca',
          price: '480сом'
        },
        {
          id: 5,
          title: 'Считыватель бесконтактных смарт карт RFID',
          img: 'kard.webp',
          desc: 'RFID считыватель для смарт карт IC R20C-USB-8H10D USB',
          category: 'smart card reader',
          price: '1700с'
        },
        {
          id: 6,
          title: 'ASUS Laptop 15 A516EA ',
          img: 'nout.png',
          desc: 'Можете рассчитывать на комфорт в использовании. Аппаратная конфигурация основана на производительном процессоре Intel Core i3 и оперативной памяти 8 ГБ. Для максимального комфорта использования, ноутбук оснащен дисплеем NanoEdge с углами обзора 178 градусов и накопителем SSD объемом 512 ГБ.',
          category: 'nout',
          price: '37.000сом'
        },
        {
          id: 7,
          title: 'POS-Моноблок RS-609',
          img: 'pos-609.jpg',
          desc: ' Intel N2840 (up to 2.6 GHz) SSD 32GB,DDR3 2GB, 6USB, 1COM, 1VGA, 15" LCD touch (1024*768) (СЕНСОРНЫЙ ЭКРАН) black',
          category: 'POS-monoblog',
          price: '18.900сом'
        },
        {
          id: 8,
          title: 'POS-Моноблок RS-609',
          img: 'pos-609.jpg',
          desc: ' Intel N2840 (up to 2.6 GHz) SSD 32GB,DDR3 4GB, 6USB, 1COM, 1VGA, 15" LCD touch (1024*768) (СЕНСОРНЫЙ ЭКРАН) black',
          category: 'POS-monoblog',
          price: '19.500сом'
        },
        {
          id: 9,
          title: 'POS-Моноблок RS-609',
          img: 'pos-609.jpg',
          desc: ' Intel N2840 (up to 2.6 GHz) SSD 64GB,DDR3 4GB, 6USB, 1COM, 1VGA, 15" LCD touch (1024*768) (СЕНСОРНЫЙ ЭКРАН) black',
          category: 'POS-monoblog',
          price: '19.900сом'
        },
        {
          id: 10,
          title: 'POS-Моноблок RS-609',
          img: 'pos-609-w.jpeg',
          desc: '  Intel N2840 (up to 2.6 GHz) SSD 64GB,DDR3 4GB, 6USB, 1COM, 1VGA, 15" LCD touch (1024*768) (СЕНСОРНЫЙ ЭКРАН) White',
          category: 'POS-monoblog',
          price: '19.900сом'
        },
        {
          id: 11,
          title: 'POS-Моноблок RS-609',
          img: 'pos-609.jpg',
          desc: '  Intel N2840 (up to 2.6 GHz) SSD 64GB,DDR3 8GB, 6USB, 1COM, 1VGA, 15" LCD touch (1024*768) (СЕНСОРНЫЙ ЭКРАН) black',
          category: 'POS-monoblog',
          price: '20.900сом'
        },
        {
          id: 12,
          title: 'Winson WNI-8014P ',
          img: 'chek.png',
          desc: ' Мини-ручной сканер штрих-кода с дисплеем Беспроводной портативный сканер штрих-кода',
          category: 'scaner',
          price: '8600сом'
        },
        {
          id: 13,
          title: 'POS-Моноблок RS-607',
          img: 'rs-607.jpeg',
          desc: ' Intel N2840 (up to 2.6 GHz) SSD 32GB,DDR3 2GB, HDMI, 6USB, 1COM, 1VGA, 15,6" LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) black silver',
          category: 'POS-monoblog',
          price: '18.900сом'
        },
        {
          id: 14,
          title: ' POS-Моноблок RS-607 ',
          img: 'goldwhite.jpeg',
          desc: 'Intel N2840 (up to 2.6 GHz) SSD 32GB,DDR3 2GB, HDMI, 6USB, 1COM, 1VGA, 15,6" LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) white gold',
          category: 'POS-monoblog',
          price: '18.900сом'
        },
        {
          id: 15,
          title: 'POS-Моноблок RS-607',
          img: 'rs-607.jpeg',
          desc: 'Intel N2840 (up to 2.6 GHz) SSD 32GB,DDR3 4GB, 6USB, 1COM, 1VGA, 15,6" LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) black silver',
          category: 'POS-monoblog',
          price: '19.500сом'
        },
        {
          id: 16,
          title: ' POS-Моноблок RS-607 ',
          img: 'goldwhite.jpeg',
          desc: 'Intel N2840 (up to 2.6 GHz) SSD 64GB,DDR3 4GB, HDMI, 6USB, 1COM, 1VGA, 15,6" LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) white gold',
          category: 'POS-monoblog',
          price: '19.900сом'
        },
        {
          id: 17,
          title: 'POS-Моноблок RS-607',
          img: 'rs-607.jpeg',
          desc: '  Intel N2840 (up to 2.6 GHz) SSD 64GB,DDR3 4GB, HDMI, 6USB, 1COM, 1VGA, 15,6" LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) black silver',
          category: 'POS-monoblog',
          price: '19.900сом'
        },
        {
          id: 18,
          title: 'POS-Моноблок RS-607',
          img: 'rs-607.jpeg',
          desc: '  Intel N2840 (up to 2.6 GHz) SSD 64GB,DDR3 8GB, HDMI, 6USB, 1COM, 1VGA, 15,6" LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) black silver',
          category: 'POS-monoblog',
          price: '20.400сом'
        },
        {
          id: 19,
          title: 'POS-Моноблок ',
          img: 'rs-607.jpeg',
          desc: ' Intel i3, SSD 64GB,DDR3 4GB, HDMI, 6USB, 1COM, 1VGA, 15,6" LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) Black',
          category: 'POS-monoblog',
          price: '20.900сом'
        },
        {
          id: 20,
          title: 'POS-Моноблок RS-607',
          img: 'rs-607.jpeg',
          desc: '  ntel N2840 (up to 2.6 GHz) SSD 64GB,DDR3 8GB, HDMI, 6USB, 1COM, 1VGA, 15,6" LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) black silver',
          category: 'POS-monoblog',
          price: '20.900сом'
        },
        {
          id: 21,
          title: 'POS-Моноблок RS-607',
          img: 'rs-607.jpeg',
          desc: '  Intel N2840 (up to 2.6 GHz) SSD 128GB,DDR3 8GB, HDMI, 6USB, 1COM, 1VGA, 15,6" LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) black silver',
          category: 'POS-monoblog',
          price: '21.900сом'
        },
        {
          id: 22,
          title: 'POS-Моноблок RS-609',
          img: 'pos-609.jpg',
          desc: '  Intel N2840 (up to 2.6 GHz) SSD 64GB,DDR3 4GB, 6USB, 1COM, 1VGA, 15,6" LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) black',
          category: 'POS-monoblog',
          price: '20.500сом'
        },
        {
          id: 23,
          title: 'POS-Моноблок RS-609',
          img: 'pos-609-w.jpeg',
          desc: 'Intel N2840 (up to 2.6 GHz) SSD 64GB,DDR3 4GB, 6USB, 1COM, 1VGA, 15,6" LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) White',
          category: 'POS-monoblog',
          price: '20.500сом'
        },
        {
          id: 24,
          title: 'POS-Моноблок RS-610',
          img: 'PS610.jpg',
          desc: '  Intel N2840 (up to 2.6 GHz) SSD 64GB,DDR3 4GB, 6USB, 1COM, 1VGA, 15,6" LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) black',
          category: 'POS-monoblog',
          price: '20.500сом'
        },
        {
          id: 25,
          title: 'POS-Моноблок RS-609',
          img: 'pos-609.jpg',
          desc: '  Intel N2840 (up to 2.6 GHz) SSD 64GB,DDR3 8GB, 6USB, 1COM, 1VGA, 15,6" LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) black',
          category: 'POS-monoblog',
          price: '21.500сом'
        },
        {
          id: 26,
          title: 'POS-Моноблок RS-609',
          img: 'pos-609.jpg',
          desc: ' Intel N2840 (up to 2.6 GHz) SSD 128GB,DDR3 8GB, 6USB, 1COM, 1VGA, 15,6" LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) black',
          category: 'POS-monoblog',
          price: '22.500сом'
        },
        {
          id: 27,
          title: 'POS-Моноблок GS-3061 + Принтер чеков 80мм ',
          img: 'princhec.jpeg',
          desc: ' Intel® Core i5-CPU SSD 64GB,DDR3 4GB, HDMI, 6USB, RJ11, 1COM, 1VGA, 15,6" LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) black',
          category: 'POS-monoblog',
          price: '33.500сом'
        },
        {
          id: 28,
          title: 'Денежный Ящик at-405w ',
          img: '4867.970.jpg',
          desc: 'Ш41см*Д42см*В10см, 6-заж. для купюр, 3-ячеек для монет, RJ11 интерфейс, БЕЛЫЙ ',
          category: 'drawers',
          price: '4200сом'
        },
        {
          id: 29,
          title: 'POS-Моноблок GS-A4',
          img: 'monoblog.jpeg',
          desc: ' Intel N2840 CPU, SSD 64GB,DDR3 4GB, 6USB, 1COM, 1VGA, 15,6" LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) black',
          category: 'POS-monoblog',
          price: '19.900сом'
        },
        {
          id: 30,
          title: 'POS-Моноблок GS-A4',
          img: 'monoblog.jpeg',
          desc: 'Intel N2840 CPU, SSD 128GB,DDR3 4GB, 6USB, 1COM, 1VGA, 15,6" LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) black',
          category: 'POS-monoblog',
          price: '20.900сом'
        },
        {
          id: 31,
          title: 'POS-Моноблок GS-A4',
          img: 'monoblog.jpeg',
          desc: 'Intel® Core i5-CPU SSD 128GB,DDR3 4GB, HDMI, 6USB, 1COM, 1VGA, 15,6" LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) black',
          category: 'POS-monoblog',
          price: '29.700сом'
        },
        {
          id: 32,
          title: 'POS-Моноблок GS-A4',
          img: 'monoblog.jpeg',
          desc: ' Intel® Core i3 CPU SSD 128GB,DDR3 4GB, HDMI, 6USB, 1COM, 1VGA, 15,6" LCD touch (1366*768) (СЕНСОРНЫЙ ЭКРАН) black',
          category: 'POS-monoblog',
          price: '22.900сом'
        },
        {
          id: 33,
          title: 'POS-Моноблок GS-3021 ',
          img: 'gas.webp',
          desc: '  Intel® Core i5-CPU SSD 128GB,DDR3 4GB, HDMI, 6USB, 1COM, 1VGA, 15" LCD touch (1024*768) (СЕНСОРНЫЙ ЭКРАН) black',
          category: 'POS-monoblog',
          price: '29.700сом'
        },
        {
          id: 34,
          title: 'POS-Моноблок RS-609P 2-ЭКРАНА',
          img: 'twoface.jpg',
          desc: 'Intel N2840 (up to 2.58 GHz) SSD 64GB,DDR3 4GB,6USB,1COM,1VGA,15,6"+13,3" LCD touch (1366*768) (1-СЕНСОРНЫЙ ЭКРАН) Black',
          category: 'POS-monoblog',
          price: '27.000сом'
        },
        {
          id: 35,
          title: 'POS-Моноблок RS-609P 2-ЭКРАНА',
          img: 'twoface.jpg',
          desc: 'Intel N2840 (up to 2.58 GHz) SSD 64GB,DDR3 4GB,6USB,1COM,1VGA,15"+15" LCD touch (1024*768) (1-СЕНСОРНЫЙ ЭКРАН) black',
          category: 'POS-monoblog',
          price: '27.500сом'
        },
        {
          id: 36,
          title: 'POS-Моноблок RS-609P 2-ЭКРАНА',
          img: 'twoface.jpg',
          desc: 'Intel N2840 (up to 2.58 GHz) SSD 64GB,DDR3 4GB,6USB,1COM,1VGA,15"+15" LCD touch (1024*768) (1-СЕНСОРНЫЙ ЭКРАН) White',
          category: 'POS-monoblog',
          price: '27.500сом'
        },
        {
          id: 37,
          title: 'POS-Моноблок RS-609P 2-ЭКРАНА',
          img: 'twoface.jpg',
          desc: 'Intel J1800 (up to 2.58 GHz) SSD 64GB,DDR3 4GB,6USB,1COM,1VGA,15"+15" LCD touch (1024*768) (2-СЕНСОРНЫХ ЭКРАНА) black',
          category: 'POS-monoblog',
          price: '27.500сом'
        },
        {
          id: 38,
          title: 'POS-Монитор RS-609',
          img: 'pos-609.jpg',
          desc: '15" LCD touch (1024*768) (СЕНСОРНЫй ЭКРАН) black',
          category: 'POS-monoblog',
          price: '11.700сом'
        },
        {
          id: 39,
          title: 'Принтеры чеков ',
          img: 'pos-58d-58mm-desktop.jpg',
          desc: 'POS 58D 58mm Desktop ',
          category: 'printer',
          price: '2100сом'
        },
        {
          id: 40,
          title: 'Принтеры чеков  мобильный',
          img: 'images.webp',
          desc: 'MP-58M ',
          category: 'printer',
          price: '2800сом'
        },
        {
          id: 41,
          title: 'Принтеры чеков  мобильный',
          img: '58mini.jpeg',
          desc: 'MP-58MINI ',
          category: 'printer',
          price: '2500сом'
        },

        {
          id: 42,
          title: 'Принтеры чеков  мобильный',
          img: 'xp_p300-4.webp',
          desc: 'Xprinter 58mm XP-P300 - USB+Bluetooth',
          category: 'printer',
          price: '4000сом'
        },
        {
          id: 43,
          title: 'Принтеры чеков  мобильный POS-Терминал XP-P1 ',
          img: '8fb89774a09560425e4a2bb734.jpeg',
          desc: 'адаптер со встроеным принтером.',
          category: 'printer',
          price: '6850сом'
        },
        {
          id: 44,
          title: 'Принтеры чеков  Xprinter F260L',
          img: '0e4a69bfec0c99bf90fe7ccf66.jpeg',
          desc: 'Xprinter F260L',
          category: 'printer',
          price: '6000сом'
        },
        {
          id: 45,
          title: 'Принтеры чеков  Xprinter Q260III',
          img: 'printer-chekov-xprinter-xp-q260iii-80-mm-usb-lan-com.jpg',
          desc: 'Xprinter Q260III',
          category: 'printer',
          price: '7900сом'
        },
        {
          id: 46,
          title: 'Принтеры чеков Rongta RP328',
          img: 'rongta_rp328u.webp',
          desc: 'Rongta RP328',
          category: 'printer',
          price: '7500сом'
        },
        {
          id: 47,
          title: 'Принтеры чеков Rongta RP335  ',
          img: 'printer-chekov-xprinter-xp-n160ii-80-mm-usb.jpg',
          desc: 'Rongta RP335  ',
          category: 'printer',
          price: '6000сом'
        },
        {
          id: 48,
          title: 'Принтеры чеков Xprinter K200L   ',
          img: 'xprinter-xp-k200l-80mm-direct-thermal-receipt-printer-usblan-black-230mm-s-eu-plug.jpg',
          desc: 'Xprinter K200L 80mm 230mm/s - USB+Bluetooth ',
          category: 'printer',
          price: '6500сом'
        },
        {
          id: 49,
          title: 'Принтеры чеков Xprinter K200L USB+WiFi   ',
          img: 'xprinter-xp-k200l-80mm-direct-thermal-receipt-printer-usblan-black-230mm-s-eu-plug.jpg',
          desc: 'Xprinter K200L 80mm 230mm/s - USB+WiFi ',
          category: 'printer',
          price: '6500сом'
        },
        {
          id: 50,
          title: 'Принтеры чеков Xprinter K200L USB+LAN  ',
          img: 'xprinter-xp-k200l-80mm-direct-thermal-receipt-printer-usblan-black-230mm-s-eu-plug.jpg',
          desc: 'Xprinter K200L 80mm 230mm/s - USB+LAN ',
          category: 'printer',
          price: '4800сом'
        },
        {
          id: 51,
          title: 'Принтеры чеков Xprinter Q80A ',
          img: '1f1d5e67fdc385ba0dba0dca95.jpeg',
          desc: 'Xprinter Q80A  80mm 230mm/s,Black-USB+LAN ',
          category: 'printer',
          price: '4500сом'
        },
        {
          id: 52,
          title: 'Принтеры чеков Xprinter A160H ',
          img: '1-1200x800.jpg',
          desc: 'Xprinter A160H  ',
          category: 'printer',
          price: '4200сом'
        },
        {
          id: 53,
          title: 'Принтеры чеков Xprinter Q200',
          img: 'XP-Q200-1200x800.jpg',
          desc: 'Xprinter Q200  ',
          category: 'printer',
          price: '6200сом'
        },
        {
          id: 54,
          title: 'Принтеры чеков Xprinter A260',
          img: '1-1200x800.jpg',
          desc: 'Xprinter A260  ',
          category: 'printer',
          price: '7100сом'
        },
        {
          id: 55,
          title: 'Принтеры чеков Xprinter N160II',
          img: 'printer-chekov-xprinter-xp-n160ii-80-mm-usb.jpg',
          desc: 'Xprinter N160II ',
          category: 'printer',
          price: '6500сом'
        },  
        {
          id: 56,
          title: 'Термотрансферный принтер Xprinter XP-480B   ',
          img: '1-500x400.jpg',
          desc: ' Xprinter XP-480B   ',
          category: 'printer',
          price: '8000сом'
        },
        {
          id: 57,
          title: 'Термотрансферный принтер Xprinter XP-DT325B  ',
          img: '25b22fb328d0e8861ac903abfd.jpeg',
          desc: ' Xprinter XP-DT325B ',
          category: 'printer',
          price: '6500сом'
        },
        {
          id: 58,
          title: 'Термотрансферный принтер Xprinter XP-Q371',
          img: 'xprinter-xp-q371.jpg',
          desc: ' Xprinter XP-Q371 ',
          category: 'printer',
          price: '4700сом'
        },
        {
          id: 59,
          title: 'Термотрансферный принтер Xprinter XP-420B ',
          img: '15659464015634.webp',
          desc: ' Xprinter XP-420B  ',
          category: 'printer',
          price: '6500сом'
        },
        {
          id: 60,
          title: 'Термотрансферный принтер Xprinter XP-DT425B ',
          img: 'xprinter-xp-dt425b.jpg',
          desc: ' Xprinter XP-DT425B ',
          category: 'printer',
          price: '6800сом'
        },
        {
          id: 61,
          title: 'Термотрансферный принтер Xprinter XP-303B',
          img: 'bnt.jpeg',
          desc: 'Xprinter XP-303B ',
          category: 'printer',
          price: '5000сом'
        },
        {
          id: 62,
          title: 'Термотрансферный принтер Xprinter 60mm XP-P210  ',
          img: 'ghj.webp',
          desc: 'Xprinter 60mm XP-P210 ',
          category: 'printer',
          price: '5000сом'
        },
        {
          id: 63,
          title: 'Термотрансферный принтер Xprinter XP-237B  ',
          img: 'rty.jpg',
          desc: 'Xprinter XP-237B',
          category: 'printer',
          price: '3300сом'
        },
        {
          id: 64,
          title: 'Термотрансферный принтер Xprinter подставка-держатель для больших рулонов этикеток ',
          img: 'ger.jpg',
          desc: 'Xprinter подставка-держатель для больших рулонов этикеток',
          category: 'printer',
          price: '950сом'
        },
        {
          id: 67,
          title: ' Кнопка вызова официанта со стойкой XWP01 4-key белый  ',
          img: 'stoik.jpeg',
          desc: ' XWP01 4-key белый  ',
          category: 'knopca',
          price: '900сом'
        },
        {
          id: 68,
          title: ' Кнопка вызова официанта XFCR03 3-key бело-красный  ',
          img: '121.jpg',
          desc: '  XFCR03 3-key бело-красный  ',
          category: 'knopca',
          price: '450сом'
        },

        {
          id: 69,
          title: ' Кнопка вызова официанта CBFR01 1-key бело-красный  ',
          img: '12.jpg',
          desc: ' CBFR01 1-key бело-красный  ',
          category: 'knopca',
          price: '420сом'
        },
        {
          id: 70,
          title: 'Кнопка вызова официанта CBFB01 1-key черно-белый  ',
          img: '21.jpg',
          desc: ' CBFB01 1-key черно-белый   ',
          category: 'knopca',
          price: '420сом'
        },
        {
          id: 71,
          title: 'Сенсорные часы официанта, персонала (черные) - CAT01 ',
          img: '2.jpeg',
          desc: ' CAT01 ',
          category: 'knopca',
          price: '3900сом'
        },
        {
          id: 72,
          title: 'Подставка для меню и кнопки вызова MC01 черная  ',
          img: '1.jpeg',
          desc: 'MC01 черная ',
          category: 'knopca',
          price: '270сом'
        },
        {
          id: 73,
          title: 'Весы с печатью этикеток Rongta RLS1100 ',
          img: 'idina.png',
          desc: 'Весы Rongta RLS1100 с печатью этикеток (RS232+LAN)',
          category: 'displei',
          price: '29.500сом'
        },
        {
          id: 74,
          title: 'Дисплей покупателя внешний GS-LED8N USB  ',
          img: '568.jpeg',
          desc: ' GS-LED8N USB ',
          category: 'displei',
          price: '4600сом'
        },
        {
          id: 75,
          title: 'Сканер кодов  ZEBRA DS2208-SR  ',
          img: 'scar.jpg',
          desc: '  ZEBRA DS2208-SR  ',
          category: 'scaner',
          price: '6400сом'
        },
        {
          id: 76,
          title: 'Подставка для сканера GOOSENECK INTELLISTAND - DS2208 BLACK ',
          img: 's.jpg',
          desc: ' GOOSENECK INTELLISTAND - DS2208 BLACK ',
          category: 'scaner',
          price: '950сом'
        },
        {
          id: 77,
          title: 'Cканер штрих кодов Winson WNI-6710 USB ',
          img: '231.jpg',
          desc: '  Winson WNI-6710 USB ',
          category: 'scaner',
          price: '3000сом'
        },
        {
          id: 78,
          title: 'Cканер штрих кодов Winson WAI-6780 USB ',
          img: '321.jpg',
          desc: '  Winson WAI-6780 USB ',
          category: 'scaner',
          price: '8500сом'
        },
        {
          id: 79,
          title: 'Cканер штрих кодов Winson WAI-7000 USB  ',
          img: '321.jpg',
          desc: '  Winson WAI-7000 USB ',
          category: 'scaner',
          price: '11.700сом'
        },
        {
          id: 80,
          title: 'Cканер штрих кодов Winson WAI-6510 USB  ',
          img: '1234.jpg',
          desc: ' Winson WAI-6510 USB ',
          category: 'scaner',
          price: '9100сом'
        },
        {
          id: 81,
          title: 'Cканер штрих кодов Winson WNI-6712/V USB  ',
          img: '67.jpg',
          desc: '  Winson WNI-6712/V USB  ',
          category: 'scaner',
          price: '5500сом'
        },
        {
          id: 82,
          title: 'Cканер штрих кодов Winson CMI-8010 USB ',
          img: '23.jpeg',
          desc: ' Winson CMI-8010 USB  ',
          category: 'scaner',
          price: '2250сом'
        },
        {
          id: 83,
          title: 'Cканер штрих кодов Winson WAI-5770 ',
          img: '34.jpg',
          desc: 'Winson WAI-5770 ',
          category: 'scaner',
          price: '8500сом'
        },
        {
          id: 84,
          title: 'Cканер штрих кодов Winson WNI-6383B/V USB ',
          img: '123.jpg',
          desc: 'WNI-6383B/V USB  ',
          category: 'scaner',
          price: '7500сом'
        },
        {
          id: 85,
          title: 'Cканер штрих кодов Winson CMC-1871U',
          img: '1213.jpeg',
          desc: 'Winson CMC-1871U ',
          category: 'scaner',
          price: '1800сом'
        },
        {
          id: 86,
          title: 'Cканер штрих кодов Winson WNI-6380g USB',
          img: '551.jpg',
          desc: ' Winson WNI-6380g USB ',
          category: 'scaner',
          price: '3700сом'
        },
        {
          id: 87,
          title: 'Cканер штрих кодов Winson WNI-6213B USB ',
          img: '551.jpg',
          desc: ' Winson WNI-6213B USB ',
          category: 'scaner',
          price: '9200сом'
        },
        {
          id: 88,
          title: 'Cканер штрих кодов Winson CMI-8012B/Z USB ',
          img: '551.jpg',
          desc: ' Winson CMI-8012B/Z USB ',
          category: 'scaner',
          price: '5300сом'
        },
        {
          id: 89,
          title: 'Cканер штрих кодов Winson Z13P-510 ',
          img: '551.jpg',
          desc: ' Winson Z13P-510  ',
          category: 'scaner',
          price: '2700сом'
        },
        {
          id: 90,
          title: 'Cканер штрих кодов Winson WNI-S014P USB 3в1 ',
          img: '551.jpg',
          desc: ' Winson WNI-S014P USB 3в1 ',
          category: 'scaner',
          price: '3450сом'
        },
        {
          id: 91,
          title: 'Cканер штрих кодов Winson  WNI-S742BU-USB ',
          img: '551.jpg',
          desc: '  WNI-S742BU-USB ',
          category: 'scaner',
          price: '5800сом'
        },
        {
          id: 92,
          title: 'Cканер штрих кодов Winson WNI-8014P USB ',
          img: 'chek.png',
          desc: ' Winson WNI-8014P USB',
          category: 'scaner',
          price: '8000сом'
        },
        {
          id: 93,
          title: 'Денежный ящик АТ210 ',
          img: '76.jpeg',
          desc: 'Ш20см*Д30см*В10см, 4-лот. для купюр, 6-ячеек для монет, RJ11 интерфейс (режим авто-открывания) Черный',
          category: 'drawers',
          price: '3000сом'
        },
        {
          id: 94,
          title: 'Денежный Ящик GS-170',
          img: 'cash-pg.jpg',
          desc: 'Ш46см*Д17см*В10см, 2 бокса с замками, 6-лот. для купюр, 8-ячеек для монет, RJ11 интерфейс, Voltage:12V 24V, Черный',
          category: 'drawers',
          price: '4900сом'
        },
        {
          id: 95,
          title: 'Денежный Ящик GS-410B',
          img: '34343.webp',
          desc: ' Ш41см*Д42см*В10см, 7-заж. для купюр, 4-ячеек для монет, RJ11 интерфейс, Черный ',
          category: 'drawers',
          price: '4500сом'
        },
        {
          id: 96,
          title: 'Денежный Ящик GS-330A ',
          img: '34343.webp',
          desc: ' Ш33см*Д36см*В9см, 4-заж. для купюр, 4-ячеек для монет, RJ11 интерфейс, Черный  ',
          category: 'drawers',
          price: '3500сом'
        },
      ],

      currentItems: [],
      showFullItem: false,
      fullItem: {},
    };

    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.choseCategory = this.choseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.saveData);


    const firstTenItems = this.state.items.slice(0, 9);
    this.setState({ currentItems: firstTenItems });
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.saveData);
    this.saveData();
  }

  saveData() {
    localStorage.setItem('orders', JSON.stringify(this.state.orders));
  }

  render() {
    return (
      <div className="Shops">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} choseCategory={this.choseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState( onclick={ showFullItem: !this.state.showFullItem });
  }

  choseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
      return;
    }
    const filteredItems = this.state.items.filter(el => el.category === category);
    this.setState({ currentItems: filteredItems });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) });
  }
}

export default App;
