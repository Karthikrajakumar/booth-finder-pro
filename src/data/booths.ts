export interface Booth {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
}

export const booths: Booth[] = [
  { id: 1, name: "Govt. Primary School (East)", address: "Kamarajar Salai, Poongulam, Saram", lat: 11.9455, lng: 79.8065 },
  { id: 2, name: "Govt. Primary School (West)", address: "Kamarajar Salai, Poongulam, Saram", lat: 11.9458, lng: 79.8058 },
  { id: 3, name: "S.R.S. Govt. High School (West)", address: "First Main Road, Thendral Nagar, Saram", lat: 11.9448, lng: 79.8050 },
  { id: 4, name: "S.R.S. Govt. High School (East)", address: "First Main Road, Thendral Nagar, Saram", lat: 11.9448, lng: 79.8060 },
  { id: 5, name: "Pondicherry Kadhi & Village Industries Board (East)", address: "Saram", lat: 11.9452, lng: 79.8075 },
  { id: 6, name: "Government Primary School Sithankudisai", address: "5th Cross Street, Brindhavanam", lat: 11.9462, lng: 79.8085 },
  { id: 7, name: "St. Mary's Sacred Heart Hr.Sec. School", address: "3rd Cross Street, Brindhavanam", lat: 11.9468, lng: 79.8092 },
  { id: 8, name: "Selvanatan Reception Hall (North)", address: "Vallalar Salai, Venkata Nagar", lat: 11.9472, lng: 79.8035 },
  { id: 9, name: "O/o. Junior Engineer (O&M), Electricity Dept.", address: "First Cross Street, Venkata Nagar", lat: 11.9470, lng: 79.8025 },
  { id: 10, name: "Tamizh Sangam Building (Main)", address: "45 Feet Main Road, Venkata Nagar", lat: 11.9478, lng: 79.8048 },
  { id: 11, name: "Andhra Maha Saba (West)", address: "Chellan Nagar, Venkatanagar", lat: 11.9485, lng: 79.8055 },
  { id: 12, name: "Directorate of Accounts & Treasuries (West)", address: "First Cross Street, Rainbow Nagar", lat: 11.9498, lng: 79.8080 },
  { id: 13, name: "Directorate of Accounts & Treasuries (North)", address: "First Cross Street, Rainbow Nagar", lat: 11.9502, lng: 79.8088 },
  { id: 14, name: "Directorate of Accounts & Treasuries (East)", address: "First Cross Street, Rainbow Nagar", lat: 11.9498, lng: 79.8095 },
  { id: 15, name: "Rainbow Nagar Womens Welfare Association", address: "4th Cross Street, Rainbow Nagar", lat: 11.9508, lng: 79.8100 },
  { id: 16, name: "Anganwadi Center", address: "Chellan Nagar, Venkatanagar", lat: 11.9490, lng: 79.8062 },
  { id: 17, name: "Prince Hall", address: "Vallalar Salai", lat: 11.9490, lng: 79.8042 },
  { id: 18, name: "Home for Differently Abled Persons", address: "9th Cross, Venkateshwara Nagar North, Saram", lat: 11.9475, lng: 79.8098 },
  { id: 19, name: "Govt. Primary School (South West)", address: "Kavikuil Nagar Main Road, Chinnaiyanpet, Saram", lat: 11.9510, lng: 79.8038 },
  { id: 20, name: "Govt. Primary School (South East)", address: "Kavikuil Nagar Main Road, Chinnaiyanpet, Saram", lat: 11.9510, lng: 79.8048 },
  { id: 21, name: "Govt. Primary School (West Block - North)", address: "Kavikuil Nagar Main Road, Chinnaiyanpet, Saram", lat: 11.9518, lng: 79.8043 },
  { id: 22, name: "Sathya Special School (Middle West)", address: "10th Cross Street, Rainbow Nagar", lat: 11.9520, lng: 79.8085 },
  { id: 23, name: "Govt Girls Hostel, AD Welfare Dept.", address: "Krishna Nagar", lat: 11.9545, lng: 79.8105 },
  { id: 24, name: "Selvalakshmi Reception Hall (West)", address: "Main Road, Krishna Nagar, Lawspet", lat: 11.9555, lng: 79.8095 },
  { id: 25, name: "Selvalakshmi Reception Hall (East)", address: "Main Road, Krishna Nagar", lat: 11.9555, lng: 79.8105 },
  { id: 26, name: "Sabari Vidhyashram Hr. Sec. School", address: "ECR, Krishna Nagar", lat: 11.9562, lng: 79.8115 },
  { id: 27, name: "Sabari Vidhyashram Hr. Sec. School (East)", address: "ECR, Krishna Nagar", lat: 11.9562, lng: 79.8125 },
  { id: 28, name: "Sathya Special School (West)", address: "10th Cross Street, Rainbow Nagar", lat: 11.9520, lng: 79.8075 },
  { id: 29, name: "Sathya Special School (Middle)", address: "10th Cross Street, Rainbow Nagar", lat: 11.9520, lng: 79.8095 },
  { id: 30, name: "T.V. Nagar Sports Club", address: "Main Road, Krishna Nagar", lat: 11.9548, lng: 79.8120 },
  { id: 31, name: "Sri Ramakrishna Vidhyalaya Hr. Sec. School (Main Block - North)", address: "Jegaraj Nagar, Lawspet", lat: 11.9558, lng: 79.8070 },
  { id: 32, name: "Sri Ramakrishna Vidhyalaya Hr. Sec. School (South)", address: "Jegaraj Nagar, Lawspet", lat: 11.9552, lng: 79.8070 },
  { id: 33, name: "Sri Ramakrishna Vidhyalaya Hr. Sec. School (Annexe-West)", address: "Jegaraj Nagar, Lawspet", lat: 11.9555, lng: 79.8060 },
  { id: 34, name: "Community Hall", address: "Anaikarai Medu, Samypillai Thottam", lat: 11.9580, lng: 79.8105 },
  { id: 35, name: "Fathima Hr. Sec. School (Borromeo Hall)", address: "Main Road, Samypillai Thottam, Lawspet", lat: 11.9585, lng: 79.8080 },
  { id: 36, name: "Fathima Hr. Sec. School (Main Block-Middle North)", address: "Main Road, Samypillai Thottam, Lawspet", lat: 11.9582, lng: 79.8080 },
  { id: 37, name: "Kamaraj Mani Mandapam (North)", address: "ECR, Samypillai Thottam, Lawspet", lat: 11.9590, lng: 79.8115 },
  { id: 38, name: "Kamaraj Mani Mandapam (South)", address: "ECR, Samypillai Thottam, Lawspet", lat: 11.9585, lng: 79.8115 },
  { id: 39, name: "Fathima Hr. Sec. School (Main Block-Middle South)", address: "Main Road, Samypillai Thottam, Lawspet", lat: 11.9578, lng: 79.8080 },
];
